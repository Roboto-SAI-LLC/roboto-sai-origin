import { createFileRoute, Link } from "@tanstack/react-router";
import { FullBriefPlayer, TagListenButton } from "@/components/article/spoken-player";
import { ReadingProgress } from "@/components/article/reading-progress";
import { SiteHeader } from "@/components/article/site-header";
import { BRIEF_META, BRIEF_TAGS } from "@/lib/brief";
import { CHROME, useLang } from "@/lib/i18n";
import { META } from "@/lib/research";

export const Route = createFileRoute("/brief")({
  component: BriefPage,
  head: () => ({
    meta: [
      { title: `${BRIEF_META.en.title} — ${META.journal}` },
      {
        name: "description",
        content: "Spoken brief of five essays: Robot and Robert, the 1274 atlas, the dossier, Gur Aryeh, and the Templars. No citation numbers.",
      },
    ],
  }),
});

function BriefPage() {
  const { lang } = useLang();
  const meta = BRIEF_META[lang];
  const tags = BRIEF_TAGS[lang];
  const chrome = CHROME[lang];

  return (
    <div className="paper-grain min-h-dvh bg-bg text-fg">
      <ReadingProgress />
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
        <p className="stagger-in font-display text-kicker font-medium tracking-kicker text-subtle uppercase">
          {meta.kicker}
        </p>
        <h1 className="stagger-in mt-4 font-display text-display font-medium tracking-display text-fg sm:text-display-lg">
          {meta.title}
        </h1>
        <p className="stagger-in mt-5 font-display text-xl leading-snug text-muted sm:text-2xl">{meta.subtitle}</p>
        <p className="stagger-in mt-6 text-sm text-muted">
          By <span className="text-fg">{META.credit}</span>
        </p>

        <div className="mt-8">
          <FullBriefPlayer />
        </div>

        {tags.map((tag, index) => (
          <article key={tag.id} id={tag.id} className="mt-12 border-t border-border pt-10">
            <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
              {index + 1} · {tag.tag}
            </p>
            <h2 className="mt-2 font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl">{tag.title}</h2>
            <p className="mt-5 text-article text-fg">{tag.body}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {meta.sources}: {tag.sources}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <TagListenButton tag={tag} />
              <Link
                to={tag.href}
                className="inline-flex min-h-11 items-center rounded-md bg-surface px-3.5 text-sm font-medium text-fg shadow-paper hover:bg-wash"
              >
                {meta.open}
              </Link>
            </div>
          </article>
        ))}
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-3xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>{META.credit}</p>
          <p>
            {chrome.series} · {chrome.date}
          </p>
        </div>
      </footer>
    </div>
  );
}
