# Amesbury Cannabis Dispensary launch report

Date: 2026-11-12 (Asia/Bangkok)  
State: `DEPLOYED`

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
- Canonical DNS/TLS: Vercel owns and verified the domain assignment, but Namecheap still serves parked records. Required registrar changes: replace apex parking with Vercel `A @ 216.198.79.1` and `A @ 64.29.17.1`; replace the `www` parking CNAME with `CNAME www 7f83bdeb5667a557.vercel-dns-017.com`.
- Canonical-domain production verification: blocked until those DNS records propagate.

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

- Repository: `https://github.com/athenashopvn888/amesbury-cannabis-dispensary`.
- Branch: `codex/amesbury-new-location-20261112`; implementation commit `2a186b1`; PR `#1`.
- Vercel project: `trungndesign99s-projects/amesbury-cannabis-dispensary`.
- Production deployment: `dpl_HLs496D8Xq4CKEHDms3NV6GpmeoU`; READY at `https://amesbury-cannabis-dispensary.vercel.app`.
- Canonical domain: `amesburycannabisdispensary.com` is attached and ownership-verified in Vercel, but DNS still points to Namecheap parking and is not live.
- QA: six contract tests pass; lint passes; Next.js 16.4.6 production build passes; production dependency audit reports zero vulnerabilities; 1440×900 and 390×844 browser checks show no horizontal overflow or console errors.
- Remaining placeholders: none in declared visual slots. Operational surfaces use explicit unavailable states, not visual placeholders.
