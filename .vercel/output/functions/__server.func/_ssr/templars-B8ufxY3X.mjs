import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { M as pick, N as useLang, a as TEMPLAR_SECTIONS, i as TEMPLAR_REFERENCES, j as CHROME, n as TEMPLAR_FINDINGS, o as TEMPLAR_TIMELINE, r as TEMPLAR_META, s as TEMPLAR_TOC, w as META } from "./router-CJ_Fq_ug.mjs";
import { n as SiteFooter, r as SiteHeader, t as ReadingProgress } from "./site-header-C90eYpju.mjs";
import { n as TableOfContents } from "./table-of-contents-Bb33GXbk.mjs";
import { t as PhotoFigure } from "./photo-figure-DU1ko3LL.mjs";
import { n as SectionBody, r as YearTimeline } from "./timeline-C1qb7JOq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/templars-B8ufxY3X.js
var import_jsx_runtime = require_jsx_runtime();
function TemplarPage() {
	const { lang } = useLang();
	const meta = pick(lang, TEMPLAR_META);
	const findings = TEMPLAR_FINDINGS[lang];
	const sections = TEMPLAR_SECTIONS[lang];
	const toc = TEMPLAR_TOC[lang];
	const timeline = TEMPLAR_TIMELINE[lang];
	const chrome = CHROME[lang];
	const byId = (id) => sections.find((section) => section.id === id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "paper-grain min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadingProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#article",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2",
				children: meta.skip
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-4 pt-10 pb-6 sm:px-6 sm:pt-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "stagger-in font-display text-kicker font-medium tracking-kicker text-subtle uppercase",
							children: meta.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "stagger-in mt-4 max-w-4xl font-display text-display tracking-display text-fire sm:text-display-lg",
							children: meta.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "stagger-in mt-5 max-w-2xl font-serif text-xl font-normal leading-snug text-muted sm:text-2xl",
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
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					"aria-label": chrome.ui.findings,
					className: "mx-auto grid max-w-6xl gap-3 px-4 pb-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4",
					children: findings.map((finding) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-surface px-4 py-4 shadow-paper sm:px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
							children: finding.kicker
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-fg",
							children: finding.text
						})]
					}, finding.kicker))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[16rem_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "no-print min-w-0 space-y-4 lg:sticky lg:top-6 lg:self-start",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
								className: "rounded-lg bg-surface px-4 py-3 shadow-paper lg:hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
									className: "flex min-h-11 cursor-pointer list-none items-center gap-3 font-display text-sm font-medium text-fg",
									children: chrome.contents
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableOfContents, {
									items: toc,
									className: "mt-3 pb-2"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden lg:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableOfContents, { items: toc })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/brief",
								className: "hidden min-h-11 items-center rounded-md bg-surface px-3.5 text-sm font-medium text-fg shadow-paper hover:bg-wash lg:inline-flex",
								children: meta.back
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						id: "article",
						className: "min-w-0 max-w-3xl",
						children: [
							byId("introduction") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBody, { section: byId("introduction") }) : null,
							byId("order") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-16 border-t border-border pt-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBody, { section: byId("order") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoFigure, {
									src: "/templars/fortress.jpg",
									alt: meta.photoAlt,
									caption: meta.photoCaption
								})]
							}) : null,
							byId("money") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-16 border-t border-border pt-12",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBody, { section: byId("money") })
							}) : null,
							byId("end") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-16 border-t border-border pt-12",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBody, { section: byId("end") })
							}) : null,
							byId("plana") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-16 border-t border-border pt-12",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBody, { section: byId("plana") }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoFigure, {
										src: "/templars/coast.jpg",
										alt: lang === "es" ? "Castillo de caliza vacío en la costa mediterránea, atardecer, sin gente." : "Empty limestone castle on the Mediterranean coast at dusk, no people.",
										caption: lang === "es" ? "La costa de la Plana: Xivert y Burriana son señorío vecino. Vila-real es merced real de 1274." : "The Plana coast: Xivert and Burriana are neighboring lordship. Vila-real is a royal grant of 1274."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-4 mb-2 font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl",
										children: meta.chronology
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-2 text-article text-muted",
										children: meta.chronologyLead
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YearTimeline, { items: timeline })
								]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								id: "references",
								"aria-labelledby": "references",
								className: "mt-16 scroll-mt-24 border-t border-border pt-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl",
									children: meta.references
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-6 space-y-4",
									children: TEMPLAR_REFERENCES.map((reference) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										id: `templar-ref-${reference.n}`,
										className: "scroll-mt-24 text-sm leading-relaxed text-fg",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "mr-2 font-display text-primary",
												children: [reference.n, "."]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [reference.source, ". "] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: reference.url,
												className: "text-primary underline decoration-border underline-offset-4 hover:decoration-primary",
												rel: "noopener noreferrer",
												children: reference.title
											}),
											"."
										]
									}, reference.n))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "mt-12 rounded-xl bg-surface px-5 py-5 shadow-paper sm:px-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-lg font-medium text-fg",
										children: meta.citeTitle
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: meta.citation
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 text-sm text-subtle",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/brief",
												className: "text-primary underline underline-offset-4",
												children: meta.brief
											}),
											" · ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/dossier",
												className: "text-primary underline underline-offset-4",
												children: chrome.dossier.title
											})
										]
									})
								]
							})
						]
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { TemplarPage as component };
