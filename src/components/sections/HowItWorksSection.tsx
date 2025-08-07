import { Smartphone } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Stick It",
    description: "Peel and stick StickTag to any valuable item - wallet, keys, laptop, or anything you can't afford to lose."
  },
  {
    number: "02", 
    title: "Connect via App",
    description: "Download the StickTag app and connect your device via Bluetooth. Setup takes less than 30 seconds."
  },
  {
    number: "03",
    title: "Locate Anytime",
    description: "Track your items in real-time, get separation alerts, and make them ring when you can't find them."
  }
];

export function HowItWorksSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to never lose anything again
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-6 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-neon-teal rounded-radius flex items-center justify-center">
                    <span className="text-black font-bold text-lg">{step.number}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-black">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-[600px] bg-black rounded-[50px] p-4 shadow-large">
                <div className="w-full h-full bg-white rounded-[42px] relative overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white p-8 flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-8">
                      <span className="text-sm font-medium">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-black rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* App Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-black mb-2">StickTag</h3>
                      <p className="text-gray-600">3 devices connected</p>
                    </div>
                    
                    {/* Tracked Items */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-white rounded-radius border border-gray-200 shadow-soft">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="font-medium">Wallet</span>
                        </div>
                        <span className="text-sm text-gray-500">Nearby</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-white rounded-radius border border-gray-200 shadow-soft">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="font-medium">Keys</span>
                        </div>
                        <span className="text-sm text-gray-500">Nearby</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-white rounded-radius border border-neon-teal shadow-soft">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-neon-teal rounded-full animate-pulse"></div>
                          <span className="font-medium">Laptop</span>
                        </div>
                        <span className="text-sm text-neon-teal">Last seen: Home</span>
                      </div>
                    </div>
                    
                    {/* Find Button */}
                    <div className="mt-auto">
                      <button className="w-full bg-neon-teal text-black font-semibold py-4 rounded-radius">
                        Make It Ring
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-neon-teal/20 rounded-full blur-3xl animate-glow-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}