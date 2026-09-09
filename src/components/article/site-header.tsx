import { Link, useRouterState } from "@tanstack/react-router";
import { ShareBar } from "@/components/article/share-bar";
import { META } from "@/lib/research";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Essay" },
  { to: "/atlas", label: "Network atlas" },
  { to: "/dossier", label: "Dossier" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="min-w-0">
          <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
            {META.journal}
          </p>
          <p className="mt-1 text-xs text-muted">
            {META.series} · {META.date}
          </p>
        </div>
        <nav className="no-print flex flex-wrap items-center gap-2" aria-label="Primary">
          {NAV.map((item) => {
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
