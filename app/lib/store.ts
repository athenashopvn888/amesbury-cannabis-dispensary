export const STORE = {
  name: "Amesbury Cannabis Dispensary",
  shortName: "Amesbury Cannabis",
  street: "1575 Lawrence Ave W",
  address: "1575 Lawrence Ave W, North York, ON M6L 1C3, Canada",
  locality: "North York, Ontario",
  postalCode: "M6L 1C3",
  country: "CA",
  origin: "https://amesburycannabisdispensary.com",
  maps: "https://maps.app.goo.gl/FEURCckCdzMB8Hq26",
  phone: null,
  hours: null,
  storeCode: null,
  menuStatus: "Live store menu connection pending",
  hoursStatus: "Confirm on Google Maps before travelling"
} as const;

export const TIERS = [
  { slug: "exotic-weed", name: "Exotic Weed", note: "Explore the highest flower tier once the live Amesbury menu is connected." },
  { slug: "premium-weed", name: "Premium Weed", note: "A dedicated premium flower collection with live listings still held." },
  { slug: "aaa-plus-weed", name: "AAA+ Weed", note: "A clear mid-to-upper tier page ready for governed menu data." },
  { slug: "aa-weed", name: "AA Weed", note: "A value-focused collection that will publish only current store items." },
  { slug: "budget-weed", name: "Budget Weed", note: "A budget collection with no sample stock or invented pricing." }
] as const;

export const NAV = [
  { href: "/menu", label: "Menu" },
  { href: "/delivery", label: "Delivery" },
  { href: "/visit", label: "Visit" },
  { href: "/cannabis-dispensary-amesbury", label: "Amesbury Guide" },
  { href: "/faq", label: "FAQ" }
] as const;
