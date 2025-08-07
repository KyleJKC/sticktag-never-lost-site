import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Shop", href: "#shop" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-wide">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-neon-teal rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full relative">
                <div className="absolute inset-1 border border-white rounded-full"></div>
              </div>
            </div>
            <span className="font-bold text-xl text-black">StickTag</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-black transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-hero">
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
              <div className="flex flex-col space-y-6 mt-6">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-gray-700 hover:text-black transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="btn-hero mt-4">
                  Shop Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}