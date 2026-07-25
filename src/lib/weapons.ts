import {
  categories,
  archetypes,
  weapons,
  type Weapon,
  type Archetype,
  type WeaponCategory,
  type WeaponCategoryId,
} from "@/data/weapons";

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
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

export interface WeaponSummary {
  slug: string;
  name: string;
  categoryId: WeaponCategoryId;
  categoryName: string;
  archetypeNames: string[];
  bestTier: Weapon["tier"];
}

const tierRank: Record<Weapon["tier"], number> = {
  recommended: 0,
  surplus_mention: 1,
  dishonorable_mention: 2,
  omitted: 3,
};

/** Unique, search-friendly list of weapons — collapses duplicate entries (e.g. a shotgun listed under both its normal roll and a niche build) into one row. */
export function getWeaponSummaries(): WeaponSummary[] {
  const bySlug = new Map<string, WeaponSummary>();

  for (const weapon of weapons) {
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

export function getWeaponsBySlug(slug: string): Weapon[] {
  return weapons.filter((w) => slugify(w.name) === slug);
}

export function getAllCategories(): WeaponCategory[] {
  return categories;
}
