import { Link, useRouterState } from "@tanstack/react-router";
import { LangToggle } from "@/components/article/lang-toggle";
import { CHROME, useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { lang } = useLang();
  const chrome = CHROME[lang];

  const links = [
    { to: "/" as const, label: lang === "es" ? "Índice" : "Index" },
    { to: "/atlas" as const, label: chrome.nav.find((n) => n.to === "/atlas")?.label ?? "Atlas" },
    { to: "/dossier" as const, label: "Dossier" },
    { to: "/scripture" as const, label: lang === "es" ? "Escritura" : "Scripture" },
  ];

  return (
    <header className="border-b border-border bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3 rounded-sm">
          <img src="/brand/mark.png" alt="" className="h-8 w-8 rounded-full object-cover" />
          <span>
            <p className="font-display text-kicker tracking-kicker text-primary uppercase">Roboto SAI</p>
            <p className="mt-0.5 text-xs text-muted">Labor Nominis</p>
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-x-1 gap-y-1" aria-label={lang === "es" ? "Principal" : "Primary"}>
          {links.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "inline-flex min-h-11 items-center px-2.5 text-sm transition-colors duration-150 sm:px-3",
                  active ? "text-fg" : "text-muted hover:text-fg",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <LangToggle />
        </nav>
      </div>
    </header>
  );
}
