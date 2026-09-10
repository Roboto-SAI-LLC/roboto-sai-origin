import { i as __toESM } from "../_runtime.mjs";
import { a as META, r as CITATION, t as BRIEF_META } from "./research-BbnSBAkh.mjs";
import { B as require_react, b as require_jsx_runtime, d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Share2, l as Copy, u as Check } from "../_libs/lucide-react.mjs";
import { C as CHROME, T as useLang, d as LION_CITATION, p as LION_META, r as TEMPLAR_META, x as GITHUB_URL } from "./router-qoZEAWWR.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-header-D8A9BVRn.js
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
function SiteFooter({ compact = false }) {
	const { lang } = useLang();
	const chrome = CHROME[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("mx-auto flex flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6", compact ? "max-w-3xl" : "max-w-6xl"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: META.credit }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex flex-wrap items-center gap-x-4 gap-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					chrome.series,
					" · ",
					chrome.date
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: GITHUB_URL,
					className: "text-primary underline underline-offset-4",
					rel: "noopener noreferrer",
					children: chrome.github
				})]
			})]
		})
	});
}
var OPTIONS = [{
	id: "en",
	label: "EN"
}, {
	id: "es",
	label: "ES"
}];
function LangToggle() {
	const { lang, setLang } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex rounded-md bg-surface p-1 shadow-paper",
		role: "group",
		"aria-label": lang === "es" ? "Idioma" : "Language",
		children: [OPTIONS.map((option) => {
			const active = lang === option.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-pressed": active,
				onClick: () => setLang(option.id),
				className: cn("inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm px-3 text-sm font-medium transition-colors duration-150", active ? "bg-primary text-primary-fg" : "text-muted hover:text-fg"),
				children: option.label
			}, option.id);
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: CHROME[lang].journal
		})]
	});
}
var buttonClass = "inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-surface px-3.5 text-sm font-medium text-fg shadow-paper transition-[transform,background-color] duration-150 ease-out hover:bg-wash active:scale-95";
function usePageShare() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const { lang } = useLang();
	const chrome = CHROME[lang];
	if (pathname === "/lion") return {
		title: LION_META.title,
		text: `${LION_META.title}: ${LION_META.subtitle}`,
		citation: LION_CITATION
	};
	if (pathname === "/templars") {
		const meta = TEMPLAR_META[lang];
		return {
			title: meta.title,
			text: `${meta.title}: ${meta.subtitle}`,
			citation: meta.citation
		};
	}
	if (pathname === "/brief") {
		const meta = BRIEF_META[lang];
		return {
			title: meta.title,
			text: `${meta.title}: ${meta.subtitle}`,
			citation: CITATION
		};
	}
	if (pathname === "/rovox") return {
		title: chrome.rovox.title,
		text: chrome.rovox.lead,
		citation: CITATION
	};
	if (pathname === "/atlas") return {
		title: chrome.atlas.title,
		text: chrome.atlas.leadNetwork,
		citation: CITATION
	};
	if (pathname === "/dossier") return {
		title: chrome.dossier.title,
		text: chrome.dossier.lead,
		citation: CITATION
	};
	return {
		title: chrome.home.title,
		text: `${chrome.home.title}: ${chrome.home.subtitle}`,
		citation: CITATION
	};
}
function ShareBar() {
	const [copied, setCopied] = (0, import_react.useState)(null);
	const { lang } = useLang();
	const chrome = CHROME[lang];
	const page = usePageShare();
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
		if (navigator.share) try {
			await navigator.share({
				title: page.title,
				text: page.text,
				url
			});
			return;
		} catch {}
		const intent = `https://x.com/intent/tweet?text=${encodeURIComponent(page.text)}&url=${encodeURIComponent(url)}`;
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
				}), chrome.share]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: cn(buttonClass, "hidden sm:inline-flex"),
				onClick: () => copy(window.location.href, "link"),
				children: [copied === "link" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "size-4",
					strokeWidth: 1.75
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					className: "size-4",
					strokeWidth: 1.75
				}), copied === "link" ? chrome.copied : chrome.copyLink]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: cn(buttonClass, "hidden sm:inline-flex"),
				onClick: () => copy(page.citation, "cite"),
				children: [copied === "cite" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "size-4",
					strokeWidth: 1.75
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					className: "size-4",
					strokeWidth: 1.75
				}), copied === "cite" ? chrome.copied : chrome.copyCite]
			})
		]
	});
}
function NavLinks({ pathname, className }) {
	const { lang } = useLang();
	const chrome = CHROME[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className,
		"aria-label": chrome.ui.nav,
		children: chrome.nav.map((item) => {
			const active = pathname === item.to;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: item.to,
				className: cn("inline-flex min-h-11 items-center rounded-md px-3.5 text-sm font-medium transition-colors duration-150", active ? "bg-primary text-primary-fg" : "bg-surface text-fg shadow-paper hover:bg-wash"),
				children: item.label
			}, item.to);
		})
	});
}
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const { lang } = useLang();
	const chrome = CHROME[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 xl:flex-row xl:items-center xl:justify-between sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "min-w-0 rounded-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
							children: chrome.journal
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted",
							children: [
								chrome.series,
								" · ",
								chrome.date
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangToggle, {})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "rounded-lg bg-surface px-4 py-1 shadow-paper xl:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
						className: "flex min-h-11 cursor-pointer list-none items-center gap-3 font-display text-sm font-medium text-fg",
						children: chrome.menu
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinks, {
							pathname,
							className: "flex flex-col gap-2"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShareBar, {})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-2 xl:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinks, {
						pathname,
						className: "flex flex-wrap items-center gap-2"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShareBar, {})]
				})
			]
		})
	});
}
//#endregion
export { cn as i, SiteFooter as n, SiteHeader as r, ReadingProgress as t };
