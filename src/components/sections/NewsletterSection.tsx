import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would submit to a newsletter service
      console.log('Newsletter signup:', email);
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="section-padding bg-neon-teal">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-neon-teal" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Get 10% Off Your First Order
            </h2>
            
            <p className="text-xl text-black/80 max-w-2xl mx-auto">
              Stay in the loop. Never lose anything again. Get exclusive deals, tips, and be the first to know about new StickTag features.
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white border-2 border-transparent focus:border-black text-black placeholder:text-gray-500 h-12"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-black text-neon-teal hover:bg-black/90 font-semibold px-8 py-3 h-12 whitespace-nowrap"
                >
                  Get 10% Off
                </Button>
              </form>
            ) : (
              <div className="bg-black/10 rounded-radius p-6 max-w-md mx-auto">
                <p className="text-black font-semibold text-lg">
                  🎉 Success! Check your email for your 10% discount code.
                </p>
              </div>
            )}
            
            <p className="text-sm text-black/60">
              No spam, ever. Unsubscribe anytime. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}