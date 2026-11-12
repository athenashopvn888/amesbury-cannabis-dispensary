import stock from "../data/stock.json";

export type StockVariant = { label: string; count: number; price: number | null };
export type CatalogProduct = {
  sku: string;
  name: string;
  kind: "flower" | "item";
  category: string;
  type: string | null;
  thc: string | null;
  image: string | null;
  variants?: StockVariant[];
  unit?: string;
  price?: number | null;
  count?: number;
};

export const SNAPSHOT = stock as { capturedAt: string; publishedAt: string; products: CatalogProduct[] };
const CATEGORY_NAMES: Record<string, string> = {
  "": "Other",
  "ADD ONS": "Add Ons",
  "CIGARETTES": "Cigarettes",
  "CONCENTRATES": "Concentrates",
  "EDIBLES": "Edibles",
  "EXOTIC": "Exotic",
  "MAGIC & OTHERS": "Magic & Other",
  "PREMIUM": "Premium",
  "PREROLLS": "Pre-Rolls",
  "VAPE DISPOSABLE": "Disposable Vapes",
  "VAPE PENS": "Vape Pens"
};
const SIX_GRAM_TIERS = new Set(["Exotic", "Premium", "AAA+"]);

export function customerVariantLabel(category: string, label: string) {
  return SIX_GRAM_TIERS.has(category) && label === "5g" ? "6g" : label;
}

export const PRODUCTS = SNAPSHOT.products.map((product) => {
  const category = CATEGORY_NAMES[product.category] ?? product.category;
  return {
    ...product,
    category,
    variants: product.variants?.map((variant) => ({
      ...variant,
      label: customerVariantLabel(category, variant.label)
    }))
  };
});
export const FLOWERS = PRODUCTS.filter((product) => product.kind === "flower");
export const ITEMS = PRODUCTS.filter((product) => product.kind === "item");

export function slugify(value: string) {
  return value.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export const ITEM_CATEGORIES = [...new Set(ITEMS.map((product) => product.category))]
  .sort((a, b) => a.localeCompare(b));

export function tierSlug(category: string) {
  const value = category.toLowerCase().replace(/\s+/g, "");
  if (value.includes("exotic")) return "exotic-weed";
  if (value.includes("premium") || value.includes("craft")) return "premium-weed";
  if (value.includes("aaa+")) return "aaa-plus-weed";
  if (value === "aa") return "aa-weed";
  return "budget-weed";
}

export function money(value: number | null | undefined) {
  if (value == null) return null;
  return new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: value % 1 ? 2 : 0 }).format(value);
}

export function productPrice(product: CatalogProduct) {
  if (product.kind === "item") return money(product.price);
  const priced = (product.variants ?? []).filter((variant) => variant.price != null);
  if (!priced.length) return null;
  return `From ${money(Math.min(...priced.map((variant) => variant.price as number)))}`;
}

export function productBySku(sku: string) { return PRODUCTS.find((product) => product.sku === sku); }
