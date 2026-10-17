import { HeroSection } from "@/components/layout/hero-section";
import { ContentSwitcher } from "@/components/layout/content/content-switcher";

export default function HomeContent() {
  return (
    <main className="mx-auto w-full max-w-[1440px] px-4 py-2 md:px-6 xl:px-8">
      <HeroSection />

      <ContentSwitcher />
    </main>
  );
}
