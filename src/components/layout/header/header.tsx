"use client";

import { ShoppingCart, User } from "lucide-react";

import { SearchInput } from "@/components/ui/search-input";
import { useNavigation } from "@/providers/navigation-provider";

import { HeaderNav } from "./navbar";

export function Header() {
  const { activeSection, setActiveSection } = useNavigation();

  return (
    <header
      className="
        mx-auto
        grid
        w-full
        max-w-[1440px]
        grid-cols-[1fr_auto_auto]
        items-center
        gap-2
        bg-black
        px-4
        py-3

        md:grid-cols-[auto_auto_minmax(0,1fr)]
        md:gap-3
        md:px-6

        xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]
        xl:gap-8
        xl:px-8
      "
    >
      {/* BRAND */}
      <div className="flex min-w-0 items-center gap-2">
        <h1 className="text-2xl font-bold text-white">
          FormLab
        </h1>

        <span
          aria-hidden="true"
          className="hidden text-3xl font-thin text-gray-500 md:block"
        >
          |
        </span>

        <span
          className="
            hidden
            w-18
            text-xs
            leading-tight
            text-gray-500
            uppercase
            md:block
          "
        >
          your ideas wear well
        </span>
      </div>

      {/* NAVIGATION */}
      <div className="order-3 md:order-none">
        <HeaderNav
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
      </div>

      {/* SEARCH + ACTIONS */}
      <div
        className="
          contents

          md:flex
          md:min-w-0
          md:items-center
          md:justify-end
          md:gap-1

          xl:gap-4
        "
      >
        <div
          className="
            order-4
            col-span-3
            min-w-0

            md:order-none
            md:max-w-96
            md:flex-1
          "
        >
          <SearchInput
            aria-label="Search products"
            placeholder="Search designs, styles, or keywords..."
          />
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Account"
            className="
              flex
              size-11
              shrink-0
              items-center
              justify-center
              rounded-lg
              text-white
              transition-colors
              hover:bg-white/5
              focus-visible:outline-2
              focus-visible:outline-orange-500
            "
          >
            <User
              className="size-6 xl:size-7"
              strokeWidth={2}
            />
          </button>

          <button
            type="button"
            aria-label="Shopping cart"
            className="
              flex
              size-11
              shrink-0
              items-center
              justify-center
              rounded-lg
              text-white
              transition-colors
              hover:bg-white/5
              focus-visible:outline-2
              focus-visible:outline-orange-500
            "
          >
            <ShoppingCart
              className="size-6 xl:size-7"
              strokeWidth={2}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
