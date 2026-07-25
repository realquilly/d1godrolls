import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PerkPoolTable } from "@/components/perk-pool-table";
import { TierBadge } from "@/components/tier-badge";
import {
  getArchetype,
  getCategory,
  getWeaponSummaries,
  getWeaponsBySlug,
} from "@/lib/weapons";

export function generateStaticParams() {
  return getWeaponSummaries().map((weapon) => ({ slug: weapon.slug }));
}

export default async function WeaponPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entries = getWeaponsBySlug(slug);

  if (entries.length === 0) {
    notFound();
  }

  const category = getCategory(entries[0].categoryId);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-4 py-12">
      <Link
        href="/"
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to search
      </Link>

      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{category.group}</Badge>
          <Badge variant="outline">{category.name}</Badge>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">
          {entries[0].name}
        </h1>
      </div>

      <Tabs defaultValue="pve">
        <TabsList>
          <TabsTrigger value="pve">PvE</TabsTrigger>
          <TabsTrigger value="pvp">PvP</TabsTrigger>
        </TabsList>

        <TabsContent value="pve" className="flex flex-col gap-4">
          {category.pveGeneralNotes?.map((note) => (
            <p key={note} className="text-sm text-muted-foreground italic">
              {note}
            </p>
          ))}

          {entries.map((entry) => {
            const archetype = getArchetype(entry.archetypeId);
            return (
              <Card key={entry.id}>
                <CardHeader>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <CardTitle>{archetype.name}</CardTitle>
                    <div className="flex flex-wrap gap-1.5">
                      <TierBadge tier={entry.tier} />
                      {entry.staticRoll && (
                        <Badge variant="outline">Static Roll</Badge>
                      )}
                      {entry.requiresSkeletonKey && (
                        <Badge variant="outline">Requires Skeleton Key</Badge>
                      )}
                    </div>
                  </div>
                  <CardDescription>{entry.source}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  {entry.notes && (
                    <p className="text-sm text-muted-foreground">
                      {entry.notes}
                    </p>
                  )}
                  {archetype.notes && (
                    <p className="text-sm text-muted-foreground italic">
                      {archetype.notes}
                    </p>
                  )}
                  <Separator />
                  <PerkPoolTable pool={archetype.pvePerkPool} />
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>

        <TabsContent value="pvp">
          <Card>
            <CardHeader>
              <CardTitle>{category.name} — PvP roll</CardTitle>
              <CardDescription>
                ~99% of {category.name.toLowerCase()}s are viable in PvP —
                this is the perk pool to chase regardless of which one drops.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {category.pvpNotes && (
                <p className="text-sm text-muted-foreground italic">
                  {category.pvpNotes}
                </p>
              )}
              <PerkPoolTable pool={category.pvpPerkPool} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
