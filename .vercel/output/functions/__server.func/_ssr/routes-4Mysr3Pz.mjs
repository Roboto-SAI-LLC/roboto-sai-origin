import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Search } from "../_libs/lucide-react.mjs";
import { A as SITE_URL, C as CITATION, E as SECTIONS, N as useLang, O as TOC, T as REFERENCES, j as CHROME, w as META } from "./router-CXAxw9mM.mjs";
import { n as SiteFooter, r as SiteHeader, t as ReadingProgress } from "./site-header-CC1S7zsx.mjs";
import { n as TableOfContents } from "./table-of-contents-C-X6lr4Z.mjs";
import { n as SectionBody, t as HistoryTimeline } from "./timeline-BQODARm-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-4Mysr3Pz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function sectionText(id) {
	const section = SECTIONS.find((item) => item.id === id);
	if (!section) return "";
	return section.blocks.map((block) => {
		if (block.type === "p" || block.type === "quote" || block.type === "note") return block.text;
		if (block.type === "h3") return block.title;
		if (block.type === "ul") return block.items.join(" ");
		if (block.type === "table") return `${block.caption} ${block.rows.flat().join(" ")}`;
		return "";
	}).join(" ");
}
function EssaySearch() {
	const [query, setQuery] = (0, import_react.useState)("");
	const { lang } = useLang();
	const ui = CHROME[lang].ui;
	const hits = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		if (q.length < 2) return [];
		return TOC.filter((item) => {
			return `${item.title} ${sectionText(item.id)}`.toLowerCase().includes(q);
		}).slice(0, 8);
	}, [query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "no-print rounded-xl bg-surface px-4 py-4 shadow-paper sm:px-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "essay-search",
				className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
				children: ui.searchEssay
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle",
					strokeWidth: 1.75
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "essay-search",
					type: "search",
					value: query,
					onChange: (event) => setQuery(event.target.value),
					placeholder: ui.searchPlaceholder,
					className: "h-11 w-full rounded-md border border-border bg-bg pr-3 pl-10 text-sm text-fg outline-none placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-primary"
				})]
			}),
			query.trim().length >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-1",
				"aria-live": "polite",
				children: hits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "px-1 py-2 text-sm text-muted",
					children: ui.noMatch
				}) : hits.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `#${item.id}`,
					className: "flex min-h-11 items-center gap-2 rounded-md px-2 py-2 text-sm text-fg hover:bg-wash",
					children: [item.numeral ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-6 font-display text-xs text-primary",
						children: item.numeral
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.title })]
				}) }, item.id))
			}) : null
		]
	});
}
function EtymologyFigure() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "my-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-surface px-5 py-5 shadow-paper sm:px-6 sm:py-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
							children: "Roboto"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-2xl font-medium tracking-tight text-fg",
							children: "the house"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm leading-relaxed break-words text-muted",
							children: [
								"PIE *orbh- → Old Church Slavonic ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "rabu" }),
								" / ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "rabota" }),
								" → Czech ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "robota" }),
								" → 1920 ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "robot" }),
								" in ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "R.U.R." }),
								" The house sits next to that word. Not a diminutive of Roberto."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center px-2 py-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-center font-display text-kicker tracking-kicker text-subtle uppercase",
						children: [
							"sound-alike,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
							" not kin"
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-surface px-5 py-5 shadow-paper sm:px-6 sm:py-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
							children: "Roberto"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-2xl font-medium tracking-tight text-fg",
							children: "the given name"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm leading-relaxed break-words text-muted",
							children: [
								"Proto-Germanic ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "*Hrōþiberhtaz" }),
								" (",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "hruod" }),
								" + ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "berhta" }),
								") → Iberian given name. Robert is the English gloss: kings, saints, surnames."
							]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-3 text-sm text-muted",
			children: "Figure 1. Two names that rhyme, with unrelated roots. Robot and Robert are the English glosses that collapse the pair."
		})]
	});
}
var jsonLd = {
	"@context": "https://schema.org",
	"@type": "ScholarlyArticle",
	headline: `${META.title}: ${META.subtitle}`,
	alternativeHeadline: META.subtitle,
	description: META.description,
	datePublished: "2026-09-02",
	inLanguage: "en",
	author: {
		"@type": "Organization",
		name: "Roboto SAI"
	},
	contributor: {
		"@type": "Person",
		name: "a Copilot"
	},
	publisher: {
		"@type": "Organization",
		name: "Roboto SAI"
	},
	url: SITE_URL,
	creditText: META.credit,
	keywords: [
		"Roboto",
		"Roberto",
		"Robot",
		"Robert",
		"ASR",
		"speech recognition",
		"onomastics",
		"anthroponymy",
		"prosopography",
		"Villarreal",
		"Vila-real",
		"Martinez",
		"Yisrael",
		"etymology",
		"Knights Templar",
		"carta pobla",
		"prosopography",
		"Sephardic surnames",
		"Monterrey",
		"Nuevo León",
		"Los Villarreales"
	]
};
function ResearchPage() {
	const intro = SECTIONS.find((section) => section.id === "introduction");
	const rest = SECTIONS.filter((section) => section.id !== "introduction");
	const { lang } = useLang();
	const chrome = CHROME[lang];
	const home = chrome.home;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "paper-grain min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadingProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#article",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2",
				children: chrome.skip
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-4 pt-10 pb-6 sm:px-6 sm:pt-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "stagger-in font-display text-kicker font-medium tracking-kicker text-subtle uppercase",
							children: [
								home.kicker,
								" · ",
								META.sourceCount,
								" ",
								home.sources
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "stagger-in mt-4 max-w-4xl font-display text-display font-medium tracking-display text-fg sm:text-display-lg",
							children: home.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "stagger-in mt-5 max-w-2xl font-display text-xl leading-snug text-muted sm:text-2xl",
							children: home.subtitle
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
						chrome.englishBody ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "stagger-in mt-4 max-w-2xl rounded-lg bg-surface px-4 py-3 text-sm leading-relaxed text-muted shadow-paper",
							children: chrome.englishBody
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					"aria-label": chrome.ui.findings,
					className: "mx-auto grid max-w-6xl gap-3 px-4 pb-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-3",
					children: home.findings.map((finding) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "mx-auto max-w-6xl px-4 pb-10 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-surface px-4 py-4 shadow-paper sm:flex sm:items-center sm:justify-between sm:px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
							children: home.newKicker
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-2xl text-sm leading-relaxed text-fg sm:text-base",
							children: home.newText
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dossier",
							className: "mt-4 inline-flex min-h-11 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-fg sm:mt-0",
							children: home.newCta
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto grid max-w-6xl gap-3 px-4 pb-10 sm:grid-cols-3 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl bg-surface px-4 py-4 shadow-paper sm:px-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
									children: home.lionKicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-fg",
									children: home.lionText
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/lion",
									className: "mt-4 inline-flex min-h-11 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-fg",
									children: home.lionCta
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl bg-surface px-4 py-4 shadow-paper sm:px-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
									children: home.templarKicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-fg",
									children: home.templarText
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/templars",
									className: "mt-4 inline-flex min-h-11 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-fg",
									children: home.templarCta
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl bg-surface px-4 py-4 shadow-paper sm:px-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
									children: home.briefKicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-fg",
									children: home.briefText
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/brief",
									className: "mt-4 inline-flex min-h-11 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-fg",
									children: home.briefCta
								})
							]
						})
					]
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
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableOfContents, { className: "mt-3 pb-2" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden lg:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableOfContents, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EssaySearch, {})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						id: "article",
						className: "min-w-0 max-w-3xl",
						children: [
							intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBody, { section: intro }) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EtymologyFigure, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 mb-2 font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl",
								children: home.chronology
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-article text-muted",
								children: home.chronologyLead
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HistoryTimeline, {}),
							rest.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-16 border-t border-border pt-12",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBody, { section })
							}, section.id)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								id: "references",
								"aria-labelledby": "references",
								className: "mt-16 scroll-mt-24 border-t border-border pt-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl",
									children: home.references
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-6 space-y-4",
									children: REFERENCES.map((reference) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										id: `ref-${reference.n}`,
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
										children: chrome.cite
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: CITATION
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 text-sm text-subtle",
										children: [
											home.llms,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "/llms.txt",
												className: "text-primary underline underline-offset-4",
												children: "/llms.txt"
											}),
											"."
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
export { ResearchPage as component };
