import HeroSection from "@/components/HeroSection";
import NewSection from "@/components/NewSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import StoryPreviewSection from "@/components/StoryPreviewSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <NewSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <StoryPreviewSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
