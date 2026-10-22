"use client";

import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import { Dropdown } from "@/components/ui/dropdown";
import { SearchInput } from "@/components/ui/search-input";
import { products } from "@/data/products";

import type { HeaderDropdownProps } from "./header-dropdown-shared";

export function SearchDropdown({ open, onOpenChange }: HeaderDropdownProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const searchTerm = query.trim().toLowerCase();
  const matchingProducts = products.filter((product) =>
    [product.name, product.category, product.description, ...product.styles]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm),
  );
  const results = searchTerm ? matchingProducts : products.slice(0, 4);

  return (
    <Dropdown
      open={open}
      onOpenChange={onOpenChange}
      title="Search designs"
      align="end"
      width={400}
      initialFocus={inputRef}
      trigger={
        <button
          type="button"
          aria-label="Search products"
          className="flex h-11 w-full min-w-0 items-center gap-3 rounded-full border border-white/10 bg-white/2 px-4 text-left text-base text-white/35 transition-colors hover:border-white/20 hover:bg-white/[0.035] aria-expanded:border-[#ff6738]/60 focus-visible:outline-2 focus-visible:outline-orange-500 md:text-sm"
        >
          <Search className="size-4 shrink-0 text-white/60" aria-hidden="true" />
          <span className="truncate">Search designs, styles, or keywords...</span>
        </button>
      }
    >
      <SearchInput
        ref={inputRef}
        aria-label="Search catalog"
        placeholder="Try Fuji, street, or hoodie..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <p role="status" className="mb-2 mt-4 text-xs text-white/45">
        {searchTerm
          ? `${matchingProducts.length} ${matchingProducts.length === 1 ? "design" : "designs"} found`
          : "Explore designs"}
      </p>
      {results.length > 0 ? (
        <ul className="max-h-[min(20rem,45dvh)] space-y-1 overflow-y-auto overscroll-contain">
          {results.map((product) => (
            <li key={product.id}>
              <Link
                href={`/products/${product.slug}`}
                onClick={() => onOpenChange(false)}
                className="group flex min-w-0 items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-orange-500"
              >
                <Image
                  src={product.imageUrl}
                  alt=""
                  width={56}
                  height={56}
                  className="size-14 shrink-0 rounded-lg bg-white/5 object-cover"
                />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium text-white">
                    {product.name}
                  </span>
                  <span className="mt-1 block text-xs text-white/45">
                    {product.category} · {product.styles.join(", ")}
                  </span>
                </span>
                <ArrowRight className="size-4 shrink-0 text-white/30 transition-colors group-hover:text-[#ff6738]" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="rounded-xl border border-white/10 px-4 py-6 text-center">
          <Search className="mx-auto size-6 text-white/35" aria-hidden="true" />
          <p className="mt-3 text-sm font-medium text-white">No matching designs</p>
          <p className="mt-1 text-xs leading-relaxed text-white/50">
            Try a different name, style, or category.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="mt-3 min-h-11 rounded-lg px-3 text-sm text-[#ff6738] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-orange-500"
          >
            Clear search
          </button>
        </div>
      )}
    </Dropdown>
  );
}
