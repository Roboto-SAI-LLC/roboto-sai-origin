import { DNA_CLOCKS } from "@/lib/dossier";

export function DnaClocks() {
  return (
    <div>
      <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
        Three archives, three speeds. A genome can show that a living Villarreal line clusters with Sephardic
        or Levantine samples. It cannot remember a 1274 meeting. Family memory often keeps the pressure and
        loses the year. Charters keep the year and lose the broker.
      </p>
      <div className="mt-6 grid gap-3 lg:grid-cols-3">
        {DNA_CLOCKS.map((clock) => (
          <article key={clock.id} className="rounded-xl bg-surface px-4 py-5 shadow-paper sm:px-5">
            <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
              {clock.ticks}
            </p>
            <h2 className="mt-2 font-display text-xl font-medium text-fg">{clock.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-fg">
              <span className="font-medium">Can. </span>
              {clock.can}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              <span className="font-medium text-fg">Cannot. </span>
              {clock.cannot}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
        The working rule: date each clock. A Sephardic cluster in a living line is adjacent evidence for a later
        Jewish or converso stratum of the surname. It is not a naming clause for Vila-real. The analogy to a
        model carrying early training data is exact about persistence and inexact about content — weights are
        not minutes of a meeting.
      </p>
    </div>
  );
}
