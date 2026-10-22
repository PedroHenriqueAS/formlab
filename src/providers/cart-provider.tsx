"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

import { addCartItem, updateCartItemQuantity } from "@/lib/cart";
import type { CartContextValue, CartItemInput, ICartItem } from "@/types/cart";

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ICartItem[]>([]);

  function addToCart(item: CartItemInput) {
    setItems((currentItems) => addCartItem(currentItems, item));
  }

  function removeFromCart(cartItemId: string) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.cartItemId !== cartItemId),
    );
  }

  function updateQuantity(cartItemId: string, quantity: number) {
    setItems((currentItems) =>
      updateCartItemQuantity(currentItems, cartItemId, quantity),
    );
  }

  function clearCart() {
    setItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider.");
  }

  return context;
}
