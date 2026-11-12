import Image from "next/image";
import Link from "next/link";
import JsonLd from "./components/JsonLd";
import SiteChrome from "./components/SiteChrome";
import { FLOWERS, ITEMS, ITEM_CATEGORIES, slugify } from "./lib/catalog";
import { STORE } from "./lib/store";

const faqs = [
  ["Where is Amesbury Cannabis Dispensary?", `The store is at ${STORE.address}, near the Lawrence Avenue West and Black Creek Drive area.`],
  ["Can I browse the menu online?", `Yes. The menu lists ${FLOWERS.length} flower products and ${ITEMS.length} other products from the latest count, with available package sizes.`],
  ["Can I place a delivery order online?", "Yes. Browse the delivery menu and use the secure order chat. A dispatcher confirms availability and delivery eligibility before fulfilment."],
  ["What identification should I bring?", "Cannabis retail is for adults 19+. Bring valid government-issued photo identification."],
  ["How do I confirm today's hours?", "Use the linked Google Maps listing for the most current public hours before travelling."]
];

const banners = [
  { href: "/menu/exotic-weed", eyebrow: "FLOWER", title: "Exotic", image: "/campaigns/acd-exotic-2026.png" },
  { href: "/menu/premium-weed", eyebrow: "FLOWER", title: "Premium", image: "/campaigns/acd-premium-2026.png" },
  { href: "/menu/aaa-plus-weed", eyebrow: "FLOWER", title: "AAA+", image: "/campaigns/acd-aaa-2026.png" },
  { href: "/menu/aa-weed", eyebrow: "FLOWER", title: "AA", image: "/campaigns/acd-aa-2026.png" },
  { href: "/menu/budget-weed", eyebrow: "FLOWER", title: "Budget", image: "/campaigns/acd-budget-2026.png" },
  { href: `/items/${slugify(ITEM_CATEGORIES.find((category) => category.toLowerCase().includes("edible")) || ITEM_CATEGORIES[0])}`, eyebrow: "MORE TO BROWSE", title: "Edibles", image: "/campaigns/acd-edibles-2026.png" },
  { href: "/delivery", eyebrow: "ORDER ONLINE", title: "Delivery", image: "/campaigns/acd-delivery-2026.png" },
  { href: "/menu/easy", eyebrow: "MOBILE", title: "Easy View", image: "/campaigns/acd-easy-view-2026.png" }
];

export default function Home() {
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "WebSite", "@id": `${STORE.origin}/#website`, url: STORE.origin, name: STORE.name },
    { "@type": "Store", "@id": `${STORE.origin}/#store`, name: STORE.name, url: STORE.origin, telephone: STORE.phoneTel, image: `${STORE.origin}/brand/storefront-reference.jpg`, address: { "@type": "PostalAddress", streetAddress: STORE.street, addressLocality: "North York", addressRegion: "ON", postalCode: STORE.postalCode, addressCountry: STORE.country }, hasMap: STORE.maps },
    { "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }
  ] };
  return <SiteChrome><main>
    <section className="hero"><Image className="heroBg" src="/brand/amesbury-hero.webp" alt="Emerald and gold cannabis botanical artwork" fill loading="eager" fetchPriority="high" sizes="100vw" /><div className="heroShade" /><div className="heroCopy"><p className="kicker">1575 LAWRENCE AVE W · NORTH YORK</p><h1>Amesbury<br /><span>Cannabis Dispensary</span></h1><p>Browse the current menu, find the storefront, or start a delivery order from one clear North York cannabis shop website.</p><div className="actions"><Link href="/menu">Shop the menu</Link><a className="outline" href={STORE.maps}>Get directions</a></div><small>For adults 19+. Valid government-issued photo ID required.</small></div></section>
    <section className="factRail"><div><span>ADDRESS</span><b>{STORE.street}</b><small>North York, ON {STORE.postalCode}</small></div><div><span>MENU</span><b>{FLOWERS.length + ITEMS.length} current products</b><Link href="/menu">Browse all categories</Link></div><div><span>PHONE</span><b>{STORE.phone}</b><a href={`tel:${STORE.phoneTel}`}>Call the store</a></div><div><span>DELIVERY</span><b>Order chat available</b><Link href="/delivery">Start an order</Link></div></section>
    <section className="homeMenuIntro"><div><p className="kicker">SHOP AMESBURY</p><h2>Choose a category.</h2></div><p>All menu views use the same product list. Swipe the cards or open Easy View for fast category-first shopping.</p></section>
    <section className="promoDeck" aria-label="Featured menu categories">{banners.map((banner, index) => <Link key={banner.title} href={banner.href} className={`promoCard promo${index + 1}`}><Image src={banner.image} alt="" fill sizes="(max-width: 800px) 78vw, 340px" /><span className="promoShade" /><div><small>{banner.eyebrow}</small><h2>{banner.title}</h2><b>Browse →</b></div></Link>)}</section>
    <section className="storefront"><Image src="/brand/storefront-reference.jpg" alt="Amesbury Cannabis Dispensary storefront at 1575 Lawrence Avenue West" width={1600} height={800} sizes="(max-width: 900px) 100vw, 50vw" /><div><p className="kicker">VISIT THE STOREFRONT</p><h2>Look for 1575 on Lawrence Avenue West.</h2><p>The entrance carries Amesbury’s green-and-gold signage. Use Google Maps for current routing and public hours before you leave.</p><div className="actions"><Link href="/visit">Plan your visit</Link><a className="outline dark" href={STORE.maps}>Open map</a></div></div></section>
    <section className="faq"><p className="kicker">QUICK ANSWERS</p><h2>Before you shop</h2>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
  </main><JsonLd data={schema} /></SiteChrome>;
}
