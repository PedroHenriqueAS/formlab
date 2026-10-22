"use client";

import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { ResponsiveSheet } from "@/components/ui/responsive-sheet";
import type { ProductColor, ProductSize } from "@/types/product";
import type { CatalogFilters, CatalogPriceRange } from "./catalog-filters";

const sizes: readonly ProductSize[] = ["S", "M", "L", "XL", "XXL"];

const colors: readonly { name: ProductColor; value: string }[] = [
  {
    name: "Black",
    value: "#171717",
  },
  {
    name: "White",
    value: "#F5F2EA",
  },
  {
    name: "Orange",
    value: "#F45D32",
  },
  {
    name: "Blue",
    value: "#263B70",
  },
  {
    name: "Green",
    value: "#53614A",
  },
];

const prices: readonly { label: string; value: CatalogPriceRange }[] = [
  {
    label: "Under $30",
    value: "under-30",
  },
  {
    label: "$30 - $40",
    value: "30-40",
  },
  {
    label: "$40+",
    value: "40-plus",
  },
];

type FilterSidebarProps = {
  filters: CatalogFilters;
  onToggleSize: (size: ProductSize) => void;
  onToggleColor: (color: ProductColor) => void;
  onPriceChange: (price: CatalogPriceRange | null) => void;
  onClearFilters: () => void;
};

export function FilterSidebar({
  filters,
  onToggleSize,
  onToggleColor,
  onPriceChange,
  onClearFilters,
}: FilterSidebarProps) {
  return (
    <ResponsiveSheet
      title="Filters"
      description="Choose sizes, colors, and a price range."
      trigger={<><SlidersHorizontal className="size-4" />Filters</>}
    >
      <aside
        aria-label="Catalog filters"
        className="
          w-full
          rounded-2xl
          border border-white/10
          bg-[#111212]
          p-4
        "
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="text-sm font-semibold text-white">
            Filter
          </h2>

          <button
            type="button"
            onClick={onClearFilters}
            className="
              min-h-11
              text-xs
              text-white/40
              transition-colors
              hover:text-white
            "
          >
            Clear all
          </button>
        </div>

        <details open className="group border-b border-white/10 py-5">
          <summary
            className="
              flex
              min-h-11
              cursor-pointer
              list-none
              items-center
              justify-between
              text-sm
              font-medium
              text-white
            "
          >
            Size

            <ChevronDown
              className="
                size-4
                text-white/50
                transition-transform
                group-open:rotate-180
              "
            />
          </summary>

          <div className="mt-4 flex flex-wrap gap-2">
            {sizes.map((size) => {
              const isActive = filters.sizes.includes(size);

              return (
                <button
                  key={size}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => onToggleSize(size)}
                  className={`
                    flex
                    min-h-11
                    min-w-11
                    items-center
                    justify-center
                    rounded-lg
                    border
                    px-3
                    text-xs
                    transition-all
                    ${
                      isActive
                        ? "border-orange-500 bg-orange-500/10 text-white"
                        : "border-white/10 text-white/50 hover:border-white/25 hover:text-white"
                    }
                  `}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </details>

        <details open className="group border-b border-white/10 py-5">
          <summary
            className="
              flex
              min-h-11
              cursor-pointer
              list-none
              items-center
              justify-between
              text-sm
              font-medium
              text-white
            "
          >
            Color

            <ChevronDown
              className="
                size-4
                text-white/50
                transition-transform
                group-open:rotate-180
              "
            />
          </summary>

          <div className="mt-4 flex flex-wrap gap-3">
            {colors.map((color) => {
              const isActive = filters.colors.includes(color.name);

              return (
                <button
                  key={color.name}
                  type="button"
                  title={color.name}
                  aria-label={`Filter by ${color.name}`}
                  aria-pressed={isActive}
                  onClick={() => onToggleColor(color.name)}
                  className={`
                    flex
                    size-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    transition-all
                    ${
                      isActive
                        ? "border-orange-500"
                        : "border-white/15 hover:border-white/40"
                    }
                  `}
                >
                  <span
                    className="size-5 rounded-full"
                    style={{
                      backgroundColor: color.value,
                    }}
                  />
                </button>
              );
            })}
          </div>
        </details>

        <details open className="group py-5">
          <summary
            className="
              flex
              min-h-11
              cursor-pointer
              list-none
              items-center
              justify-between
              text-sm
              font-medium
              text-white
            "
          >
            Price

            <ChevronDown
              className="
                size-4
                text-white/50
                transition-transform
                group-open:rotate-180
              "
            />
          </summary>

          <div className="mt-4 flex flex-col gap-2">
            {prices.map((price) => {
              const isActive = filters.price === price.value;

              return (
                <button
                  key={price.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => onPriceChange(isActive ? null : price.value)}
                  className={`
                    min-h-11
                    rounded-lg
                    border
                    px-3
                    py-2.5
                    text-left
                    text-xs
                    transition-all
                    ${
                      isActive
                        ? "border-orange-500 bg-orange-500/10 text-white"
                        : "border-white/10 text-white/50 hover:border-white/20 hover:text-white"
                    }
                  `}
                >
                  {price.label}
                </button>
              );
            })}
          </div>
        </details>
      </aside>
    </ResponsiveSheet>
  );
}
