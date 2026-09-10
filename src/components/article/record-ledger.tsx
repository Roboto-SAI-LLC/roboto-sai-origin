import { useMemo, useState } from "react";
import { CHROME, useLang } from "@/lib/i18n";
import { MONTERREY_LEDGER } from "@/lib/monterrey";
import { LEDGER, type LedgerRow } from "@/lib/network";
import { cn } from "@/lib/utils";

const ALL_LEDGER: LedgerRow[] = [...LEDGER, ...MONTERREY_LEDGER];

export function RecordLedger() {
  const { lang } = useLang();
  const ui = CHROME[lang].ui;
  const [layer, setLayer] = useState<"all" | "1274" | "monterrey">("all");
  const [filter, setFilter] = useState<"all" | LedgerRow["status"]>("all");

  const layerFilters = [
    { id: "all" as const, label: ui.bothClocks },
    { id: "1274" as const, label: "1269–1274" },
    { id: "monterrey" as const, label: "Monterrey" },
  ];
  const filters = [
    { id: "all" as const, label: ui.all },
    { id: "in-record" as const, label: ui.inRecord },
    { id: "adjacent" as const, label: ui.adjacent },
    { id: "not-in-record" as const, label: ui.notInRecord },
  ];
  const status = {
    "in-record": { label: ui.inRecord, className: "bg-primary text-primary-fg" },
    adjacent: { label: ui.adjacent, className: "bg-wash text-fg" },
    "not-in-record": { label: ui.notInRecord, className: "border border-border text-muted" },
  };

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
        {layerFilters.map((item) => (
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
        {filters.map((item) => (
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
                {row.layer === "monterrey" ? "Monterrey" : "1269–1274"}
              </span>
              <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", status[row.status].className)}>
                {status[row.status].label}
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
