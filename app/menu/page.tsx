import Link from "next/link";
import SiteChrome from "../components/SiteChrome";
import { TIERS } from "../lib/store";

export const metadata = { title: "Cannabis Menu", description: "Current Amesbury Cannabis Dispensary menu connection status and flower collection routes." };

export default function MenuPage() {
  return <SiteChrome><main><section className="pageHero"><p className="kicker">AMESBURY MENU</p><h1>Current menu</h1><p>The exact Amesbury inventory source has not been connected. This page fails closed: no sample products, copied prices or unverified availability.</p></section><section className="menuStatus"><div className="statusIcon">!</div><div><p className="kicker">LIVE SOURCE HELD</p><h2>Menu connection pending</h2><p>Once the approved store feed is available, products, pricing, freshness and availability will use the same source across the menu, collections, TV boards and structured data.</p></div></section><section className="tierSection compact"><div className="sectionHead"><p className="kicker">COLLECTION ROUTES</p><h2>Browse the future menu structure</h2></div><div className="tierGrid">{TIERS.map((tier, i) => <Link href={`/menu/${tier.slug}`} key={tier.slug}><span>0{i + 1}</span><h3>{tier.name}</h3><p>{tier.note}</p><b>Open collection →</b></Link>)}</div></section></main></SiteChrome>;
}
