import assert from "node:assert/strict";
import { readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
const root = new URL("../", import.meta.url);
const read = (file) => readFileSync(new URL(file, root), "utf8");

test("exact supplied identity, GDC main phone and canonical domain are centralized", () => { const store = read("app/lib/store.ts"); assert.match(store, /Amesbury Cannabis Dispensary/); assert.match(store, /1575 Lawrence Ave W, North York, ON M6L 1C3, Canada/); assert.match(store, /amesburycannabisdispensary\.com/); assert.match(store, /\+1 \(437\) 292-0413/); assert.match(store, /FEURCckCdzMB8Hq26/); });

test("photographed stock totals reconcile", () => { const stock = JSON.parse(read("app/data/stock.json")); assert.equal(stock.products.length, 156); const flower = stock.products.filter((product) => product.kind === "flower"); const items = stock.products.filter((product) => product.kind === "item"); assert.equal(flower.length, 52); assert.equal(items.length, 104); for (const [label, expected] of Object.entries({ "3g": 38, "5g": 44, "14g": 11, "28g": 6 })) assert.equal(flower.filter((product) => product.variants.some((variant) => variant.label === label)).length, expected); assert.ok(stock.products.every((product) => product.name !== product.sku)); });

test("full, easy, delivery, TV and TV2 menus share one catalog", () => { for (const file of ["app/menu/page.tsx","app/menu/easy/page.tsx","app/delivery/page.tsx"]) assert.match(read(file), /PRODUCTS/); assert.match(read("app/tv/page.tsx"), /FLOWERS/); assert.match(read("app/tv2/page.tsx"), /ITEMS/); assert.match(read("app/components/MenuBrowser.tsx"), /categoryChips/); });

test("mobile menu calibration keeps controls and product artwork inside the phone viewport", () => { const browser = read("app/components/MenuBrowser.tsx"); const css = read("app/globals.css"); assert.match(browser, /categorySelect/); assert.match(browser, /className="productMedia"/); assert.match(css, /\.categoryChips\{display:none\}/); assert.match(css, /\.categorySelect\{display:grid/); assert.match(css, /\.productMedia>img,.easyList \.productMedia>img\{object-fit:contain/); assert.match(css, /grid-template-columns:104px minmax\(0,1fr\)/); });

test("delivery is wired for the fleet SOD chat and fails closed until its unique store ID is assigned", () => { const chat = read("app/delivery/AmesburyWebChat.tsx"); assert.match(chat, /NEXT_PUBLIC_SOD_STORE_ID/); assert.match(chat, /storeId: STORE_ID/); assert.match(chat, /workflowVersion: "READY_V1"/); assert.match(chat, /Online ordering is temporarily unavailable/); assert.doesNotMatch(chat, /ACD01/); const delivery = read("app/delivery/page.tsx"); assert.match(delivery, /secure order chat/i); assert.match(delivery, /does not publish a separate delivery phone number/i); });

test("customer-facing copy contains no internal launch wording", () => { const files = ["app/page.tsx","app/menu/page.tsx","app/delivery/page.tsx","app/faq/page.tsx","app/cannabis-dispensary-amesbury/page.tsx","app/policies/page.tsx"].map(read).join("\n"); assert.doesNotMatch(files, /master line|source held|connection pending|governed|sample products|copied inventory|approval pending|launch build/i); });

test("SEO sitemap includes category and product routes", () => { const sitemap = read("app/sitemap.ts"); for (const route of ["/menu", "/menu/easy", "/delivery", "/visit", "/hours", "/contact", "/about", "/products/", "/items/"]) assert.ok(sitemap.includes(route)); assert.match(read("app/products/[sku]/page.tsx"), /generateMetadata/); assert.match(read("app/products/[sku]/page.tsx"), /Product/); });

test("ACD banner set and brand artwork are present", () => { const home = read("app/page.tsx"); assert.equal((home.match(/eyebrow:/g) || []).length, 8); assert.match(home, /Swipe the cards/); const publicBrand = fileURLToPath(new URL("public/brand/", root)); for (const name of ["amesbury-mark.svg", "amesbury-wordmark.svg", "amesbury-hero.webp", "amesbury-botanical.webp", "storefront-reference.jpg", "amesbury-og.png"]) assert.ok(statSync(join(publicBrand, name)).isFile()); });

test("TV and TV2 are fixed-height image-led boards instead of scrolling card pages", () => { const board = read("app/components/TvBoard.tsx"); const css = read("app/globals.css"); for (const category of ["Exotic", "Premium", "AAA+", "AA", "Budget", "Flower", "Pre-Rolls", "Add Ons", "Vape Pens", "Disposable Vapes", "Edibles", "Concentrates", "Magic & Other", "Cigarettes"]) assert.ok(board.includes(`\"${category}\"`)); assert.match(board, /tvFeatureImage/); assert.match(board, /15000/); assert.match(board, /COMPLETE STORE MENU/); assert.match(css, /\.tvBoard\.tvBoardV2\{height:100vh;height:100dvh;min-height:0;overflow:hidden/); assert.match(css, /grid-template-columns:repeat\(3,minmax\(0,1fr\)\)/); assert.match(css, /\.tvFeatureImage img\{object-fit:contain\}/); });
