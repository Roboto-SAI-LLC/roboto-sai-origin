import { createServerFn } from "@tanstack/react-start";
import { searchJournal, type RoVoxCard } from "@/lib/rovox";
import { getXaiDoc, listXaiDocs, searchXaiDocs } from "@/lib/xai-docs-index";

type ChatTurn = { role: "user" | "assistant"; content: string };

type AskInput = {
  messages: ChatTurn[];
  docs: string;
  card: RoVoxCard;
  lang: "en" | "es";
};

type Patch = { docs?: string; card?: Partial<RoVoxCard> };

const TOOLS = [
  {
    type: "function" as const,
    function: {
      name: "search_xai_docs",
      description:
        "Search the baked xAI Docs index (TTS, custom voices, function calling, models, quickstart). Use this for API questions.",
      parameters: {
        type: "object",
        properties: { query: { type: "string" } },
        required: ["query"],
      },
    },
  },
  {
    type: "function" as const,
    function: {
      name: "get_xai_doc_page",
      description: "Get one baked xAI Docs page by slug or title (for example developers/quickstart).",
      parameters: {
        type: "object",
        properties: { slug: { type: "string" } },
        required: ["slug"],
      },
    },
  },
  {
    type: "function" as const,
    function: {
      name: "list_xai_docs",
      description: "List slugs and titles in the baked xAI Docs index.",
      parameters: { type: "object", properties: {}, additionalProperties: false },
    },
  },
  {
    type: "function" as const,
    function: {
      name: "search_journal",
      description:
        "Search the Roboto SAI journal digest: names Roboto/Roberto, four clocks, identity claim, 1274, Monterrey.",
      parameters: {
        type: "object",
        properties: { query: { type: "string" } },
        required: ["query"],
      },
    },
  },
  {
    type: "function" as const,
    function: {
      name: "update_docs",
      description: "Replace the working notes the visitor can edit. Pass the full new document.",
      parameters: {
        type: "object",
        properties: { docs: { type: "string" } },
        required: ["docs"],
      },
    },
  },
  {
    type: "function" as const,
    function: {
      name: "update_info_card",
      description: "Patch the RoVox info card the visitor can edit.",
      parameters: {
        type: "object",
        properties: {
          name: { type: "string" },
          role: { type: "string" },
          note: { type: "string" },
        },
      },
    },
  },
];

function runTool(name: string, raw: string): { result: string; patch?: Patch } {
  let args: Record<string, unknown> = {};
  try {
    args = JSON.parse(raw || "{}") as Record<string, unknown>;
  } catch {
    return { result: "invalid arguments" };
  }
  if (name === "search_xai_docs") {
    const hits = searchXaiDocs(String(args.query ?? ""), 4);
    return { result: JSON.stringify(hits) };
  }
  if (name === "get_xai_doc_page") {
    const page = getXaiDoc(String(args.slug ?? ""));
    return { result: page ? JSON.stringify(page) : "not found; try search_xai_docs or list_xai_docs" };
  }
  if (name === "list_xai_docs") {
    return { result: JSON.stringify(listXaiDocs()) };
  }
  if (name === "search_journal") {
    const hits = searchJournal(String(args.query ?? ""), 4);
    return { result: JSON.stringify(hits) };
  }
  if (name === "update_docs") {
    const docs = String(args.docs ?? "").slice(0, 12000);
    return { result: "docs updated", patch: { docs } };
  }
  if (name === "update_info_card") {
    const card: Partial<RoVoxCard> = {};
    if (typeof args.name === "string") card.name = args.name.slice(0, 80);
    if (typeof args.role === "string") card.role = args.role.slice(0, 120);
    if (typeof args.note === "string") card.note = args.note.slice(0, 400);
    return { result: "card updated", patch: { card } };
  }
  return { result: "unknown tool" };
}

export const askRoVox = createServerFn({ method: "POST" })
  .validator((input: AskInput) => input)
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "AI is not available in this environment" };
    }

    const messages = data.messages.slice(-8).map((m) => ({
      role: m.role,
      content: m.content.slice(0, 2000),
    }));
    const docs = data.docs.slice(0, 8000);
    const card = {
      name: data.card.name.slice(0, 80),
      role: data.card.role.slice(0, 120),
      note: data.card.note.slice(0, 400),
    };

    const system = `You are RoVox, the Roboto SAI reader. Speak ${data.lang === "es" ? "Spanish" : "English"}.
Never call yourself Leo or any catalog stock voice. The house voice is RoVox, recorded on the owner’s device.
The intro has already finished. You may now answer.
Four clocks: documents, DNA, family memory, place. Date them. Do not merge origins.
Identity is a right. A kit percentage is not a people.
Use search_xai_docs, get_xai_doc_page, or list_xai_docs for xAI API questions.
Use search_journal for this journal.
You may update_docs or update_info_card when the visitor asks to change the working notes or the card.
Keep answers short. Do not invent charters, treasures, or voice IDs.

Info card now: ${JSON.stringify(card)}
Working notes now:
${docs}`;

    type ApiMessage = { role: string; content?: string; tool_calls?: unknown; tool_call_id?: string };
    const apiMessages: ApiMessage[] = [{ role: "system", content: system }, ...messages];
    let patch: Patch = {};
    let text = "";

    for (let step = 0; step < 3; step += 1) {
      const res = await fetch("https://api.x.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "grok-4.5",
          max_tokens: 500,
          messages: apiMessages,
          tools: TOOLS,
          tool_choice: "auto",
        }),
      });
      if (!res.ok) {
        let detail = `xAI API error ${res.status}`;
        try {
          const err = (await res.json()) as { error?: unknown; message?: unknown };
          const msg = typeof err.error === "string" ? err.error : typeof err.message === "string" ? err.message : "";
          if (/api key/i.test(msg)) {
            return { ok: false as const, error: "AI is not available in this environment" };
          }
        } catch {
          /* keep status */
        }
        return { ok: false as const, error: detail };
      }
      const body = (await res.json()) as {
        choices: {
          message: {
            content?: string | null;
            tool_calls?: { id: string; function: { name: string; arguments: string } }[];
          };
        }[];
      };
      const msg = body.choices[0]?.message;
      if (!msg) break;
      const calls = msg.tool_calls ?? [];
      if (calls.length === 0) {
        text = (msg.content ?? "").trim();
        break;
      }
      apiMessages.push({ role: "assistant", content: msg.content ?? "", tool_calls: calls });
      for (const call of calls) {
        const ran = runTool(call.function.name, call.function.arguments);
        if (ran.patch?.docs) patch.docs = ran.patch.docs;
        if (ran.patch?.card) patch.card = { ...patch.card, ...ran.patch.card };
        apiMessages.push({ role: "tool", tool_call_id: call.id, content: ran.result });
      }
    }

    return {
      ok: true as const,
      text: text || (data.lang === "es" ? "Listo." : "Ready."),
      patch: Object.keys(patch).length ? patch : undefined,
    };
  });
