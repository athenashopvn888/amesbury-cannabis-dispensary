import type { MetadataRoute } from "next";
import { ITEM_CATEGORIES, PRODUCTS, slugify } from "./lib/catalog";
import { STORE, TIERS } from "./lib/store";
const changed = new Date("2026-11-12T00:00:00-05:00");
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/menu", "/menu/easy", "/delivery", "/visit", "/hours", "/contact", "/about", "/cannabis-dispensary-amesbury", "/faq", "/policies", ...TIERS.map((tier) => `/menu/${tier.slug}`), ...ITEM_CATEGORIES.map((category) => `/items/${slugify(category)}`), ...PRODUCTS.map((product) => `/products/${product.sku}`)];
  return routes.map((route) => ({ url: `${STORE.origin}${route}`, lastModified: changed, changeFrequency: route.startsWith("/menu") || route.startsWith("/products") || route.startsWith("/items") ? "daily" : "monthly", priority: route === "" ? 1 : route === "/menu" || route === "/delivery" ? .9 : route.startsWith("/products") ? .6 : .7 }));
}
