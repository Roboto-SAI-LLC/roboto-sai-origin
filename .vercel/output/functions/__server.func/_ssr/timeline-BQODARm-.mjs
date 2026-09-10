import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as TIMELINE, N as useLang, j as CHROME } from "./router-CXAxw9mM.mjs";
import { i as cn } from "./site-header-CC1S7zsx.mjs";
import { t as InlineText } from "./table-of-contents-C-X6lr4Z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/timeline-BQODARm-.js
var import_jsx_runtime = require_jsx_runtime();
function DataTable({ id, caption, headers, rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
		id,
		className: "my-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-full overflow-x-auto rounded-lg bg-surface px-4 py-3 shadow-paper sm:px-5 sm:py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "article-table w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
						className: "mb-3 text-left font-display text-sm font-medium tracking-wide text-muted",
						children: caption
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: headers.map((header) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						scope: "col",
						children: header
					}, header)) }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row, rowIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: row.map((cell, cellIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: cellIndex === 0 ? "font-medium text-ink-soft" : "text-fg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, { text: cell })
					}, cellIndex)) }, rowIndex)) })
				]
			})
		})
	});
}
function BlockView({ block }) {
	switch (block.type) {
		case "p": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: cn("mb-5 text-article text-fg", block.dropCap && "drop-cap"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, { text: block.text })
		});
		case "h3": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			id: block.id,
			className: "mt-10 mb-4 scroll-mt-24 font-display text-xl font-medium tracking-tight text-fg",
			children: block.title
		});
		case "ul": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mb-6 list-disc space-y-2 pl-5 text-article text-fg",
			children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, { text: item }) }, item))
		});
		case "quote": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
			className: "my-8 border-l-2 border-primary pl-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xl leading-snug text-ink-soft italic",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, { text: block.text })
			}), block.cite ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("cite", {
				className: "mt-3 block text-sm text-muted not-italic",
				children: block.cite
			}) : null]
		});
		case "note": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 rounded-lg bg-wash px-4 py-3 text-sm leading-relaxed text-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, { text: block.text })
		});
		case "table": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
			id: block.id,
			caption: block.caption,
			headers: block.headers,
			rows: block.rows
		});
		default: return null;
	}
}
function SectionBody({ section }) {
	const { lang } = useLang();
	const part = CHROME[lang].part;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-labelledby": section.id,
		className: "scroll-mt-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-6",
			children: [section.numeral ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
				children: [
					part,
					" ",
					section.numeral
				]
			}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: section.id,
				className: "mt-2 scroll-mt-24 font-display text-2xl font-medium leading-tight tracking-tight text-fg sm:text-3xl",
				children: section.title
			})]
		}), section.blocks.map((block, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockView, { block }, `${section.id}-${index}`))]
	});
}
function YearTimeline({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "relative my-10 ml-2 border-l border-rule",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "relative mb-8 pl-6 last:mb-0 sm:pl-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "absolute top-1.5 -left-1.5 size-3 rounded-full bg-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
					children: item.year
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-display text-lg font-medium text-fg",
					children: item.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-relaxed text-muted sm:text-base",
					children: item.text
				})
			]
		}, `${item.year}-${item.title}`))
	});
}
function HistoryTimeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YearTimeline, { items: TIMELINE });
}
//#endregion
export { SectionBody as n, YearTimeline as r, HistoryTimeline as t };
