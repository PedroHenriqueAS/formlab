import type { CartItemInput, ICartItem } from "@/types/cart";

export function getCartItemId(item: CartItemInput) {
  return JSON.stringify([item.id, item.variantId, item.size]);
}

export function addCartItem(items: ICartItem[], item: CartItemInput): ICartItem[] {
  const cartItemId = getCartItemId(item);
  const exists = items.some((currentItem) => currentItem.cartItemId === cartItemId);

  if (!exists) {
    return [...items, { ...item, cartItemId, quantity: 1 }];
  }

  return items.map((currentItem) =>
    currentItem.cartItemId === cartItemId
      ? { ...currentItem, quantity: currentItem.quantity + 1 }
      : currentItem,
  );
}

export function updateCartItemQuantity(
  items: ICartItem[],
  cartItemId: string,
  quantity: number,
): ICartItem[] {
  if (!Number.isInteger(quantity) || quantity < 1) {
    return items;
  }

  return items.map((item) =>
    item.cartItemId === cartItemId ? { ...item, quantity } : item,
  );
}

export function getCartSubtotal(items: readonly ICartItem[]) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function getCartQuantity(items: readonly ICartItem[]) {
  return items.reduce((total, item) => total + item.quantity, 0);
}
