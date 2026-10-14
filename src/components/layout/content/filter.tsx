"use client";

import { useState } from "react";
import { Dropdown } from "./dropdown";

const categories = [
  "All",
  "T-Shirts",
  "Long Sleeve",
  "V-Neck",
  "Minimal",
  "Street",
  "New Drop",
];

export function Filter() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  return (
    <div className="flex items-center">
      <p className="text-xs text-white/60 ml-3 mr-[15%]">Products 6</p>
      <div className="flex flex-column gap-7">
        <div className="flex items-center gap-1">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`
                rounded-full
                border
                px-4
                py-2
                text-xs
                font-medium
                transition-all
                duration-200
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
        <div className="flex items-center align-column">
          sort by: 
          <Dropdown
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
    </div>
  );
}
