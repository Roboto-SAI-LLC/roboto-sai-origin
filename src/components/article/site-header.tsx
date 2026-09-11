import { Link, useRouterState } from "@tanstack/react-router";
import { LangToggle } from "@/components/article/lang-toggle";
import { ShareBar } from "@/components/article/share-bar";
import { CHROME, useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function InstrumentLinks({
  pathname,
  className,
}: {
  pathname: string;
  className?: string;
}) {
  const { lang } = useLang();
  const chrome = CHROME[lang];
  const items = chrome.nav.filter((item) => item.to !== "/");

  return (
    <nav className={className} aria-label={lang === "es" ? "Instrumentos" : "Instruments"}>
      {items.map((item) => {
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
    </nav>
  );
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { lang } = useLang();
  const chrome = CHROME[lang];
  const onFilm = pathname === "/";

  return (
    <header
      className={cn(
        onFilm
          ? "absolute inset-x-0 top-0 z-20 border-b-0 bg-gradient-to-b from-obsidian/70 to-transparent"
          : "border-b border-border bg-bg/90 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="min-w-0 rounded-sm">
          <p className={cn("font-display text-kicker tracking-kicker uppercase", onFilm ? "text-gold" : "text-primary")}>
            Roboto SAI
          </p>
          <p className={cn("mt-0.5 text-xs", onFilm ? "text-primary-fg/75" : "text-muted")}>
            {onFilm
              ? lang === "es"
                ? "Nomen · cinco actos"
                : "Nomen · five acts"
              : `${chrome.series} · ${chrome.date}`}
          </p>
        </Link>

        <div className="flex items-center gap-2">
          <LangToggle />
          <details className="relative">
            <summary className="flex min-h-11 cursor-pointer list-none items-center rounded-md bg-surface px-3.5 text-sm font-medium text-fg shadow-paper">
              {lang === "es" ? "Instrumentos" : "Instruments"}
            </summary>
            <div className="absolute right-0 z-40 mt-2 flex min-w-52 flex-col gap-2 rounded-lg bg-surface p-3 shadow-paper">
              <InstrumentLinks pathname={pathname} className="flex flex-col gap-2" />
              <ShareBar />
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
