"use client";

import { AnimatePresence, motion, useIsPresent, useReducedMotion } from "motion/react";
import { forwardRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Card } from "./card";
import { CatalogEmptyState } from "./catalog-empty-state";
import type { CatalogProduct } from "./catalog-filters";

type CardListProps = {
  products: readonly CatalogProduct[];
  onClearFilters: () => void;
};

export function CardList({ products, onClearFilters }: CardListProps) {
  const hasProducts = products.length > 0;

  return (
    <div
      className={cn(
        "mt-4 grid min-w-0 gap-6 xl:gap-4",
        hasProducts && "xl:grid-cols-[minmax(0,1fr)_8rem]",
      )}
    >
      <div className="relative grid min-w-0 grid-cols-1 content-start gap-3 min-[360px]:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(max(12rem,calc((100%_-_2rem)/3)),1fr))] md:gap-4 xl:grid-cols-4">
        <AnimatePresence initial={false} mode="popLayout">
          {hasProducts ? (
            products.map((card) => (
              <AnimatedCatalogItem key={card.id}>
                <Card {...card} />
              </AnimatedCatalogItem>
            ))
          ) : (
            <AnimatedCatalogItem key="empty" className="col-span-full">
              <CatalogEmptyState onClearFilters={onClearFilters} />
            </AnimatedCatalogItem>
          )}
        </AnimatePresence>
      </div>

      {hasProducts && (
        <div
          role="img"
          aria-label="FormLab promotional artwork"
          className="mx-auto aspect-[1/2] w-full max-w-64 self-start rounded-2xl bg-cover bg-center bg-no-repeat md:max-w-72 xl:mt-20 xl:max-w-none xl:rounded-r-none"
          style={{
            backgroundImage: `url(/side-banner.png)`,
          }}
        />
      )}
    </div>
  );
}

type AnimatedCatalogItemProps = {
  children: ReactNode;
  className?: string;
};

const AnimatedCatalogItem = forwardRef<HTMLDivElement, AnimatedCatalogItemProps>(
  function AnimatedCatalogItem({ children, className }, ref) {
    const isPresent = useIsPresent();
    const reducedMotion = useReducedMotion();

    return (
      <motion.div
        ref={ref}
        layout={reducedMotion ? false : "position"}
        initial={reducedMotion ? false : { opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{
          opacity: 0,
          y: reducedMotion ? 0 : -4,
          transition: { duration: reducedMotion ? 0 : 0.14 },
        }}
        transition={{
          duration: reducedMotion ? 0 : 0.22,
          ease: "easeOut",
          layout: { duration: reducedMotion ? 0 : 0.28, ease: "easeOut" },
        }}
        inert={!isPresent}
        aria-hidden={!isPresent}
        className={cn("relative min-w-0 hover:z-10 focus-within:z-10", className)}
      >
        {children}
      </motion.div>
    );
  },
);
