import { useState } from "react";
import { Check, Copy, Share2 } from "lucide-react";
import { CITATION, META } from "@/lib/research";

const buttonClass =
  "inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-surface px-3.5 text-sm font-medium text-fg shadow-paper transition-[transform,background-color] duration-150 ease-out hover:bg-wash active:scale-95";

export function ShareBar() {
  const [copied, setCopied] = useState<"link" | "cite" | null>(null);

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
    const text = `${META.title}: ${META.subtitle}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: META.title, text, url });
        return;
      } catch {
        /* cancelled or unsupported */
      }
    }
    const intent = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(intent, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="no-print flex flex-wrap items-center gap-2">
      <button type="button" className={buttonClass} onClick={share}>
        <Share2 className="size-4" strokeWidth={1.75} />
        Share
      </button>
      <button type="button" className={buttonClass} onClick={() => copy(window.location.href, "link")}>
        {copied === "link" ? (
          <Check className="size-4" strokeWidth={1.75} />
        ) : (
          <Copy className="size-4" strokeWidth={1.75} />
        )}
        {copied === "link" ? "Copied" : "Copy link"}
      </button>
      <button type="button" className={buttonClass} onClick={() => copy(CITATION, "cite")}>
        {copied === "cite" ? (
          <Check className="size-4" strokeWidth={1.75} />
        ) : (
          <Copy className="size-4" strokeWidth={1.75} />
        )}
        {copied === "cite" ? "Copied" : "Copy citation"}
      </button>
    </div>
  );
}
