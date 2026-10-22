import type { IProduct, ProductSize } from "./product";

export interface ICartItem extends IProduct {
  cartItemId: string;
  variantId: string;
  color: string;
  size: ProductSize;
  quantity: number;
}

export type CartItemInput = Omit<ICartItem, "cartItemId" | "quantity">;

export type CartContextValue = {
  items: ICartItem[];
  addToCart: (item: CartItemInput) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
};
