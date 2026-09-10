import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Send, c as Pause, r as Square, s as Play, t as Upload } from "../_libs/lucide-react.mjs";
import { C as CHROME, T as useLang } from "./router-qoZEAWWR.mjs";
import { i as cn, n as SiteFooter, r as SiteHeader, t as ReadingProgress } from "./site-header-D8A9BVRn.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { i as ROVOX_STORAGE, n as DEFAULT_DOCS, r as FALLBACK_INTRO, t as DEFAULT_CARD } from "./rovox-C-htRBig.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rovox-CDy2Mjjw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var askRoVox = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("0058aabec4daeacb3f4f6d72f2d1d47cbd18cea063988525a47e2089b4721a80"));
function loadCard(lang) {
	try {
		const raw = window.localStorage.getItem(`${ROVOX_STORAGE.card}-${lang}`);
		if (raw) return {
			...DEFAULT_CARD[lang],
			...JSON.parse(raw)
		};
	} catch {}
	return DEFAULT_CARD[lang];
}
function loadDocs(lang) {
	try {
		return window.localStorage.getItem(`${ROVOX_STORAGE.docs}-${lang}`) ?? DEFAULT_DOCS[lang];
	} catch {
		return DEFAULT_DOCS[lang];
	}
}
function clock(seconds) {
	if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
	return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, "0")}`;
}
function RoVoxAgent() {
	const { lang } = useLang();
	const copy = CHROME[lang].rovox;
	const audioRef = (0, import_react.useRef)(null);
	const objectUrl = (0, import_react.useRef)(null);
	const lastTime = (0, import_react.useRef)(0);
	const phaseRef = (0, import_react.useRef)("idle");
	const [phase, setPhase] = (0, import_react.useState)("idle");
	const [card, setCard] = (0, import_react.useState)(DEFAULT_CARD[lang]);
	const [docs, setDocs] = (0, import_react.useState)(DEFAULT_DOCS[lang]);
	const [src, setSrc] = (0, import_react.useState)(FALLBACK_INTRO[lang]);
	const [fileName, setFileName] = (0, import_react.useState)("");
	const [draft, setDraft] = (0, import_react.useState)("");
	const [chat, setChat] = (0, import_react.useState)([]);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [elapsed, setElapsed] = (0, import_react.useState)(0);
	const [duration, setDuration] = (0, import_react.useState)(0);
	const [dragOver, setDragOver] = (0, import_react.useState)(false);
	const locked = phase !== "ready";
	phaseRef.current = phase;
	(0, import_react.useEffect)(() => {
		setCard(loadCard(lang));
		setDocs(loadDocs(lang));
		if (!objectUrl.current) setSrc(FALLBACK_INTRO[lang]);
		const audio = audioRef.current;
		if (audio) {
			audio.pause();
			audio.currentTime = 0;
		}
		lastTime.current = 0;
		setElapsed(0);
		setPhase("idle");
		setChat([]);
		setError("");
	}, [lang]);
	function writeCard(next) {
		setCard(next);
		try {
			window.localStorage.setItem(`${ROVOX_STORAGE.card}-${lang}`, JSON.stringify(next));
		} catch {}
	}
	function writeDocs(next) {
		setDocs(next);
		try {
			window.localStorage.setItem(`${ROVOX_STORAGE.docs}-${lang}`, next);
		} catch {}
	}
	(0, import_react.useEffect)(() => {
		return () => {
			if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const session = navigator.mediaSession;
		if (!session) return;
		const noop = () => {
			const audio = audioRef.current;
			if (audio) audio.currentTime = lastTime.current;
		};
		try {
			session.setActionHandler("seekforward", noop);
			session.setActionHandler("seekbackward", noop);
			session.setActionHandler("seekto", noop);
			session.setActionHandler("nexttrack", null);
			session.setActionHandler("previoustrack", null);
			session.setActionHandler("pause", () => {
				audioRef.current?.pause();
				setPhase("paused");
			});
			session.setActionHandler("stop", () => {
				stopIntro();
			});
		} catch {}
		return () => {
			try {
				session.setActionHandler("seekforward", null);
				session.setActionHandler("seekbackward", null);
				session.setActionHandler("seekto", null);
				session.setActionHandler("pause", null);
				session.setActionHandler("stop", null);
			} catch {}
		};
	}, []);
	async function playIntro() {
		const audio = audioRef.current;
		if (!audio) return;
		if (phase === "idle" || phase === "ready") {
			audio.currentTime = 0;
			lastTime.current = 0;
			setElapsed(0);
		}
		try {
			await audio.play();
			setPhase("intro");
			setError("");
		} catch {
			setError(copy.needGesture);
		}
	}
	function pauseIntro() {
		audioRef.current?.pause();
		setPhase("paused");
	}
	function stopIntro() {
		const audio = audioRef.current;
		if (audio) {
			audio.pause();
			audio.currentTime = 0;
		}
		lastTime.current = 0;
		setElapsed(0);
		setPhase("idle");
	}
	function holdPosition() {
		const audio = audioRef.current;
		if (!audio) return;
		if (phaseRef.current !== "intro" && phaseRef.current !== "paused") return;
		if (audio.currentTime > lastTime.current + .3) audio.currentTime = lastTime.current;
	}
	function onTimeUpdate() {
		const audio = audioRef.current;
		if (!audio) return;
		if (phaseRef.current === "intro") {
			if (audio.currentTime > lastTime.current + .35) {
				audio.currentTime = lastTime.current;
				return;
			}
			lastTime.current = audio.currentTime;
		}
		setElapsed(audio.currentTime);
		if (Number.isFinite(audio.duration)) setDuration(audio.duration);
	}
	function onEnded() {
		if (phaseRef.current !== "intro") return;
		lastTime.current = duration || lastTime.current;
		setPhase("ready");
	}
	function onDropFile(file) {
		if (!file) return;
		const named = /\.(mp3|wav|m4a|ogg|aac|mpeg)$/i.test(file.name);
		if (!file.type.startsWith("audio/") && !named) return;
		if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
		const url = URL.createObjectURL(file);
		objectUrl.current = url;
		setSrc(url);
		setFileName(file.name);
		setDuration(0);
		stopIntro();
	}
	async function send() {
		const text = draft.trim();
		if (!text || locked || busy) return;
		if (chat.filter((m) => m.role === "user").length >= 8) {
			setError(copy.cap);
			return;
		}
		const next = [...chat, {
			role: "user",
			content: text.slice(0, 2e3)
		}];
		setChat(next);
		setDraft("");
		setBusy(true);
		setError("");
		try {
			const result = await askRoVox({ data: {
				messages: next,
				docs,
				card,
				lang
			} });
			if (!result.ok) {
				setError(result.error);
				setChat([...next, {
					role: "assistant",
					content: copy.unavailable
				}]);
			} else {
				if (result.patch?.docs) writeDocs(result.patch.docs);
				if (result.patch?.card) writeCard({
					...card,
					...result.patch.card
				});
				setChat([...next, {
					role: "assistant",
					content: result.text
				}]);
			}
		} catch {
			setError(copy.unavailable);
		} finally {
			setBusy(false);
		}
	}
	const pct = duration > 0 ? Math.min(100, elapsed / duration * 100) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "space-y-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-surface px-4 py-5 shadow-paper sm:px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
							children: copy.card
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => writeCard(DEFAULT_CARD[lang]),
							className: "text-xs font-medium text-muted underline-offset-4 hover:text-fg hover:underline",
							children: copy.resetCard
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 block text-xs font-medium tracking-wide text-muted uppercase",
						children: [copy.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: card.name,
							onChange: (e) => writeCard({
								...card,
								name: e.target.value
							}),
							className: "mt-1 h-11 w-full rounded-md border border-border bg-bg px-3 text-sm font-medium text-fg outline-none focus-visible:ring-2 focus-visible:ring-primary"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-3 block text-xs font-medium tracking-wide text-muted uppercase",
						children: [copy.role, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: card.role,
							onChange: (e) => writeCard({
								...card,
								role: e.target.value
							}),
							className: "mt-1 h-11 w-full rounded-md border border-border bg-bg px-3 text-sm text-fg outline-none focus-visible:ring-2 focus-visible:ring-primary"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-3 block text-xs font-medium tracking-wide text-muted uppercase",
						children: [copy.note, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: card.note,
							onChange: (e) => writeCard({
								...card,
								note: e.target.value
							}),
							rows: 4,
							className: "mt-1 w-full rounded-md border border-border bg-bg px-3 py-2 text-sm leading-relaxed text-fg outline-none focus-visible:ring-2 focus-visible:ring-primary"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs leading-relaxed text-muted",
						children: copy.noStock
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: cn("rounded-xl bg-surface px-4 py-5 shadow-paper sm:px-5", dragOver && "ring-2 ring-primary"),
					onDragOver: (e) => {
						e.preventDefault();
						setDragOver(true);
					},
					onDragLeave: () => setDragOver(false),
					onDrop: (e) => {
						e.preventDefault();
						setDragOver(false);
						onDropFile(e.dataTransfer.files?.[0]);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
							children: copy.player
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: copy.rule
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
							ref: audioRef,
							src,
							preload: "metadata",
							className: "hidden",
							controls: false,
							onEnded,
							onTimeUpdate,
							onSeeking: holdPosition,
							onLoadedMetadata: onTimeUpdate
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: [
								phase === "idle" || phase === "ready" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: playIntro,
									className: "inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-fg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
										className: "size-4",
										strokeWidth: 1.75
									}), copy.listen]
								}) : null,
								phase === "intro" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: pauseIntro,
									className: "inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-fg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {
										className: "size-4",
										strokeWidth: 1.75
									}), copy.pause]
								}) : null,
								phase === "paused" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: playIntro,
									className: "inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-fg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
										className: "size-4",
										strokeWidth: 1.75
									}), copy.resume]
								}) : null,
								phase === "intro" || phase === "paused" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: stopIntro,
									className: "inline-flex min-h-11 items-center gap-2 rounded-md bg-bg px-4 text-sm font-medium text-fg shadow-paper",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, {
										className: "size-4",
										strokeWidth: 1.75
									}), copy.stop]
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4",
							"aria-hidden": duration <= 0,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1 overflow-hidden rounded-full bg-wash",
								role: "progressbar",
								"aria-valuemin": 0,
								"aria-valuemax": Math.round(duration || 0),
								"aria-valuenow": Math.round(elapsed),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full origin-left bg-primary transition-[width] duration-150",
									style: { width: `${pct}%` }
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs text-muted",
								children: [
									clock(elapsed),
									" / ",
									clock(duration)
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-muted",
							children: phase === "ready" ? copy.unlocked : locked ? copy.locked : copy.idleHint
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-4 flex min-h-11 cursor-pointer items-center gap-2 rounded-md border border-dashed border-border px-3 text-sm text-muted hover:bg-wash",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {
									className: "size-4",
									strokeWidth: 1.75
								}),
								fileName || copy.drop,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									accept: "audio/*",
									className: "sr-only",
									onChange: (e) => onDropFile(e.target.files?.[0])
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-subtle",
							children: fileName ? copy.usingFile : copy.usingFallback
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl bg-surface px-4 py-5 shadow-paper sm:px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
							children: copy.docs
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => writeDocs(DEFAULT_DOCS[lang]),
							className: "text-xs font-medium text-muted underline-offset-4 hover:text-fg hover:underline",
							children: copy.reset
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: docs,
						onChange: (e) => writeDocs(e.target.value),
						rows: 10,
						className: "mt-3 w-full rounded-md border border-border bg-bg px-3 py-2 text-sm leading-relaxed text-fg outline-none focus-visible:ring-2 focus-visible:ring-primary"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: cn("rounded-xl bg-surface px-4 py-5 shadow-paper sm:px-5", locked && "opacity-70"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
							children: copy.desk
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 space-y-3",
							"aria-live": "polite",
							children: [
								chat.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: copy.empty
								}) : null,
								chat.map((msg, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: cn("text-sm leading-relaxed", msg.role === "user" ? "text-muted" : "text-fg"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-kicker tracking-kicker text-primary uppercase",
										children: msg.role === "user" ? copy.you : card.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block",
										children: msg.content
									})]
								}, `${msg.role}-${i}`)),
								busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: copy.writing
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-4 flex gap-2",
							onSubmit: (e) => {
								e.preventDefault();
								send();
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: draft,
								onChange: (e) => setDraft(e.target.value),
								disabled: locked || busy,
								placeholder: locked ? copy.locked : copy.ask,
								className: "h-11 min-w-0 flex-1 rounded-md border border-border bg-bg px-3 text-sm text-fg outline-none disabled:text-subtle focus-visible:ring-2 focus-visible:ring-primary"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: locked || busy || !draft.trim(),
								className: "inline-flex min-h-11 min-w-11 items-center justify-center rounded-md bg-primary px-3 text-primary-fg disabled:opacity-40",
								"aria-label": copy.send,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
									className: "size-4",
									strokeWidth: 1.75
								})
							})]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: error
						}) : null
					]
				})
			]
		})]
	});
}
function RoVoxPage() {
	const { lang } = useLang();
	const chrome = CHROME[lang];
	const copy = chrome.rovox;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "paper-grain min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadingProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "stagger-in font-display text-kicker font-medium tracking-kicker text-subtle uppercase",
						children: copy.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "stagger-in mt-4 max-w-3xl font-display text-display font-medium tracking-display text-fg sm:text-display-lg",
						children: copy.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "stagger-in mt-5 max-w-2xl text-lg leading-relaxed text-muted",
						children: copy.lead
					}),
					chrome.englishBody ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl rounded-lg bg-surface px-4 py-3 text-sm leading-relaxed text-muted shadow-paper",
						children: chrome.englishBody
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoVoxAgent, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { RoVoxPage as component };
