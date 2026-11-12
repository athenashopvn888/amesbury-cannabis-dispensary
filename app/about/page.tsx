import Image from "next/image";
import Link from "next/link";
import SiteChrome from "../components/SiteChrome";
import { STORE } from "../lib/store";
export const metadata = { title: "About the Amesbury Store", description: "Learn how to shop Amesbury Cannabis Dispensary at 1575 Lawrence Ave W in North York." };
export default function AboutPage() { return <SiteChrome><main><section className="splitHero"><div><p className="kicker">ABOUT AMESBURY</p><h1>A neighbourhood storefront on Lawrence Avenue West.</h1><p>Amesbury Cannabis Dispensary gives adults 19+ clear ways to browse the latest counted menu, visit the store or begin a delivery order online.</p><div className="actions"><Link href="/menu">Browse the menu</Link><a className="outline dark" href={STORE.maps}>Find the store</a></div></div><Image src="/brand/storefront-reference.jpg" alt="Amesbury Cannabis Dispensary storefront" width={1600} height={800} /></section></main></SiteChrome>; }
