import { Leaf } from "lucide-react";
import { formatCurrency } from "@/lib/format-currency";

interface TotalProps {
  subtotal: number;
}

const FREE_SHIPPING_THRESHOLD = 200;

export default function Total({ subtotal }: TotalProps) {
  return (
    <div className="min-w-0 text-sm">
      <div className="flex flex-wrap justify-between gap-x-4">
        <p className="my-3">Subtotal</p>
        <p className="my-3 tabular-nums">{formatCurrency(subtotal)}</p>
      </div>
      <div className="flex flex-wrap justify-between gap-x-4 border-b border-white/15">
        <p className="my-3">Shipping</p>
        <p className="my-3">-</p>
      </div>
      <div className="my-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <span className="text-xl font-bold">total</span>
        <span className="text-lg font-semibold tabular-nums">{formatCurrency(subtotal)}</span>
      </div>
      <div className="flex items-start gap-3 rounded-xl border border-white/15 bg-black p-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10">
          <Leaf className="size-5 text-orange-500" />
        </div>
        <div className="min-w-0 break-words leading-relaxed">
          <span className="text-sm">Free shipping to orders over {formatCurrency(FREE_SHIPPING_THRESHOLD)}</span>
          {subtotal >= FREE_SHIPPING_THRESHOLD ? (
            <p className="mt-1 text-xs text-white/50">Free shipping  <span className="text-orange-500">unlocked!</span></p>
          ) : (
            <p className="mt-1 text-xs text-white/50">
              Add{" "}
              <span className="text-orange-500">
                {formatCurrency(FREE_SHIPPING_THRESHOLD - subtotal)}
              </span>{" "}
              to get free shipping.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
