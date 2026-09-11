import { Link, useRouterState } from "@tanstack/react-router";
import { CHAPTERS } from "@/lib/chapters";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function ChapterRail({ className }: { className?: string }) {
  const { lang } = useLang();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className={cn("text-sm", className)} aria-label={lang === "es" ? "Actos" : "Acts"}>
      <p className="mb-3 font-display text-kicker font-medium tracking-kicker text-subtle uppercase">
        {lang === "es" ? "Cinco actos" : "Five acts"}
      </p>
      <ol className="space-y-1">
        {CHAPTERS.map((chapter) => {
          const href = `/act/${chapter.id}`;
          const isActive = pathname === href;
          return (
            <li key={chapter.id}>
              <Link
                to="/act/$id"
                params={{ id: chapter.id }}
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
