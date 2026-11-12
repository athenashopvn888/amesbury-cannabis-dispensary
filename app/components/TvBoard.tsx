"use client";

import { useEffect, useMemo, useState } from "react";
import type { CatalogProduct } from "../lib/catalog";
import { money } from "../lib/catalog";

export default function TvBoard({ products, mode }: { products: CatalogProduct[]; mode: "flower" | "items" }) {
  const pageSize = mode === "flower" ? 18 : 24;
  const pages = useMemo(() => Array.from({ length: Math.max(1, Math.ceil(products.length / pageSize)) }, (_, index) => products.slice(index * pageSize, (index + 1) * pageSize)), [pageSize, products]);
  const [page, setPage] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setPage((current) => (current + 1) % pages.length), 12000); return () => window.clearInterval(timer); }, [pages.length]);
  return <main className={`tvBoard ${mode}`}><header><div><b>AMESBURY</b><span>CANNABIS DISPENSARY</span></div><p>{mode === "flower" ? "FLOWER MENU" : "EDIBLES · VAPES · PRE-ROLLS · ACCESSORIES"}</p><small>Page {page + 1} of {pages.length}</small></header><section>{pages[page].map((product) => <article key={product.sku}><div><small>{product.category} · {product.sku}</small><h2>{product.name}</h2></div>{product.kind === "flower" ? <p>{product.variants?.map((variant) => <span key={variant.label}><b>{variant.label}</b>{variant.price != null ? money(variant.price) : "—"}</span>)}</p> : <p><span><b>{product.unit || "each"}</b>{product.price != null ? money(product.price) : "In store"}</span></p>}</article>)}</section><footer>Adults 19+ · Availability can change after the latest count · 1575 Lawrence Ave W</footer></main>;
}
