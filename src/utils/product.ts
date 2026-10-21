export type ProductCategory =
  | "T-Shirts"
  | "Long Sleeve"
  | "V-Neck"
  | "Tank Top"
  | "Hoodie"
  | "Zip Hoodie"
  | "Sweatshirt"
  | "Cropped"
  | "Oversized";

export type ProductStyle = "Minimal" | "Street";

export type ProductColor =
  | "Black"
  | "White"
  | "Orange"
  | "Blue"
  | "Green";

export type ProductSize = "S" | "M" | "L" | "XL" | "XXL";

export interface IProduct {
  id: number;
  slug: string;
  name: string;
  category: string;
  styles: string[];
  imageUrl: string;
  price: number;
  description: string;
  colors: ProductColor[];
  sizes: ProductSize[];
  isNewDrop: boolean;
}

export const cards: IProduct[] = [
  {
    id: 1,
    slug: "fuji-horizon",
    name: "Fuji Horizon",
    category: "T-Shirts",
    styles: ["Minimal"],
    imageUrl: "/products/p1.png",
    price: 32,
    description: "Mount Fuji in a clean, timeless composition.",
    colors: ["White", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNewDrop: false,
  },

  {
    id: 2,
    slug: "koi-balance",
    name: "Koi Balance",
    category: "T-Shirts",
    styles: ["Street"],
    imageUrl: "/products/p2.png",
    price: 36,
    description: "Koi in motion, balance in every detail.",
    colors: ["Black", "White", "Orange"],
    sizes: ["S", "M", "L", "XL"],
    isNewDrop: true,
  },

  {
    id: 3,
    slug: "torii-mist",
    name: "Torii Mist",
    category: "Long Sleeve",
    styles: ["Minimal"],
    imageUrl: "/products/p3.png",
    price: 42,
    description: "Mist, mountains and a quiet torii gate.",
    colors: ["White", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNewDrop: false,
  },

  {
    id: 4,
    slug: "moon-tide",
    name: "Moon Tide",
    category: "V-Neck",
    styles: ["Minimal"],
    imageUrl: "/products/p4.png",
    price: 34,
    description: "Moon phases and waves in perfect rhythm.",
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    isNewDrop: false,
  },

  {
    id: 5,
    slug: "red-crane",
    name: "Red Crane",
    category: "Tank Top",
    styles: ["Street"],
    imageUrl: "/products/p5.png",
    price: 29,
    description: "A bold crane beneath the rising sun.",
    colors: ["Black", "White", "Orange"],
    sizes: ["S", "M", "L", "XL"],
    isNewDrop: true,
  },

  {
    id: 6,
    slug: "rising-dragon",
    name: "Rising Dragon",
    category: "Hoodie",
    styles: ["Street"],
    imageUrl: "/products/p6.png",
    price: 58,
    description: "A powerful dragon emerging through the clouds.",
    colors: ["White", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNewDrop: true,
  },

  {
    id: 7,
    slug: "sakura-night",
    name: "Sakura Night",
    category: "Sweatshirt",
    styles: ["Minimal"],
    imageUrl: "/products/p7.png",
    price: 48,
    description: "Sakura branches blooming through the night.",
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNewDrop: false,
  },

  {
    id: 8,
    slug: "fuji-bloom",
    name: "Fuji Bloom",
    category: "Cropped",
    styles: ["Minimal"],
    imageUrl: "/products/p8.png",
    price: 31,
    description: "Fuji, waves and soft floral details.",
    colors: ["White", "Black", "Orange"],
    sizes: ["S", "M", "L", "XL"],
    isNewDrop: true,
  },

  {
    id: 9,
    slug: "ukiyo-waves",
    name: "Ukiyo Waves",
    category: "Oversized",
    styles: ["Street"],
    imageUrl: "/products/p9.png",
    price: 39,
    description: "Classic Japanese waves with streetwear energy.",
    colors: ["White", "Black", "Blue"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNewDrop: false,
  },

  {
    id: 10,
    slug: "samurai-spirit",
    name: "Samurai Spirit",
    category: "T-Shirts",
    styles: ["Street"],
    imageUrl: "/products/p10.png",
    price: 38,
    description: "Samurai spirit reimagined for modern streetwear.",
    colors: ["Black", "White", "Orange"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNewDrop: true,
  },

  {
    id: 11,
    slug: "fuji-shadow",
    name: "Fuji Shadow",
    category: "V-Neck",
    styles: ["Minimal"],
    imageUrl: "/products/p11.png",
    price: 35,
    description: "A darker take on Mount Fuji and the rising sun.",
    colors: ["Black", "White", "Orange"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNewDrop: true,
  },

  {
    id: 12,
    slug: "crane-horizon",
    name: "Crane Horizon",
    category: "Zip Hoodie",
    styles: ["Street"],
    imageUrl: "/products/p12.png",
    price: 64,
    description: "Cranes, mountains and sakura on the horizon.",
    colors: ["White", "Black", "Orange"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNewDrop: true,
  },
];
