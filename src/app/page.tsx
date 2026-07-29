import { WeaponBrowser } from "@/components/weapon-browser";
import { getAllCategories, getAllWeapons } from "@/lib/weapons";

export default function Home() {
  const weapons = getAllWeapons();
  const categories = getAllCategories();

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center gap-8 px-4 py-16">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">D1 God Rolls</h1>
        <p className="max-w-md text-sm text-muted-foreground">
          Search any Destiny 1 legendary weapon to see its PvE and PvP god
          rolls, sourced from the community roll thread.
        </p>
      </div>
      <WeaponBrowser weapons={weapons} categories={categories} />
    </div>
  );
}
