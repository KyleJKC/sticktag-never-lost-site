import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ShopSection } from "@/components/sections/ShopSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ComparisonSection />
        <TestimonialsSection />
        <ShopSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
