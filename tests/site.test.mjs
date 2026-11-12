import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
const read = (file) => readFileSync(new URL(file, root), "utf8");
function sourceFiles(dir) { return readdirSync(new URL(dir, root)).flatMap((name) => { const relative = `${dir}${name}`; return statSync(new URL(relative, root)).isDirectory() ? sourceFiles(`${relative}/`) : /\.(?:ts|tsx|md)$/.test(name) ? [relative] : []; }); }

test("exact supplied identity and canonical domain are centralized", () => {
  const store = read("app/lib/store.ts");
  assert.match(store, /Amesbury Cannabis Dispensary/);
  assert.match(store, /1575 Lawrence Ave W, North York, ON M6L 1C3, Canada/);
  assert.match(store, /amesburycannabisdispensary\.com/);
  assert.match(store, /FEURCckCdzMB8Hq26/);
});

test("all five fleet flower tiers have routes", () => {
  const store = read("app/lib/store.ts");
  for (const label of ["Exotic Weed", "Premium Weed", "AAA+ Weed", "AA Weed", "Budget Weed"]) assert.ok(store.includes(label));
  assert.match(read("app/menu/[tier]/page.tsx"), /generateStaticParams/);
});

test("unverified phone hours inventory and delivery claims fail closed", () => {
  const all = sourceFiles("app/").map(read).join("\n");
  assert.doesNotMatch(all, /416-\d{3}-\d{4}|437-\d{3}-\d{4}|647-\d{3}-\d{4}/);
  assert.doesNotMatch(all, /open daily|24\/7|same-day delivery|free delivery|in stock/i);
  assert.match(all, /Live store menu connection pending/);
  assert.match(all, /Delivery setup is not yet live/);
});

test("no After Dark identity or internal store code is exposed", () => {
  const all = sourceFiles("app/").map(read).join("\n");
  assert.doesNotMatch(all, /After Dark|MJ01|ACD01|Master Line/i);
});

test("required customer and SEO routes exist in sitemap", () => {
  const sitemap = read("app/sitemap.ts");
  for (const route of ["/menu", "/delivery", "/visit", "/cannabis-dispensary-amesbury", "/faq", "/policies"]) assert.ok(sitemap.includes(route));
});

test("brand artwork files are present and page slots are filled", () => {
  const publicBrand = fileURLToPath(new URL("public/brand/", root));
  for (const name of ["amesbury-mark.svg", "amesbury-wordmark.svg", "amesbury-hero.webp", "amesbury-botanical.webp", "storefront-reference.jpg", "amesbury-og.png"]) assert.ok(statSync(join(publicBrand, name)).isFile());
});
