"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Menu } from "lucide-react";

import { ResponsiveSheet } from "@/components/ui/responsive-sheet";
import { products } from "@/data/products";
import type { ContentSection } from "@/types/navigation";

type HeaderNavProps = {
  activeSection: ContentSection;
  onSectionChange: (section: ContentSection) => void;
};

const tabs: {
  label: string;
  value: ContentSection;
}[] = [
  {
    label: "Catalog",
    value: "catalog",
  },
  {
    label: "Customize",
    value: "customize",
  },
  {
    label: "About",
    value: "about",
  },
];

export function HeaderNav({
  activeSection,
  onSectionChange,
}: HeaderNavProps) {
  const pathname = usePathname();

  const isProductPage = pathname.startsWith("/products/");

  if (isProductPage) {
    const slug = pathname.split("/")[2];

    const product = products.find((item) => item.slug === slug);

    return (
      <nav
        aria-label="Product navigation"
        className="flex items-center"
      >
        <Link
          href="/"
          onClick={() => onSectionChange("catalog")}
          className="
            group
            flex
            items-center
            gap-2
            text-sm
            font-medium
            text-white/60
            transition-colors
            hover:text-white
          "
        >
          <ArrowLeft
            size={16}
            className="
              transition-transform
              duration-300
              group-hover:-translate-x-1
            "
          />

          <span>Catalog</span>
        </Link>

        {product && (
          <>
            <span className="mx-3 hidden text-white/20 md:block">
              /
            </span>

            <span className="hidden text-sm text-white/35 md:block">
              {product.category}
            </span>

            <span className="mx-3 hidden text-white/20 xl:block">
              /
            </span>

            <span className="hidden text-sm text-white/70 xl:block">
              {product.category === "T-Shirts" ? `${product.name} Tee` : product.name}
            </span>
          </>
        )}
      </nav>
    );
  }

  return (
    <ResponsiveSheet
      title="FormLab"
      description="Explore the storefront."
      trigger={<Menu className="size-5" />}
      triggerLabel="Open navigation menu"
    >
      <nav aria-label="Main navigation">
        <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-1">
          {tabs.map((tab) => {
            const isActive = activeSection === tab.value;

            return (
              <li key={tab.value}>
                <button
                  type="button"
                  onClick={() => onSectionChange(tab.value)}
                  aria-pressed={isActive}
                  className="
                    relative
                    min-h-11
                    w-full
                    py-3
                    text-center
                    text-sm
                    font-medium
                    text-white
                    transition-opacity
                    hover:opacity-80
                    focus-visible:outline-2
                    focus-visible:outline-orange-500

                    md:w-auto
                    md:px-3

                    xl:w-24
                  "
                >
                  {tab.label}

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-1/2
                      h-0.5
                      -translate-x-1/2
                      bg-orange-500
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "w-10 opacity-100"
                          : "w-0 opacity-0"
                      }
                    `}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </ResponsiveSheet>
  );
}
