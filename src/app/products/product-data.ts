import { cards, type IProduct } from "@/utils/product";

export type ProductImage = {
  id: string;
  src: string;
  alt: string;
  label: string;
  position?: string;
  scale?: number;
};

export type ProductVariant = {
  id: string;
  label: string;
  thumbnail: string;
  images: ProductImage[];
};

export interface ProductDetails extends IProduct {
  variants: ProductVariant[];
}

function detailImages(src: string, name: string): ProductImage[] {
  return [
    { id: "front", src, alt: `${name}, front view`, label: "Front" },
    {
      id: "artwork",
      src,
      alt: `${name}, close-up of the printed artwork`,
      label: "Artwork detail",
      scale: 2,
      position: "50% 58%",
    },
    {
      id: "neckline",
      src,
      alt: `${name}, neckline and fabric detail`,
      label: "Neckline detail",
      scale: 2.4,
      position: "50% 16%",
    },
  ];
}

const fujiImagePath = "/products/fuji-horizon";
const washedBlack = `${fujiImagePath}/washed-black.png`;
const natural = `${fujiImagePath}/natural.png`;
const blackDetails = detailImages(washedBlack, "Fuji Horizon Tee in washed black");

const fujiVariants: ProductVariant[] = [
  {
    id: "washed-black",
    label: "Washed Black",
    thumbnail: washedBlack,
    images: [
      blackDetails[0],
      {
        id: "back",
        src: `${fujiImagePath}/back.png`,
        alt: "Fuji Horizon Tee in washed black, back view",
        label: "Back",
      },
      blackDetails[1],
      {
        id: "fabric",
        src: "/about-2.png",
        alt: "FormLab label and printed black fabric, close-up",
        label: "Fabric detail",
      },
    ],
  },
  {
    id: "white",
    label: "White",
    thumbnail: "/products/p1.png",
    images: detailImages("/products/p1.png", "Fuji Horizon Tee in white"),
  },
  {
    id: "natural",
    label: "Natural",
    thumbnail: natural,
    images: detailImages(natural, "Fuji Horizon Tee in natural"),
  },
];

export function getProductDetails(slug: string): ProductDetails | undefined {
  const product = cards.find((item) => item.slug === slug);

  if (!product) {
    return undefined;
  }

  const isFujiHorizon = product.slug === "fuji-horizon";

  return {
    ...product,
    name: product.category === "T-Shirts" ? `${product.name} Tee` : product.name,
    category: product.category === "T-Shirts" ? "T-Shirt" : product.category,
    price: isFujiHorizon ? 179.9 : product.price,
    description:
      "A fusion of Japanese landscapes and modern streetwear. Made for those who find beauty in the details.",
    variants: isFujiHorizon
      ? fujiVariants
      : [
          {
            id: product.colors[0].toLowerCase(),
            label: product.colors[0],
            thumbnail: product.imageUrl,
            images: detailImages(product.imageUrl, product.name),
          },
        ],
  };
}
