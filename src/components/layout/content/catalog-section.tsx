// catalog-section.tsx

import { Filter } from "./filter";
import { CardList } from "./card-list";
import { cards } from "@/utils/product";
import { FilterSidebar } from "./sidebar";

export function CatalogSection() {
  return (
    <section
      aria-label="Product catalog"
      className="
        mt-6
        grid
        min-w-0
        gap-4
        md:grid-cols-[11rem_minmax(0,1fr)]
        xl:grid-cols-[12rem_minmax(0,1fr)]
        xl:gap-6
      "
    >
      <FilterSidebar />

      <div className="min-w-0">
        <Filter ProductsCount={cards.length} />
        <CardList />
      </div>
    </section>
  );
}