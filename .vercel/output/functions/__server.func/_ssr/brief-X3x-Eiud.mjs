import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Pause, t as Volume2 } from "../_libs/lucide-react.mjs";
import { C as briefNarration, D as META, M as CHROME, P as useLang, S as BRIEF_TAGS, w as tagNarration, x as BRIEF_META } from "./router-CfKVlrE8.mjs";
import { n as SiteHeader, r as cn, t as ReadingProgress } from "./site-header-ZNkeZvws.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brief-X3x-Eiud.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SPEAK_EVENT = "rs-speak";
function pickVoice(lang) {
	if (typeof window === "undefined" || !window.speechSynthesis) return null;
	const voices = window.speechSynthesis.getVoices();
	const prefix = lang === "es" ? "es" : "en";
	return voices.find((voice) => voice.lang.toLowerCase().startsWith(prefix) && /male|leo|google/i.test(voice.name)) ?? voices.find((voice) => voice.lang.toLowerCase().startsWith(prefix)) ?? null;
}
function speak(text, lang, onEnd) {
	if (typeof window === "undefined" || !window.speechSynthesis) return;
	window.speechSynthesis.cancel();
	const utterance = new SpeechSynthesisUtterance(text);
	utterance.lang = lang === "es" ? "es-ES" : "en-US";
	utterance.rate = .96;
	const voice = pickVoice(lang);
	if (voice) utterance.voice = voice;
	utterance.onend = onEnd;
	utterance.onerror = onEnd;
	window.speechSynthesis.speak(utterance);
}
function announce(id) {
	window.dispatchEvent(new CustomEvent(SPEAK_EVENT, { detail: id }));
}
function pauseAllAudio(except) {
	document.querySelectorAll("audio").forEach((node) => {
		if (node !== except && !node.paused) node.pause();
	});
}
function FullBriefPlayer() {
	const { lang } = useLang();
	const meta = BRIEF_META[lang];
	const audioRef = (0, import_react.useRef)(null);
	const [speaking, setSpeaking] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setSpeaking(false);
		window.speechSynthesis?.cancel();
		const node = audioRef.current;
		if (node) {
			node.pause();
			node.load();
		}
	}, [lang]);
	(0, import_react.useEffect)(() => {
		const onSpeak = (event) => {
			if (event.detail !== "full") setSpeaking(false);
		};
		window.addEventListener(SPEAK_EVENT, onSpeak);
		return () => {
			window.removeEventListener(SPEAK_EVENT, onSpeak);
			window.speechSynthesis?.cancel();
		};
	}, []);
	function toggleLive() {
		if (speaking) {
			window.speechSynthesis.cancel();
			setSpeaking(false);
			return;
		}
		pauseAllAudio();
		announce("full");
		speak(briefNarration(lang), lang, () => setSpeaking(false));
		setSpeaking(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "no-print rounded-xl bg-surface px-5 py-5 shadow-paper sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
					children: meta.listen
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: meta.voice
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: toggleLive,
					className: "inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-fg",
					children: [speaking ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {
						className: "size-4",
						strokeWidth: 1.75
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {
						className: "size-4",
						strokeWidth: 1.75
					}), speaking ? meta.tagStop : meta.live]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
				ref: audioRef,
				className: "mt-4 w-full",
				controls: true,
				preload: "metadata",
				src: `/speech/brief-${lang}.mp3`,
				onPlay: () => {
					window.speechSynthesis?.cancel();
					setSpeaking(false);
					announce("audio");
					pauseAllAudio(audioRef.current);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted",
				children: meta.note
			})
		]
	});
}
function TagListenButton({ tag }) {
	const { lang } = useLang();
	const meta = BRIEF_META[lang];
	const [playing, setPlaying] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setPlaying(false);
		window.speechSynthesis?.cancel();
	}, [lang, tag.id]);
	(0, import_react.useEffect)(() => {
		const onSpeak = (event) => {
			if (event.detail !== tag.id) setPlaying(false);
		};
		window.addEventListener(SPEAK_EVENT, onSpeak);
		return () => {
			window.removeEventListener(SPEAK_EVENT, onSpeak);
			window.speechSynthesis?.cancel();
		};
	}, [tag.id]);
	function toggle() {
		if (playing) {
			window.speechSynthesis.cancel();
			setPlaying(false);
			return;
		}
		pauseAllAudio();
		announce(tag.id);
		speak(tagNarration(lang, tag), lang, () => setPlaying(false));
		setPlaying(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: toggle,
		className: cn("inline-flex min-h-11 items-center gap-2 rounded-md px-3.5 text-sm font-medium transition-colors duration-150", playing ? "bg-primary text-primary-fg" : "bg-surface text-fg shadow-paper hover:bg-wash"),
		children: [playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {
			className: "size-4",
			strokeWidth: 1.75
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {
			className: "size-4",
			strokeWidth: 1.75
		}), playing ? meta.playing : meta.tagListen]
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
						className: "stagger-in mt-4 font-display text-display font-medium tracking-display text-fg sm:text-display-lg",
						children: meta.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "stagger-in mt-5 font-display text-xl leading-snug text-muted sm:text-2xl",
						children: meta.subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "stagger-in mt-6 text-sm text-muted",
						children: ["By ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg",
							children: META.credit
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FullBriefPlayer, {})
					}),
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagListenButton, { tag }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: tag.href,
									className: "inline-flex min-h-11 items-center rounded-md bg-surface px-3.5 text-sm font-medium text-fg shadow-paper hover:bg-wash",
									children: meta.open
								})]
							})
						]
					}, tag.id))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-3xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: META.credit }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						chrome.series,
						" · ",
						chrome.date
					] })]
				})
			})
		]
	});
}
//#endregion
export { BriefPage as component };
