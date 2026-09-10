import { Link, useRouterState } from "@tanstack/react-router";
import { LangToggle } from "@/components/article/lang-toggle";
import { ShareBar } from "@/components/article/share-bar";
import { CHROME, useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { lang } = useLang();
  const chrome = CHROME[lang];

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex min-w-0 flex-wrap items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
              {chrome.journal}
            </p>
            <p className="mt-1 text-xs text-muted">
              {chrome.series} · {chrome.date}
            </p>
          </div>
          <LangToggle />
        </div>
        <nav className="no-print flex flex-wrap items-center gap-2" aria-label="Primary">
          {chrome.nav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-md px-3.5 text-sm font-medium transition-colors duration-150",
                  active ? "bg-primary text-primary-fg" : "bg-surface text-fg shadow-paper hover:bg-wash",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <ShareBar />
        </nav>
      </div>
    </header>
  );
}
