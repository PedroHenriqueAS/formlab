"use client";

import { Trash } from "lucide-react";
import { QuantitySelector } from "@/components/ui/quantity-selector";
import { CatalogLink } from "@/components/ui/storefront-links";
import { getCartQuantity, getCartSubtotal } from "@/lib/cart";
import { formatCurrency } from "@/lib/format-currency";
import { useCart } from "@/providers/cart-provider";
import { PromoCode } from "./promo-code";
import Total from "./total";

export function ProductCheckoutList() {
  const { items, updateQuantity, removeFromCart } = useCart();
  const totalQuantity = getCartQuantity(items);
  const subtotal = getCartSubtotal(items);

  return (
    <div className="min-w-0 self-start rounded-2xl border border-white/15 bg-[#0c0d0d] p-5 sm:p-6 xl:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        <span className="text-sm text-white/50">{totalQuantity} {totalQuantity === 1 ? "item" : "items"}</span>
      </div>
      {items.length ? (
        <div className="mt-5 border-t border-white/15">
          <div className="divide-y divide-white/10">
            {items.map((item) => (
              <div
                key={item.cartItemId}
                role="group"
                aria-label={`${item.name}, ${item.color}, size ${item.size}`}
                className="grid min-w-0 grid-cols-[4rem_minmax(0,1fr)] items-start gap-x-3 gap-y-3 py-5 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-x-4"
              >
                <div
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                  className="aspect-square w-full rounded-lg border border-white/10 bg-[length:100%_auto] bg-[position:center_58%] bg-no-repeat"
                />
                <div className="min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 pt-1">
                      <h3 className="break-words text-sm font-bold leading-relaxed">{item.name}</h3>
                      <p className="mt-1 break-words text-xs leading-relaxed text-white/50">
                        {item.color} - {item.size}
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-label={`Remove ${item.name}, ${item.color}, size ${item.size} from cart`}
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="flex size-11 shrink-0 items-center justify-center rounded-lg text-white/60 transition-colors hover:bg-white/5 hover:text-orange-500 focus-visible:outline-2 focus-visible:outline-orange-500"
                    >
                      <Trash size={18} aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="col-span-2 flex min-w-0 flex-wrap items-center justify-between gap-x-3 gap-y-2 sm:col-span-1 sm:col-start-2">
                  <QuantitySelector
                    value={item.quantity}
                    onDecrease={() =>
                      updateQuantity(item.cartItemId, item.quantity - 1)
                    }
                    onIncrease={() =>
                      updateQuantity(item.cartItemId, item.quantity + 1)
                    }
                  />
                  <p className="text-right text-sm font-medium tabular-nums whitespace-nowrap">{formatCurrency(item.price * item.quantity)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-5 flex flex-col items-center justify-center border-t border-white/15 py-8 text-center sm:py-10">
          <p className="text-sm text-white/65">Your cart is empty</p>
          <div className="w-full max-w-50">
            <CatalogLink>Back to catalog</CatalogLink>
          </div>
        </div>
      )}
      <PromoCode />
      <Total subtotal={subtotal} />
    </div>
  );
}
