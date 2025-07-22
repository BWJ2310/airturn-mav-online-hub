import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Smartphone, Battery, Droplets, ArrowRight, Star, Check } from "lucide-react";
import { useState } from "react";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const productImages = [
    "/lovable-uploads/e8f70cd8-6ea4-4909-8fbd-cfb836ae9cd9.png",
    "/lovable-uploads/143eaf88-3a32-405a-bbbd-433bff7598eb.png",
    "/lovable-uploads/0dbfd9bb-d525-41b0-beb2-b5f0dde70033.png",
    "/lovable-uploads/a379ad39-fea3-46b5-a91b-dad051e768b5.png",
  ];

  const features = [
    { icon: Shield, title: "Rugged Design", description: "Built to withstand extreme conditions" },
    { icon: Droplets, title: "100% Waterproof", description: "Sealed from rain, snow, and sweat" },
    { icon: Battery, title: "Magnetic Charging", description: "No ports needed - stays sealed" },
    { icon: Smartphone, title: "Universal App Control", description: "Works with hundreds of apps" },
  ];

  const specs = [
    { label: "Connectivity", value: "Bluetooth 5.0" },
    { label: "Battery Life", value: "Up to 20 hours" },
    { label: "Charging", value: "Magnetic USB-C" },
    { label: "Water Rating", value: "IPX8 Waterproof" },
    { label: "Weight", value: "120g (4.2 oz)" },
    { label: "Dimensions", value: "3.5\" x 2.1\" x 0.8\"" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Product Section */}
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                <img 
                  src={productImages[selectedImage]} 
                  alt="AirTurn MAV" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-md overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? "border-primary" : "border-border"
                    }`}
                  >
                    <img src={image} alt={`MAV view ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-2">New Release</Badge>
                <h1 className="text-4xl font-bold mb-2 text-primary">AirTurn MAV</h1>
                <p className="text-xl text-muted-foreground mb-4">
                  Wearable App Controller for Extreme Adventures
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-muted-foreground">(127 reviews)</span>
                </div>
              </div>

              <div className="text-3xl font-bold text-primary">$149.99</div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium">Quantity:</label>
                  <div className="flex items-center border rounded-md">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 hover:bg-muted"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-x">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 hover:bg-muted"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button variant="hero" size="xl" className="w-full">
                    Add to Cart - ${(149.99 * quantity).toFixed(2)}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="xl" className="w-full">
                    Buy Now
                  </Button>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Free shipping on orders over $100</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>2-year manufacturer warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Built for Adventure</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every feature designed to enhance your outdoor experience with uncompromising reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 border-primary/20">
                <CardContent className="p-0">
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Technical Specifications</h2>
            
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {specs.map((spec, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center py-3">
                        <span className="font-medium">{spec.label}</span>
                        <span className="text-muted-foreground">{spec.value}</span>
                      </div>
                      {index < specs.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Product Description</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The AirTurn MAV is the ultimate wearable app controller designed for adventurers who refuse to compromise. 
                Whether you're scaling mountains, kayaking rapids, or cycling through challenging terrain, the MAV keeps 
                your favorite apps at your fingertips while your devices stay safely protected.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With its innovative magnetic charging system, the MAV maintains complete waterproof integrity without 
                compromising on convenience. The adjustable strap system adapts to any gear configuration, ensuring 
                secure attachment without limiting your mobility.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Compatible with hundreds of apps from music streaming to navigation, the MAV gives you seamless control 
                over your digital experience, no matter where your adventures take you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;