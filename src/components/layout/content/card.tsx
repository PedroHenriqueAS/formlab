"use client";

import { Check, Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { getProductDetails } from "@/data/product-details";
import { formatCurrency } from "@/lib/format-currency";
import { useCart } from "@/providers/cart-provider";
import type { IProduct } from "@/types/product";

export function Card(product: IProduct) {
  const { imageUrl, slug, name, description, price } = product;
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const details = getProductDetails(slug);
  const variant = details?.variants.find((item) => item.thumbnail === imageUrl)
    ?? details?.variants[0];
  const size = product.sizes[0];
  const canAdd = Boolean(details && variant && size);
  const addLabel = canAdd
    ? `Add ${name}, ${variant?.label}, size ${size} to cart`
    : `${name} is currently unavailable`;

  useEffect(() => {
    if (!isAdded) return;

    const timeout = window.setTimeout(() => setIsAdded(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [isAdded]);

  function handleAdd() {
    if (!details || !variant || !size) return;

    addToCart({
      ...details,
      variantId: variant.id,
      color: variant.label,
      size,
      imageUrl: variant.thumbnail,
    });
    setIsAdded(true);
  }

  return (
    <article
      className="group/card relative min-w-0 rounded-2xl border border-transparent bg-[#111212] transition-[scale,border-color,box-shadow] duration-1000 ease-in-out hover:z-10 hover:border-[#ff6738] hover:shadow-[0_8px_24px_rgba(255,103,56,0.18)] focus-within:z-10 focus-within:border-[#ff6738] motion-safe:hover:scale-105 motion-reduce:transition-none"
    >
      <Link
        href={`/products/${slug}`}
        aria-label={`View ${name}`}
        className="block rounded-t-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6738]"
      >
        <div
          role="img"
          aria-label={`${name} printed design`}
          className="relative aspect-[3/2] w-full overflow-hidden rounded-t-2xl bg-[#181818] bg-[length:100%_auto] bg-[position:center_15%] bg-no-repeat"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[length:200%_auto] bg-[position:center_58%] bg-no-repeat opacity-0 transition-opacity duration-1000 ease-in-out group-hover/card:opacity-100 group-focus-within/card:opacity-100 motion-reduce:transition-none"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </div>
        <div className="px-3 pt-3">
          <div className="flex flex-wrap justify-between gap-x-2 gap-y-1">
            <p className="text-xs font-bold">{name}</p>
            <span className="text-xs font-bold">{formatCurrency(price)}</span>
          </div>
          <p className="mt-1 text-xs text-gray-400">{description}</p>
        </div>
      </Link>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-1 px-3 pb-3">
        <div className="flex items-center gap-1">
          <div className="size-3 rounded-md bg-amber-200" />
          <div className="size-3 rounded-md bg-black" />
          <div className="size-3 rounded-md bg-gray-300" />
          <p className="text-[10px] font-bold">+3</p>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          disabled={!canAdd}
          aria-label={addLabel}
          title={addLabel}
          className="flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-gray-300 text-white transition-colors hover:border-[#ff6738] hover:bg-[#ff6738]/10 hover:text-[#ff6738] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6738] disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transition-none"
        >
          {isAdded ? <Check className="size-4 text-[#ff6738]" aria-hidden="true" /> : <Plus className="size-4" aria-hidden="true" />}
        </button>
      </div>
      <p role="status" className="sr-only">
        {isAdded ? `${name}, ${variant?.label}, size ${size} added to your cart.` : ""}
      </p>
    </article>
  );
}
