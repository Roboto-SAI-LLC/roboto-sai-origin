import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, d as useRouterState, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Check, i as Copy, n as Share2 } from "../_libs/lucide-react.mjs";
import { i as META, n as CITATION } from "./router-C3ov5RvC.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-header-BrMIdxHn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function ReadingProgress() {
	const [width, setWidth] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		function onScroll() {
			const el = document.documentElement;
			const max = el.scrollHeight - el.clientHeight;
			setWidth(max > 0 ? Math.min(100, el.scrollTop / max * 100) : 0);
		}
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "no-print pointer-events-none fixed top-0 right-0 left-0 z-40 h-0.5 bg-transparent",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full bg-primary transition-[width] duration-150 ease-out",
			style: { width: `${width}%` }
		})
	});
}
var buttonClass = "inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-surface px-3.5 text-sm font-medium text-fg shadow-paper transition-[transform,background-color] duration-150 ease-out hover:bg-wash active:scale-95";
function ShareBar() {
	const [copied, setCopied] = (0, import_react.useState)(null);
	async function copy(value, kind) {
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
		if (navigator.share) try {
			await navigator.share({
				title: META.title,
				text,
				url
			});
			return;
		} catch {}
		const intent = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
		window.open(intent, "_blank", "noopener,noreferrer");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "no-print flex flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: buttonClass,
				onClick: share,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {
					className: "size-4",
					strokeWidth: 1.75
				}), "Share"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: buttonClass,
				onClick: () => copy(window.location.href, "link"),
				children: [copied === "link" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "size-4",
					strokeWidth: 1.75
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					className: "size-4",
					strokeWidth: 1.75
				}), copied === "link" ? "Copied" : "Copy link"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: buttonClass,
				onClick: () => copy(CITATION, "cite"),
				children: [copied === "cite" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "size-4",
					strokeWidth: 1.75
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					className: "size-4",
					strokeWidth: 1.75
				}), copied === "cite" ? "Copied" : "Copy citation"]
			})
		]
	});
}
var NAV = [
	{
		to: "/",
		label: "Essay"
	},
	{
		to: "/atlas",
		label: "Network atlas"
	},
	{
		to: "/dossier",
		label: "Dossier"
	}
];
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
					children: META.journal
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-muted",
					children: [
						META.series,
						" · ",
						META.date
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "no-print flex flex-wrap items-center gap-2",
				"aria-label": "Primary",
				children: [NAV.map((item) => {
					const active = pathname === item.to;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: cn("inline-flex min-h-11 items-center rounded-md px-3.5 text-sm font-medium transition-colors duration-150", active ? "bg-primary text-primary-fg" : "bg-surface text-fg shadow-paper hover:bg-wash"),
						children: item.label
					}, item.to);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShareBar, {})]
			})]
		})
	});
}
//#endregion
export { SiteHeader as n, cn as r, ReadingProgress as t };
