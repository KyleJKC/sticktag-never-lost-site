import { Smartphone, Layers, Zap, Bell } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Ultra Thin Design",
    description: "Just 0.8mm thick - thinner than a credit card. Fits anywhere without adding bulk."
  },
  {
    icon: Zap,
    title: "Sticks to Anything",
    description: "Advanced adhesive technology bonds to any surface. Perfect for wallets, remotes, keys, and more."
  },
  {
    icon: Smartphone,
    title: "App-Connected via BLE",
    description: "Seamlessly connects to your smartphone through our intuitive app using Bluetooth Low Energy."
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Get notified when you leave your tagged items behind. Never lose anything important again."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Why Choose StickTag?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary tracking technology that's impossibly thin, incredibly smart, and unbelievably easy to use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="card-premium p-8 text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-neon-teal/10 rounded-radius-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-neon-teal/20 transition-colors">
                <feature.icon className="w-8 h-8 text-neon-teal" />
              </div>
              
              <h3 className="text-xl font-semibold text-black mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}