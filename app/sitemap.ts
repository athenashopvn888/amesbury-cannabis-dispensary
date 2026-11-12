import type { MetadataRoute } from "next";
import { STORE, TIERS } from "./lib/store";
export default function sitemap(): MetadataRoute.Sitemap { const routes = ["", "/menu", "/delivery", "/visit", "/cannabis-dispensary-amesbury", "/faq", "/policies", ...TIERS.map((tier) => `/menu/${tier.slug}`)]; return routes.map((route) => ({ url: `${STORE.origin}${route}`, lastModified: new Date("2026-11-12"), changeFrequency: route.startsWith("/menu") ? "daily" : "monthly", priority: route === "" ? 1 : .7 })); }
