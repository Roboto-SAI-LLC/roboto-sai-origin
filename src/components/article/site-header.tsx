import { Link, useRouterState } from "@tanstack/react-router";
import { LangToggle } from "@/components/article/lang-toggle";
import { ShareBar } from "@/components/article/share-bar";
import { CHROME, useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function NavLinks({
  pathname,
  className,
}: {
  pathname: string;
  className?: string;
}) {
  const { lang } = useLang();
  const chrome = CHROME[lang];

  return (
    <nav className={className} aria-label={chrome.ui.nav}>
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
    </nav>
  );
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { lang } = useLang();
  const chrome = CHROME[lang];

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 xl:flex-row xl:items-center xl:justify-between sm:px-6">
        <div className="flex min-w-0 items-end justify-between gap-3">
          <Link to="/" className="min-w-0 rounded-sm">
            <p className="font-display text-kicker tracking-kicker text-primary uppercase">
              Roboto SAI
            </p>
            <p className="mt-1 text-xs text-muted">
              {chrome.series} · {chrome.date}
            </p>
          </Link>
          <LangToggle />
        </div>

        <details className="rounded-lg bg-surface px-4 py-1 shadow-paper xl:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-3 font-display text-sm text-fg">
            {chrome.menu}
          </summary>
          <div className="flex flex-col gap-2 pb-3">
            <NavLinks pathname={pathname} className="flex flex-col gap-2" />
            <ShareBar />
          </div>
        </details>

        <div className="hidden items-center gap-2 xl:flex">
          <NavLinks pathname={pathname} className="flex flex-wrap items-center gap-2" />
          <ShareBar />
        </div>
      </div>
    </header>
  );
}
