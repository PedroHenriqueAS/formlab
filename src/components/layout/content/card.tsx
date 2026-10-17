import { Plus } from "lucide-react";
import Link from "next/link";

interface CardProps {
  imageUrl: string;
  slug: string;
}

export function Card({ imageUrl, slug }: CardProps) {
  return (
    <Link href={`/products/${slug}`}>
    <div className="min-w-0 w-full overflow-hidden rounded-2xl bg-[#111212]">
      <div
        role="img"
        aria-label="Product mock design"
        className="aspect-[3/2]
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
      </div>
      <div className="w-full p-3">
        <div className="flex flex-wrap justify-between gap-x-2 gap-y-1">
          <p className="text-xs font-bold">Big camisa</p>
          <span className="text-xs font-bold"> $45</span>
        </div>
        <div>
          <p className="mt-1 text-xs text-gray-400">
            Descrição do produto
          </p>
        </div>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-1">
          <div className="flex items-center gap-1">
            <div className=" rounded-md w-3 h-3 bg-amber-200" />
            <div className=" rounded-md w-3 h-3 bg-black" />
            <div className="rounded-md w-3 h-3 bg-gray-300" />
            <p className="text-[10px] font-bold">+3</p>
          </div>
          <button type="button" aria-label="Add Big camisa to cart" className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-gray-300 text-white focus-visible:outline-2 focus-visible:outline-orange-500">
            <Plus className="size-4" />
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
}
