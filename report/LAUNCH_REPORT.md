# Amesbury Cannabis Dispensary launch report

Date: 2026-11-12 (Asia/Bangkok)  
State: `PROPOSED`

## DONE

- Created a distinct emerald/gold responsive website using ADC only as a route and behavior reference.
- Added home, menu, five flower collection routes, delivery status, visit, Amesbury local guide, FAQ, policy, TV and TV2 surfaces.
- Added exact owner-supplied business name, address, domain and Google Maps link.
- Created two original botanical campaign banners, a wordmark, monogram, Open Graph card and stored the supplied storefront image.
- Added age gate, keyboard/focus-friendly semantic navigation, reduced-motion handling and 390px responsive layouts.
- Added centralized store data, metadata, LocalBusiness/Store and FAQ schema without phone/hours guesses, robots and sitemap.
- Menu, delivery, TV and collection pages fail closed until exact governed sources are approved.
- Contract tests prohibit copied ADC identity, invented phone, hours, delivery promises and inventory claims.

## BLOCKED

- StoreCode: missing owner-approved value. `ACD01` is already assigned elsewhere and was not reused.
- Menu/on-hand: exact Amesbury feed/store code and current inventory authority missing.
- Phone/hours: no owner-approved main phone, delivery phone or GBP-derived hours supplied.
- SOD/POD, Master Lines and Telnyx: dependent on the missing StoreCode and phone assignments.
- GitHub/Vercel/DNS: exact repository/project/team/access target not supplied or discovered in the named workspace.
- Production verification: cannot be marked deployed or live until the above hosting target is resolved.

## Route matrix

| Capability | Route | State |
|---|---|---|
| Home/local identity | `/` | DONE |
| Full menu shell | `/menu` | DONE, feed held |
| Five collection pages | `/menu/[tier]` | DONE, listings held |
| Delivery | `/delivery` | DONE, workflow held |
| Visit/directions | `/visit` | DONE |
| Local guide | `/cannabis-dispensary-amesbury` | DONE |
| FAQ/policies | `/faq`, `/policies` | DONE |
| TV boards | `/tv`, `/tv2` | DONE, feed held |
| Product detail/category live data | — | BLOCKED by feed |
| Analytics and Search Console | — | BLOCKED by IDs/access |

## Release evidence

- Repository: local project `Amesbury Cannabis Dispensary Website`; remote held.
- Branch/commit/PR: pending repository creation or target confirmation.
- Vercel project/deployment: held.
- Canonical domain: `amesburycannabisdispensary.com` (configured in code; not yet live-verified).
- Remaining placeholders: none in declared visual slots. Operational surfaces use explicit unavailable states, not visual placeholders.
