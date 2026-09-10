import { CHROME, useLang, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const OPTIONS: { id: Lang; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "es", label: "ES" },
];

export function LangToggle() {
  const { lang, setLang } = useLang();
  const aria = lang === "es" ? "Idioma" : "Language";

  return (
    <div className="inline-flex rounded-md bg-surface p-1 shadow-paper" role="group" aria-label={aria}>
      {OPTIONS.map((option) => {
        const active = lang === option.id;
        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={active}
            onClick={() => setLang(option.id)}
            className={cn(
              "inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm px-3 text-sm font-medium transition-colors duration-150",
              active ? "bg-primary text-primary-fg" : "text-muted hover:text-fg",
            )}
          >
            {option.label}
          </button>
        );
      })}
      <span className="sr-only">{CHROME[lang].journal}</span>
    </div>
  );
}
