"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

import type { ContentSection } from "@/types/navigation";

type NavigationContextType = {
  activeSection: ContentSection;
  setActiveSection: (section: ContentSection) => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<ContentSection>("catalog");

  return (
    <NavigationContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);

  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider.");
  }

  return context;
}
