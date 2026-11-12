import Image from "next/image";
import JsonLd from "../components/JsonLd";
import SiteChrome from "../components/SiteChrome";
import { STORE } from "../lib/store";

export const metadata = { title: "Visit the Store", description: "Directions and verified address for Amesbury Cannabis Dispensary at 1575 Lawrence Ave W, North York." };
export default function VisitPage() {
  const schema = { "@context": "https://schema.org", "@type": "Store", name: STORE.name, url: `${STORE.origin}/visit`, hasMap: STORE.maps, address: { "@type": "PostalAddress", streetAddress: "1575 Lawrence Ave W", addressLocality: "North York", addressRegion: "ON", postalCode: STORE.postalCode, addressCountry: "CA" } };
  return <SiteChrome><main><section className="splitHero"><div><p className="kicker">VISIT AMESBURY</p><h1>Find the green-and-gold storefront.</h1><p>{STORE.address}</p><a className="primaryLink" href={STORE.maps}>Open turn-by-turn directions</a></div><Image src="/brand/storefront-reference.jpg" alt="Amesbury Cannabis Dispensary storefront with green and gold signage" width={1600} height={800} priority /></section><section className="visitGrid"><article><span>01</span><h2>Confirm your route</h2><p>Open the supplied Google Maps listing for current traffic and routing to 1575 Lawrence Avenue West.</p></article><article><span>02</span><h2>Check current hours</h2><p>Public hours are not yet verified for this website. Confirm them on the map listing before travelling.</p></article><article><span>03</span><h2>Bring photo ID</h2><p>Ontario cannabis retail is for adults 19+. Bring valid government-issued photo identification.</p></article></section><JsonLd data={schema} /></main></SiteChrome>;
}
