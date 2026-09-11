import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { N as useLang, O as TOC, j as CHROME } from "./router-CJ_Fq_ug.mjs";
import { i as cn } from "./site-header-C90eYpju.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/table-of-contents-Bb33GXbk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TOKEN = /(\*\*[^*]+?\*\*|\*[^*]+?\*|\[\d+\])/g;
function InlineText({ text }) {
	const parts = text.split(TOKEN).filter((part) => part.length > 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: parts.map((part, index) => {
		const cite = part.match(/^\[(\d+)\]$/);
		if (cite) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
			className: "font-serif text-xs font-medium text-primary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `#ref-${cite[1]}`,
				className: "no-underline hover:underline",
				"aria-label": `Reference ${cite[1]}`,
				children: cite[1]
			})
		}, index);
		if (part.startsWith("**") && part.endsWith("**")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: part.slice(2, -2) }, index);
		if (part.startsWith("*") && part.endsWith("*")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: part.slice(1, -1) }, index);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part }, index);
	}) });
}
function TableOfContents({ className, items }) {
	const { lang } = useLang();
	const entries = items ?? TOC;
	const [active, setActive] = (0, import_react.useState)(entries[0]?.id ?? "introduction");
	(0, import_react.useEffect)(() => {
		const headings = entries.map((item) => document.getElementById(item.id)).filter((el) => Boolean(el));
		if (headings.length === 0) return;
		const observer = new IntersectionObserver((entriesObserved) => {
			const visible = entriesObserved.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
			if (visible[0]?.target.id) setActive(visible[0].target.id);
		}, {
			rootMargin: "-20% 0px -65% 0px",
			threshold: [
				0,
				.25,
				.6
			]
		});
		headings.forEach((heading) => observer.observe(heading));
		return () => observer.disconnect();
	}, [entries]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: cn("text-sm", className),
		"aria-label": CHROME[lang].contents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-3 font-display text-kicker font-medium tracking-kicker text-subtle uppercase",
			children: CHROME[lang].contents
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "space-y-1",
			children: entries.map((item) => {
				const isActive = active === item.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `#${item.id}`,
					className: cn("flex gap-2 rounded-md px-2 py-1.5 leading-snug no-underline transition-colors duration-150", isActive ? "bg-wash text-fg" : "text-muted hover:text-fg"),
					children: [item.numeral ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-6 shrink-0 font-display text-xs text-primary",
						children: item.numeral
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-6 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.title })]
				}) }, item.id);
			})
		})]
	});
}
//#endregion
export { TableOfContents as n, InlineText as t };
