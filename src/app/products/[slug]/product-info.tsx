"use client";

import Image from "next/image";
import { useState } from "react";
import { Check, Heart, ShieldCheck, Shirt, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { IProduct, ProductDetails, ProductSize, ProductVariant } from "@/types/product";
import { ProductSizeGuide } from "./product-size-guide";
import { useCart } from "@/providers/cart-provider";

type ProductInfoProps = {
  product: ProductDetails;
  selectedVariant: ProductVariant;
  onVariantChange: (id: string) => void;
};

const benefits = [
  { icon: Shirt, firstLine: "Premium", secondLine: "Materials" },
  { icon: Truck, firstLine: "Fast", secondLine: "Shipping" },
  { icon: ShieldCheck, firstLine: "Secure", secondLine: "Payment" },
];

export default function ProductInfo({
  product,
  selectedVariant,
  onVariantChange,
}: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState<ProductSize>(product.sizes[0]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();
  const price = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);

  function handleAdd(item: IProduct ) {
    addToCart(item)
    setIsAdded(true)
  }

  return (
    <section aria-labelledby="product-title" className="flex min-w-0 flex-col text-white lg:py-6">
      <div className="flex items-center gap-5">
        <span className="text-[11px] font-semibold tracking-[0.2em] text-white/45 uppercase">
          {product.category === "T-Shirts" ? "T-Shirt" : product.category}
        </span>
        <span aria-hidden="true" className="h-0.5 w-14 bg-[#ff552c]" />
      </div>

      <h1 id="product-title" className="mt-3 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl xl:text-[38px]">
        {product.name}
      </h1>
      <p className="mt-2 text-xl font-semibold xl:text-[22px]">{price}</p>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/65 xl:text-[15px]">
        {product.description}
      </p>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium">
          Color: <span className="ml-2 font-normal text-white/55">{selectedVariant.label}</span>
        </legend>
        <div className="mt-3 flex flex-wrap gap-3">
          {product.variants.map((variant) => (
            <button
              key={variant.id}
              type="button"
              aria-label={variant.label}
              aria-pressed={selectedVariant.id === variant.id}
              onClick={() => {
                onVariantChange(variant.id);
                setIsAdded(false);
              }}
              className={cn(
                "relative size-16 overflow-hidden rounded-lg border-2 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#0c0d0d] xl:size-17",
                selectedVariant.id === variant.id
                  ? "border-[#ff552c]"
                  : "border-white/10 hover:border-white/40",
              )}
            >
              <Image src={variant.thumbnail} alt="" fill sizes="68px" className="object-cover" />
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-5">
        <legend className="sr-only">Size</legend>
        <div className="flex items-center justify-between gap-4 text-sm">
          <span aria-hidden="true" className="font-medium">Size:</span>
          <ProductSizeGuide sizes={product.sizes} />
        </div>
        <div className="mt-3 grid auto-cols-fr grid-flow-col gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              type="button"
              aria-label={`Size ${size}`}
              aria-pressed={selectedSize === size}
              onClick={() => {
                setSelectedSize(size);
                setIsAdded(false);
              }}
              className={cn(
                "h-11 min-w-0 rounded-lg border text-xs font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#ff552c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0d0d]",
                selectedSize === size
                  ? "border-white ring-1 ring-white/50"
                  : "border-white/15 text-white/80 hover:border-white/45",
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-5 flex gap-3">
        <Button
          type="button"
          variant="buy"
          className="h-13 min-w-0 flex-1 gap-2 px-3 text-sm font-semibold sm:text-base"
          onClick={() => handleAdd(product)}
        >
          {isAdded ? (
            <><Check className="size-4" aria-hidden="true" /> Added to Cart</>
          ) : (
            <>Add to Cart <span aria-hidden="true" className="mx-1">—</span> {price}</>
          )}
        </Button>
        <button
          type="button"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          aria-pressed={isFavorite}
          onClick={() => setIsFavorite(!isFavorite)}
          className={cn(
            "flex size-13 shrink-0 items-center justify-center rounded-lg border transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#ff552c]",
            isFavorite ? "border-[#ff552c] text-[#ff552c]" : "border-white/20 text-white/80 hover:border-white/45",
          )}
        >
          <Heart className="size-6" fill={isFavorite ? "currentColor" : "none"} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>
      <p role="status" aria-live="polite" className="sr-only">
        {isAdded ? `${product.name}, ${selectedVariant.label}, size ${selectedSize} added to your demo cart.` : ""}
      </p>

      <ul aria-label="Shopping benefits" className="mt-6 grid grid-cols-3 divide-x divide-white/10 border-t border-white/15 pt-5">
        {benefits.map(({ icon: Icon, firstLine, secondLine }) => (
          <li key={firstLine} className="flex flex-col items-center gap-2 px-2 first:pl-0 last:pr-0 sm:flex-row sm:justify-center sm:gap-3 lg:flex-col xl:flex-row xl:gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/75">
              <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <span className="text-center text-[11px] leading-relaxed text-white/60 sm:text-left lg:text-center xl:text-left xl:text-xs">
              {firstLine}<br />{secondLine}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
