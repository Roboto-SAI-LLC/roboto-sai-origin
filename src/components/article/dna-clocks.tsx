import { Link } from "@tanstack/react-router";
import { CHROME, useLang } from "@/lib/i18n";
import { DNA_CLOCKS, DOSSIER_COPY } from "@/lib/dossier";
import { PINS_BLOCKS } from "@/lib/pins";

export function DnaClocks() {
  const { lang } = useLang();
  const ui = CHROME[lang].ui;

  return (
    <div>
      <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">{DOSSIER_COPY.dnaLead[lang]}</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {DNA_CLOCKS.map((clock) => (
          <article key={clock.id} className="rounded-xl bg-surface px-4 py-5 shadow-paper sm:px-5">
            <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
              {clock.ticks[lang]}
            </p>
            <h2 className="mt-2 font-display text-xl font-medium text-fg">{clock.title[lang]}</h2>
            <p className="mt-4 text-sm leading-relaxed text-fg">
              <span className="font-medium">{ui.can} </span>
              {clock.can[lang]}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              <span className="font-medium text-fg">{ui.cannot} </span>
              {clock.cannot[lang]}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">{DOSSIER_COPY.dnaRule[lang]}</p>
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-fg">{PINS_BLOCKS.em96[lang]}</p>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{PINS_BLOCKS.em96Split[lang]}</p>
      <p className="mt-4 text-sm">
        <Link to="/pins" className="text-primary underline underline-offset-4">
          {lang === "es" ? "Addenda: clavos y E-M96" : "Addendum: pins and E-M96"}
        </Link>
      </p>
    </div>
  );
}
