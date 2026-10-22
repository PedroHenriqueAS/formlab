"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useNavigation } from "@/providers/navigation-provider";

import { AccountDropdown } from "./account-dropdown";
import { CartDropdown } from "./cart-dropdown";
import { HeaderNav } from "./navbar";
import { SearchDropdown } from "./search-dropdown";

export function Header() {
  const { activeSection, setActiveSection } = useNavigation();
  const pathname = usePathname();

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
      <div className="flex min-w-0 items-center gap-2">
        <Link href="/">
          <h1 className="text-2xl font-bold text-white hover:cursor-pointer">
            FormLab
          </h1>
        </Link>
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

      <div className="order-3 md:order-none">
        <HeaderNav
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
      </div>

      <HeaderActions key={pathname} />
    </header>
  );
}

type HeaderDropdown = "search" | "cart" | "account";

function HeaderActions() {
  const [openDropdown, setOpenDropdown] = useState<HeaderDropdown | null>(null);

  function handleOpenChange(dropdown: HeaderDropdown, open: boolean) {
    setOpenDropdown((current) =>
      open ? dropdown : current === dropdown ? null : current,
    );
  }

  return (
    <div className="contents md:flex md:min-w-0 md:items-center md:justify-end md:gap-1 xl:gap-4">
      <div className="order-4 col-span-3 min-w-0 md:order-none md:max-w-96 md:flex-1">
        <SearchDropdown
          open={openDropdown === "search"}
          onOpenChange={(open) => handleOpenChange("search", open)}
        />
      </div>
      <div className="flex items-center gap-1">
        <AccountDropdown
          open={openDropdown === "account"}
          onOpenChange={(open) => handleOpenChange("account", open)}
        />
        <CartDropdown
          open={openDropdown === "cart"}
          onOpenChange={(open) => handleOpenChange("cart", open)}
        />
      </div>
    </div>
  );
}
