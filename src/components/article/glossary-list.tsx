import { GLOSSARY } from "@/lib/network";

export function GlossaryList() {
  return (
    <dl className="grid gap-3 sm:grid-cols-2">
      {GLOSSARY.map((item) => (
        <div key={item.term} className="rounded-xl bg-surface px-4 py-4 shadow-paper sm:px-5">
          <dt className="font-display text-lg font-medium text-fg">{item.term}</dt>
          <dd className="mt-2 text-sm leading-relaxed text-muted">{item.text}</dd>
        </div>
      ))}
    </dl>
  );
}
