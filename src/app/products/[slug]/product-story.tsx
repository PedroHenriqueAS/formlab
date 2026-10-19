import Image from "next/image";

import type { ProductDetails } from "../product-data";

export function ProductStory({ product }: { product: ProductDetails }) {
  const artworkImage =
    product.slug === "fuji-horizon"
      ? "/products/fuji-horizon/story-artwork.png"
      : product.variants[0].thumbnail;

  return (
    <section
      aria-labelledby="product-story-title"
      className="mt-8 border-t border-white/10 pt-6 md:mt-10 md:pt-8"
    >
      <div className="grid min-w-0 grid-cols-[1.35fr_0.8fr] gap-3 sm:gap-4 lg:grid-cols-[1.15fr_1.35fr_0.78fr_1.9fr]">
        <div className="col-span-2 mb-3 min-w-0 self-center sm:mb-4 md:grid md:grid-cols-2 md:items-end md:gap-8 lg:col-span-1 lg:mb-0 lg:block lg:py-2 lg:pr-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ff552c]">
              Inspired by Japan
            </p>
            <h2
              id="product-story-title"
              className="mt-3 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] xl:mt-4 xl:text-[42px]"
            >
              More
              <br />
              than a shirt.
            </h2>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60 md:mt-0 lg:mt-5 xl:mt-6">
            The {product.name} brings the essence of Japanese minimalism to
            everyday wear. A piece that connects culture, design and
            self-expression.
          </p>
        </div>

        <div className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-md bg-[#151515] lg:aspect-auto lg:min-h-64 xl:min-h-68">
          <Image
            src={artworkImage}
            alt={`Detail of the ${product.name} artwork on textured fabric`}
            fill
            sizes="(min-width: 1440px) 345px, (min-width: 1024px) 25vw, 60vw"
            className="object-cover"
          />
        </div>

        <div className="relative min-w-0 overflow-hidden rounded-md bg-[#151515]">
          <Image
            src="/about-2.png"
            alt="FormLab woven label sewn onto printed black cotton"
            fill
            sizes="(min-width: 1440px) 200px, (min-width: 1024px) 15vw, 36vw"
            className="object-cover object-[45%_center]"
          />
        </div>

        <div className="relative col-span-2 aspect-[16/9] min-w-0 overflow-hidden rounded-md bg-[#151515] lg:col-span-1 lg:aspect-auto">
          <Image
            src="/products/fuji-horizon/story-lifestyle.png"
            alt="FormLab Japanese-inspired streetwear worn against a sunlit concrete wall"
            fill
            sizes="(min-width: 1440px) 490px, (min-width: 1024px) 36vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-l from-black/35 via-transparent to-transparent" />
          <div className="absolute inset-y-0 right-[7%] flex flex-col justify-center text-white/75">
            <p className="text-[10px] font-medium uppercase leading-[1.8] tracking-[0.22em] sm:text-xs lg:text-[10px] xl:text-xs">
              Good
              <br />
              ideas
              <br />
              travel
              <br />
              further.
            </p>
            <span aria-hidden="true" className="mt-4 h-px w-7 bg-white/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
