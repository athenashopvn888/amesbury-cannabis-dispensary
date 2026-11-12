# Amesbury Cannabis Dispensary launch report

Date: 2026-11-12 (Asia/Bangkok)  
State: `RELEASE CANDIDATE`

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
| Search Console | domain property + `/sitemap.xml` | IN PROGRESS |

## Release evidence

- Repository: `https://github.com/athenashopvn888/amesbury-cannabis-dispensary`.
- Release branch: `codex/amesbury-full-launch-20261112`.
- Vercel project: `trungndesign99s-projects/amesbury-cannabis-dispensary`.
- Canonical domain: `amesburycannabisdispensary.com` is attached to Vercel and the Namecheap apex/www records have been replaced with Vercel records.
- QA: seven contract tests pass; lint passes; Next.js 16.4.6 production build generates 187 routes; production dependency audit reports zero vulnerabilities; browser checks cover home, Easy View, delivery and full-screen TV behavior.
- Remaining placeholders: none in declared visual slots. Operational surfaces use explicit unavailable states, not visual placeholders.
