#!/usr/bin/env node
// Post-build prerender: boot the built app in a headless browser against
// `vite preview`, snapshot fully-rendered HTML per route, and write it as
// dist/<route>/index.html so crawlers (including non-JS ones) see real
// content on a direct request. The SPA rewrite in vercel.json still
// serves index.html for anything not prerendered.

import { chromium } from "playwright";
import { preview } from "vite";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const ROUTES = [
  "/",
  "/about",
  "/case-studies",
  "/catalog",
  "/contact",
  "/corporate-gifts-singapore",
  "/customization",
  "/gift-kits",
];

const server = await preview({ preview: { port: 4173, strictPort: true } });
const base = "http://localhost:4173";
const browser = await chromium.launch();
const ctx = await browser.newContext();

try {
  for (const route of ROUTES) {
    const page = await ctx.newPage();
    await page.goto(base + route, { waitUntil: "networkidle" });
    // Give React a beat to flush title/meta hoisting.
    await page.waitForTimeout(200);
    const html = "<!doctype html>\n" + (await page.content());
    const outPath =
      route === "/"
        ? resolve("dist/index.html")
        : resolve("dist" + route + "/index.html");
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html, "utf8");
    console.log("prerendered", route, "→", outPath);
    await page.close();
  }
} finally {
  await browser.close();
  await new Promise((r) => server.httpServer.close(r));
}
