import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../components/JsonLd";
import SiteChrome from "../../components/SiteChrome";
import { STORE } from "../../lib/store";
import { getGuide, GUIDES } from "../guides";

export function generateStaticParams() { return GUIDES.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const guide = getGuide((await params).slug); return guide ? { title: guide.title, description: guide.description, alternates: { canonical: `/resources/${guide.slug}` } } : {}; }
export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) { const guide = getGuide((await params).slug); if (!guide) notFound(); const schema = { "@context": "https://schema.org", "@type": "Article", headline: guide.title, description: guide.description, author: { "@type": "Organization", name: STORE.name }, publisher: { "@type": "Organization", name: STORE.name }, mainEntityOfPage: `${STORE.origin}/resources/${guide.slug}` }; return <SiteChrome><main>
  <section className="pageHero small"><p className="kicker">AMESBURY SHOPPING GUIDE</p><h1>{guide.title}</h1><p>{guide.description}</p></section>
  <article className="plainContent prose guideArticle">{guide.sections.map(([title, copy]) => <section key={title}><h2>{title}</h2><p>{copy}</p></section>)}<div className="actions"><Link href="/menu">Browse the menu</Link><Link className="outline dark" href="/resources">All guides</Link></div></article><JsonLd data={schema} />
</main></SiteChrome>; }
