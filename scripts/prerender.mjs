#!/usr/bin/env node
// Post-build prerender: statically inject each route's <head> (title, meta,
// canonical link, JSON-LD schema) into a per-route copy of dist/index.html
// so non-JS crawlers (search + AI bots) see correct SEO metadata without
// waiting for client-side hydration.
//
// This uses Vite's SSR module loader to evaluate each route's `head()`
// function directly in Node — no headless browser required. (Cloudflare's
// build sandbox has no root/apt access, so a full Chromium-based prerender
// via Playwright is not viable there — confirmed: `npx playwright install
// chromium` succeeds, but launching it fails with missing shared libraries
// that require `sudo apt-get install ...`, which the build sandbox does
// not permit.)
//
// Note: this prerenders <head> only, not the visible <body> content — full
// body SSR would require rendering route components inside a real Router
// context (Link/useNavigate/etc. depend on it), which is a larger change.
// Search engines that execute JS (Google, Bing) still see full content on
// hydration; this pass specifically fixes non-JS crawlers' visibility into
// title/canonical/structured data, which was previously invisible to them.

import { createServer } from "vite";
import { readFile, mkdir, writeFile, readdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const ROUTES = [
  { path: "/", file: "src/routes/index.tsx" },
  { path: "/about", file: "src/routes/about.tsx" },
  { path: "/case-studies", file: "src/routes/case-studies.tsx" },
  { path: "/catalog", file: "src/routes/catalog.tsx" },
  { path: "/contact", file: "src/routes/contact.tsx" },
  { path: "/corporate-gifts-singapore", file: "src/routes/corporate-gifts-singapore.tsx" },
  { path: "/corporate-gifts-malaysia", file: "src/routes/corporate-gifts-malaysia.tsx" },
  { path: "/corporate-gifts-thailand", file: "src/routes/corporate-gifts-thailand.tsx" },
  { path: "/corporate-gifts-australia", file: "src/routes/corporate-gifts-australia.tsx" },
  { path: "/customization", file: "src/routes/customization.tsx" },
  { path: "/gift-kits", file: "src/routes/gift-kits.tsx" },
  ];

const ROOT_FILE = "src/routes/__root.tsx";

function escapeAttr(v) {
    return String(v)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;");
}

function metaKey(m) {
    if (m.title !== undefined) return "title";
    if (m.charSet !== undefined) return "charset";
    if (m.name) return "name:" + m.name;
    if (m.property) return "property:" + m.property;
    return JSON.stringify(m);
}

function mergeMeta(rootMeta = [], routeMeta = []) {
    const map = new Map();
    for (const m of rootMeta) map.set(metaKey(m), m);
    for (const m of routeMeta) map.set(metaKey(m), m);
    return [...map.values()];
}

function metaToTag(m) {
    if (m.title !== undefined) return null; // handled separately as <title>
  if (m.charSet !== undefined) return `<meta charset="${escapeAttr(m.charSet)}">`;
    const attrs = Object.entries(m)
      .map(([k, v]) => `${k}="${escapeAttr(v)}"`)
      .join(" ");
    return `<meta ${attrs}>`;
}

let assetDirCache = null;
async function resolveAsset(distDir, srcPath) {
    // srcPath looks like "/src/assets/hero-gift-kit.jpg" when resolved via
  // ssrLoadModule (dev-mode, unhashed). Map it to the hashed filename Vite
  // actually emitted under dist/assets/ during the real build.
  const m = /\/src\/assets\/([^/]+)\.(\w+)$/.exec(srcPath);
    if (!m) return srcPath;
    const [, name, ext] = m;
    if (!assetDirCache) {
          assetDirCache = await readdir(resolve(distDir, "assets")).catch(() => []);
    }
    const hit = assetDirCache.find((f) => f.startsWith(`${name}-`) && f.endsWith(`.${ext}`));
    return hit ? `https://thegifting-lab.com/assets/${hit}` : srcPath;
}

async function resolveAssetsInMeta(distDir, meta) {
    for (const m of meta) {
          if (typeof m.content === "string" && m.content.startsWith("/src/assets/")) {
                  m.content = await resolveAsset(distDir, m.content);
          }
    }
}

async function main() {
    const distDir = resolve("dist");
    const baseHtml = await readFile(resolve(distDir, "index.html"), "utf8");
    const vite = await createServer({ server: { middlewareMode: true }, appType: "custom" });

  try {
        const rootMod = await vite.ssrLoadModule(resolve(ROOT_FILE));
        const rootHead = rootMod.Route.options.head ? rootMod.Route.options.head() : {};

      for (const route of ROUTES) {
              let routeHead = {};
              try {
                        const mod = await vite.ssrLoadModule(resolve(route.file));
                        routeHead = mod.Route.options.head ? mod.Route.options.head() : {};
              } catch (err) {
                        console.warn(`prerender: skipping ${route.path} (${route.file} not found or failed to load): ${err.message}`);
                        continue;
              }

          const mergedMeta = mergeMeta(rootHead.meta, routeHead.meta);
              await resolveAssetsInMeta(distDir, mergedMeta);

          const titleMeta = mergedMeta.find((m) => m.title !== undefined);
              const title = titleMeta ? titleMeta.title : null;

          const metaTags = mergedMeta.map(metaToTag).filter(Boolean).join("\n    ");

          const links = [...(rootHead.links || []), ...(routeHead.links || [])];
              const linkTags = links
                .map(
                            (l) =>
                                          `<link ${Object.entries(l)
                                                                 .map(([k, v]) => `${k}="${escapeAttr(v)}"`)
                                                                 .join(" ")}>`
                          )
                .join("\n    ");

          const scripts = [...(rootHead.scripts || []), ...(routeHead.scripts || [])];
              const scriptTags = scripts
                .map((s) => {
                            if (s.type === "application/ld+json") {
                                          return `<script type="application/ld+json">${s.children}</script>`;
                            }
                            const attrs = Object.entries(s)
                              .filter(([k]) => k !== "children")
                              .map(([k, v]) => `${k}="${escapeAttr(v)}"`)
                              .join(" ");
                            return `<script ${attrs}>${s.children || ""}</script>`;
                })
                .join("\n    ");

          let html = baseHtml;
              if (title) {
                        html = /<title>.*?<\/title>/s.test(html)
                          ? html.replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
                                    : html.replace("</head>", `<title>${title}</title>\n</head>`);
              }
              // Drop the static description meta baked into the template so it
          // doesn't duplicate the one we're injecting below.
          html = html.replace(/\s*<meta name="description"[^>]*>/, "");

          html = html.replace(
                    "</head>",
                    `    ${metaTags}\n    ${linkTags}\n    ${scriptTags}\n  </head>`
                  );

          const outPath =
                    route.path === "/"
                  ? resolve(distDir, "index.html")
                      : resolve(distDir + route.path, "index.html");
              await mkdir(dirname(outPath), { recursive: true });
              await writeFile(outPath, html, "utf8");
              console.log("prerendered head for", route.path, "→", outPath);
      }
  } finally {
        await vite.close();
  }
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
