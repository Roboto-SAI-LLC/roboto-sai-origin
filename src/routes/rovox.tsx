import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/article/reading-progress";
import { RoVoxAgent } from "@/components/article/rovox-agent";
import { SiteFooter } from "@/components/article/site-footer";
import { SiteHeader } from "@/components/article/site-header";
import { CHROME, useLang } from "@/lib/i18n";
import { APP_NAME } from "@/lib/site";

export const Route = createFileRoute("/rovox")({
  component: RoVoxPage,
  head: () => ({
    meta: [
      { title: `RoVox — ${APP_NAME}` },
      {
        name: "description",
        content:
          "RoVox reads the Roboto SAI intro. Pause or stop only until the end, then answers and can update the working notes. House recording — not a catalog voice.",
      },
    ],
  }),
});

function RoVoxPage() {
  const { lang } = useLang();
  const chrome = CHROME[lang];
  const copy = chrome.rovox;

  return (
    <div className="paper-grain min-h-dvh bg-bg text-fg">
      <ReadingProgress />
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="stagger-in font-display text-kicker font-medium tracking-kicker text-subtle uppercase">{copy.kicker}</p>
        <h1 className="stagger-in mt-4 max-w-3xl font-display text-display font-bold italic tracking-display text-fire sm:text-display-lg">
          {copy.title}
        </h1>
        <p className="stagger-in mt-5 max-w-2xl text-lg leading-relaxed text-muted">{copy.lead}</p>
        {chrome.englishBody ? (
          <p className="mt-3 max-w-2xl rounded-lg bg-surface px-4 py-3 text-sm leading-relaxed text-muted shadow-paper">
            {chrome.englishBody}
          </p>
        ) : null}
        <div className="mt-10">
          <RoVoxAgent />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
