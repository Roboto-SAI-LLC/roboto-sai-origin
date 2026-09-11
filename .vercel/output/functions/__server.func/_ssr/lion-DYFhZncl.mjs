import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as SITE_URL, N as useLang, _ as LION_TOC, b as REGISTERS, c as BLESSING, d as LION_CITATION, f as LION_FINDINGS, g as LION_TIMELINE, h as LION_SECTIONS, j as CHROME, l as COMMENTARIES, m as LION_REFERENCES, p as LION_META, u as LEXICON, v as MERKABAH_FACES, y as PERSONAL_NAMES } from "./router-CJ_Fq_ug.mjs";
import { i as cn, n as SiteFooter, r as SiteHeader, t as ReadingProgress } from "./site-header-C90eYpju.mjs";
import { n as TableOfContents, t as InlineText } from "./table-of-contents-Bb33GXbk.mjs";
import { t as PhotoFigure } from "./photo-figure-DU1ko3LL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lion-DYFhZncl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Hebrew({ children, className, size = "body" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		lang: "he",
		dir: "rtl",
		className: cn("hebrew text-fg", size === "hero" ? "text-2xl leading-snug sm:text-4xl sm:leading-snug" : size === "display" ? "text-xl leading-snug sm:text-2xl" : size === "caption" ? "text-base leading-relaxed" : "text-lg leading-relaxed", className),
		children
	});
}
function BlessingReader() {
	const [open, setOpen] = (0, import_react.useState)("pshat");
	const active = COMMENTARIES.find((item) => item.id === open) ?? COMMENTARIES[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "my-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface px-5 py-6 shadow-paper sm:px-8 sm:py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
						children: "Genesis 49:9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 border-t border-border pt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hebrew, {
							size: "hero",
							children: BLESSING.hebrew
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 font-display text-lg leading-snug text-ink-soft italic sm:text-xl",
						children: BLESSING.english
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: BLESSING.transliteration
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 border-t border-border pt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hebrew, {
							size: "display",
							children: BLESSING.scepterHebrew
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted",
							children: [
								BLESSING.scepterEnglish,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-subtle",
									children: [
										"(",
										BLESSING.scepterCite,
										")"
									]
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 rounded-xl bg-surface p-2 shadow-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1",
					role: "tablist",
					"aria-label": "Commentaries",
					children: COMMENTARIES.map((item) => {
						const selected = item.id === open;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": selected,
							onClick: () => setOpen(item.id),
							className: cn("min-h-11 rounded-lg px-3.5 text-sm font-medium transition-[color,background-color,transform] duration-150 ease-out active:scale-[0.96]", selected ? "bg-primary text-primary-fg" : "text-muted hover:bg-wash hover:text-fg"),
							children: item.label
						}, item.id);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					role: "tabpanel",
					className: "mt-1 rounded-lg bg-wash px-4 py-4 text-sm leading-relaxed text-fg sm:px-5 sm:text-base",
					children: active.body
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "mt-3 text-sm text-muted",
				children: "Figure 1. The blessing, then the four hours of the lion."
			})
		]
	});
}
function DualRegister() {
	const [open, setOpen] = (0, import_react.useState)("crown");
	const active = REGISTERS[open];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "my-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-surface p-2 shadow-paper",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-1",
				role: "tablist",
				"aria-label": "Lion registers",
				children: Object.keys(REGISTERS).map((id) => {
					const selected = id === open;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": selected,
						onClick: () => setOpen(id),
						className: cn("min-h-11 rounded-lg px-3 text-sm font-medium transition-[color,background-color,transform] duration-150 ease-out active:scale-[0.96]", selected ? "bg-primary text-primary-fg" : "text-muted hover:bg-wash hover:text-fg"),
						children: REGISTERS[id].label
					}, id);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "tabpanel",
				className: "mt-1 rounded-lg bg-wash px-4 py-5 sm:px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
					children: active.kicker
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 space-y-4",
					children: active.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-border pt-4 first:border-t-0 first:pt-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-medium text-fg",
							children: item.cite
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-muted sm:text-base",
							children: item.text
						})]
					}, item.cite))
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-3 text-sm text-muted",
			children: "Figure 3. One animal, two registers. The meaning follows the holder."
		})]
	});
}
function LionLexicon() {
	const [open, setOpen] = (0, import_react.useState)(LEXICON[0].id);
	const active = LEXICON.find((item) => item.id === open) ?? LEXICON[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "my-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
				children: LEXICON.map((item) => {
					const selected = item.id === open;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setOpen(item.id),
						className: cn("rounded-xl px-4 py-4 text-left shadow-paper transition-[background-color,transform] duration-150 ease-out active:scale-[0.96]", selected ? "bg-primary text-primary-fg" : "bg-surface text-fg hover:bg-wash"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								lang: "he",
								dir: "rtl",
								className: cn("hebrew text-xl leading-snug", selected ? "text-primary-fg" : "text-fg"),
								children: item.hebrew
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("mt-2 font-display text-kicker font-medium tracking-kicker uppercase", selected ? "text-primary-fg/80" : "text-primary"),
								children: item.latin
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("mt-2 text-sm leading-snug", selected ? "text-primary-fg/90" : "text-muted"),
								children: item.gloss
							})
						]
					}, item.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 rounded-xl bg-surface px-5 py-5 shadow-paper",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
						children: active.count
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hebrew, {
						size: "display",
						className: "mt-2",
						children: active.hebrew
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-fg sm:text-base",
						children: active.body
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "mt-3 text-sm text-muted",
				children: "Figure 2. Sanhedrin 95a’s six names, with gur as the blessing’s opening word."
			})
		]
	});
}
function Merkabah() {
	const [open, setOpen] = (0, import_react.useState)("lion");
	const active = MERKABAH_FACES.find((item) => item.id === open) ?? MERKABAH_FACES[1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "my-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-surface px-4 py-5 shadow-paper sm:px-6 sm:py-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
					children: "Ezekiel 1:10"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
					children: "Four faces on each living creature. The lion stands on the right. Tap a face."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-6 grid max-w-md grid-cols-3 grid-rows-3 gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaceButton, {
							id: "eagle",
							open,
							onOpen: setOpen
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaceButton, {
							id: "ox",
							open,
							onOpen: setOpen
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-center rounded-lg bg-wash px-2 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-kicker font-medium tracking-kicker text-subtle uppercase",
								children: "Merkavah"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaceButton, {
							id: "lion",
							open,
							onOpen: setOpen
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaceButton, {
							id: "human",
							open,
							onOpen: setOpen
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 rounded-lg bg-wash px-4 py-4 sm:px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-kicker font-medium tracking-kicker text-primary uppercase",
							children: active.place
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hebrew, {
								size: "display",
								children: active.hebrew
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg text-fg",
								children: active.label
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-fg sm:text-base",
							children: active.body
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-3 text-sm text-muted",
			children: "Figure 4. The four faces. Chagigah 13b: the lion is king of the beasts; the Holy One is above them all."
		})]
	});
}
function FaceButton({ id, open, onOpen }) {
	const face = MERKABAH_FACES.find((item) => item.id === id);
	if (!face) return null;
	const selected = id === open;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => onOpen(id),
		className: cn("flex min-h-20 flex-col items-center justify-center rounded-lg px-2 py-3 text-center transition-[background-color,transform,color] duration-150 ease-out active:scale-[0.96]", selected ? "bg-primary text-primary-fg" : "bg-wash text-fg hover:bg-border"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			lang: "he",
			dir: "rtl",
			className: cn("hebrew text-lg leading-none", selected ? "text-primary-fg" : "text-fg"),
			children: face.hebrew
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("mt-2 font-display text-kicker tracking-kicker uppercase", selected ? "text-primary-fg/80" : "text-muted"),
			children: face.label
		})]
	});
}
function LionNameTable() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "my-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto rounded-xl bg-surface px-4 py-2 shadow-paper sm:px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "article-table",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
						className: "sr-only",
						children: "Hebrew lion names still in use"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							scope: "col",
							children: "Name"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							scope: "col",
							children: "Hebrew"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							scope: "col",
							children: "Sense"
						})
					] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: PERSONAL_NAMES.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "font-display font-medium",
							children: row.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							lang: "he",
							dir: "rtl",
							className: "hebrew",
							children: row.hebrew
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "text-muted",
							children: row.sense
						})
					] }, row.name)) })
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-3 text-sm text-muted",
			children: "Figure 5. The blessing as a naming stock. Leib is Yiddish for lion; stacked with Aryeh it says the word twice."
		})]
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
		default: return null;
	}
}
function LionSectionBody({ section }) {
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
function LionTimeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "relative my-10 ml-2 border-l border-rule",
		children: LION_TIMELINE.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
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
		}, item.year))
	});
}
var jsonLd = {
	"@context": "https://schema.org",
	"@type": "ScholarlyArticle",
	headline: `${LION_META.title}: ${LION_META.subtitle}`,
	alternativeHeadline: LION_META.subtitle,
	description: LION_META.description,
	datePublished: "2026-09-09",
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
	url: `${SITE_URL}/lion`,
	creditText: LION_META.credit,
	keywords: [
		"Lion of Judah",
		"Gur Aryeh",
		"Genesis 49:9",
		"aryeh",
		"lavi",
		"kefir",
		"merkabah",
		"Ariel",
		"onomastics",
		"Hebrew"
	]
};
function LionPage() {
	const byId = (id) => LION_SECTIONS.find((section) => section.id === id);
	const { lang } = useLang();
	const chrome = CHROME[lang];
	const copy = chrome.lion;
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
				children: copy.skip
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-4 pt-10 pb-6 sm:px-6 sm:pt-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "stagger-in font-display text-kicker font-medium tracking-kicker text-subtle uppercase",
							children: [
								copy.kicker,
								" · ",
								LION_META.sourceCount,
								" ",
								copy.sources
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "stagger-in mt-4 max-w-4xl font-display text-display tracking-display text-fire sm:text-display-lg",
							children: LION_META.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "stagger-in mt-5 max-w-2xl font-serif text-xl font-normal leading-snug text-muted sm:text-2xl",
							children: LION_META.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "stagger-in mt-6 text-sm text-muted",
							children: [
								chrome.ui.by,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-fg",
									children: LION_META.credit
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
					className: "mx-auto grid max-w-6xl gap-3 px-4 pb-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4",
					children: LION_FINDINGS.map((finding) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
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
									children: copy.contents
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableOfContents, {
									items: LION_TOC,
									className: "mt-3 pb-2"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden lg:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableOfContents, { items: LION_TOC })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hidden min-h-11 items-center rounded-md bg-surface px-3.5 text-sm font-medium text-fg shadow-paper hover:bg-wash lg:inline-flex",
								children: copy.back
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						id: "article",
						className: "min-w-0 max-w-3xl",
						children: [
							byId("introduction") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LionSectionBody, { section: byId("introduction") }) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoFigure, {
								src: "/lion/crouching.jpg",
								alt: "An Asiatic lion crouching on a limestone ridge at dusk.",
								caption: "The crouch in Genesis 49:9: risen from prey, at rest, not to be roused."
							}),
							byId("verse") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-16 border-t border-border pt-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LionSectionBody, { section: byId("verse") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlessingReader, {})]
							}) : null,
							byId("names") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-16 border-t border-border pt-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LionSectionBody, { section: byId("names") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LionLexicon, {})]
							}) : null,
							byId("animal") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-16 border-t border-border pt-12",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LionSectionBody, { section: byId("animal") }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoFigure, {
										src: "/lion/cub.jpg",
										alt: "An Asiatic lion cub lying in dry grass at golden hour.",
										caption: "Gur: the whelp. Jacob starts here, not with the old male."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-4 mb-2 font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl",
										children: copy.chronology
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-2 text-article text-muted",
										children: copy.chronologyLead
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LionTimeline, {})
								]
							}) : null,
							byId("registers") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-16 border-t border-border pt-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LionSectionBody, { section: byId("registers") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DualRegister, {})]
							}) : null,
							byId("temple") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-16 border-t border-border pt-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LionSectionBody, { section: byId("temple") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Merkabah, {})]
							}) : null,
							byId("visual") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-16 border-t border-border pt-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LionSectionBody, { section: byId("visual") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoFigure, {
									src: "/lion/ark.jpg",
									alt: "Two carved limestone lions flanking a wooden Torah ark in an old synagogue.",
									caption: "The lasting visual type: a pair of lions guarding the ark. No letters on this one; the animal does the naming."
								})]
							}) : null,
							byId("later") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-16 border-t border-border pt-12",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LionSectionBody, { section: byId("later") })
							}) : null,
							byId("people") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-16 border-t border-border pt-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LionSectionBody, { section: byId("people") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LionNameTable, {})]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								id: "references",
								"aria-labelledby": "references",
								className: "mt-16 scroll-mt-24 border-t border-border pt-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl",
									children: copy.references
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-6 space-y-4",
									children: LION_REFERENCES.map((reference) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										id: `lion-ref-${reference.n}`,
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
										children: copy.cite
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: LION_CITATION
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 text-sm text-subtle",
										children: [
											copy.companion,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/",
												className: "text-primary underline underline-offset-4",
												children: copy.companionTitle
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
export { LionPage as component };
