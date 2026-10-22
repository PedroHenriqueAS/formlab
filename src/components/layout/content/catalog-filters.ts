import type { IProduct, ProductColor, ProductSize } from "@/types/product";

export const catalogTopFilters = [
  "All",
  "T-Shirts",
  "Long Sleeve",
  "V-Neck",
  "Minimal",
  "Street",
  "New Drop",
] as const;

export type CatalogTopFilter = (typeof catalogTopFilters)[number];
export type CatalogPriceRange = "under-30" | "30-40" | "40-plus";

export type CatalogFilters = {
  top: CatalogTopFilter;
  sizes: readonly ProductSize[];
  colors: readonly ProductColor[];
  price: CatalogPriceRange | null;
};

export const initialCatalogFilters: CatalogFilters = {
  top: "All",
  sizes: [],
  colors: [],
  price: null,
};

function matchesTopFilter(product: IProduct, filter: CatalogTopFilter) {
  switch (filter) {
    case "All":
      return true;
    case "Minimal":
    case "Street":
      return product.styles.some((style) => style === filter);
    case "New Drop":
      return product.isNewDrop;
    default:
      return product.category === filter;
  }
}

function matchesPrice(price: number, range: CatalogPriceRange | null) {
  switch (range) {
    case "under-30":
      return price < 30;
    case "30-40":
      return price >= 30 && price < 40;
    case "40-plus":
      return price >= 40;
    case null:
      return true;
  }
}

export function filterCatalogProducts(
  products: readonly IProduct[],
  filters: CatalogFilters,
) {
  return products.filter(
    (product) =>
      matchesTopFilter(product, filters.top) &&
      (filters.sizes.length === 0 ||
        product.sizes.some((size) => filters.sizes.includes(size))) &&
      (filters.colors.length === 0 ||
        product.colors.some((color) => filters.colors.includes(color))) &&
      matchesPrice(product.price, filters.price),
  );
}
