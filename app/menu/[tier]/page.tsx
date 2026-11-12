import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteChrome from "../../components/SiteChrome";
import { TIERS } from "../../lib/store";

export function generateStaticParams() { return TIERS.map(({ slug }) => ({ tier: slug })); }
export async function generateMetadata({ params }: { params: Promise<{ tier: string }> }): Promise<Metadata> { const { tier } = await params; const item = TIERS.find((x) => x.slug === tier); return item ? { title: item.name, description: `${item.name} collection at Amesbury Cannabis Dispensary. Live listings are pending the approved store feed.` } : {}; }

export default async function TierPage({ params }: { params: Promise<{ tier: string }> }) {
  const { tier } = await params; const item = TIERS.find((x) => x.slug === tier); if (!item) notFound();
  return <SiteChrome><main><section className="pageHero tierHero"><p className="kicker">AMESBURY FLOWER COLLECTION</p><h1>{item.name}</h1><p>{item.note}</p><div className="actions"><Link href="/menu">All collections</Link><Link className="outline" href="/visit">Visit the store</Link></div></section><section className="menuStatus"><div className="statusIcon">!</div><div><p className="kicker">CURRENT LISTINGS</p><h2>No verified products to publish yet</h2><p>Product names, weights, prices and availability will appear only from the approved Amesbury source. Nothing on this page represents current stock.</p></div></section></main></SiteChrome>;
}
