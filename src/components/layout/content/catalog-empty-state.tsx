import { SearchX } from "lucide-react";

type CatalogEmptyStateProps = {
  onClearFilters: () => void;
};

export function CatalogEmptyState({ onClearFilters }: CatalogEmptyStateProps) {
  return (
    <section
      aria-label="No matching products"
      className="flex min-h-64 w-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#111212] px-5 py-10 text-center md:px-8"
    >
      <span className="mb-4 flex size-11 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/5 text-[#ff6738]">
        <SearchX aria-hidden="true" className="size-5" strokeWidth={1.5} />
      </span>
      <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
        No products found
      </h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/50">
        Nothing matched your current filters.
        <br />
        Try changing your size, color or price selection.
      </p>
      <button
        type="button"
        onClick={onClearFilters}
        className="mt-5 min-h-11 rounded-full border border-orange-500/40 bg-orange-500/10 px-5 py-2 text-sm font-medium text-[#ff875f] transition-colors hover:border-orange-500 hover:bg-orange-500/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
      >
        Clear filters
      </button>
    </section>
  );
}
