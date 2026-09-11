import { useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Check, Copy, Share2 } from "lucide-react";
import { BRIEF_META } from "@/lib/brief";
import { CHROME, useLang } from "@/lib/i18n";
import { LION_CITATION, LION_META } from "@/lib/lion";
import { CITATION } from "@/lib/research";
import { TEMPLAR_META } from "@/lib/templar";
import { cn } from "@/lib/utils";

const buttonClass =
  "inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-surface px-3.5 text-sm font-medium text-fg shadow-paper transition-[transform,background-color] duration-150 ease-out hover:bg-wash active:scale-95";

function usePageShare() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { lang } = useLang();
  const chrome = CHROME[lang];

  if (pathname === "/lion") {
    return {
      title: LION_META.title,
      text: `${LION_META.title}: ${LION_META.subtitle}`,
      citation: LION_CITATION,
    };
  }
  if (pathname === "/templars") {
    const meta = TEMPLAR_META[lang];
    return {
      title: meta.title,
      text: `${meta.title}: ${meta.subtitle}`,
      citation: meta.citation,
    };
  }
  if (pathname === "/brief") {
    const meta = BRIEF_META[lang];
    return {
      title: meta.title,
      text: `${meta.title}: ${meta.subtitle}`,
      citation: CITATION,
    };
  }
  if (pathname === "/atlas") {
    return {
      title: chrome.atlas.title,
      text: chrome.atlas.leadNetwork,
      citation: CITATION,
    };
  }
  if (pathname === "/dossier") {
    return {
      title: chrome.dossier.title,
      text: chrome.dossier.lead,
      citation: CITATION,
    };
  }
  return {
    title: chrome.home.title,
    text: `${chrome.home.title}: ${chrome.home.subtitle}`,
    citation: CITATION,
  };
}

export function ShareBar() {
  const [copied, setCopied] = useState<"link" | "cite" | null>(null);
  const { lang } = useLang();
  const chrome = CHROME[lang];
  const page = usePageShare();

  async function copy(value: string, kind: "link" | "cite") {
    let ok = false;
    try {
      await navigator.clipboard.writeText(value);
      ok = true;
    } catch {
      const field = document.createElement("textarea");
      field.value = value;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();
      ok = document.execCommand("copy");
      field.remove();
    }
    if (!ok) return;
    setCopied(kind);
    window.setTimeout(() => setCopied(null), 1800);
  }

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: page.title, text: page.text, url });
        return;
      } catch {
        /* cancelled or unsupported */
      }
    }
    const intent = `https://x.com/intent/tweet?text=${encodeURIComponent(page.text)}&url=${encodeURIComponent(url)}`;
    window.open(intent, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="no-print flex flex-wrap items-center gap-2">
      <button type="button" className={buttonClass} onClick={share}>
        <Share2 className="size-4" strokeWidth={1.75} />
        {chrome.share}
      </button>
      <button
        type="button"
        className={cn(buttonClass, "hidden sm:inline-flex")}
        onClick={() => copy(window.location.href, "link")}
      >
        {copied === "link" ? (
          <Check className="size-4" strokeWidth={1.75} />
        ) : (
          <Copy className="size-4" strokeWidth={1.75} />
        )}
        {copied === "link" ? chrome.copied : chrome.copyLink}
      </button>
      <button
        type="button"
        className={cn(buttonClass, "hidden sm:inline-flex")}
        onClick={() => copy(page.citation, "cite")}
      >
        {copied === "cite" ? (
          <Check className="size-4" strokeWidth={1.75} />
        ) : (
          <Copy className="size-4" strokeWidth={1.75} />
        )}
        {copied === "cite" ? chrome.copied : chrome.copyCite}
      </button>
    </div>
  );
}
