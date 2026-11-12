"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { CatalogProduct } from "../lib/catalog";
import { money, productPrice, slugify } from "../lib/catalog";

export default function MenuBrowser({ products, easy = false, title = "Amesbury menu" }: { products: CatalogProduct[]; easy?: boolean; title?: string }) {
  const categories = useMemo(() => ["All", ...new Set(products.map((product) => product.category))], [products]);
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const visible = useMemo(() => products.filter((product) => (category === "All" || product.category === category) && `${product.name} ${product.sku} ${product.category}`.toLowerCase().includes(query.trim().toLowerCase())), [category, products, query]);

  return <section className={easy ? "easyMenu" : "catalog"} aria-label={title}>
    <div className="menuTools">
      <div className="categoryChips" aria-label="Menu categories">{categories.map((item) => <button type="button" key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div>
      <label className="categorySelect"><span>Category</span><select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
      <label className="menuSearch"><span>Search the menu</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products or SKU" /></label>
    </div>
    <p className="resultCount">{visible.length} current product{visible.length === 1 ? "" : "s"}</p>
    <div className={easy ? "easyList" : "productGrid"}>{visible.map((product) => <article className="productCard" key={product.sku} id={slugify(`${product.sku}-${product.name}`)}>
      <div className="productMedia">{product.image ? <Image src={product.image} alt="" fill sizes={easy ? "104px" : "(max-width: 520px) 96px, (max-width: 1100px) 33vw, 25vw"} unoptimized /> : <div className="productPlaceholder" aria-hidden="true">ACD</div>}</div>
      <div className="productBody"><p className="productMeta">{product.category} · SKU {product.sku}</p><h2>{product.name}</h2>{product.thc && <p className="productDetail">THC {product.thc}</p>}
      {product.kind === "flower" ? <div className="variantRow">{product.variants?.map((variant) => <span key={variant.label}><b>{variant.label}</b>{variant.price != null && <small>{money(variant.price)}</small>}</span>)}</div> : <div className="itemPrice"><strong>{productPrice(product) ?? "Price in store"}</strong><small>{product.count} available</small></div>}
      <Link href={`/products/${product.sku}`}>View details</Link></div>
    </article>)}</div>
  </section>;
}
