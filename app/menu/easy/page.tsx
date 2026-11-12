import type { Metadata } from "next";
import MenuBrowser from "../../components/MenuBrowser";
import SiteChrome from "../../components/SiteChrome";
import { PRODUCTS } from "../../lib/catalog";

export const metadata: Metadata = { title: "Easy Mobile Menu", description: "A fast mobile menu for Amesbury Cannabis Dispensary with product categories at the top." };
export default function EasyMenuPage() { return <SiteChrome><main><section className="easyHero"><p className="kicker">FAST MOBILE VIEW</p><h1>Easy menu</h1><p>Tap a category, search a name, and see available package sizes without extra steps.</p></section><MenuBrowser products={PRODUCTS} easy title="Easy mobile menu" /></main></SiteChrome>; }
