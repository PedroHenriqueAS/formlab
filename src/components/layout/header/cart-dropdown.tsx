"use client";

import { ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Dropdown } from "@/components/ui/dropdown";
import { CatalogLink } from "@/components/ui/storefront-links";
import { getCartQuantity, getCartSubtotal } from "@/lib/cart";
import { formatCurrency } from "@/lib/format-currency";
import { useCart } from "@/providers/cart-provider";

import { iconTriggerClassName, type HeaderDropdownProps } from "./header-dropdown-shared";

export function CartDropdown({ open, onOpenChange }: HeaderDropdownProps) {
  const { items, removeFromCart } = useCart();
  const subtotal = getCartSubtotal(items);
  const totalQuantity = getCartQuantity(items);
  const itemCount = `${totalQuantity} ${totalQuantity === 1 ? "item" : "items"}`;

  return (
    <Dropdown
      open={open}
      onOpenChange={onOpenChange}
      title="Your cart"
      align="end"
      width={400}
      trigger={
        <button
          type="button"
          aria-label={`Shopping cart, ${itemCount}`}
          className={`${iconTriggerClassName} relative`}
        >
          <ShoppingCart className="size-6 xl:size-7" strokeWidth={2} aria-hidden="true" />
          {items.length > 0 && (
            <span
              aria-hidden="true"
              className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ff6738] px-1 text-[10px] font-bold leading-none text-white"
            >
              {totalQuantity > 99 ? "99+" : totalQuantity}
            </span>
          )}
        </button>
      }
    >
      {items.length > 0 ? (
        <>
          <p role="status" className="mb-3 text-xs text-white/45">
            {itemCount} in your cart
          </p>
          <ul
            aria-label="Cart products"
            className="max-h-[min(24rem,45dvh)] divide-y divide-white/10 overflow-y-auto overscroll-contain"
          >
            {items.map((product) => (
              <li key={product.cartItemId} className="flex min-w-0 items-center gap-2 py-3 first:pt-0">
                <Link
                  href={`/products/${product.slug}`}
                  onClick={() => onOpenChange(false)}
                  className="flex min-w-0 flex-1 items-center gap-3 rounded-lg p-1 transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-orange-500"
                >
                  <Image
                    src={product.imageUrl}
                    alt=""
                    width={64}
                    height={64}
                    className="size-16 shrink-0 rounded-lg bg-white/5 object-cover"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-white">
                      {product.name}
                    </span>
                    <span className="mt-1 block text-xs text-white/45">
                      Color: {product.color}
                    </span>
                    <span className="mt-1 block text-xs text-white/45">
                      Size: {product.size} · Qty: {product.quantity}
                    </span>
                    <span className="mt-2 block text-sm font-semibold text-[#ff6738]">
                      {formatCurrency(product.price * product.quantity)}
                    </span>
                  </span>
                </Link>
                <button
                  type="button"
                  aria-label={`Remove ${product.name}, ${product.color}, size ${product.size} from cart`}
                  onClick={() => removeFromCart(product.cartItemId)}
                  className="flex size-11 shrink-0 items-center justify-center rounded-lg text-white/40 transition-colors hover:bg-white/5 hover:text-[#ff6738] focus-visible:outline-2 focus-visible:outline-orange-500"
                >
                  <Trash2 className="size-4" aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/10 pt-4 text-sm">
            <span className="text-white/60">Subtotal</span>
            <span className="font-semibold text-white">
              {formatCurrency(subtotal)}
            </span>
          </div>
          <CatalogLink onClose={() => onOpenChange(false)}>Continue shopping</CatalogLink>
        </>
      ) : (
        <div className="py-3 text-center">
          <span className="mx-auto flex size-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60">
            <ShoppingCart className="size-6" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <p className="mt-4 text-sm font-medium text-white">Your cart is empty</p>
          <p className="mt-2 text-sm leading-relaxed text-white/50">
            Discover a design that feels like you.
          </p>
          <CatalogLink onClose={() => onOpenChange(false)}>Browse catalog</CatalogLink>
        </div>
      )}
    </Dropdown>
  );
}
