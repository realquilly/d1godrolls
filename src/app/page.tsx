import { WeaponSearch } from "@/components/weapon-search";
import { getWeaponSummaries } from "@/lib/weapons";

export default function Home() {
  const weapons = getWeaponSummaries();

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-4 py-24">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">D1 God Rolls</h1>
        <p className="max-w-md text-sm text-muted-foreground">
          Search any Destiny 1 legendary weapon to see its PvE and PvP god
          rolls, sourced from the community roll thread.
        </p>
      </div>
      <div className="w-full">
        <WeaponSearch weapons={weapons} />
      </div>
      <p className="text-xs text-muted-foreground">
        {weapons.length} weapons catalogued
      </p>
    </div>
  );
}
