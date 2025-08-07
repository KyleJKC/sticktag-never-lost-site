import { Navigation } from "@/components/ui/navigation";
import { ShopSection } from "@/components/sections/ShopSection";
import { Footer } from "@/components/sections/Footer";

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ShopSection />
      </main>
      <Footer />
    </div>
  );
};

export default Shop;