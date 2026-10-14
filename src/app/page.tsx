import { CardList } from "@/components/layout/content/card-list";
import { Filter } from "@/components/layout/content/filter";
import { FilterSidebar } from "@/components/layout/content/sidebar";
import { Footer } from "@/components/layout/footer/footer";
import { Header } from "@/components/layout/header/header";
import { HeroSection } from "@/components/layout/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black font-sans">
      <Header />
      <main className="mx-auto w-full max-w-[1440px] px-4 py-2 md:px-6 xl:px-8">
        <HeroSection />
        <section aria-label="Product catalog" className="mt-6 grid min-w-0 gap-4 md:grid-cols-[11rem_minmax(0,1fr)] xl:grid-cols-[12rem_minmax(0,1fr)] xl:gap-6">
          <FilterSidebar />
          <div className="min-w-0">
            <Filter />
            <CardList />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
