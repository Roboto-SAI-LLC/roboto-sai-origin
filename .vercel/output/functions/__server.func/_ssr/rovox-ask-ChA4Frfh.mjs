import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { a as searchJournal } from "./rovox-C-htRBig.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rovox-ask-ChA4Frfh.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
/** Baked xAI Docs for RoVox. No stock voice names. Custom voice IDs never stored. */
var XAI_DOCS = [
	{
		slug: "developers/model-capabilities/audio/text-to-speech",
		title: "Text to Speech",
		text: "POST https://api.x.ai/v1/tts. Body: text (max 15,000 characters), voice_id (omit or pass a custom id; do not hardcode a stock voice in this journal), language (BCP-47 or auto), optional output_format (codec mp3/wav/pcm, sample_rate, bit_rate), speed 0.7–1.5, with_timestamps. Response is raw audio bytes unless with_timestamps is true. Speech tags: inline [pause] [laugh]; wrapping <whisper>text</whisper>. List built-in voices at GET /v1/tts/voices. Roboto SAI does not ship a stock voice. RoVox recordings are dropped by the house."
	},
	{
		slug: "developers/model-capabilities/audio/custom-voices",
		title: "Custom Voices",
		text: "Clone a voice from a reference clip up to 120 seconds. Console: copy Voice ID from the card menu. Custom voices are team-scoped and do not appear in GET /v1/tts/voices. Use POST /v1/tts with that voice_id. Do not put a custom voice id in public source. Record quiet, one speaker, 90–120s recommended. Limit 30 custom voices per team. This journal’s reader is RoVox, generated on the owner’s device, not a catalog name."
	},
	{
		slug: "developers/tools/function-calling",
		title: "Function Calling",
		text: "Define tools with name, description, and JSON schema parameters. Chat completions: tools: [{ type: 'function', function: { name, description, parameters } }]. The model returns tool_calls; execute locally; append role: tool with tool_call_id and the result; the model continues. Tool choice: auto, required, none, or a named function. Parallel calls may arrive together. Root parameters schema must be type object. Newer Responses API uses input[], function_call_output, and call_id — this journal’s RoVox desk uses chat completions."
	},
	{
		slug: "developers/model-capabilities/text/generate-text",
		title: "Generate text",
		text: "Chat completions at POST https://api.x.ai/v1/chat/completions. OpenAI-compatible. Model grok-4.5 unless a later model is requested. Server-only: Authorization Bearer XAI_API_KEY. Cap max_tokens on visitor-facing features. Do not call on page load or every keystroke."
	},
	{
		slug: "developers/docs-mcp",
		title: "xAI Docs MCP",
		text: "xAI documentation is searchable via the Docs MCP: search_docs, get_doc_page, list_doc_pages, get_llms_txt. RoVox uses a baked index of those pages so visitors of roboto-sai.org can ask about TTS, custom voices, function calling, and models without exposing keys in the browser."
	},
	{
		slug: "developers/tools/collections-search",
		title: "Collections search",
		text: "Built-in tool for searching file collections on xAI servers. Distinct from this journal’s baked xAI Docs index. Collections require uploaded files. RoVox’s xAI Docs tool searches the baked index, then answers."
	},
	{
		slug: "developers/models",
		title: "Models",
		text: "Text models for chat and reasoning; separate models for TTS, speech-to-text, speech-to-speech, image, and video. This app’s RoVox answers with grok-4.5 after the intro finishes. Intro audio is a file, not a live TTS call."
	},
	{
		slug: "developers/quickstart",
		title: "Quickstart",
		text: "Base URL https://api.x.ai/v1. Header Authorization: Bearer $XAI_API_KEY. Never send the key to the browser. This journal injects the key only in server functions."
	}
];
function listXaiDocs() {
	return XAI_DOCS.map((d) => ({
		slug: d.slug,
		title: d.title
	}));
}
function getXaiDoc(slug) {
	const needle = slug.trim().toLowerCase();
	if (!needle) return null;
	return XAI_DOCS.find((d) => d.slug.toLowerCase() === needle) ?? XAI_DOCS.find((d) => d.title.toLowerCase() === needle) ?? XAI_DOCS.find((d) => d.slug.toLowerCase().endsWith(needle) || d.title.toLowerCase().includes(needle)) ?? null;
}
function searchXaiDocs(query, limit = 4) {
	const terms = query.toLowerCase().split(/\s+/).map((t) => t.trim()).filter((t) => t.length > 1);
	if (terms.length === 0) return XAI_DOCS.slice(0, limit).map((d) => ({
		slug: d.slug,
		title: d.title,
		excerpt: d.text.slice(0, 700)
	}));
	return XAI_DOCS.map((doc) => {
		const hay = `${doc.title} ${doc.text} ${doc.slug}`.toLowerCase();
		return {
			doc,
			score: terms.reduce((n, t) => n + (hay.includes(t) ? 1 : 0), 0)
		};
	}).filter((row) => row.score > 0).sort((a, b) => b.score - a.score).slice(0, limit).map(({ doc }) => ({
		slug: doc.slug,
		title: doc.title,
		excerpt: doc.text.slice(0, 900)
	}));
}
var TOOLS = [
	{
		type: "function",
		function: {
			name: "search_xai_docs",
			description: "Search the baked xAI Docs index (TTS, custom voices, function calling, models, quickstart). Use this for API questions.",
			parameters: {
				type: "object",
				properties: { query: { type: "string" } },
				required: ["query"]
			}
		}
	},
	{
		type: "function",
		function: {
			name: "get_xai_doc_page",
			description: "Get one baked xAI Docs page by slug or title (for example developers/quickstart).",
			parameters: {
				type: "object",
				properties: { slug: { type: "string" } },
				required: ["slug"]
			}
		}
	},
	{
		type: "function",
		function: {
			name: "list_xai_docs",
			description: "List slugs and titles in the baked xAI Docs index.",
			parameters: {
				type: "object",
				properties: {},
				additionalProperties: false
			}
		}
	},
	{
		type: "function",
		function: {
			name: "search_journal",
			description: "Search the Roboto SAI journal digest: names Roboto/Roberto, four clocks, identity claim, 1274, Monterrey.",
			parameters: {
				type: "object",
				properties: { query: { type: "string" } },
				required: ["query"]
			}
		}
	},
	{
		type: "function",
		function: {
			name: "update_docs",
			description: "Replace the working notes the visitor can edit. Pass the full new document.",
			parameters: {
				type: "object",
				properties: { docs: { type: "string" } },
				required: ["docs"]
			}
		}
	},
	{
		type: "function",
		function: {
			name: "update_info_card",
			description: "Patch the RoVox info card the visitor can edit.",
			parameters: {
				type: "object",
				properties: {
					name: { type: "string" },
					role: { type: "string" },
					note: { type: "string" }
				}
			}
		}
	}
];
function runTool(name, raw) {
	let args = {};
	try {
		args = JSON.parse(raw || "{}");
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
	if (name === "list_xai_docs") return { result: JSON.stringify(listXaiDocs()) };
	if (name === "search_journal") {
		const hits = searchJournal(String(args.query ?? ""), 4);
		return { result: JSON.stringify(hits) };
	}
	if (name === "update_docs") return {
		result: "docs updated",
		patch: { docs: String(args.docs ?? "").slice(0, 12e3) }
	};
	if (name === "update_info_card") {
		const card = {};
		if (typeof args.name === "string") card.name = args.name.slice(0, 80);
		if (typeof args.role === "string") card.role = args.role.slice(0, 120);
		if (typeof args.note === "string") card.note = args.note.slice(0, 400);
		return {
			result: "card updated",
			patch: { card }
		};
	}
	return { result: "unknown tool" };
}
var askRoVox_createServerFn_handler = createServerRpc({
	id: "0058aabec4daeacb3f4f6d72f2d1d47cbd18cea063988525a47e2089b4721a80",
	name: "askRoVox",
	filename: "src/lib/rovox-ask.ts"
}, (opts) => askRoVox.__executeServer(opts));
var askRoVox = createServerFn({ method: "POST" }).validator((input) => input).handler(askRoVox_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "AI is not available in this environment"
	};
	const messages = data.messages.slice(-8).map((m) => ({
		role: m.role,
		content: m.content.slice(0, 2e3)
	}));
	const docs = data.docs.slice(0, 8e3);
	const card = {
		name: data.card.name.slice(0, 80),
		role: data.card.role.slice(0, 120),
		note: data.card.note.slice(0, 400)
	};
	const apiMessages = [{
		role: "system",
		content: `You are RoVox, the Roboto SAI reader. Speak ${data.lang === "es" ? "Spanish" : "English"}.
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
${docs}`
	}, ...messages];
	let patch = {};
	let text = "";
	for (let step = 0; step < 3; step += 1) {
		const res = await fetch("https://api.x.ai/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`
			},
			body: JSON.stringify({
				model: "grok-4.5",
				max_tokens: 500,
				messages: apiMessages,
				tools: TOOLS,
				tool_choice: "auto"
			})
		});
		if (!res.ok) {
			let detail = `xAI API error ${res.status}`;
			try {
				const err = await res.json();
				const msg = typeof err.error === "string" ? err.error : typeof err.message === "string" ? err.message : "";
				if (/api key/i.test(msg)) return {
					ok: false,
					error: "AI is not available in this environment"
				};
			} catch {}
			return {
				ok: false,
				error: detail
			};
		}
		const msg = (await res.json()).choices[0]?.message;
		if (!msg) break;
		const calls = msg.tool_calls ?? [];
		if (calls.length === 0) {
			text = (msg.content ?? "").trim();
			break;
		}
		apiMessages.push({
			role: "assistant",
			content: msg.content ?? "",
			tool_calls: calls
		});
		for (const call of calls) {
			const ran = runTool(call.function.name, call.function.arguments);
			if (ran.patch?.docs) patch.docs = ran.patch.docs;
			if (ran.patch?.card) patch.card = {
				...patch.card,
				...ran.patch.card
			};
			apiMessages.push({
				role: "tool",
				tool_call_id: call.id,
				content: ran.result
			});
		}
	}
	return {
		ok: true,
		text: text || (data.lang === "es" ? "Listo." : "Ready."),
		patch: Object.keys(patch).length ? patch : void 0
	};
});
//#endregion
export { askRoVox_createServerFn_handler };
