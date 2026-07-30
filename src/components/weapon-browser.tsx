"use client";

import { useMemo, useState } from "react";
import {
  WeaponFilters,
  createDefaultFilterState,
  type FilterState,
} from "@/components/weapon-filters";
import { WeaponSearch } from "@/components/weapon-search";
import { getImpactTier, summarizeWeapons } from "@/lib/weapons";
import type { Weapon, WeaponCategory } from "@/data/weapons";

export function WeaponBrowser({
  weapons,
  categories,
}: {
  weapons: Weapon[];
  categories: WeaponCategory[];
}) {
  const [filters, setFilters] = useState<FilterState>(createDefaultFilterState);

  const filteredWeapons = useMemo(() => {
    return weapons.filter((weapon) => {
      if (
        filters.categories.size > 0 &&
        !filters.categories.has(weapon.categoryId)
      ) {
        return false;
      }
      if (
        filters.impacts.size > 0 &&
        !filters.impacts.has(getImpactTier(weapon.archetypeId))
      ) {
        return false;
      }
      if (filters.tiers.size > 0 && !filters.tiers.has(weapon.tier)) {
        return false;
      }
      if (filters.staticOnly && !weapon.staticRoll) {
        return false;
      }
      if (filters.excludeSkeletonKey && weapon.requiresSkeletonKey) {
        return false;
      }
      return true;
    });
  }, [weapons, filters]);

  const summaries = useMemo(
    () => summarizeWeapons(filteredWeapons),
    [filteredWeapons]
  );
  const totalCount = useMemo(() => summarizeWeapons(weapons).length, [weapons]);

  return (
    <div className="flex w-full flex-col gap-4">
      <WeaponFilters categories={categories} value={filters} onChange={setFilters} />
      <WeaponSearch weapons={summaries} totalCount={totalCount} />
    </div>
  );
}
