import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CHAPTERS } from "@/lib/chapters";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function ChapterRail({ className }: { className?: string }) {
  const { lang } = useLang();
  const [active, setActive] = useState(CHAPTERS[0].id);

  useEffect(() => {
    const nodes = CHAPTERS.map((chapter) => document.getElementById(chapter.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -60% 0px", threshold: [0, 0.25, 0.55] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={cn("text-sm", className)} aria-label={lang === "es" ? "Actos" : "Acts"}>
      <p className="mb-3 font-display text-kicker font-medium tracking-kicker text-subtle uppercase">
        {lang === "es" ? "Cinco actos" : "Five acts"}
      </p>
      <ol className="space-y-1">
        {CHAPTERS.map((chapter) => {
          const isActive = active === chapter.id;
          return (
            <li key={chapter.id}>
              <Link
                to="/"
                search={{ act: chapter.id }}
                className={cn(
                  "flex gap-3 rounded-md px-2 py-2 leading-snug no-underline transition-colors duration-150",
                  isActive ? "bg-wash text-fg" : "text-muted hover:text-fg",
                )}
              >
                <span className="w-5 shrink-0 font-display text-xs text-primary">{chapter.numeral}</span>
                <span>{chapter.title[lang]}</span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
