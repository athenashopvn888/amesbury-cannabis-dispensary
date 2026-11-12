"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { CatalogProduct } from "../lib/catalog";
import { money } from "../lib/catalog";

type BoardMode = "flower" | "items";
type BoardPanel = { title: string; products: CatalogProduct[] };

const FLOWER_TIERS = ["Exotic", "Premium", "AAA+", "AA", "Budget", "Flower"];
const ITEM_GROUPS = [
  { title: "PRE-ROLLS & ADD ONS", categories: ["Pre-Rolls", "Add Ons"] },
  { title: "VAPES", categories: ["Vape Pens", "Disposable Vapes"] },
  { title: "EDIBLES", categories: ["Edibles"] },
  { title: "CONCENTRATES", categories: ["Concentrates"] },
  { title: "MAGIC & OTHER", categories: ["Magic & Other", "Other"] },
  { title: "CIGARETTES", categories: ["Cigarettes"] }
];

function chunks<T>(items: T[], size: number) {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, index) => items.slice(index * size, (index + 1) * size));
}

function flowerPanels(products: CatalogProduct[]): BoardPanel[] {
  return FLOWER_TIERS.map((title) => ({ title: title === "Flower" ? "MORE FLOWER" : title.toUpperCase(), products: products.filter((product) => product.category === title) }))
    .filter((panel) => panel.products.length);
}

function itemPanels(products: CatalogProduct[]): BoardPanel[] {
  return ITEM_GROUPS.flatMap((group) => {
    const matches = products.filter((product) => group.categories.includes(product.category));
    return chunks(matches, 12).map((items, index, pages) => ({
      title: pages.length > 1 ? `${group.title} ${index + 1}/${pages.length}` : group.title,
      products: items
    }));
  });
}

function flowerPrice(product: CatalogProduct) {
  return (product.variants ?? []).map((variant) => `${variant.label} ${variant.price == null ? "—" : money(variant.price)}`).join(" · ");
}

function itemPrice(product: CatalogProduct) {
  return product.price == null ? "Ask in store" : money(product.price);
}

function Panel({ panel, mode }: { panel: BoardPanel; mode: BoardMode }) {
  const featured = panel.products.find((product) => product.image) ?? panel.products[0];
  return <article className="tvPanel">
    <h2><span>{mode === "flower" ? "FLOWER TIER" : "ITEMS"}</span>{panel.title}</h2>
    <div className="tvPanelBody">
      <div className="tvFeature">
        <div className="tvFeatureImage">
          {featured?.image ? <Image src={featured.image} alt={`${featured.name} product`} fill sizes="180px" loading="eager" unoptimized /> : <Image src="/brand/amesbury-mark.svg" alt="Amesbury Cannabis Dispensary" fill sizes="180px" loading="eager" />}
        </div>
        {featured && <div><b>{featured.name}</b><small>{featured.thc ? `${featured.thc} THC · ` : ""}{mode === "flower" ? flowerPrice(featured) : itemPrice(featured)}</small></div>}
      </div>
      <div className="tvRows">
        <div className="tvRow tvRowHead"><span>ITEM</span><span>{mode === "flower" ? "THC" : "SKU"}</span><span>PRICE</span></div>
        {panel.products.map((product) => <div className="tvRow" key={product.sku}>
          <span title={product.name}>{product.name}</span>
          <span>{mode === "flower" ? (product.thc ?? "—") : product.sku}</span>
          <span>{mode === "flower" ? flowerPrice(product) : itemPrice(product)}</span>
        </div>)}
      </div>
    </div>
  </article>;
}

export default function TvBoard({ products, mode }: { products: CatalogProduct[]; mode: BoardMode }) {
  const pages = useMemo(() => {
    const panels = mode === "flower" ? flowerPanels(products) : itemPanels(products);
    return mode === "flower" ? [panels] : chunks(panels, 3);
  }, [mode, products]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (pages.length < 2) return;
    const timer = window.setInterval(() => setPage((current) => (current + 1) % pages.length), 15000);
    return () => window.clearInterval(timer);
  }, [pages.length]);

  const current = pages[page] ?? [];
  return <main className={`tvBoard tvBoardV2 ${mode}`}>
    <header className="tvTopbar">
      <div className="tvIdentity"><Image src="/brand/amesbury-mark.svg" alt="" width={42} height={42} /><div><small>{mode === "flower" ? "FLOWER MENU BOARD" : "ITEMS MENU BOARD"}</small><b>Amesbury Cannabis</b></div></div>
      <strong>AMESBURY</strong>
      <div className="tvLocation"><span>LOCATION<b>1575 Lawrence Ave W</b></span><span>FOR ADULTS<b>19+</b></span></div>
    </header>
    <nav className="tvRibbon" aria-label="Menu sections">{mode === "flower" ? "EXOTIC · PREMIUM · AAA+ · AA · BUDGET" : "PRE-ROLLS · EDIBLES · CONCENTRATES · VAPES · ACCESSORIES"}</nav>
    <div className="tvNotice">COMPLETE STORE MENU · ASK STAFF FOR CURRENT AVAILABILITY</div>
    <section className="tvPanelGrid">{current.map((panel) => <Panel key={panel.title} panel={panel} mode={mode} />)}</section>
    <footer className="tvFooter"><b>AMESBURY CANNABIS DISPENSARY</b><span>1575 Lawrence Ave W, North York</span>{pages.length > 1 && <span>Page {page + 1} of {pages.length}</span>}</footer>
    {pages.length > 1 && <div className="tvProgress" key={page} />}
  </main>;
}
