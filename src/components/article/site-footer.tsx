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
          "mx-auto flex flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6",
          compact ? "max-w-3xl" : "max-w-6xl",
        )}
      >
        <p>{META.credit}</p>
        <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span>
            {chrome.series} · {chrome.date}
          </span>
          <a
            href={GITHUB_URL}
            className="text-primary underline underline-offset-4"
            rel="noopener noreferrer"
          >
            {chrome.github}
          </a>
        </p>
      </div>
    </footer>
  );
}
