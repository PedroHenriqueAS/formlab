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
  category: ProductCategory;
  styles: ProductStyle[];
  imageUrl: string;
  price: number;
  description: string;
  colors: ProductColor[];
  sizes: ProductSize[];
  isNewDrop: boolean;
}

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
