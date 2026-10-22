import { Plus } from "lucide-react";
import Link from "next/link";
import { formatCurrency } from "@/lib/format-currency";
import type { IProduct } from "@/types/product";

type CardProps = Pick<IProduct, "imageUrl" | "slug" | "name" | "description" | "price">;

export function Card({ imageUrl, slug, name, description, price }: CardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group/card relative block min-w-0 rounded-2xl border border-transparent transition-[scale,border-color,box-shadow] duration-1000 ease-in-out hover:z-10 hover:border-[#ff6738] hover:shadow-[0_8px_24px_rgba(255,103,56,0.18)] focus-visible:z-10 focus-visible:border-[#ff6738] motion-safe:hover:scale-105 motion-reduce:transition-none"
    >
    <div className="min-w-0 w-full overflow-hidden rounded-2xl bg-[#111212]">
      <div
        role="img"
        aria-label={`${name} printed design`}
        className="relative aspect-[3/2]
                   w-full
                   overflow-hidden
                   rounded-t-2xl
                 bg-[#181818]
                   bg-[length:100%_auto]
                   bg-[position:center_15%]
                   bg-no-repeat"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[length:200%_auto] bg-[position:center_58%] bg-no-repeat opacity-0 transition-opacity duration-1000 ease-in-out group-hover/card:opacity-100 group-focus-visible/card:opacity-100 motion-reduce:transition-none"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
      <div className="w-full p-3">
        <div className="flex flex-wrap justify-between gap-x-2 gap-y-1">
          <p className="text-xs font-bold">{name}</p>
          <span className="text-xs font-bold">{formatCurrency(price)}</span>
        </div>
        <div>
          <p className="mt-1 text-xs text-gray-400">
            {description}
          </p>
        </div>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-1">
          <div className="flex items-center gap-1">
            <div className=" rounded-md w-3 h-3 bg-amber-200" />
            <div className=" rounded-md w-3 h-3 bg-black" />
            <div className="rounded-md w-3 h-3 bg-gray-300" />
            <p className="text-[10px] font-bold">+3</p>
          </div>
          <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-gray-300 text-white">
            <Plus className="size-4" />
          </span>
        </div>
      </div>
    </div>
    </Link>
  );
}
