import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    toggleCart,
    getTotalItems
  } = useCart();
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button  className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <a href="/" className="flex items-center gap-2">
            <img src="/lovable-uploads/1cc4e6f9-3928-49d8-bde3-6600dab84be6.png" alt="AirTurn Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold">AirTurn MAV</span>
            </a>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#specs" className="text-foreground hover:text-primary transition-colors">
              Specs
            </a>
            <a href="/support" className="text-foreground hover:text-primary transition-colors">
              Support
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="/downloads" className="text-foreground hover:text-primary transition-colors">
              Downloads
            </a>
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleCart} className="relative hover:bg-primary/20">
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>}
            </Button>
            <Button variant="hero" size="sm" className="bg-slate-50" asChild>
              <a href="/product">Get It Now</a>
            </Button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleCart} className="relative hover:bg-primary/20">
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden border-t border-primary/20 bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col py-4 space-y-2">
              <a href="#features" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#specs" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                Specs
              </a>
              <a href="/support" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                Support
              </a>
              <a href="/about" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="/downloads" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                Downloads
              </a>
              <div className="px-4 pt-4">
                <Button variant="hero" size="sm" className="w-full" asChild>
                  <a href="/product">Buy Now</a>
                </Button>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};