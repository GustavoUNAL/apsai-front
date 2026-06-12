import { NavBanner } from "@/components/nav/NavBanner";
import { Navigation } from "@/components/nav/Navigation";
import { HeroSection } from "@/components/hero/HeroSection";
import { FeatureSections } from "@/components/sections/FeatureSections";
import { CustomerStories } from "@/components/sections/CustomerStories";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <NavBanner />
      <Navigation />
      <main>
        <HeroSection />
        <FeatureSections />
        <CustomerStories />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
