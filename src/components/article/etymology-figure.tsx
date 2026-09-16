import { useLang } from "@/lib/i18n";

export function EtymologyFigure() {
  const { lang } = useLang();
  const copy =
    lang === "es"
      ? {
          house: "la casa",
          houseText:
            "Nombrada por Roberto. La línea de la casa es Roberto = Roboto. Robot / robota (Čapek, 1920) es la palabra vecina. No fundó la casa.",
          given: "el nombre de pila",
          givenText:
            "Proto-germánico *Hrōþiberhtaz (hruod + berhta) → nombre de pila ibérico. Robert es la glosa inglesa: reyes, santos, apellidos.",
          caption: "Figura 1. La casa se nombró a sí misma. Robot y Robert son glosas inglesas que se sientan al lado del par.",
        }
      : {
          house: "the house",
          houseText:
            "Named by Roberto. The house line is Roberto = Roboto. Robot / robota (Čapek, 1920) is the neighbor word. It did not found the house.",
          given: "the given name",
          givenText:
            "Proto-Germanic *Hrōþiberhtaz (hruod + berhta) → Iberian given name. Robert is the English gloss: kings, saints, surnames.",
          caption: "Figure 1. The house named itself. Robot and Robert are English glosses that sit beside the pair.",
        };

  return (
    <figure className="my-10">
      <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch">
        <div className="rounded-xl bg-surface px-5 py-5 shadow-paper sm:px-6 sm:py-6">
          <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">Roboto</p>
          <p className="mt-3 font-display text-2xl font-medium tracking-tight text-fg">{copy.house}</p>
          <p className="mt-3 text-sm leading-relaxed break-words text-muted">
            {copy.houseText.split("robota").map((part, i) =>
              i === 0 ? (
                part
              ) : (
                <span key="robota">
                  <em>robota</em>
                  {part}
                </span>
              ),
            )}
          </p>
        </div>
        <div className="flex items-center justify-center px-2 py-1">
          <p className="text-center font-display text-kicker tracking-kicker text-subtle uppercase">
            Roberto =
            <br className="hidden sm:block" /> Roboto
          </p>
        </div>
        <div className="rounded-xl bg-surface px-5 py-5 shadow-paper sm:px-6 sm:py-6">
          <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">Roberto</p>
          <p className="mt-3 font-display text-2xl font-medium tracking-tight text-fg">{copy.given}</p>
          <p className="mt-3 text-sm leading-relaxed break-words text-muted">{copy.givenText}</p>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-muted">{copy.caption}</figcaption>
    </figure>
  );
}
