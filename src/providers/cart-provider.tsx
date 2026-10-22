"use client";

import type { IProduct } from "@/types/product";
import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type CartContextType = {
  items: IProduct[];
  addToCart: (item: IProduct) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
};

const CartContext =
  createContext<CartContextType | undefined>(undefined);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<IProduct[]>([]);

  function addToCart(item: IProduct) {
    setItems((currentItems) => [
      ...currentItems,
      item,
    ]);
  }

  function removeFromCart(id: number) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }

  function updateQuantity(
    id: number,
    quantity: number
  ) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? { ...item, quantity }
          : item
      )
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
    throw new Error(
      "useCart must be used within a CartProvider."
    );
  }

  return context;
}