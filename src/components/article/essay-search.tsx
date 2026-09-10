import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { CHROME, useLang } from "@/lib/i18n";
import { SECTIONS, TOC } from "@/lib/research";

function sectionText(id: string) {
  const section = SECTIONS.find((item) => item.id === id);
  if (!section) return "";
  return section.blocks
    .map((block) => {
      if (block.type === "p" || block.type === "quote" || block.type === "note") return block.text;
      if (block.type === "h3") return block.title;
      if (block.type === "ul") return block.items.join(" ");
      if (block.type === "table") return `${block.caption} ${block.rows.flat().join(" ")}`;
      return "";
    })
    .join(" ");
}

export function EssaySearch() {
  const [query, setQuery] = useState("");
  const { lang } = useLang();
  const ui = CHROME[lang].ui;

  const hits = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return TOC.filter((item) => {
      const hay = `${item.title} ${sectionText(item.id)}`.toLowerCase();
      return hay.includes(q);
    }).slice(0, 8);
  }, [query]);

  return (
    <div className="no-print rounded-xl bg-surface px-4 py-4 shadow-paper sm:px-5">
      <label htmlFor="essay-search" className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
        {ui.searchEssay}
      </label>
      <div className="relative mt-2">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" strokeWidth={1.75} />
        <input
          id="essay-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={ui.searchPlaceholder}
          className="h-11 w-full rounded-md border border-border bg-bg pr-3 pl-10 text-sm text-fg outline-none placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-primary"
        />
      </div>
      {query.trim().length >= 2 ? (
        <ul className="mt-3 space-y-1" aria-live="polite">
          {hits.length === 0 ? (
            <li className="px-1 py-2 text-sm text-muted">{ui.noMatch}</li>
          ) : (
            hits.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex min-h-11 items-center gap-2 rounded-md px-2 py-2 text-sm text-fg hover:bg-wash"
                >
                  {item.numeral ? (
                    <span className="w-6 font-display text-xs text-primary">{item.numeral}</span>
                  ) : (
                    <span className="w-6" />
                  )}
                  <span>{item.title}</span>
                </a>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
}
