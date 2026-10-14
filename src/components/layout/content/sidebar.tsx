"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const sizes = ["S", "M", "L", "XL", "XXL"];

const colors = [
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

const prices = [
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

export function FilterSidebar() {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  function toggleSize(size: string) {
    setSelectedSizes((current) =>
      current.includes(size)
        ? current.filter((item) => item !== size)
        : [...current, size]
    );
  }

  function toggleColor(color: string) {
    setSelectedColors((current) =>
      current.includes(color)
        ? current.filter((item) => item !== color)
        : [...current, color]
    );
  }

  function clearFilters() {
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedPrice(null);
  }

  return (
    <aside
      className="
        w-full
        rounded-2xl
        border border-white/10
        bg-[#111212]
        p-5
      "
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h2 className="text-sm font-semibold text-white">
          Filter
        </h2>

        <button
          type="button"
          onClick={clearFilters}
          className="
            text-xs
            text-white/40
            transition-colors
            hover:text-white
          "
        >
          Clear all
        </button>
      </div>

      {/* SIZE */}
      <details open className="group border-b border-white/10 py-5">
        <summary
          className="
            flex
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
            const isActive = selectedSizes.includes(size);

            return (
              <button
                key={size}
                type="button"
                aria-pressed={isActive}
                onClick={() => toggleSize(size)}
                className={`
                  flex
                  h-9
                  min-w-9
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

      {/* COLOR */}
      <details open className="group border-b border-white/10 py-5">
        <summary
          className="
            flex
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
            const isActive = selectedColors.includes(color.name);

            return (
              <button
                key={color.name}
                type="button"
                title={color.name}
                aria-label={`Filter by ${color.name}`}
                aria-pressed={isActive}
                onClick={() => toggleColor(color.name)}
                className={`
                  flex
                  size-8
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

      {/* PRICE */}
      <details open className="group py-5">
        <summary
          className="
            flex
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
            const isActive = selectedPrice === price.value;

            return (
              <button
                key={price.value}
                type="button"
                onClick={() =>
                  setSelectedPrice(
                    isActive ? null : price.value
                  )
                }
                className={`
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
  );
}