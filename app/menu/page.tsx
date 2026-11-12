import type { Metadata } from "next";
import Link from "next/link";
import MenuBrowser from "../components/MenuBrowser";
import SiteChrome from "../components/SiteChrome";
import { PRODUCTS, SNAPSHOT } from "../lib/catalog";

export const metadata: Metadata = { title: "Cannabis Menu in North York", description: "Browse the current Amesbury Cannabis Dispensary menu, including flower, pre-rolls, edibles, vapes and accessories at 1575 Lawrence Ave W." };

export default function MenuPage() {
  return <SiteChrome><main><section className="pageHero menuHero"><p className="kicker">CURRENT AMESBURY MENU</p><h1>Browse what is available.</h1><p>Package availability comes from the latest store count. Prices shown are from the shared inventory catalogue and may be confirmed with staff before purchase.</p><div className="actions"><Link href="/menu/easy">Open easy mobile view</Link><Link className="outline" href="/delivery">Order for delivery</Link></div><small>Count captured {new Date(SNAPSHOT.capturedAt).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}. Adults 19+.</small></section><MenuBrowser products={PRODUCTS} /></main></SiteChrome>;
}
