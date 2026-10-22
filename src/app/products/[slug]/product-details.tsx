"use client";

import { useState } from "react";

import type { ProductDetails } from "@/types/product";
import { ProductGallery } from "./product-gallery";
import ProductInfo from "./product-info";

export function ProductDetailsView({ product }: { product: ProductDetails }) {
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const selectedVariant =
    product.variants.find((variant) => variant.id === variantId) ??
    product.variants[0];

  return (
    <div className="grid min-w-0 items-start gap-8 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:gap-8 xl:gap-10">
      <ProductGallery key={selectedVariant.id} variant={selectedVariant} />
      <ProductInfo
        product={product}
        selectedVariant={selectedVariant}
        onVariantChange={setVariantId}
      />
    </div>
  );
}
