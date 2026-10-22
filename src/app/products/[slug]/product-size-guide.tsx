import { Ruler } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { ProductSize } from "@/types/product";

const measurements: Record<ProductSize, { width: number; length: number }> = {
  S: { width: 52, length: 68 },
  M: { width: 55, length: 70 },
  L: { width: 58, length: 72 },
  XL: { width: 61, length: 74 },
  XXL: { width: 64, length: 76 },
};

export function ProductSizeGuide({ sizes }: { sizes: readonly ProductSize[] }) {
  return (
    <Dialog>
      <DialogTrigger className="inline-flex items-center gap-2 rounded-sm text-xs text-white/55 transition-colors outline-none hover:text-white focus-visible:ring-2 focus-visible:ring-[#ff552c]">
        <Ruler className="size-3.5" aria-hidden="true" />
        Size guide
      </DialogTrigger>
      <DialogContent className="dark max-h-[90dvh] overflow-y-auto bg-[#111111] p-6 text-white ring-white/15 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Find your fit</DialogTitle>
          <DialogDescription className="text-white/55">
            Compare these measurements with a favorite piece from your wardrobe. All measurements are in centimeters, with the garment laid flat.
          </DialogDescription>
        </DialogHeader>
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Garment size measurements in centimeters</caption>
          <thead className="border-b border-white/15 text-white/55">
            <tr>
              <th scope="col" className="py-3 font-medium">Size</th>
              <th scope="col" className="py-3 font-medium">Width</th>
              <th scope="col" className="py-3 font-medium">Length</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {sizes.map((size) => (
              <tr key={size}>
                <th scope="row" className="py-3 font-medium">{size}</th>
                <td className="py-3 text-white/70">{measurements[size].width}</td>
                <td className="py-3 text-white/70">{measurements[size].length}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs leading-relaxed text-white/45">Between sizes? Choose the larger size for a more relaxed fit.</p>
      </DialogContent>
    </Dialog>
  );
}
