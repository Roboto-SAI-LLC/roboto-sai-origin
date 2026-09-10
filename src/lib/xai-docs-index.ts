export type DocPage = {
  slug: string;
  title: string;
  text: string;
};

/** Baked xAI Docs for RoVox. No stock voice names. Custom voice IDs never stored. */
export const XAI_DOCS: DocPage[] = [
  {
    slug: "developers/model-capabilities/audio/text-to-speech",
    title: "Text to Speech",
    text: "POST https://api.x.ai/v1/tts. Body: text (max 15,000 characters), voice_id (omit or pass a custom id; do not hardcode a stock voice in this journal), language (BCP-47 or auto), optional output_format (codec mp3/wav/pcm, sample_rate, bit_rate), speed 0.7–1.5, with_timestamps. Response is raw audio bytes unless with_timestamps is true. Speech tags: inline [pause] [laugh]; wrapping <whisper>text</whisper>. List built-in voices at GET /v1/tts/voices. Roboto SAI does not ship a stock voice. RoVox recordings are dropped by the house.",
  },
  {
    slug: "developers/model-capabilities/audio/custom-voices",
    title: "Custom Voices",
    text: "Clone a voice from a reference clip up to 120 seconds. Console: copy Voice ID from the card menu. Custom voices are team-scoped and do not appear in GET /v1/tts/voices. Use POST /v1/tts with that voice_id. Do not put a custom voice id in public source. Record quiet, one speaker, 90–120s recommended. Limit 30 custom voices per team. This journal’s reader is RoVox, generated on the owner’s device, not a catalog name.",
  },
  {
    slug: "developers/tools/function-calling",
    title: "Function Calling",
    text: "Define tools with name, description, and JSON schema parameters. Chat completions: tools: [{ type: 'function', function: { name, description, parameters } }]. The model returns tool_calls; execute locally; append role: tool with tool_call_id and the result; the model continues. Tool choice: auto, required, none, or a named function. Parallel calls may arrive together. Root parameters schema must be type object. Newer Responses API uses input[], function_call_output, and call_id — this journal’s RoVox desk uses chat completions.",
  },
  {
    slug: "developers/model-capabilities/text/generate-text",
    title: "Generate text",
    text: "Chat completions at POST https://api.x.ai/v1/chat/completions. OpenAI-compatible. Model grok-4.5 unless a later model is requested. Server-only: Authorization Bearer XAI_API_KEY. Cap max_tokens on visitor-facing features. Do not call on page load or every keystroke.",
  },
  {
    slug: "developers/docs-mcp",
    title: "xAI Docs MCP",
    text: "xAI documentation is searchable via the Docs MCP: search_docs, get_doc_page, list_doc_pages, get_llms_txt. RoVox uses a baked index of those pages so visitors of roboto-sai.org can ask about TTS, custom voices, function calling, and models without exposing keys in the browser.",
  },
  {
    slug: "developers/tools/collections-search",
    title: "Collections search",
    text: "Built-in tool for searching file collections on xAI servers. Distinct from this journal’s baked xAI Docs index. Collections require uploaded files. RoVox’s xAI Docs tool searches the baked index, then answers.",
  },
  {
    slug: "developers/models",
    title: "Models",
    text: "Text models for chat and reasoning; separate models for TTS, speech-to-text, speech-to-speech, image, and video. This app’s RoVox answers with grok-4.5 after the intro finishes. Intro audio is a file, not a live TTS call.",
  },
  {
    slug: "developers/quickstart",
    title: "Quickstart",
    text: "Base URL https://api.x.ai/v1. Header Authorization: Bearer $XAI_API_KEY. Never send the key to the browser. This journal injects the key only in server functions.",
  },
];

export function listXaiDocs(): { slug: string; title: string }[] {
  return XAI_DOCS.map((d) => ({ slug: d.slug, title: d.title }));
}

export function getXaiDoc(slug: string): DocPage | null {
  const needle = slug.trim().toLowerCase();
  if (!needle) return null;
  return (
    XAI_DOCS.find((d) => d.slug.toLowerCase() === needle) ??
    XAI_DOCS.find((d) => d.title.toLowerCase() === needle) ??
    XAI_DOCS.find((d) => d.slug.toLowerCase().endsWith(needle) || d.title.toLowerCase().includes(needle)) ??
    null
  );
}

export function searchXaiDocs(query: string, limit = 4): { slug: string; title: string; excerpt: string }[] {
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .map((t) => t.trim())
    .filter((t) => t.length > 1);
  if (terms.length === 0) {
    return XAI_DOCS.slice(0, limit).map((d) => ({ slug: d.slug, title: d.title, excerpt: d.text.slice(0, 700) }));
  }
  const scored = XAI_DOCS.map((doc) => {
    const hay = `${doc.title} ${doc.text} ${doc.slug}`.toLowerCase();
    const score = terms.reduce((n, t) => n + (hay.includes(t) ? 1 : 0), 0);
    return { doc, score };
  })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
  return scored.map(({ doc }) => ({ slug: doc.slug, title: doc.title, excerpt: doc.text.slice(0, 900) }));
}
