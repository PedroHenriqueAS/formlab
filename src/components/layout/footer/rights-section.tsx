import { ChevronDown } from "lucide-react";

export function RightsSection() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6 xl:px-8">
      <div
        className="
      flex
      flex-col
      items-start
      gap-4
      md:flex-row
      md:flex-wrap
      md:items-center
      justify-between
      border-t
      border-white/10
      py-6
    "
      >
        {/* Copyright */}
        <p className="text-sm text-white/45">
          © 2026 FormLab. All rights reserved.
        </p>

        {/* Payments */}
        <div aria-label="Payment methods" className="flex max-w-full flex-wrap items-center gap-2">
          <div className="flex h-10 min-w-18 items-center justify-center rounded-lg border border-white/15 px-4">
            <span className="text-sm font-bold italic text-white">VISA</span>
          </div>

          <div className="flex h-10 min-w-18 items-center justify-center rounded-lg border border-white/15 px-4">
            <div className="relative flex w-9 items-center">
              <span className="size-5 rounded-full bg-[#eb001b]" />
              <span className="-ml-2 size-5 rounded-full bg-[#f79e1b] opacity-95" />
            </div>
          </div>

          <div className="flex h-10 min-w-18 items-center justify-center rounded-lg border border-white/15 px-4">
            <span className="text-sm font-bold text-white">AMEX</span>
          </div>

          <div className="flex h-10 min-w-18 items-center justify-center rounded-lg border border-white/15 px-4">
            <span className="text-lg font-bold italic text-white">P</span>
          </div>

          <div className="flex h-10 min-w-18 items-center justify-center rounded-lg border border-white/15 px-4">
            <span className="text-sm font-semibold text-white"> Pay</span>
          </div>
        </div>

        {/* Region */}
        <button
          type="button"
          className="
        flex
        min-h-11
        items-center
        gap-2
        text-sm
        text-white/50
        transition-colors
        hover:text-white
      "
        >
          Brazil (BRL R$)
          <ChevronDown className="size-4" />
        </button>
      </div>
    </div>
  );
}
