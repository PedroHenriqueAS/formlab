"use client";

import { useState } from "react";

import { catalogTopFilters, type CatalogTopFilter } from "./catalog-filters";
import { Dropdown } from "./dropdown";

interface FilterProps {
  ProductsCount: number;
  activeCategory: CatalogTopFilter;
  onCategoryChange: (category: CatalogTopFilter) => void;
}

export function Filter({ ProductsCount, activeCategory, onCategoryChange }: FilterProps) {
  const [sort, setSort] = useState("featured");

  return (
    <div className="flex min-w-0 flex-col gap-3 xl:flex-row xl:flex-wrap xl:items-center">
      <p role="status" aria-atomic="true" className="shrink-0 text-xs text-white/60">Products {ProductsCount}</p>
      <div aria-label="Product categories" className="flex min-w-0 max-w-full gap-1 overflow-x-auto py-1 md:flex-wrap md:overflow-visible xl:flex-1">
        {catalogTopFilters.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              aria-pressed={isActive}
              className={`
                min-h-11
                min-w-11
              shrink-0
              whitespace-nowrap
              rounded-full
              border
              px-3
              py-2
              text-xs
              font-medium
              transition-all
              duration-200
              focus-visible:outline-2
              focus-visible:-outline-offset-2
              focus-visible:outline-orange-500
              ${
                isActive
                  ? "border-orange-500 bg-orange-500/10 text-white"
                  : "border-white/10 bg-white/2 text-white/60 hover:border-white/20 hover:text-white"
              }
              `}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="flex min-w-0 items-center gap-2 text-sm xl:ml-auto">
        <span className="shrink-0">sort by:</span>
        <Dropdown
          label="Sort products"
          className="w-full md:w-48"
          value={sort}
          onChange={setSort}
          options={[
            { value: "featured", label: "Featured" },
            { value: "newest", label: "Newest" },
            { value: "price-asc", label: "Price: Low to High" },
            { value: "price-desc", label: "Price: High to Low" },
          ]}
        />
      </div>
    </div>
  );
}
