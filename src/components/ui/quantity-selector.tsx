"use client";

import { Minus, Plus } from "lucide-react";

type QuantitySelectorProps = {
  value: number;
  onDecrease: () => void;
  onIncrease: () => void;
  min?: number;
  max?: number;
};

export function QuantitySelector({
  value,
  onDecrease,
  onIncrease,
  min = 1,
  max = 99,
}: QuantitySelectorProps) {
  const isMin = value <= min;
  const isMax = value >= max;

  return (
    <div
      className="
        flex
        w-fit
        shrink-0
        items-center
        rounded-full
        border
        border-white/15
        bg-black/20
      "
    >
      <button
        type="button"
        onClick={onDecrease}
        disabled={isMin}
        aria-label="Decrease quantity"
        className="
          flex
          size-11
          shrink-0
          items-center
          justify-center
          rounded-full
          text-white/70
          transition-colors
          hover:text-white
          focus-visible:outline-2
          focus-visible:outline-orange-500
          disabled:cursor-not-allowed
          disabled:opacity-30
        "
      >
        <Minus className="size-4" />
      </button>

      <span className="min-w-5 text-center text-sm font-medium text-white tabular-nums">
        {value}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        disabled={isMax}
        aria-label="Increase quantity"
        className="
          flex
          size-11
          shrink-0
          items-center
          justify-center
          rounded-full
          text-white/70
          transition-colors
          hover:text-white
          focus-visible:outline-2
          focus-visible:outline-orange-500
          disabled:cursor-not-allowed
          disabled:opacity-30
        "
      >
        <Plus className="size-4" />
      </button>
    </div>
  );
}
