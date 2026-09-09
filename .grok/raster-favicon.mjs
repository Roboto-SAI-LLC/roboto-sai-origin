import { chromium } from "playwright";
import { readFileSync } from "node:fs";

const svg = readFileSync("/workspace/public/favicon.svg", "utf8");
const html = `<!doctype html>
<meta charset="utf-8">
<style>
  html, body { margin: 0; background: #000; }
  svg { width: 256px; height: 256px; display: block; }
</style>
${svg}`;

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 256, height: 256 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: "load" });
await page.locator("svg").screenshot({ path: "/workspace/.grok/favicon-svg-256.png", omitBackground: false });
await browser.close();
console.log("wrote /workspace/.grok/favicon-svg-256.png");
