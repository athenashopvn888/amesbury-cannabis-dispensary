import Link from "next/link";
import SiteChrome from "../components/SiteChrome";
import { GUIDES } from "./guides";

export const metadata = { title: "Cannabis Shopping Guides", description: "Practical cannabis menu, Ontario shopping, store visit and storage guides from Amesbury Cannabis Dispensary in North York." };

export default function ResourcesPage() { return <SiteChrome><main>
  <section className="pageHero local"><p className="kicker">AMESBURY GUIDES</p><h1>Useful answers, clearly written.</h1><p>Plan a visit, understand the menu and review responsible storage basics without sales hype or medical claims.</p></section>
  <section className="guideGrid">{GUIDES.map((guide, index) => <Link href={`/resources/${guide.slug}`} key={guide.slug}><span>0{index + 1}</span><h2>{guide.title}</h2><p>{guide.description}</p><b>Read guide →</b></Link>)}</section>
</main></SiteChrome>; }
