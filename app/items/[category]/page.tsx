import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MenuBrowser from "../../components/MenuBrowser";
import SiteChrome from "../../components/SiteChrome";
import { ITEMS, ITEM_CATEGORIES, slugify } from "../../lib/catalog";

export function generateStaticParams() { return ITEM_CATEGORIES.map((category) => ({ category: slugify(category) })); }
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> { const slug = (await params).category; const category = ITEM_CATEGORIES.find((item) => slugify(item) === slug); return category ? { title: `${category} in North York`, description: `Browse currently listed ${category.toLowerCase()} at Amesbury Cannabis Dispensary on Lawrence Avenue West.` } : {}; }
export default async function ItemCategoryPage({ params }: { params: Promise<{ category: string }> }) { const slug = (await params).category; const category = ITEM_CATEGORIES.find((item) => slugify(item) === slug); if (!category) notFound(); return <SiteChrome><main><section className="pageHero tierHero"><p className="kicker">AMESBURY MENU</p><h1>{category}</h1><p>Browse the current selection from the latest store count.</p></section><MenuBrowser products={ITEMS.filter((product) => product.category === category)} title={category} /></main></SiteChrome>; }
