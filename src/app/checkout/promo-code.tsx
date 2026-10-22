"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Tag } from "lucide-react";
import { checkoutInputClass } from "./checkout-fields";

export function PromoCode() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-w-0">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex min-h-12 w-full items-center justify-between gap-3 border-t border-white/15 py-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
      >
        <div className="flex items-center gap-2">
          <Tag className="size-4 scale-x-[-1]" />
          <p>Promo code</p>
        </div>

        {isOpen ? (
          <ChevronDown className="size-4" />
        ) : (
          <ChevronUp className="size-4" />
        )}
      </button>

      {isOpen && (
        <div className="flex min-w-0 gap-2 border-b border-white/15 pb-5">
          <input
            className={`${checkoutInputClass} flex-1`}
            id="checkout"
            placeholder="Enter your code"
          />

          <button
            type="button"
            className="min-h-11 shrink-0 rounded-lg border border-white/15 px-4 py-2 text-sm text-white/50 transition-colors hover:border-white hover:text-white focus-visible:outline-2 focus-visible:outline-orange-500"
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
}
