import { CardList } from "@/components/layout/content/card-list";
import { Filter } from "@/components/layout/content/filter";
import { FilterSidebar } from "@/components/layout/content/sidebar";
import { Header } from "@/components/layout/header/header";
import { HeroSection } from "@/components/layout/hero-section";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans bg-black w-screen h-screen">
      <Header />
      <div className="w-full h-full px-6 py-2">
        <HeroSection />
        <section className="grid grid-cols-6 gap-4 mt-3 h-screen">
          <div className="col-span-1 h-screen rounded-lg">
            <FilterSidebar />
          </div>
          <div className="col-span-5 h-screen">
            <Filter />
            <CardList />
          </div>
        </section>
      </div>
    </div>
  );
}
