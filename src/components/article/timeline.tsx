import { TIMELINE } from "@/lib/research";

export function YearTimeline({ items }: { items: { year: string; title: string; text: string }[] }) {
  return (
    <ol className="relative my-10 ml-2 border-l border-rule">
      {items.map((item) => (
        <li key={`${item.year}-${item.title}`} className="relative mb-8 pl-6 last:mb-0 sm:pl-8">
          <span aria-hidden="true" className="absolute top-1.5 -left-1.5 size-3 rounded-full bg-primary" />
          <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">{item.year}</p>
          <h3 className="mt-1 font-display text-lg font-medium text-fg">{item.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted sm:text-base">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function HistoryTimeline() {
  return <YearTimeline items={TIMELINE} />;
}
