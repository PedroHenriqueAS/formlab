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

export const cards = [
  {
    id: 1,
    slug: "fuji-horizon",
    name: "Fuji Horizon",
    category: "T-Shirts",
    styles: ["Minimal"],
    imageUrl: "/products/p1.png",
    price: 32,
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
  colors: ["White", "Black", "Orange"],
  sizes: ["S", "M", "L", "XL", "XXL"],
  isNewDrop: true,
},
] as const;