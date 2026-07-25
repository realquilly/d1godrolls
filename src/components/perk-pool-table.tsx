import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { PerkSlot } from "@/data/weapons";

export function PerkPoolTable({ pool }: { pool: PerkSlot[] }) {
  if (pool.length === 0) {
    return (
      <p className="text-sm text-muted-foreground italic">
        No perk pool listed for this roll.
      </p>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-32">Slot</TableHead>
          <TableHead>Perks</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pool.map((slot) => (
          <TableRow key={slot.slot}>
            <TableCell className="align-top font-medium">{slot.slot}</TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-1.5">
                {slot.perks.map((perk) => (
                  <Badge key={perk} variant="secondary">
                    {perk}
                  </Badge>
                ))}
              </div>
              {slot.note && (
                <p className="mt-1.5 text-xs text-muted-foreground">{slot.note}</p>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
