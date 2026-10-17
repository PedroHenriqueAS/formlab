"use client";

import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";

import { useNavigation } from "@/providers/navigation-provider";
import type { ContentSection } from "@/types/navigation";

import { AboutSection } from "./about/about-section";
import { CatalogSection } from "./catalog-section";
import { CustomizeSection } from "./customize-section";

const animation = {
  initial: {
    opacity: 0,
    y: 16,
    filter: "blur(4px)",
  },

  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },

  exit: {
    opacity: 0,
    y: -10,
    filter: "blur(3px)",
  },
};

export function ContentSwitcher() {
  const { activeSection } = useNavigation();
  const sections: Record<ContentSection, ReactNode> = {
    catalog: <CatalogSection />,
    customize: <CustomizeSection />,
    about: <AboutSection />,
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={activeSection}
        variants={animation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {sections[activeSection]}
      </motion.div>
    </AnimatePresence>
  );
}
