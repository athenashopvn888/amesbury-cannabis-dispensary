import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MenuBrowser from "../../components/MenuBrowser";
import SiteChrome from "../../components/SiteChrome";
import { FLOWERS, tierSlug } from "../../lib/catalog";
import { TIERS } from "../../lib/store";

export function generateStaticParams() { return TIERS.map((tier) => ({ tier: tier.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ tier: string }> }): Promise<Metadata> { const { tier } = await params; const match = TIERS.find((item) => item.slug === tier); return match ? { title: `${match.name} in North York`, description: `Browse currently listed ${match.name.toLowerCase()} at Amesbury Cannabis Dispensary, 1575 Lawrence Ave W.` } : {}; }

export default async function TierPage({ params }: { params: Promise<{ tier: string }> }) {
  const { tier } = await params; const config = TIERS.find((item) => item.slug === tier); if (!config) notFound();
  const products = FLOWERS.filter((product) => tierSlug(product.category) === tier);
  return <SiteChrome><main><section className="pageHero tierHero"><p className="kicker">AMESBURY FLOWER</p><h1>{config.name}</h1><p>{config.note} Availability changes as products sell.</p></section><MenuBrowser products={products} title={config.name} /></main></SiteChrome>;
}
