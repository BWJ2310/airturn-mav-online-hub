import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Globe, Recycle, Users, Mail, Phone, MapPin, Info } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "15+ Years of Innovation",
      description: "Creating the best possible experience for customers since 2008, when we invented the first hands-free page turner."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Supporting hundreds of thousands of customers in 85 different countries worldwide."
    },
    {
      icon: Users,
      title: "Made by Musicians",
      description: "We are a team of musicians and tech enthusiasts who use the products we make."
    },
    {
      icon: Recycle,
      title: "Sustainability Focus",
      description: "Continuously innovating to reduce waste, with recycling programs and upgrade offers to keep electronics out of landfills."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-card backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary/20">
              <Info className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Company Information</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Freedom 
              <span className="text-foreground"> To Perform</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a team of musicians and tech enthusiasts that uses the products we make. 
              It is our goal to create the best possible experience for our customers so you 
              can experience the Freedom To Perform.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    From mobile mounting hardware to wireless app controllers, AirTurn offers tools 
                    for seamlessly executing your task the way YOU want. Our solutions are improving 
                    aspects of many industries, including music, industrial, scientific, medical, and more.
                  </p>
                  <p>
                    AirTurn enhances the convenience of app control. We created the first hands-free 
                    page turner in 2008, and continue to set the standard for Bluetooth pedal innovation.
                  </p>
                  <p>
                    Today, we specialize in fully-customizable Bluetooth pedals and ultra-portable stands. 
                    With a full range of controllers and stands, we are a one-stop shop for mobile music 
                    equipment and content creation gear.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Card className="border-primary/20 shadow-card">
                  <CardContent className="p-0">
                    <div className="bg-gradient-card rounded-lg overflow-hidden">
                      <img 
                        src="https://cdn.shopify.com/s/files/1/1109/4160/files/group_photo_web_1024x1024.jpg?v=1678469932"
                        alt="AirTurn team group photo"
                        className="w-full h-auto"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary">What Drives Us</h2>
              <p className="text-xl text-muted-foreground">
                Our commitment to quality, innovation, and sustainability
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-8">
                    <value.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing & Quality */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Made in USA</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Quality Manufacturing</h3>
                  <p className="text-muted-foreground mb-4">
                    All products except the goSTAND, SMC and BOOM are made in the USA. While some 
                    components come from other parts of the world, most plastics and circuit boards 
                    are made locally.
                  </p>
                  <p className="text-muted-foreground">
                    Finished goods are completed and tested in Boulder, Colorado by AirTurn staff.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Durable Materials</h3>
                  <p className="text-muted-foreground mb-4">
                    The blended plastics in all AirTurn products are virtually indestructible and 
                    REACH compliant. The mechanism in our products will last for millions of uses.
                  </p>
                  <p className="text-muted-foreground">
                    All electronic components meet RoHS standards for environmental safety.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary">Environmental Responsibility</h2>
              <p className="text-xl text-muted-foreground">
                Since inception, AirTurn has been continuously innovating new ways to reduce waste
              </p>
            </div>
            
            <div className="space-y-6 text-muted-foreground">
              <p>
                From office paper to defective products, recycling is a top priority. Reuse is also 
                high on AirTurn's priority list to reduce waste. All circuit boards come in anti-static 
                foam trays and master cartons that are returned to the factory to be refilled with zero 
                waste being generated in transport.
              </p>
              
              <p>
                All batteries are recycled with a certified battery recycling facility and customers 
                who do not have a local way to properly dispose of batteries may return them to AirTurn 
                for recycling. Almost all AirTurn electronic products are rechargeable, with batteries 
                lasting for 5 years or more.
              </p>
              
              <p>
                Customers can take advantage of several upgrade offers to further encourage waste reduction. 
                Older products may be traded in for new versions for 50% off the list price! Keeping 
                electronics and plastics out of landfill is important to AirTurn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary">Get In Touch</h2>
              <p className="text-xl text-muted-foreground">
                Our customer service team is here to help
              </p>
            </div>
            
            <Card className="border-primary/20 shadow-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-muted-foreground text-sm">
                      1668 Valtec Lane Unit G<br />
                      Boulder, CO 80301
                    </p>
                  </div>
                  
                  <div>
                    <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-muted-foreground text-sm">
                      888-247-1223
                    </p>
                  </div>
                  
                  <div>
                    <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground text-sm">
                      support@airturn.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;