import { Button } from "@/components/ui/button";
import heroImage from "@/assets/sticktag-hero.jpg";

export function HeroSection() {
  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center justify-center">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                StickTag
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl text-neon-teal font-light">
                Never Lost.
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              The world's thinnest smart tracker. Ultra-thin, adhesive technology that sticks to anything and connects to your phone via Bluetooth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="btn-hero text-lg px-8 py-4"
                onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Buy Now - $14.99
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-outline-teal text-lg px-8 py-4"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="StickTag - Ultra-thin tracking stickers"
                className="w-full h-auto animate-float glow-effect rounded-radius-lg"
              />
            </div>
            
            {/* Animated Background Elements */}
            <div className="absolute -inset-4 animate-glow-pulse rounded-radius-lg opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-teal/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}