"use client";

import { useMemo, useState } from "react";

import { cards, type ProductColor, type ProductSize } from "@/utils/product";

import {
  filterCatalogProducts,
  initialCatalogFilters,
  type CatalogFilters,
} from "./catalog-filters";
import { Filter } from "./filter";
import { CardList } from "./card-list";
import { FilterSidebar } from "./sidebar";

export function CatalogSection() {
  const [filters, setFilters] = useState<CatalogFilters>(initialCatalogFilters);
  const filteredProducts = useMemo(
    () => filterCatalogProducts(cards, filters),
    [filters],
  );

  function toggleSize(size: ProductSize) {
    setFilters((current) => ({
      ...current,
      sizes: current.sizes.includes(size)
        ? current.sizes.filter((selected) => selected !== size)
        : [...current.sizes, size],
    }));
  }

  function toggleColor(color: ProductColor) {
    setFilters((current) => ({
      ...current,
      colors: current.colors.includes(color)
        ? current.colors.filter((selected) => selected !== color)
        : [...current.colors, color],
    }));
  }

  function clearFilters() {
    setFilters(initialCatalogFilters);
  }

  return (
    <section
      aria-label="Product catalog"
      className="
        mt-6
        grid
        min-w-0
        gap-4
        md:grid-cols-[11rem_minmax(0,1fr)]
        xl:grid-cols-[12rem_minmax(0,1fr)]
        xl:gap-6
      "
    >
      <FilterSidebar
        filters={filters}
        onToggleSize={toggleSize}
        onToggleColor={toggleColor}
        onPriceChange={(price) => setFilters((current) => ({ ...current, price }))}
        onClearFilters={clearFilters}
      />

      <div className="min-w-0">
        <Filter
          ProductsCount={filteredProducts.length}
          activeCategory={filters.top}
          onCategoryChange={(top) => setFilters((current) => ({ ...current, top }))}
        />
        <CardList products={filteredProducts} onClearFilters={clearFilters} />
      </div>
    </section>
  );
}
