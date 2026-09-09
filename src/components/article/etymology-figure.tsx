export function EtymologyFigure() {
  return (
    <figure className="my-10">
      <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch">
        <div className="rounded-xl bg-surface px-5 py-5 shadow-paper sm:px-6 sm:py-6">
          <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
            Robot
          </p>
          <p className="mt-3 font-display text-2xl font-medium tracking-tight text-fg">forced labor</p>
          <p className="mt-3 text-sm leading-relaxed break-words text-muted">
            PIE *orbh- → Old Church Slavonic <em>rabu</em> / <em>rabota</em> → Czech <em>robota</em> →
            1920 coinage in <em>R.U.R.</em>
          </p>
        </div>
        <div className="flex items-center justify-center px-2 py-1">
          <p className="text-center font-display text-kicker tracking-kicker text-subtle uppercase">
            sound-alike,
            <br className="hidden sm:block" /> not kin
          </p>
        </div>
        <div className="rounded-xl bg-surface px-5 py-5 shadow-paper sm:px-6 sm:py-6">
          <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
            Robert
          </p>
          <p className="mt-3 font-display text-2xl font-medium tracking-tight text-fg">bright fame</p>
          <p className="mt-3 text-sm leading-relaxed break-words text-muted">
            Proto-Germanic <em>*Hrōþiberhtaz</em> (<em>hruod</em> + <em>berhta</em>) → Norman given
            name → kings, saints, surnames.
          </p>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-muted">
        Figure 1. Two names that collide in English sound, with unrelated roots and histories.
      </figcaption>
    </figure>
  );
}
