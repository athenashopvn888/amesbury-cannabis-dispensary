"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import type { CatalogProduct } from "../lib/catalog";
import { money } from "../lib/catalog";
import styles from "./TvBoard.module.css";

type BoardMode = "flower" | "items";
type AccentStyle = CSSProperties & { "--accent": string; "--accent-dark": string };

const FLOWER_TIERS = [
  { category: "Exotic", title: "EXOTIC", icon: "◆", accent: "#9f1239", dark: "#3f0719" },
  { category: "Premium", title: "PREMIUM", icon: "✦", accent: "#b77907", dark: "#4d2f02" },
  { category: "AAA+", title: "AAA+", icon: "★", accent: "#1d4ed8", dark: "#0b245f" },
  { category: "AA", title: "AA", icon: "●", accent: "#c2410c", dark: "#511706" },
  { category: "Budget", title: "BUDGET", icon: "$", accent: "#15803d", dark: "#07391d" }
];

const ITEM_GROUPS = [
  { title: "PRE-ROLLS & ADD ONS", categories: ["Pre-Rolls", "Add Ons"], accent: "#be123c", dark: "#4c071c" },
  { title: "VAPES", categories: ["Vape Pens", "Disposable Vapes"], accent: "#2563eb", dark: "#10285f" },
  { title: "EDIBLES", categories: ["Edibles"], accent: "#dc2626", dark: "#5b0b0b" },
  { title: "CONCENTRATES", categories: ["Concentrates"], accent: "#b45309", dark: "#4b2502" },
  { title: "MAGIC & OTHER", categories: ["Magic & Other", "Other"], accent: "#7c3aed", dark: "#32136a" },
  { title: "CIGARETTES & ACCESSORIES", categories: ["Cigarettes"], accent: "#047857", dark: "#033c2c" }
];

function priceText(product: CatalogProduct) {
  if (product.kind === "item") return product.price == null ? "ASK STAFF" : money(product.price);
  return (product.variants ?? []).map((variant) => `${variant.label} ${variant.price == null ? "—" : money(variant.price)}`).join(" · ");
}

function priceRange(products: CatalogProduct[]) {
  const prices = products.flatMap((product) => product.kind === "flower"
    ? (product.variants ?? []).flatMap((variant) => variant.price == null ? [] : [variant.price])
    : product.price == null ? [] : [product.price]);
  if (!prices.length) return "PRICES IN STORE";
  const low = Math.min(...prices), high = Math.max(...prices);
  return low === high ? `${money(low)}` : `${money(low)}–${money(high)}`;
}

function rotatingWindow<T>(items: T[], tick: number, size: number) {
  if (items.length <= size) return items;
  const start = (tick * size) % items.length;
  return Array.from({ length: size }, (_, index) => items[(start + index) % items.length]);
}

function FeaturedImage({ product }: { product?: CatalogProduct }) {
  return <div className={styles.mediaFrame}>
    {product?.image
      ? <Image src={product.image} alt={`${product.name} product`} fill sizes="360px" loading="eager" unoptimized />
      : <Image src="/brand/amesbury-mark.svg" alt="Amesbury Cannabis Dispensary" fill sizes="260px" loading="eager" />}
    {product?.thc && <span className={styles.thcBadge}>{product.thc}</span>}
    {product?.type?.toUpperCase().includes("SALE") && <span className={styles.saleBadge}>SALE</span>}
  </div>;
}

function FlowerCard({ title, icon, accent, dark, products, tick, className = "" }: { title: string; icon: string; accent: string; dark: string; products: CatalogProduct[]; tick: number; className?: string }) {
  const visible = rotatingWindow(products, tick, 10);
  const featured = visible[tick % Math.max(visible.length, 1)] ?? products[0];
  const style = { "--accent": accent, "--accent-dark": dark } as AccentStyle;
  return <article className={`${styles.menuCard} ${className}`} style={style}>
    <header className={styles.cardHeader}><span className={styles.cardIcon}>{icon}</span><b>{title}</b><span>{products.length} STRAINS · {priceRange(products)}</span></header>
    <div className={styles.cardBody}>
      <div className={styles.featureSide}>
        <FeaturedImage product={featured} />
        <div className={styles.featureDetails}><b>{featured?.name}</b><span>{featured?.thc ? `${featured.thc} THC · ` : ""}{priceText(featured)}</span>{featured?.type && <small>{featured.type.replace(/\s*SALE/i, "")}</small>}</div>
      </div>
      <div className={styles.listSide}>
        <div className={`${styles.row} ${styles.rowHead}`}><span>STRAIN</span><span>THC</span><span>PRICE</span></div>
        {visible.map((product) => <div className={`${styles.row} ${product.sku === featured?.sku ? styles.activeRow : ""}`} key={product.sku}>
          <span>{product.name}{product.type?.toUpperCase().includes("SALE") && <em>SALE</em>}</span><span>{product.thc ?? "—"}</span><span>{priceText(product)}</span>
        </div>)}
      </div>
    </div>
  </article>;
}

