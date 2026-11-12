import Image from "next/image";
import Link from "next/link";
import JsonLd from "./components/JsonLd";
import SiteChrome from "./components/SiteChrome";
import { STORE, TIERS } from "./lib/store";

const faqs = [
  ["Where is Amesbury Cannabis Dispensary?", `The storefront is at ${STORE.address}.`],
  ["Is the live menu online?", "Not yet. This website does not publish sample products, copied inventory, or unverified prices while the Amesbury store feed is being connected."],
  ["What are the store hours?", "Current hours are not yet verified for website publication. Use the linked Google Maps listing to confirm before travelling."],
  ["What identification should I bring?", "Cannabis retail is for adults 19+. Bring valid government-issued photo identification."]
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": `${STORE.origin}/#website`, url: STORE.origin, name: STORE.name },
      { "@type": "Store", "@id": `${STORE.origin}/#store`, name: STORE.name, url: STORE.origin, image: `${STORE.origin}/brand/storefront-reference.jpg`, address: { "@type": "PostalAddress", streetAddress: "1575 Lawrence Ave W", addressLocality: "North York", addressRegion: "ON", postalCode: STORE.postalCode, addressCountry: STORE.country }, hasMap: STORE.maps },
      { "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }
    ]
  };
  return (
    <SiteChrome>
      <main>
        <section className="hero">
          <Image className="heroBg" src="/brand/amesbury-hero.webp" alt="Emerald and gold cannabis botanical illustration" fill priority sizes="100vw" />
          <div className="heroShade" />
          <div className="heroCopy"><p className="kicker">1575 LAWRENCE AVE W · NORTH YORK</p><h1>Amesbury<br /><span>Cannabis Dispensary</span></h1><p>A neighbourhood storefront on Lawrence Avenue West, presented with clear directions, honest availability states and an original emerald-and-gold identity.</p><div className="actions"><Link href="/menu">Explore menu</Link><a className="outline" href={STORE.maps}>Get directions</a></div><small>For adults 19+. Live menu, prices and hours are published only after verification.</small></div>
        </section>

        <section className="factRail"><div><span>ADDRESS</span><b>{STORE.street}</b><small>North York, ON {STORE.postalCode}</small></div><div><span>MENU</span><b>Connection pending</b><Link href="/menu">View current status</Link></div><div><span>HOURS</span><b>Verify before visiting</b><a href={STORE.maps}>Check Google Maps</a></div><div><span>AGE</span><b>Adults 19+</b><small>Government photo ID required</small></div></section>

        <section className="intro"><div><p className="kicker">AMESBURY, NORTH YORK</p><h2>A local store site with no borrowed claims.</h2></div><p>The Amesbury website follows the fleet’s proven route structure while keeping this location’s identity distinct. It does not reuse another store’s phone, hours, inventory, reviews, delivery promises or neighbourhood copy.</p></section>

        <section className="tierSection"><div className="sectionHead"><p className="kicker">FLOWER COLLECTIONS</p><h2>Five clear ways to browse</h2><p>These collection pages are ready for the governed Amesbury inventory feed. Until that source is connected, every tier fails closed instead of showing sample stock.</p></div><div className="tierGrid">{TIERS.map((tier, index) => <Link href={`/menu/${tier.slug}`} key={tier.slug}><span>0{index + 1}</span><h3>{tier.name}</h3><p>{tier.note}</p><b>Open collection →</b></Link>)}</div></section>

        <section className="storefront"><Image src="/brand/storefront-reference.jpg" alt="Amesbury Cannabis Dispensary storefront at 1575 Lawrence Avenue West" width={1600} height={800} sizes="(max-width: 900px) 100vw, 50vw" /><div><p className="kicker">THE ACTUAL STOREFRONT</p><h2>Look for 1575 on Lawrence Avenue West.</h2><p>The supplied storefront image shows the green-and-gold Amesbury signage and the entrance number. Use the map link for current routing and confirm public hours before leaving.</p><div className="actions"><Link href="/visit">Plan your visit</Link><a className="outline dark" href={STORE.maps}>Open map</a></div></div></section>

        <section className="banner"><Image src="/brand/amesbury-botanical.webp" alt="Emerald cannabis leaves with gold ribbons" fill sizes="100vw" /><div><p className="kicker">STORE MENU</p><h2>Truthful by design.</h2><p>No static products, copied prices or pretend stock. The menu remains clearly unavailable until its exact Amesbury source is approved and connected.</p><Link href="/menu">See menu status →</Link></div></section>

        <section className="faq"><p className="kicker">QUICK ANSWERS</p><h2>Before you visit</h2>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
      </main>
      <JsonLd data={schema} />
    </SiteChrome>
  );
}
