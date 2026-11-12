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
  phone: "+1 (437) 292-0413",
  phoneTel: "+14372920413",
  hours: null,
  storeCode: null,
  menuStatus: "Current menu available online",
  hoursStatus: "Confirm on Google Maps before travelling"
} as const;

export const TIERS = [
  { slug: "exotic-weed", name: "Exotic Weed", note: "Browse the current Exotic flower selection and available package sizes." },
  { slug: "premium-weed", name: "Premium Weed", note: "Explore current premium flower with verified package availability." },
  { slug: "aaa-plus-weed", name: "AAA+ Weed", note: "Shop the current AAA+ flower selection." },
  { slug: "aa-weed", name: "AA Weed", note: "Browse value-focused AA flower currently listed for Amesbury." },
  { slug: "budget-weed", name: "Budget Weed", note: "See the current budget flower selection and package sizes." }
] as const;

export const NAV = [
  { href: "/menu", label: "Menu" },
  { href: "/menu/easy", label: "Easy View" },
  { href: "/delivery", label: "Delivery" },
  { href: "/visit", label: "Visit" },
  { href: "/resources", label: "Guides" },
  { href: "/faq", label: "FAQ" }
] as const;