function AddOnsRail({ products, tick }: { products: CatalogProduct[]; tick: number }) {
  const visible = rotatingWindow(products, tick, 9);
  const featured = visible.find((product) => product.image) ?? visible[0];
  const style = { "--accent": "#0f766e", "--accent-dark": "#053d39" } as AccentStyle;
  return <aside className={styles.addOnsRail} style={style}>
    <header>ADD ONS</header>
    <FeaturedImage product={featured} />
    <div className={styles.railFeature}><b>{featured?.name}</b><span>{featured ? priceText(featured) : ""}</span></div>
    <div className={styles.railRows}>{visible.map((product) => <div key={product.sku}><span>{product.name}</span><b>{priceText(product)}</b></div>)}</div>
  </aside>;
}

function ItemCard({ title, accent, dark, products, tick }: { title: string; accent: string; dark: string; products: CatalogProduct[]; tick: number }) {
  const visible = rotatingWindow(products, tick, 9);
  const featured = visible.find((product, index) => product.image && index >= tick % Math.max(visible.length, 1)) ?? visible.find((product) => product.image) ?? visible[0];
  const style = { "--accent": accent, "--accent-dark": dark } as AccentStyle;
  return <article className={`${styles.menuCard} ${styles.itemCard}`} style={style}>
    <header className={styles.cardHeader}><b>{title}</b><span>{products.length} ITEMS</span></header>
    <div className={styles.cardBody}>
      <div className={styles.featureSide}>
        <FeaturedImage product={featured} />
        <div className={styles.featureDetails}><b>{featured?.name}</b><span>{featured ? priceText(featured) : ""}</span><small>SKU {featured?.sku}</small></div>
      </div>
      <div className={styles.listSide}>
        <div className={`${styles.row} ${styles.rowHead}`}><span>ITEM</span><span>SKU</span><span>PRICE</span></div>
        {visible.map((product) => <div className={`${styles.row} ${product.sku === featured?.sku ? styles.activeRow : ""}`} key={product.sku}><span>{product.name}</span><span>{product.sku}</span><span>{priceText(product)}</span></div>)}
      </div>
    </div>
  </article>;
}

export default function TvBoard({ products, mode }: { products: CatalogProduct[]; mode: BoardMode }) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const fit = () => {
      if (!canvasRef.current) return;
      const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
      const x = Math.round((window.innerWidth - 1920 * scale) / 2);
      const y = Math.round((window.innerHeight - 1080 * scale) / 2);
      canvasRef.current.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    };
    fit();
    window.addEventListener("resize", fit);
    const timer = window.setInterval(() => setTick((current) => current + 1), 5000);
    return () => { window.removeEventListener("resize", fit); window.clearInterval(timer); };
  }, []);

  const flowerGroups = useMemo(() => FLOWER_TIERS.map((tier) => ({ ...tier, products: products.filter((product) => product.category === tier.category) })), [products]);
  const ounces = useMemo(() => products.filter((product) => product.kind === "flower" && product.variants?.some((variant) => variant.label === "28g")), [products]);
  const addOns = useMemo(() => products.filter((product) => product.category === "Add Ons"), [products]);
  const itemGroups = useMemo(() => ITEM_GROUPS.map((group) => ({ ...group, products: products.filter((product) => group.categories.includes(product.category)) })), [products]);

  return <main className={styles.tvPage}>
    <div className={styles.canvas} ref={canvasRef}>
      <header className={styles.brandBar}>
        <div className={styles.brandLockup}><Image src="/brand/amesbury-mark.svg" alt="" width={70} height={70} /><div><small>{mode === "flower" ? "FLOWER MENU BOARD" : "ITEMS MENU BOARD"}</small><b>Amesbury Cannabis</b></div></div>
        <strong>AMESBURY</strong>
        <div className={styles.locationBlock}><span>LOCATION<b>1575 Lawrence Ave W</b></span><span>ADULTS ONLY<b>19+</b></span></div>
      </header>
      <nav className={styles.categoryRibbon}>{mode === "flower" ? "EXOTIC ✦ PREMIUM ✦ AAA+ ✦ AA ✦ BUDGET ✦ OUNCES" : "PRE-ROLLS ✦ EDIBLES ✦ CONCENTRATES ✦ VAPES ✦ MAGIC ✦ ACCESSORIES"}</nav>
      <div className={styles.messageRibbon}>{mode === "flower" ? "FLOWER TIERS · PRODUCT PHOTOS · THC · PRICES" : "PRE-ROLLS · VAPES · EDIBLES · CONCENTRATES · MAGIC · CIGARETTES"}</div>
      <section className={`${styles.stage} ${mode === "flower" ? styles.flowerStage : styles.itemStage}`}>
        {mode === "flower" ? <>
          {flowerGroups.map((group) => <FlowerCard key={group.title} {...group} tick={tick} />)}
          <FlowerCard title="OUNCES" icon="◉" accent="#be185d" dark="#500724" products={ounces} tick={tick} className={styles.ounceCard} />
          <AddOnsRail products={addOns} tick={tick} />
        </> : itemGroups.map((group) => <ItemCard key={group.title} {...group} tick={tick} />)}
      </section>
      <footer className={styles.ticker}><b>AMESBURY CANNABIS DISPENSARY</b><span>1575 LAWRENCE AVE W · NORTH YORK · ADULTS 19+</span><span>ASK STAFF FOR CURRENT AVAILABILITY</span></footer>
    </div>
  </main>;
}
