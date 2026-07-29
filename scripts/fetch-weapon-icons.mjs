import fs from "node:fs";
import path from "node:path";
import AdmZip from "adm-zip";
import initSqlJs from "sql.js";

function loadEnvLocal() {
  const envPath = path.resolve(process.cwd(), ".env.local");
  const content = fs.readFileSync(envPath, "utf8");
  for (const line of content.split("\n")) {
    const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2].trim();
    }
  }
}

function normalize(name) {
  return name
    .toLowerCase()
    .replace(/[‘’']/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

loadEnvLocal();
const apiKey = process.env.BUNGIE_API_KEY;
if (!apiKey) throw new Error("BUNGIE_API_KEY not set in .env.local");

const { weapons } = await import("../src/data/weapons.ts");
const uniqueNames = [...new Set(weapons.map((w) => w.name))];

console.log(`Looking up icons for ${uniqueNames.length} unique weapon names...`);

const manifestRes = await fetch(
  "https://www.bungie.net/d1/platform/Destiny/Manifest/",
  { headers: { "X-API-Key": apiKey } }
);
const manifestJson = await manifestRes.json();
const contentPath = manifestJson.Response.mobileWorldContentPaths.en;

const dbRes = await fetch(`https://www.bungie.net${contentPath}`, {
  headers: { "X-API-Key": apiKey },
});
const zipBuffer = Buffer.from(await dbRes.arrayBuffer());
const zip = new AdmZip(zipBuffer);
const dbBuffer = zip.getEntries()[0].getData();

const SQL = await initSqlJs();
const db = new SQL.Database(dbBuffer);

const result = db.exec(
  `SELECT json FROM DestinyInventoryItemDefinition WHERE json LIKE '%"tierTypeName":"Legendary"%'`
);
const rows = result[0].values.map((v) => JSON.parse(v[0]));
console.log(`Scanned ${rows.length} legendary items from the manifest.`);

const byNormalizedName = new Map();
const iconUsers = new Map(); // icon path -> Set of distinct itemNames using it
for (const row of rows) {
  if (!row.hasIcon || !row.icon) continue;
  const key = normalize(row.itemName);
  const list = byNormalizedName.get(key) ?? [];
  list.push(row);
  byNormalizedName.set(key, list);

  const users = iconUsers.get(row.icon) ?? new Set();
  users.add(key);
  iconUsers.set(row.icon, users);
}

function statMax(row) {
  const stat = row.stats?.[String(row.primaryBaseStatHash)];
  return stat ? stat.maximum : -1;
}

function pickBest(candidates) {
  // Prefer icons that aren't shared across multiple distinct weapon names —
  // shared icons are almost always generic vendor-order placeholders
  // ("An order for a ... Foundry orders are delivered via the Gunsmith...").
  const distinctIcons = new Set(candidates.map((c) => c.icon));
  if (distinctIcons.size > 1) {
    const notShared = candidates.filter(
      (c) => (iconUsers.get(c.icon)?.size ?? 0) <= 1
    );
    if (notShared.length > 0) candidates = notShared;
  }
  // Among what's left, prefer the highest primary-stat cap — old duplicate
  // entries are frozen at a historical (lower) power cap.
  return candidates.reduce((best, c) => (statMax(c) > statMax(best) ? c : best));
}

const matches = [];
const missing = [];
const ambiguous = [];

for (const name of uniqueNames) {
  const candidates = byNormalizedName.get(normalize(name)) ?? [];
  if (candidates.length === 0) {
    missing.push(name);
  } else if (candidates.length === 1) {
    matches.push({ name, item: candidates[0] });
  } else {
    const uniqueIcons = new Set(candidates.map((c) => c.icon));
    if (uniqueIcons.size === 1) {
      matches.push({ name, item: candidates[0] });
    } else {
      const notShared = candidates.filter(
        (c) => (iconUsers.get(c.icon)?.size ?? 0) <= 1
      );
      const pool = notShared.length > 0 ? notShared : candidates;
      const stillDistinct = new Set(pool.map((c) => c.icon)).size;
      if (stillDistinct <= 2) {
        matches.push({ name, item: pickBest(candidates) });
      } else {
        ambiguous.push({ name, candidates: pool });
      }
    }
  }
}

console.log(`\nMatched: ${matches.length}`);
console.log(`Missing: ${missing.length}`);
if (missing.length) console.log(missing.map((n) => `  - ${n}`).join("\n"));
console.log(`Ambiguous: ${ambiguous.length}`);
for (const a of ambiguous) {
  console.log(`  - ${a.name}:`);
  for (const c of a.candidates) {
    console.log(`      hash=${c.itemHash} icon=${c.icon}`);
  }
}

const outDir = path.resolve(process.cwd(), "public/weapons");
fs.mkdirSync(outDir, { recursive: true });

const iconMap = {};
let downloaded = 0;
for (const { name, item } of matches) {
  const slug = slugify(name);
  const ext = path.extname(item.icon) || ".jpg";
  const fileName = `${slug}${ext}`;
  const res = await fetch(`https://www.bungie.net${item.icon}`, {
    headers: { "X-API-Key": apiKey },
  });
  if (!res.ok) {
    console.log(`  failed to download ${name}: ${res.status}`);
    continue;
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(path.join(outDir, fileName), buffer);
  iconMap[slug] = `/weapons/${fileName}`;
  downloaded++;
}

fs.writeFileSync(
  path.resolve(process.cwd(), "src/data/weapon-icons.json"),
  JSON.stringify(iconMap, null, 2) + "\n"
);

console.log(`\nDownloaded ${downloaded} icons to public/weapons/.`);
console.log(`Wrote src/data/weapon-icons.json with ${Object.keys(iconMap).length} entries.`);
