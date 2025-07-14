import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">AT</span>
            </div>
            <span className="text-xl font-bold">AirTurn MAV</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#specs" className="text-foreground hover:text-primary transition-colors">
              Specs
            </a>
            <a href="#support" className="text-foreground hover:text-primary transition-colors">
              Support
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="hero" size="sm">
              Buy Now
            </Button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-primary/20 bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col py-4 space-y-2">
              <a href="#features" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#specs" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                Specs
              </a>
              <a href="#support" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                Support
              </a>
              <a href="#about" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                About
              </a>
              <div className="px-4 pt-4">
                <Button variant="hero" size="sm" className="w-full">
                  Buy Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};