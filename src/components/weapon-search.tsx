"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { TierBadge } from "@/components/tier-badge";
import type { WeaponSummary } from "@/lib/weapons";

export function WeaponSearch({ weapons }: { weapons: WeaponSummary[] }) {
  const router = useRouter();

  const byCategory = new Map<string, WeaponSummary[]>();
  for (const weapon of weapons) {
    const list = byCategory.get(weapon.categoryName) ?? [];
    list.push(weapon);
    byCategory.set(weapon.categoryName, list);
  }

  return (
    <Command className="rounded-lg border shadow-sm">
      <CommandInput placeholder="Search a legendary weapon…" />
      <CommandList className="max-h-[60vh]">
        <CommandEmpty>No weapon found.</CommandEmpty>
        {[...byCategory.entries()].map(([categoryName, items]) => (
          <CommandGroup key={categoryName} heading={categoryName}>
            {items.map((weapon) => (
              <CommandItem
                key={weapon.slug}
                value={weapon.name}
                onSelect={() => router.push(`/weapon/${weapon.slug}`)}
                className="flex items-center gap-3"
              >
                {weapon.icon ? (
                  <Image
                    src={weapon.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="size-8 shrink-0 rounded bg-muted"
                  />
                ) : (
                  <div className="size-8 shrink-0 rounded bg-muted" />
                )}
                <div className="flex flex-1 flex-col">
                  <span className="font-medium">{weapon.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {weapon.archetypeNames.join(" · ")}
                  </span>
                </div>
                <TierBadge tier={weapon.bestTier} />
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </Command>
  );
}
