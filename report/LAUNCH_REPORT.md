# Amesbury Cannabis Dispensary launch report

Date: 2026-11-12 (Asia/Bangkok)  
State: `LIVE WITH SOD HOLD`

## DONE

- Created a distinct emerald/gold responsive website using ADC only as a route and behavior reference.
- Added home, full menu, category-first Easy View, delivery menu, five flower collections, 156 product pages, 9 item-category pages, visit, local guide, FAQ, policy, TV and TV2 surfaces.
- Added exact owner-supplied business name, address, domain and Google Maps link.
- Created original botanical campaign artwork, eight ACD-labelled promotional panels, a wordmark, monogram, Open Graph card and stored the supplied storefront image.
- Added age gate, keyboard/focus-friendly semantic navigation, reduced-motion handling and 390px responsive layouts.
- Added the GDC main line exactly as directed, with no separate delivery number.
- Loaded the owner-provided PNY central count into one shared catalogue: 156 products, including 52 flower SKUs and 104 non-flower items.
- Added centralized store data, route-specific metadata, Store/Product/FAQ schema, robots and a sitemap covering product and category routes.
- Prepared the fleet SOD chat integration behind a unique StoreCode setting; it fails closed until Amesbury receives a non-conflicting code.
- Contract tests prohibit copied ADC identity, invented hours, delivery promises and internal operational wording.

## BLOCKED

- StoreCode: missing owner-approved value. `ACD01` is already assigned elsewhere and was not reused.
- Public hours: GBP is not available yet, so no hours were invented.
- SOD/POD: the integration is ready, but Amesbury needs an owner-approved unique StoreCode; `ACD01` remains assigned to Agincourt and was not reused.
- Master Lines and Telnyx: no Amesbury routing assignment was supplied.

## Route matrix

| Capability | Route | State |
|---|---|---|
| Home/local identity | `/` | DONE |
| Full menu | `/menu` | DONE, 156 products |
| Mobile Easy View | `/menu/easy` | DONE, category-first |
| Five collection pages | `/menu/[tier]` | DONE |
| Delivery | `/delivery` | DONE, SOD activation held by StoreCode |
| Visit/directions | `/visit` | DONE |
| Local guide | `/cannabis-dispensary-amesbury` | DONE |
| FAQ/policies | `/faq`, `/policies` | DONE |
| TV boards | `/tv`, `/tv2` | DONE |
| Product detail/category pages | `/products/[sku]`, `/items/[category]` | DONE |
| Search Console | canonical URL-prefix property + `/sitemap.xml` | DONE, verified; 181 URLs discovered |

## Release evidence

- Repository: `https://github.com/athenashopvn888/amesbury-cannabis-dispensary`.
- Release branch: `codex/amesbury-full-launch-20261112`.
- Pull requests: `#2` full site release and `#3` Search Console verification.
- Vercel project: `trungndesign99s-projects/amesbury-cannabis-dispensary`.
- Final production deployment: `dpl_G9Ppwtg65Fzmwfbm83ipBfbgMey3` (`READY`).
- Canonical domain: `amesburycannabisdispensary.com` is attached to Vercel and the Namecheap apex/www records have been replaced with Vercel records.
- Canonical checks: apex, full menu, Easy View, delivery, TV, TV2, product detail, sitemap and verification file return HTTP 200; `www` returns HTTP 308 to the apex.
- Google Search Console: ownership verified using the live HTML file; `/sitemap.xml` submitted with `Success` and 181 discovered pages on 2026-11-12.
- QA: seven contract tests pass; lint passes; Next.js 16.4.6 production build generates 187 routes; production dependency audit reports zero vulnerabilities; browser checks cover home, Easy View, delivery and full-screen TV behavior.
- Remaining placeholders: none in declared visual slots. Operational surfaces use explicit unavailable states, not visual placeholders.

## Mobile calibration repair — 2026-11-12

- Replaced the clipped mobile category chip rail with one full-width category selector above search.
- Rebuilt menu cards around a fixed product-media frame using `object-fit: contain`; verified Lavender Kush and other portrait product artwork renders fully without cropping.
- Reduced the mobile hero from 760px to 590px and tightened its type, copy and actions.
- Reflowed the four store facts into a compact 2×2 mobile block.
- Kept all eight ACD campaign panels but moved them into one compact horizontal swipe rail instead of eight large stacked homepage sections.
- Removed the duplicate flower-tier block from the homepage; tier pages remain available from the menu and campaign links.
- Corrected the empty SKU 1010 customer label to `PLAYERFARE` from the owner-provided count sheet.
- Added a mobile regression test. At 390×844: no horizontal overflow, full product image containment, full-width category control and compact cards verified.

## TV board parity repair — 2026-11-12

- Rebuilt `/tv` from a scrolling web-card grid into a fixed 16:9 in-store flower board modeled on ADC's operating layout: branded header, tier ribbon, image-led tier panels, compact THC and price tables, address footer and all 52 flower SKUs visible on one screen.
- Rebuilt `/tv2` as an image-led three-panel board with every non-flower category represented. All 104 items rotate through four fixed-height pages every 15 seconds.
- Both boards use the shared published catalog, fit a 1280×720 viewport without horizontal or vertical overflow, and retain truthful staff-facing availability wording.
