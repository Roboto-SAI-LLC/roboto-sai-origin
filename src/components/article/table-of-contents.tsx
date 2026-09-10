import { useEffect, useState } from "react";
import { CHROME, useLang } from "@/lib/i18n";
import { TOC } from "@/lib/research";
import { cn } from "@/lib/utils";

export type TocItem = { id: string; numeral: string; title: string };

export function TableOfContents({
  className,
  items,
}: {
  className?: string;
  items?: readonly TocItem[];
}) {
  const { lang } = useLang();
  const entries = items ?? TOC;
  const [active, setActive] = useState(entries[0]?.id ?? "introduction");

  useEffect(() => {
    const headings = entries
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entriesObserved) => {
        const visible = entriesObserved
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.6] },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [entries]);

  return (
    <nav className={cn("text-sm", className)} aria-label={CHROME[lang].contents}>
      <p className="mb-3 font-display text-kicker font-medium tracking-kicker text-subtle uppercase">
        {CHROME[lang].contents}
      </p>
      <ol className="space-y-1">
        {entries.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "flex gap-2 rounded-md px-2 py-1.5 leading-snug no-underline transition-colors duration-150",
                  isActive ? "bg-wash text-fg" : "text-muted hover:text-fg",
                )}
              >
                {item.numeral ? (
                  <span className="w-6 shrink-0 font-display text-xs text-primary">{item.numeral}</span>
                ) : (
                  <span className="w-6 shrink-0" />
                )}
                <span>{item.title}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
