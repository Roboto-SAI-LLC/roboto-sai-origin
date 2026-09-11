import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Pause, i as Play } from "../_libs/lucide-react.mjs";
import { N as useLang, S as BRIEF_TAGS, j as CHROME, w as META, x as BRIEF_META } from "./router-CJ_Fq_ug.mjs";
import { n as SiteFooter, r as SiteHeader, t as ReadingProgress } from "./site-header-C90eYpju.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brief-Bugs7YD8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SRC = {
	en: "/speech/brief-en.mp3",
	es: "/speech/brief-es.mp3"
};
function BriefListen() {
	const { lang } = useLang();
	const chrome = CHROME[lang];
	const audioRef = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const audio = audioRef.current;
		if (!audio) return;
		audio.pause();
		audio.currentTime = 0;
		setPlaying(false);
	}, [lang]);
	async function toggle() {
		const audio = audioRef.current;
		if (!audio) return;
		if (playing) {
			audio.pause();
			setPlaying(false);
			return;
		}
		try {
			await audio.play();
			setPlaying(true);
		} catch {
			setPlaying(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stagger-in mt-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
			ref: audioRef,
			src: SRC[lang],
			preload: "none",
			onEnded: () => setPlaying(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: toggle,
			"aria-pressed": playing,
			"aria-label": chrome.ui.listenAria,
			className: "inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-fg",
			children: [playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {
				className: "size-4",
				strokeWidth: 1.75
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
				className: "size-4",
				strokeWidth: 1.75
			}), playing ? chrome.ui.pause : chrome.ui.listen]
		})]
	});
}
function BriefPage() {
	const { lang } = useLang();
	const meta = BRIEF_META[lang];
	const tags = BRIEF_TAGS[lang];
	const chrome = CHROME[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "paper-grain min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadingProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "stagger-in font-display text-kicker font-medium tracking-kicker text-subtle uppercase",
						children: meta.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "stagger-in mt-4 font-display text-display tracking-display text-fire sm:text-display-lg",
						children: meta.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "stagger-in mt-5 font-serif text-xl font-normal leading-snug text-muted sm:text-2xl",
						children: meta.subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "stagger-in mt-6 text-sm text-muted",
						children: [
							chrome.ui.by,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg",
								children: META.credit
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefListen, {}),
					tags.map((tag, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						id: tag.id,
						className: "mt-12 border-t border-border pt-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
								children: [
									index + 1,
									" · ",
									tag.tag
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl",
								children: tag.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-article text-fg",
								children: tag.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted",
								children: [
									meta.sources,
									": ",
									tag.sources
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: tag.href,
									className: "inline-flex min-h-11 items-center rounded-md bg-surface px-3.5 text-sm font-medium text-fg shadow-paper hover:bg-wash",
									children: meta.open
								})
							})
						]
					}, tag.id))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, { compact: true })
		]
	});
}
//#endregion
export { BriefPage as component };
