import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/photo-figure-DU1ko3LL.js
var import_jsx_runtime = require_jsx_runtime();
function PhotoFigure({ src, alt, caption }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "my-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-xl bg-surface shadow-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt,
				className: "aspect-video w-full object-cover outline outline-1 -outline-offset-1 outline-black/10"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-3 text-sm text-muted",
			children: caption
		})]
	});
}
//#endregion
export { PhotoFigure as t };
