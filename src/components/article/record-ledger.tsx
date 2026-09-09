import { useMemo, useState } from "react";
import { MONTERREY_LEDGER } from "@/lib/monterrey";
import { LEDGER, type LedgerRow } from "@/lib/network";
import { cn } from "@/lib/utils";

const ALL_LEDGER: LedgerRow[] = [...LEDGER, ...MONTERREY_LEDGER];

const LAYER_FILTERS: { id: "all" | "1274" | "monterrey"; label: string }[] = [
  { id: "all", label: "Both clocks" },
  { id: "1274", label: "1269–1274" },
  { id: "monterrey", label: "Monterrey" },
];

const FILTERS: { id: "all" | LedgerRow["status"]; label: string }[] = [
  { id: "all", label: "All" },
  { id: "in-record", label: "In the record" },
  { id: "adjacent", label: "Adjacent" },
  { id: "not-in-record", label: "Not in the record" },
];

const STATUS: Record<LedgerRow["status"], { label: string; className: string }> = {
  "in-record": { label: "In the record", className: "bg-primary text-primary-fg" },
  adjacent: { label: "Adjacent", className: "bg-wash text-fg" },
  "not-in-record": { label: "Not in the record", className: "border border-border text-muted" },
};

const LAYER_LABEL: Record<"1274" | "monterrey", string> = {
  "1274": "1269–1274",
  monterrey: "Monterrey",
};

export function RecordLedger() {
  const [layer, setLayer] = useState<(typeof LAYER_FILTERS)[number]["id"]>("all");
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");

  const rows = useMemo(() => {
    return ALL_LEDGER.filter((row) => {
      const rowLayer = row.layer ?? "1274";
      if (layer !== "all" && rowLayer !== layer) return false;
      if (filter !== "all" && row.status !== filter) return false;
      return true;
    });
  }, [layer, filter]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {LAYER_FILTERS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLayer(item.id)}
            className={cn(
              "min-h-11 rounded-md px-3.5 text-sm font-medium transition-colors duration-150",
              layer === item.id ? "bg-primary text-primary-fg" : "bg-surface text-fg shadow-paper hover:bg-wash",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {FILTERS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            className={cn(
              "min-h-11 rounded-md px-3.5 text-sm font-medium transition-colors duration-150",
              filter === item.id ? "bg-ink-soft text-primary-fg" : "bg-surface text-fg shadow-paper hover:bg-wash",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <ol className="mt-4 space-y-3">
        {rows.map((row) => (
          <li key={row.id} className="rounded-xl bg-surface px-4 py-4 shadow-paper sm:px-5">
            <p className="flex flex-wrap items-center gap-2">
              <span className="font-display text-xs tracking-kicker text-subtle uppercase">{row.id}</span>
              <span className="rounded-full bg-wash px-2 py-0.5 text-xs font-medium text-muted">
                {LAYER_LABEL[row.layer ?? "1274"]}
              </span>
              <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", STATUS[row.status].className)}>
                {STATUS[row.status].label}
              </span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-fg sm:text-base">{row.claim}</p>
            <p className="mt-2 text-sm text-muted">{row.source}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
