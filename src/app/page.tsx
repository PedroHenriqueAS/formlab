import { Header } from "@/components/layout/header/header";
import { HeroSection } from "@/components/layout/hero-section";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans bg-black w-screen h-screen">
      <Header />
      <div className="w-full h-full bg-amber-400 px-6 py-2">
        <HeroSection />
      </div>
    </div>
  );
}
