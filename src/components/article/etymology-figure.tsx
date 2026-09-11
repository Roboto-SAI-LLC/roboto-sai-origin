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
            Named by Roberto. The house line is Roberto = Roboto. Robot / <em>robota</em> (Čapek, 1920) is the neighbor word. It did not found the house.
          </p>
        </div>
        <div className="flex items-center justify-center px-2 py-1">
          <p className="text-center font-display text-kicker tracking-kicker text-subtle uppercase">
            Roberto =
            <br className="hidden sm:block" /> Roboto
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
        Figure 1. The house named itself. Robot and Robert are English glosses that sit beside the pair.
      </figcaption>
    </figure>
  );
}
