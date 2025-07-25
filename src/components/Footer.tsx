import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-primary/20">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="bg-gradient-card rounded-2xl p-8 border border-primary/20 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest updates on MAV features, firmware updates, and adventure stories from our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-background border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <Button variant="hero" size="lg" className="bg-slate-50">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/lovable-uploads/1cc4e6f9-3928-49d8-bde3-6600dab84be6.png" alt="AirTurn Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold">AirTurn MAV</span>
            </div>
            <p className="text-muted-foreground">
              Adventure Ready. Control Unleashed. The ultimate wearable controller for every outdoor enthusiast.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product</h3>
            <div className="space-y-2">
              <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#specs" className="block text-muted-foreground hover:text-primary transition-colors">
                Specifications
              </a>
              <a href="#compatibility" className="block text-muted-foreground hover:text-primary transition-colors">
                Compatibility
              </a>
              <a href="/warranty" className="block text-muted-foreground hover:text-primary transition-colors">
                Warranty Registration
              </a>
              <a href="/warranty-policy" className="block text-muted-foreground hover:text-primary transition-colors">
                Warranty Policy
              </a>
            </div>
          </div>
          
          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-2">
              <a href="/support" className="block text-muted-foreground hover:text-primary transition-colors">
                Setup Guide
              </a>
              <a href="#troubleshooting" className="block text-muted-foreground hover:text-primary transition-colors">
                Troubleshooting
              </a>
              <a href="/downloads" className="block text-muted-foreground hover:text-primary transition-colors">
                Downloads
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">1 (888) 247-1223</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">support@airturn.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">1668 Valtec Lane, Unit G, Boulder, Colorado, USA 80301</span>
              </div>
            </div>
          </div>
        </div>
        
        
        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 AirTurn. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="/returns" className="text-muted-foreground hover:text-primary transition-colors">
              Return Policy
            </a>
          </div>
        </div>
      </div>
    </footer>;
};