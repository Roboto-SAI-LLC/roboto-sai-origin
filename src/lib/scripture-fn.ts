import { createServerFn } from "@tanstack/react-start";

export const lookupScripture = createServerFn({ method: "POST" })
  .inputValidator((data: { bibleId: string; query: string }) => ({
    bibleId: String(data.bibleId || ""),
    query: String(data.query || "").slice(0, 80),
  }))
  .handler(async ({ data }) => {
    const { lookupPassage } = await import("./bible.server");
    return lookupPassage(data.bibleId, data.query);
  });
