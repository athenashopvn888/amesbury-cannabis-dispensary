/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../components/JsonLd";
import SiteChrome from "../../components/SiteChrome";
import { money, productBySku, PRODUCTS } from "../../lib/catalog";
import { STORE } from "../../lib/store";

export function generateStaticParams() { return PRODUCTS.map((product) => ({ sku: product.sku })); }
export async function generateMetadata({ params }: { params: Promise<{ sku: string }> }): Promise<Metadata> { const product = productBySku((await params).sku); return product ? { title: `${product.name} | Cannabis Menu`, description: `${product.name} is listed in the current Amesbury Cannabis Dispensary menu. See available packages and visit or order online.` } : {}; }

export default async function ProductPage({ params }: { params: Promise<{ sku: string }> }) {
  const product = productBySku((await params).sku); if (!product) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Product", name: product.name, sku: product.sku, category: product.category, image: product.image || undefined, offers: product.kind === "flower" ? product.variants?.filter((variant) => variant.price != null).map((variant) => ({ "@type": "Offer", priceCurrency: "CAD", price: variant.price, availability: "https://schema.org/InStock", url: `${STORE.origin}/products/${product.sku}`, name: variant.label })) : product.price != null ? { "@type": "Offer", priceCurrency: "CAD", price: product.price, availability: "https://schema.org/InStock", url: `${STORE.origin}/products/${product.sku}` } : undefined };
  return <SiteChrome><main><section className="productPage">{product.image ? <img src={product.image} alt="" /> : <div className="productPlaceholder">ACD</div>}<div><p className="kicker">{product.category} · SKU {product.sku}</p><h1>{product.name}</h1>{product.type && <p className="productLead">Type: {product.type}</p>}{product.thc && <p className="productLead">THC: {product.thc}</p>}{product.kind === "flower" ? <div className="priceTable">{product.variants?.map((variant) => <div key={variant.label}><b>{variant.label}</b><span>{variant.price != null ? money(variant.price) : "Ask in store"}</span><small>{variant.count} package{variant.count === 1 ? "" : "s"} counted</small></div>)}</div> : <div className="itemPrice large"><strong>{product.price != null ? money(product.price) : "Price in store"}</strong><small>{product.count} available at the latest count</small></div>}<p className="availabilityNote">Availability can change after the latest count. The store confirms the order before fulfilment.</p><div className="actions"><Link href="/delivery">Order for delivery</Link><Link className="outline dark" href="/menu">Back to menu</Link></div></div></section></main><JsonLd data={schema} /></SiteChrome>;
}
