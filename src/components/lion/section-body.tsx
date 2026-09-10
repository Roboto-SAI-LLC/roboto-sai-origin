import type { LionBlock, LionSection } from "@/lib/lion";
import { InlineText } from "@/components/article/inline-text";
import { CHROME, useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function BlockView({ block }: { block: LionBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className={cn("mb-5 text-article text-fg", block.dropCap && "drop-cap")}>
          <InlineText text={block.text} />
        </p>
      );
    case "h3":
      return (
        <h3
          id={block.id}
          className="mt-10 mb-4 scroll-mt-24 font-display text-xl font-medium tracking-tight text-fg"
        >
          {block.title}
        </h3>
      );
    case "ul":
      return (
        <ul className="mb-6 list-disc space-y-2 pl-5 text-article text-fg">
          {block.items.map((item) => (
            <li key={item}>
              <InlineText text={item} />
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-8 border-l-2 border-primary pl-5">
          <p className="font-display text-xl leading-snug text-ink-soft italic">
            <InlineText text={block.text} />
          </p>
          {block.cite ? <cite className="mt-3 block text-sm text-muted not-italic">{block.cite}</cite> : null}
        </blockquote>
      );
    case "note":
      return (
        <p className="mt-6 rounded-lg bg-wash px-4 py-3 text-sm leading-relaxed text-muted">
          <InlineText text={block.text} />
        </p>
      );
    default:
      return null;
  }
}

export function LionSectionBody({ section }: { section: LionSection }) {
  const { lang } = useLang();
  const part = CHROME[lang].part;

  return (
    <section aria-labelledby={section.id} className="scroll-mt-24">
      <header className="mb-6">
        {section.numeral ? (
          <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
            {part} {section.numeral}
          </p>
        ) : null}
        <h2
          id={section.id}
          className="mt-2 scroll-mt-24 font-display text-2xl font-medium leading-tight tracking-tight text-fg sm:text-3xl"
        >
          {section.title}
        </h2>
      </header>
      {section.blocks.map((block, index) => (
        <BlockView key={`${section.id}-${index}`} block={block} />
      ))}
    </section>
  );
}
