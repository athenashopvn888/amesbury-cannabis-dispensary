# New store intake and acceptance contract

## Identity

- PROJECT_ID: `CONFIRMED` — Amesbury Cannabis Dispensary new-location website.
- StoreCode: `HELD` — no owner-approved code supplied; site and operational registries must not invent one.
- Legal/public business name: `CONFIRMED` — Amesbury Cannabis Dispensary.
- Exact address/unit/postal code: `CONFIRMED` — 1575 Lawrence Ave W, North York, ON M6L 1C3, Canada.
- Main phone and owner-named source: `CONFIRMED` — use GDC main line, +1 (437) 292-0413.
- Delivery phone and owner-named source: `CONFIRMED` — no separate delivery number is published.
- Approved public hours and source: `HELD` — dependent UI and opening-hours schema omitted.
- GBP listing/profile and current ownership state: `HELD` — supplied Google Maps share link only; no GBP mutation authorized.
- Coordinates/map URL source: `CONFIRMED` — owner-supplied Google Maps link; coordinates not independently published.
- Opening target/date restrictions: `HELD` — not supplied.

## Systems

- GitHub repository and remote default branch: `CONFIRMED` — `athenashopvn888/amesbury-cannabis-dispensary`, `main`.
- Vercel team/project: `CONFIRMED` — `trungndesign99s-projects/amesbury-cannabis-dispensary`.
- Canonical domain: `CONFIRMED` — amesburycannabisdispensary.com.
- Redirect domains: `HELD` — none supplied.
- DNS registrar/access state: `CONFIRMED` — Namecheap apex and www records point to Vercel.
- Menu source and exact store/feed code: `PARTIAL` — owner-provided PNY central count is published; a unique SOD StoreCode is still required.
- On-hand/availability authority: `CONFIRMED` — owner requested the photographed PNY central count be used for now.
- Approved SOD POD and delivery configuration source: `HELD` — no POD assignment inferred.
- Master Lines mapping: `HELD` — the main line is known, but no Amesbury routing assignment was supplied.
- Telnyx voice connection: `HELD` — no assignment supplied.
- Telnyx messaging profile: `HELD` — no assignment supplied.
- Analytics/GTM/GSC identifiers: `IN PROGRESS` — GSC domain registration and sitemap submission are part of this release.
- Command Center registry/profile/ledger targets: `HELD` — ledger entry is prepared in `report/LAUNCH_REPORT.md`; registry code is missing.

## Brand and content

- Supplied logos/storefront/interior/product assets: `CONFIRMED` — owner-supplied storefront collage; no separate logo file.
- Brand palette/type/design direction: `CONFIRMED` — emerald/gold from storefront, documented in `BRAND.md`.
- Operating reference site and which capabilities apply: `CONFIRMED` — After Dark/ADC is the route/system model, not the brand copy source.
- Confirmed service area/local facts: `CONFIRMED` — exact Amesbury/North York location only; no delivery area claimed.
- Approved offers/minimums/fees/timing claims: `HELD` — none supplied.
- Required page families: `CONFIRMED` — home, menu, collections, delivery status, visit, local guide, FAQ, policies, TV/TV2.
- Required TV/TV2 behavior: `CONFIRMED` — full-screen rotating flower and non-flower boards use the same published count.
- Prohibited/copied facts to test against: `CONFIRMED` — no ADC NAP, phone, hours, reviews, offers, inventory, delivery terms or internal wording.

## Frozen acceptance checklist

- [x] Exact confirmed NAP and canonical-domain contract tests pass.
- [x] Unique design and responsive/accessibility baseline implemented.
- [x] Applicable route/capability matrix recorded.
- [x] Full, Easy View, delivery, TV and TV2 surfaces share the same 156-product count.
- [ ] SOD delivery workflow held by missing code, POD and contact configuration.
- [ ] Master Lines and Telnyx held by missing approved routing assignments.
- [x] SEO metadata, schema, robots, sitemap and canonicals implemented without held facts.
- [x] Canonical domain DNS is connected to Vercel.
- [ ] Anonymous canonical-domain production read-back must be repeated after the final release.
- [ ] Command Center registry update held by missing owner-approved StoreCode.

## Placeholder manifest

| File | Page/slot | Dimensions | Alt text | Content brief | Status/source | Replacement owner |
|---|---|---:|---|---|---|---|
| `amesbury-hero.webp` | Home hero | 1792×896 | Emerald and gold cannabis botanical illustration | Original campaign art with copy-safe left side | DONE / generated 2026-11-12 | None |
| `amesbury-botanical.webp` | Home internal banner | 1792×720 | Emerald cannabis leaves with gold ribbons | Original botanical campaign art | DONE / generated 2026-11-12 | None |
| `storefront-reference.jpg` | Home/visit | 1600×800 | Amesbury Cannabis Dispensary storefront | Owner-supplied real storefront collage | DONE / owner | None |
| `amesbury-og.png` | Social preview | 1200×630 | Amesbury Cannabis Dispensary | Branded Open Graph card | DONE / derived from generated art | None |

## Final state

- State: `RELEASE CANDIDATE`
- Required holds: unique Amesbury StoreCode, public hours, SOD POD, and Master Lines/Telnyx assignments.
- Conditional holds: redirect domains.
- Owner next action: assign the unique Amesbury StoreCode so the prepared SOD chat can be activated without colliding with Agincourt.
