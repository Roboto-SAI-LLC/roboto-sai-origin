import { useEffect, useState } from "react";
import { TOC } from "@/lib/research";
import { cn } from "@/lib/utils";

export function TableOfContents({ className }: { className?: string }) {
  const [active, setActive] = useState(TOC[0]?.id ?? "introduction");

  useEffect(() => {
    const headings = TOC.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
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
  }, []);

  return (
    <nav className={cn("text-sm", className)} aria-label="Table of contents">
      <p className="mb-3 font-display text-kicker font-medium tracking-kicker text-subtle uppercase">
        Contents
      </p>
      <ol className="space-y-1">
        {TOC.map((item) => {
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
