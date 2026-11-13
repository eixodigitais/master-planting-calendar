// Build step: prerender the React app into dist/index.html so the page paints
// before any JavaScript runs, inline the (small) CSS to remove the render-blocking
// stylesheet request, and preload the hero image and the critical fonts.
import { readFileSync, writeFileSync, readdirSync, rmSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");
const ssrDir = resolve(root, "dist-ssr");

const { render, IMAGES, HERO_SIZES } = await import(pathToFileURL(resolve(ssrDir, "entry-server.js")).href);
let html = readFileSync(resolve(dist, "index.html"), "utf8");

// 1. Prerendered markup
const appHtml = render();
if (!html.includes('<div id="root"></div>')) throw new Error("root div not found");
html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

// 2. Inline the stylesheet
const cssLink = html.match(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/);
if (cssLink) {
  const css = readFileSync(resolve(dist, cssLink[1].slice(1)), "utf8");
  html = html.replace(cssLink[0], `<style>${css}</style>`);
}

// 3. Preload the hero (LCP) image first, then the fonts used above the fold
const assets = readdirSync(resolve(dist, "assets"));
const fontFiles = [
  /^fraunces-latin-opsz-normal-.*\.woff2$/,
  /^nunito-sans-latin-400-normal-.*\.woff2$/,
  /^nunito-sans-latin-700-normal-.*\.woff2$/,
]
  .map((re) => assets.find((f) => re.test(f)))
  .filter(Boolean);
const hero = IMAGES?.["hero-mockup.webp"];
const preloads = [
  hero
    ? `<link rel="preload" as="image" href="${hero.src}" imagesrcset="${hero.srcSet}" imagesizes="${HERO_SIZES}" fetchpriority="high" />`
    : "",
  ...fontFiles.map((f) => `<link rel="preload" as="font" type="font/woff2" href="/assets/${f}" crossorigin />`),
].join("\n    ");
html = html.replace("<title>", `${preloads}\n    <title>`);

writeFileSync(resolve(dist, "index.html"), html);
rmSync(ssrDir, { recursive: true, force: true });
console.log(`prerendered: ${appHtml.length} chars of HTML, ${fontFiles.length} fonts preloaded, hero preload: ${!!hero}`);
