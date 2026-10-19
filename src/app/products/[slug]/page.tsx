import { notFound } from "next/navigation";

import { getProductDetails } from "../product-data";
import { ProductDetailsView } from "./product-details";
import { ProductStory } from "./product-story";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductDetails(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-[1440px] px-4 pb-2 pt-6 md:px-6 md:pt-8 xl:px-8">
      <ProductDetailsView key={product.slug} product={product} />
      <ProductStory product={product} />
    </main>
  );
}
