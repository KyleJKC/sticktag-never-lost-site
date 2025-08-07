import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah L.",
    role: "Business Traveler",
    content: "Lost my passport once during a business trip. Never again. StickTag is a lifesaver - so thin I forget it's there until I need it.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c3a2?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Marcus R.",
    role: "Tech Professional", 
    content: "I've tried every tracker on the market. StickTag is the first one that actually fits in my wallet without making it bulky. Genius design.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily K.",
    role: "Working Mom",
    content: "My keys, my laptop, my kids' tablets - everything has a StickTag now. The peace of mind is worth every penny. Best $40 I've ever spent.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who never lose their valuables
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="card-premium p-8 text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-neon-teal text-neon-teal" />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-gray-700 mb-6 text-lg italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              {/* Author */}
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-black text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-gray-600">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-neon-teal text-neon-teal" />
              ))}
            </div>
            <span className="text-lg">
              <strong>4.9/5</strong> from 2,847 reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}