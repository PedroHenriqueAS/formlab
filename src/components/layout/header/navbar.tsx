"use client";

import { useState } from "react";

const tabs = ["Catalog", "Customize", "About"];

export function HeaderNav() {
  const [activeTab, setActiveTab] = useState("Catalog");

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <li key={tab}>
              <button
                type="button"
                onClick={() => setActiveTab(tab)}
                className="
                  relative
                  w-24
                  py-3
                  text-center
                  text-sm
                  font-medium
                  text-white
                  transition-opacity
                  hover:opacity-80
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
                    bg-brand
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
  );
}
