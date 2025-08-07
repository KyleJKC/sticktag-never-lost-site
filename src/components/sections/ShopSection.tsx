import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import heroImage from "@/assets/sticktag-hero.jpg";

import singlePack from "@/assets/one.png";
import threePack from "@/assets/three.png";
import fivePack from "@/assets/five.png";

const products = [
  {
    id: 1,
    name: "Single StickTag",
    price: 14.99,
    originalPrice: null,
    quantity: "1 StickTag",
    description: "Perfect for trying out our revolutionary tracking technology",
    features: ["Ultra-thin 0.8mm design", "1-year battery life", "Bluetooth connectivity", "iOS & Android app"],
    badge: null,
    popular: false,
    image: singlePack
  },
  {
    id: 2, 
    name: "3-Pack Bundle",
    price: 39.99,
    originalPrice: 44.97,
    quantity: "3 StickTags",
    description: "Most popular choice - track your essential items",
    features: ["Ultra-thin 0.8mm design", "1-year battery life", "Bluetooth connectivity", "iOS & Android app", "Save $5"],
    badge: "Best Value",
    popular: true,
    image: threePack
  },
  {
    id: 3,
    name: "5-Pack Bundle", 
    price: 59.99,
    originalPrice: 74.95,
    quantity: "5 StickTags",
    description: "Maximum protection for all your valuable items",
    features: ["Ultra-thin 0.8mm design", "1-year battery life", "Bluetooth connectivity", "iOS & Android app", "Save $15"],
    badge: "Bundle & Save",
    popular: false,
    image: fivePack
  }
];

export function ShopSection() {
  const handleAddToCart = (product: typeof products[0]) => {
    // In a real app, this would handle cart functionality
    console.log('Adding to cart:', product);
    alert(`Added ${product.name} to cart! (Demo only)`);
  };

  return (
    <section id="shop" className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Choose Your StickTag Pack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Never lose anything important again. Select the perfect pack size for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`product-card relative animate-slide-up ${
                product.popular ? 'ring-2 ring-neon-teal scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge */}
              {product.badge && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-neon-teal text-black font-semibold px-4 py-1">
                  {product.badge}
                </Badge>
              )}
              
              {/* Product Image */}
              <div className="mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-radius"
                />
              </div>
              
              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {product.quantity}
                  </p>
                </div>
                
                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-black">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600">
                  {product.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-neon-teal flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <Button 
                  className={`w-full py-3 text-lg font-semibold ${
                    product.popular 
                      ? 'btn-hero' 
                      : 'btn-outline-teal'
                  }`}
                  onClick={() => handleAddToCart(product)}
                >
                  {product.popular ? 'Choose Best Value' : 'Add to Cart'}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="text-center mt-12 space-y-4">
          <div className="flex flex-wrap justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-neon-teal" />
              <span>Free shipping on all orders</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-neon-teal" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-neon-teal" />
              <span>1-year warranty included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}