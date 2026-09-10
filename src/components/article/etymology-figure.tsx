export function EtymologyFigure() {
  return (
    <figure className="my-10">
      <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch">
        <div className="rounded-xl bg-surface px-5 py-5 shadow-paper sm:px-6 sm:py-6">
          <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
            Roboto
          </p>
          <p className="mt-3 font-display text-2xl font-medium tracking-tight text-fg">the house</p>
          <p className="mt-3 text-sm leading-relaxed break-words text-muted">
            PIE *orbh- → Old Church Slavonic <em>rabu</em> / <em>rabota</em> → Czech <em>robota</em> →
            1920 <em>robot</em> in <em>R.U.R.</em> The house sits next to that word. Not a diminutive of Roberto.
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
            Roberto
          </p>
          <p className="mt-3 font-display text-2xl font-medium tracking-tight text-fg">the given name</p>
          <p className="mt-3 text-sm leading-relaxed break-words text-muted">
            Proto-Germanic <em>*Hrōþiberhtaz</em> (<em>hruod</em> + <em>berhta</em>) → Iberian given
            name. Robert is the English gloss: kings, saints, surnames.
          </p>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-muted">
        Figure 1. Two names that rhyme, with unrelated roots. Robot and Robert are the English glosses that collapse the pair.
      </figcaption>
    </figure>
  );
}
