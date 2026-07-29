"use client";

import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { getAllImpactTiers, type ImpactTier } from "@/lib/weapons";
import type {
  WeaponCategory,
  WeaponCategoryId,
  WeaponTier,
} from "@/data/weapons";

export interface FilterState {
  categories: Set<WeaponCategoryId>;
  impacts: Set<ImpactTier>;
  tiers: Set<WeaponTier>;
  staticOnly: boolean;
  excludeSkeletonKey: boolean;
}

export const defaultTiers: WeaponTier[] = ["recommended", "surplus_mention"];

export function createDefaultFilterState(): FilterState {
  return {
    categories: new Set(),
    impacts: new Set(),
    tiers: new Set(defaultTiers),
    staticOnly: false,
    excludeSkeletonKey: false,
  };
}

const tierOptions: { value: WeaponTier; label: string }[] = [
  { value: "recommended", label: "Recommended" },
  { value: "surplus_mention", label: "Surplus Mention" },
  { value: "dishonorable_mention", label: "Dishonorable Mention" },
  { value: "omitted", label: "Omitted" },
];

function isDefaultState(state: FilterState): boolean {
  return (
    state.categories.size === 0 &&
    state.impacts.size === 0 &&
    state.tiers.size === defaultTiers.length &&
    defaultTiers.every((t) => state.tiers.has(t)) &&
    !state.staticOnly &&
    !state.excludeSkeletonKey
  );
}

export function WeaponFilters({
  categories,
  value,
  onChange,
}: {
  categories: WeaponCategory[];
  value: FilterState;
  onChange: (next: FilterState) => void;
}) {
  const impacts = getAllImpactTiers();

  function toggleCategory(id: WeaponCategoryId) {
    const next = new Set(value.categories);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    onChange({ ...value, categories: next });
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <Popover>
          <PopoverTrigger
            render={<Button variant="outline" size="sm" className="gap-1.5" />}
          >
            <SlidersHorizontal className="size-3.5" />
            Weapon type
            {value.categories.size > 0 && (
              <span className="ml-1 rounded-full bg-muted px-1.5 text-xs">
                {value.categories.size}
              </span>
            )}
          </PopoverTrigger>
          <PopoverContent className="w-56" align="start">
            <div className="flex flex-col gap-2">
              {categories.map((category) => (
                <label
                  key={category.id}
                  className="flex cursor-pointer items-center gap-2 text-sm"
                >
                  <Checkbox
                    checked={value.categories.has(category.id)}
                    onCheckedChange={() => toggleCategory(category.id)}
                  />
                  {category.name}
                </label>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        <ToggleGroup
          multiple
          size="sm"
          variant="outline"
          value={[...value.impacts]}
          onValueChange={(selected) =>
            onChange({ ...value, impacts: new Set(selected as ImpactTier[]) })
          }
        >
          {impacts.map((impact) => (
            <ToggleGroupItem key={impact} value={impact}>
              {impact}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>

        {!isDefaultState(value) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onChange(createDefaultFilterState())}
          >
            Reset filters
          </Button>
        )}
      </div>

      <ToggleGroup
        multiple
        size="sm"
        variant="outline"
        value={[...value.tiers]}
        onValueChange={(selected) =>
          onChange({ ...value, tiers: new Set(selected as WeaponTier[]) })
        }
        className="flex-wrap"
      >
        {tierOptions.map((tier) => (
          <ToggleGroupItem key={tier.value} value={tier.value}>
            {tier.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <div className="flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-2">
          <Switch
            id="static-only"
            checked={value.staticOnly}
            onCheckedChange={(checked) =>
              onChange({ ...value, staticOnly: checked })
            }
          />
          <Label htmlFor="static-only">Static roll only</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch
            id="no-skeleton-key"
            checked={value.excludeSkeletonKey}
            onCheckedChange={(checked) =>
              onChange({ ...value, excludeSkeletonKey: checked })
            }
          />
          <Label htmlFor="no-skeleton-key">
            Don&apos;t need a Skeleton Key
          </Label>
        </div>
      </div>
    </div>
  );
}
