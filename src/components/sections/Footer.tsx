import { Instagram, Twitter } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#shop" },
    { name: "FAQ", href: "#faq" }
  ],
  support: [
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Contact", href: "#contact" },
    { name: "Help Center", href: "#" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Warranty", href: "#" },
    { name: "Cookie Policy", href: "#" }
  ]
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-wide">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Logo & Description */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-neon-teal rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 bg-black rounded-full relative">
                    <div className="absolute inset-1 border border-neon-teal rounded-full"></div>
                  </div>
                </div>
                <span className="font-bold text-2xl">StickTag</span>
              </div>
              
              <p className="text-xl text-neon-teal font-light">
                Never Lost.
              </p>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                The world's thinnest smart tracker. Revolutionary adhesive technology that ensures you never lose your valuable items again.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-neon-teal hover:text-black transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Product</h3>
              <ul className="space-y-4">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-neon-teal transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-6">Support</h3>
              <ul className="space-y-4">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-neon-teal transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-6">Legal</h3>
              <ul className="space-y-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-neon-teal transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-gray-800 py-8">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">Stay in the loop. Never lose anything again.</h3>
            <p className="text-gray-400">
              Get the latest updates, tips, and exclusive offers delivered to your inbox.
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2024 StickTag. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Made with ❤️ for people who hate losing things
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}