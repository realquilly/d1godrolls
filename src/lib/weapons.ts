import {
  categories,
  archetypes,
  weapons,
  type Weapon,
  type Archetype,
  type WeaponCategory,
  type WeaponCategoryId,
} from "@/data/weapons";
import weaponIcons from "@/data/weapon-icons.json";

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Local thumbnail path for a weapon, downloaded once from the Bungie.net D1 manifest. Undefined if no icon was matched (see scripts/fetch-weapon-icons.mjs). */
export function getWeaponIcon(slug: string): string | undefined {
  return (weaponIcons as Record<string, string>)[slug];
}

export function getCategory(id: WeaponCategoryId): WeaponCategory {
  const category = categories.find((c) => c.id === id);
  if (!category) throw new Error(`Unknown category: ${id}`);
  return category;
}

export function getArchetype(id: string): Archetype {
  const archetype = archetypes.find((a) => a.id === id);
  if (!archetype) throw new Error(`Unknown archetype: ${id}`);
  return archetype;
}

export function getArchetypesForCategory(categoryId: WeaponCategoryId): Archetype[] {
  return archetypes.filter((a) => a.categoryId === categoryId);
}

export type ImpactTier = "Low Impact" | "Mid Impact" | "High Impact" | "Other";

const impactTiers: ImpactTier[] = ["Low Impact", "Mid Impact", "High Impact", "Other"];

/** Derived from the archetype id rather than its display name, since a few archetypes (Hakke 4-Shot, Void Hunter Roll, etc.) don't fit the Low/Mid/High pattern. */
export function getImpactTier(archetypeId: string): ImpactTier {
  if (archetypeId.endsWith("low-impact")) return "Low Impact";
  if (archetypeId.endsWith("mid-impact")) return "Mid Impact";
  if (archetypeId.endsWith("high-impact")) return "High Impact";
  return "Other";
}

export function getAllWeapons(): Weapon[] {
  return weapons;
}

export function getAllCategories(): WeaponCategory[] {
  return categories;
}

export function getAllImpactTiers(): ImpactTier[] {
  return impactTiers;
}

export interface WeaponSummary {
  slug: string;
  name: string;
  categoryId: WeaponCategoryId;
  categoryName: string;
  archetypeNames: string[];
  bestTier: Weapon["tier"];
  icon: string | undefined;
}

const tierRank: Record<Weapon["tier"], number> = {
  recommended: 0,
  surplus_mention: 1,
  dishonorable_mention: 2,
  omitted: 3,
};

/** Collapses a list of weapon entries into a unique, search-friendly list — e.g. a shotgun listed under both its normal roll and a niche build becomes one row. */
export function summarizeWeapons(list: Weapon[]): WeaponSummary[] {
  const bySlug = new Map<string, WeaponSummary>();

  for (const weapon of list) {
    const slug = slugify(weapon.name);
    const category = getCategory(weapon.categoryId);
    const archetype = getArchetype(weapon.archetypeId);
    const existing = bySlug.get(slug);

    if (!existing) {
      bySlug.set(slug, {
        slug,
        name: weapon.name,
        categoryId: weapon.categoryId,
        categoryName: category.name,
        archetypeNames: [archetype.name],
        bestTier: weapon.tier,
        icon: getWeaponIcon(slug),
      });
      continue;
    }

    if (!existing.archetypeNames.includes(archetype.name)) {
      existing.archetypeNames.push(archetype.name);
    }
    if (tierRank[weapon.tier] < tierRank[existing.bestTier]) {
      existing.bestTier = weapon.tier;
    }
  }

  return [...bySlug.values()].sort((a, b) => a.name.localeCompare(b.name));
}

export function getWeaponSummaries(): WeaponSummary[] {
  return summarizeWeapons(weapons);
}

export function getWeaponsBySlug(slug: string): Weapon[] {
  return weapons.filter((w) => slugify(w.name) === slug);
}
