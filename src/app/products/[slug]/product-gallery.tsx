"use client";

import { ArrowLeft, ArrowRight, Expand } from "lucide-react";
import Image from "next/image";
import { useState, type CSSProperties } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

import type { ProductImage, ProductVariant } from "../product-data";

function imageStyle(image: ProductImage): CSSProperties {
  return {
    objectPosition: image.position ?? "center",
    transform: image.scale ? `scale(${image.scale})` : undefined,
    transformOrigin: image.position ?? "center",
  };
}

export function ProductGallery({ variant }: { variant: ProductVariant }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = variant.images[activeIndex];

  function moveImage(direction: number) {
    setActiveIndex((index) =>
      (index + direction + variant.images.length) % variant.images.length
    );
  }

  return (
    <section
      aria-label="Product gallery"
      className="grid min-w-0 gap-3 md:grid-cols-[clamp(4rem,7.2vw,6.5rem)_minmax(0,1fr)]"
    >
      <div
        role="group"
        aria-label="Product views"
        className="order-2 flex gap-2 md:order-1 md:flex-col md:gap-3"
      >
        {variant.images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            aria-label={`View ${image.label.toLowerCase()}`}
            aria-pressed={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "relative aspect-square w-16 shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 bg-[#151515] transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-orange-500 min-[400px]:w-20 md:aspect-[0.92] md:w-full",
              activeIndex === index
                ? "border-[#ff5b2d]"
                : "border-transparent hover:border-white/40"
            )}
          >
            <Image
              src={image.src}
              alt=""
              fill
              sizes={`${Math.ceil(104 * (image.scale ?? 1))}px`}
              className="object-cover"
              style={imageStyle(image)}
            />
          </button>
        ))}
      </div>

      <div className="relative order-1 aspect-[1.3] min-w-0 overflow-hidden rounded-xl bg-[#151515] md:order-2">
        <Image
          key={activeImage.id}
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          sizes="(min-width: 1440px) 720px, (min-width: 1024px) 52vw, (min-width: 768px) 82vw, 100vw"
          loading="eager"
          className="object-cover"
          style={imageStyle(activeImage)}
        />

        <Dialog>
          <DialogTrigger
            aria-label="Enlarge product image"
            className="absolute bottom-4 right-4 flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-black/75 text-white/90 transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            <Expand className="size-4" strokeWidth={1.5} />
          </DialogTrigger>
          <DialogContent className="dark max-h-[calc(100dvh-2rem)] overflow-y-auto border border-white/15 bg-[#111212] p-3 text-white sm:max-w-[min(56rem,calc(100vw-2rem))]">
            <DialogTitle className="sr-only">Product image preview</DialogTitle>
            <DialogDescription className="sr-only">
              {activeImage.alt}. Use the previous and next buttons to explore the gallery.
            </DialogDescription>
            <div className="relative mt-8 aspect-[1.3] max-h-[70dvh] overflow-hidden rounded-lg">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="(min-width: 1024px) 880px, 90vw"
                className="object-cover"
                style={imageStyle(activeImage)}
              />
            </div>
            <div className="flex items-center justify-between gap-3 px-2">
              <button
                type="button"
                aria-label="Previous product image"
                onClick={() => moveImage(-1)}
                className="flex size-11 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-orange-500"
              >
                <ArrowLeft className="size-4" />
              </button>
              <p aria-live="polite" className="text-center text-xs text-white/65">
                {activeImage.label} · {activeIndex + 1} / {variant.images.length}
              </p>
              <button
                type="button"
                aria-label="Next product image"
                onClick={() => moveImage(1)}
                className="flex size-11 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-orange-500"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
