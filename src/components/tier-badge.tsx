import { Badge } from "@/components/ui/badge";
import type { WeaponTier } from "@/data/weapons";

const tierConfig: Record<
  WeaponTier,
  { label: string; className: string }
> = {
  recommended: {
    label: "Recommended",
    className:
      "border-emerald-600/30 bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
  },
  surplus_mention: {
    label: "Surplus Mention",
    className:
      "border-sky-600/30 bg-sky-500/15 text-sky-700 dark:text-sky-400",
  },
  dishonorable_mention: {
    label: "Dishonorable Mention",
    className:
      "border-amber-600/30 bg-amber-500/15 text-amber-700 dark:text-amber-400",
  },
  omitted: {
    label: "Omitted",
    className:
      "border-red-600/30 bg-red-500/15 text-red-700 dark:text-red-400",
  },
};

export function TierBadge({ tier }: { tier: WeaponTier }) {
  const config = tierConfig[tier];
  return (
    <Badge variant="outline" className={config.className}>
      {config.label}
    </Badge>
  );
}
