import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import deviceIcon from "@/assets/device-icon.png";
import waterproofIcon from "@/assets/waterproof-icon.png";
import chargingIcon from "@/assets/charging-icon.png";
import appControlIcon from "@/assets/app-control-icon.png";

const features = [
  {
    title: "Wearable Design",
    description: "Adjustable strap fits over outerwear",
    icon: deviceIcon,
    details: "Designed for comfort and durability, the MAV's adjustable strap system adapts to any adventure gear, ensuring secure attachment without limiting mobility."
  },
  {
    title: "Waterproof Enclosure",
    description: "Protection from rain, snow, or sweat",
    icon: waterproofIcon,
    details: "Engineered with advanced sealing technology, the MAV withstands the harshest conditions while maintaining full functionality."
  },
  {
    title: "Magnetic Charging",
    description: "Convenience keeping your device sealed from the elements",
    icon: chargingIcon,
    details: "Innovative magnetic charging system eliminates the need for ports, maintaining complete weather resistance while providing effortless power management."
  },
  {
    title: "Endless App Control",
    description: "Seamless switching between your favorite media apps",
    icon: appControlIcon,
    details: "Compatible with hundreds of apps, from music streaming to navigation, giving you complete control over your digital experience."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Adventure
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every feature designed to enhance your outdoor experience with uncompromising reliability and intuitive control.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:transform hover:scale-[1.02] overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-feature rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-primary font-medium mb-3">{feature.description}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.details}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-gradient-card rounded-2xl p-12 border border-primary/20 shadow-card">
          <h3 className="text-3xl font-bold mb-4">Ready to Unleash Control?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of adventurers who've already discovered the freedom of seamless app control in any environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Order Your MAV
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="feature" size="xl">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};