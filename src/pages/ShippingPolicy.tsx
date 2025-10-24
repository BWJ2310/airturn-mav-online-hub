import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Clock, Globe, Package, AlertCircle, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-5 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-card backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary/20">
              <Truck className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Shipping Information</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-sky-500">
                Shipping 
              </span>{" "}
              <span className="text-foreground">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fast, reliable shipping options for all AirTurn products with same-day processing available.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-8">
            
            {/* Same-Day Shipping */}
            <Card className="border-emerald-800/30 bg-gradient-to-br from-emerald-950/40 to-green-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  Same-Day Shipping
                </CardTitle>
                <p className="text-white mt-2">Get your order shipped the same day</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-emerald-900/20 p-6 rounded-lg border border-emerald-700/30">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <p className="text-white font-semibold text-lg">Orders placed by 2:00 PM MST ship the same day!</p>
                    </div>
                    <ul className="space-y-3 text-white ml-5">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">Available Monday through Friday</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">Orders after 2:00 PM MST ship the next business day</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">Saturday delivery available - call to arrange</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Methods */}
            <Card className="border-blue-800/30 bg-gradient-to-br from-blue-950/40 to-indigo-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Package className="w-6 h-6 text-blue-600" />
                  </div>
                  Shipping Methods
                </CardTitle>
                <p className="text-white mt-2">Choose the shipping option that works best for you</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-900/20 p-5 rounded-lg border border-blue-700/30">
                    <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Flat Rate Shipping
                    </h3>
                    <ul className="space-y-3 text-white">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">2-5 business days delivery</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">Shipped via FedEx, UPS, or USPS</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">Most economical option</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-900/20 p-5 rounded-lg border border-blue-700/30">
                    <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Expedited Shipping
                    </h3>
                    <ul className="space-y-3 text-white">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">Typically 2 business days</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">Faster delivery option</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">Ideal for urgent needs</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-900/20 p-5 rounded-lg border border-blue-700/30">
                    <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Standard Shipping
                    </h3>
                    <ul className="space-y-3 text-white">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">2-5 business days delivery</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">Reliable carrier service</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">Tracking included</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-900/20 p-5 rounded-lg border border-blue-700/30">
                    <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Priority Shipping
                    </h3>
                    <ul className="space-y-3 text-white">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">2-3 business days delivery</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">Alaska and Hawaii only</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">Special handling for remote locations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* International Shipping */}
            <Card className="border-orange-800/30 bg-gradient-to-br from-orange-950/40 to-amber-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Globe className="w-6 h-6 text-orange-600" />
                  </div>
                  International Shipping
                </CardTitle>
                <p className="text-white mt-2">Information for customers outside the United States</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-orange-900/20 p-6 rounded-lg border border-orange-700/30">
                    <div className="flex items-start gap-3 mb-4">
                      <AlertCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                      <p className="text-white font-semibold text-lg">
                        AirTurn is not currently shipping outside the USA
                      </p>
                    </div>
                    
                    <div className="space-y-4 mt-6">
                      <h3 className="font-bold text-white flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        For International Orders:
                      </h3>
                      <ul className="space-y-3 text-white ml-5">
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">We recommend purchasing from local resellers in your country</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">Visit our website to find authorized international distributors</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">International customers are responsible for customs, duties, and taxes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Information */}
            <Card className="border-red-800/30 bg-gradient-to-br from-red-950/40 to-rose-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  Important Information
                </CardTitle>
                <p className="text-white mt-2">Please note these important shipping details</p>
              </CardHeader>
              <CardContent>
                <div className="bg-red-900/20 p-6 rounded-lg border border-red-700/30">
                  <ul className="space-y-4 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">
                        <strong>Carrier Delays:</strong> AirTurn is not responsible for late shipments due to carrier delays
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">
                        <strong>Order Processing:</strong> Orders are processed in the order they are received
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">
                        <strong>Tracking Information:</strong> You will receive tracking information once your order ships
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">
                        <strong>Address Accuracy:</strong> Please ensure your shipping address is complete and accurate
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-slate-700/30 bg-gradient-to-br from-slate-900/40 to-gray-900/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <Truck className="w-6 h-6 text-slate-600" />
                  </div>
                  Shipping Support
                </CardTitle>
                <p className="text-white mt-2">Contact us for shipping inquiries and special requests</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-800/20 p-6 rounded-lg border border-slate-600/30">
                    <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                      <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                      Shipping Inquiries
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-3 bg-slate-800/30 rounded-lg border border-slate-600/30 hover:bg-slate-700/40 transition-colors">
                        <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center shadow-sm">
                          <Phone className="w-5 h-5 text-slate-600" />
                        </div>
                        <div>
                          <p className="font-bold text-white">Phone</p>
                          <p className="text-white text-sm">+1 (888) 247-1223</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-3 bg-slate-800/30 rounded-lg border border-slate-600/30 hover:bg-slate-700/40 transition-colors">
                        <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center shadow-sm">
                          <Mail className="w-5 h-5 text-slate-600" />
                        </div>
                        <div>
                          <p className="font-bold text-white">Email</p>
                          <p className="text-white text-sm">support@airturn.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-800/20 p-6 rounded-lg border border-slate-600/30">
                    <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                      <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                      Shipping Address
                    </h3>
                    <div className="flex items-start gap-4 p-3 bg-slate-800/30 rounded-lg border border-slate-600/30">
                      <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mt-1 shadow-sm">
                        <MapPin className="w-5 h-5 text-slate-600" />
                      </div>
                      <div className="leading-relaxed">
                        <p className="font-bold text-white mb-1">AirTurn, Inc.</p>
                        <p className="text-white">1668 Valtec Lane, Unit G</p>
                        <p className="text-white">Boulder, Colorado 80301</p>
                        <p className="text-white">USA</p>
                      </div>
                    </div>
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

export default ShippingPolicy;