"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { ResponsiveSheet } from "@/components/ui/responsive-sheet";

const tabs = ["Catalog", "Customize", "About"];

export function HeaderNav() {
  const [activeTab, setActiveTab] = useState("Catalog");

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
            const isActive = activeTab === tab;

            return (
              <li key={tab}>
                <button
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  aria-pressed={isActive}
                  className="
                    relative
                    min-h-11
                    w-full
                    md:w-auto
                    md:px-3
                    xl:w-24
                    py-3
                    text-center
                    text-sm
                    font-medium
                    text-white
                    transition-opacity
                    hover:opacity-80
                    focus-visible:outline-2
                    focus-visible:outline-orange-500
                  "
                >
                  {tab}

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-1/2
                      h-0.5
                      -translate-x-1/2
                      transition-all
                      duration-300
                      ${
                        isActive ? "w-10 bg-red-500 opacity-100" : "w-0 opacity-0"
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
