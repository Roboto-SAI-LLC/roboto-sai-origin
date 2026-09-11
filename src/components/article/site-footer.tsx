import { Link } from "@tanstack/react-router";
import { ShareBar } from "@/components/article/share-bar";
import { CHROME, useLang } from "@/lib/i18n";
import { META } from "@/lib/research";
import { GITHUB_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteFooter({ compact = false }: { compact?: boolean }) {
  const { lang } = useLang();
  const chrome = CHROME[lang];

  return (
    <footer className="border-t border-border">
      <div
        className={cn(
          "mx-auto flex flex-col gap-4 px-4 py-8 text-sm text-muted sm:px-6",
          compact ? "max-w-3xl" : "max-w-6xl",
        )}
      >
        <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label={lang === "es" ? "Más" : "More"}>
          <Link to="/lion" className="text-primary underline underline-offset-4">
            Gur Aryeh
          </Link>
          <Link to="/templars" className="text-primary underline underline-offset-4">
            {lang === "es" ? "Templarios" : "Templars"}
          </Link>
          <Link to="/brief" className="text-primary underline underline-offset-4">
            {lang === "es" ? "Síntesis" : "Brief"}
          </Link>
          <a href={GITHUB_URL} className="text-primary underline underline-offset-4" rel="noopener noreferrer">
            {chrome.github}
          </a>
        </nav>
        <ShareBar />
        <p>{META.credit}</p>
        <p>
          {chrome.series} · {chrome.date}
        </p>
      </div>
    </footer>
  );
}
