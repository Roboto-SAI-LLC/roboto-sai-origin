import { HOUSE_BIBLES, isHouseBibleId, type ScriptureResult } from "./scripture";

const BASE = process.env.API_BIBLE_BASE ?? "https://rest.api.bible/v1";

function apiKey(): string {
  const key = process.env.API_BIBLE_KEY?.trim();
  if (!key) throw new Error("API.Bible key is not set on the server.");
  return key;
}

async function bibleGet(path: string, query?: Record<string, string>): Promise<unknown> {
  const url = new URL(`${BASE}${path}`);
  if (query) {
    for (const [key, value] of Object.entries(query)) url.searchParams.set(key, value);
  }
  const response = await fetch(url, {
    headers: { "api-key": apiKey(), accept: "application/json" },
  });
  if (!response.ok) {
    throw new Error(`API.Bible ${response.status}`);
  }
  return response.json();
}

function stripMarkup(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&/g, "&")
    .replace(/</g, "<")
    .replace(/>/g, ">")
    .replace(/"/g, '"')
    .replace(/\s+\n/g, "\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

export async function lookupPassage(bibleId: string, query: string): Promise<ScriptureResult> {
  if (!isHouseBibleId(bibleId)) {
    throw new Error("That Bible is not on this house list.");
  }
  const q = query.trim().slice(0, 80);
  if (!q) throw new Error("Need a reference.");

  const bible = HOUSE_BIBLES.find((item) => item.id === bibleId)!;
  const search = (await bibleGet(`/bibles/${bibleId}/search`, { query: q })) as {
    data?: { passages?: Array<{ id: string; reference?: string; content?: string }> };
    meta?: { fumsToken?: string };
  };

  const passage = search.data?.passages?.[0];
  if (!passage?.id) {
    throw new Error("No passage for that reference.");
  }

  const full = (await bibleGet(`/bibles/${bibleId}/passages/${passage.id}`, {
    "content-type": "text",
    "include-notes": "false",
    "include-titles": "true",
    "include-verse-numbers": "true",
  })) as {
    data?: { reference?: string; content?: string; copyright?: string };
    meta?: { fumsToken?: string };
  };

  const content = stripMarkup(full.data?.content || passage.content || "");
  if (!content) throw new Error("Empty passage.");

  return {
    bibleId,
    abbr: bible.abbr,
    name: bible.name,
    reference: full.data?.reference || passage.reference || q,
    content,
    copyright: full.data?.copyright?.trim() || "",
    fumsToken: full.meta?.fumsToken || search.meta?.fumsToken || null,
  };
}
