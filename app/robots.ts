import type { MetadataRoute } from "next";
import { STORE } from "./lib/store";
export default function robots(): MetadataRoute.Robots { return { rules: [{ userAgent: "*", allow: "/", disallow: ["/tv", "/tv2"] }], sitemap: `${STORE.origin}/sitemap.xml`, host: STORE.origin }; }
