import { SiteHeader } from "@/components/nav/SiteHeader";
import { HeroSection } from "@/components/hero/HeroSection";
import { FeatureSections } from "@/components/sections/FeatureSections";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeatureSections />
        <RoadmapSection />
        <CommunitySection />
        <TeamSection />
        <ResearchSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
