import PageContainer from "@/components/shared/PageContainer";
import HeroSection from "@/components/landing/HeroSection";
import Instructions from "@/components/landing/Instructions";
import Features from "@/components/landing/Features";

export default function Home() {
  return (
    <PageContainer>
      <HeroSection />
      <Instructions />
      <Features />
    </PageContainer>
  );
}
