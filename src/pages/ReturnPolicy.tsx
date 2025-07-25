import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, RotateCcw, AlertTriangle, Clock, Package, CreditCard, Gift, Mail, Phone, MapPin } from "lucide-react";

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-5 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-card backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary/20">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Legal Information</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-sky-500">
                Return 
              </span>{" "}
              <span className="text-foreground">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete information about our return process, timelines, and conditions for AirTurn products.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            
            {/* Return Requirements */}
            <Card className="border-green-800/30 bg-gradient-to-br from-green-950/40 to-emerald-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <RotateCcw className="w-6 h-6 text-green-600" />
                  </div>
                  Return Requirements
                </CardTitle>
                <p className="text-white mt-2">Key requirements for returning AirTurn products</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-900/20 p-6 rounded-lg border border-green-700/30">
                  <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    30-Day Return Window
                  </h3>
                  <p className="text-white leading-relaxed mb-4">
                    Items must be returned within 30 days of purchase date to be eligible for return.
                  </p>
                </div>
                <div className="bg-green-900/20 p-6 rounded-lg border border-green-700/30">
                  <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Item Condition Requirements
                  </h3>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Item must be unused and in original condition</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Must be in original packaging with all accessories</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Proof of purchase required</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Return Process */}
            <Card className="border-blue-800/30 bg-gradient-to-br from-blue-950/40 to-indigo-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Package className="w-6 h-6 text-blue-600" />
                  </div>
                  Return Process
                </CardTitle>
                <p className="text-white mt-2">Step-by-step guide to returning your AirTurn product</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-700/30">
                    <h3 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      How to Return an Item
                    </h3>
                    <ol className="space-y-5">
                      <li className="flex gap-4">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-lg">1</div>
                        <div className="pt-1">
                          <span className="text-white font-medium leading-relaxed">Email customerservice@airturn.com to obtain a Return Merchandise Authorization (RMA) number</span>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-lg">2</div>
                        <div className="pt-1">
                          <span className="text-white font-medium leading-relaxed">Package your item securely in original packaging with RMA number included</span>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-lg">3</div>
                        <div className="pt-1">
                          <span className="text-white font-medium leading-relaxed">Ship to: 1668 Valtec Lane Unit G, Boulder, CO 80301 (customer pays return shipping)</span>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-lg">4</div>
                        <div className="pt-1">
                          <span className="text-white font-medium leading-relaxed">Refund processed via original payment method after inspection</span>
                        </div>
                      </li>
                    </ol>
                  </div>
                  
                  <div className="bg-blue-900/30 border border-blue-700/40 p-5 rounded-lg">
                    <h4 className="font-bold mb-3 text-white flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Important Notes
                    </h4>
                    <ul className="space-y-2 text-white">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">Original shipping and handling charges are non-refundable</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">Use trackable shipping for items over $75</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">You'll receive email notification after return inspection</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Non-Returnable Items */}
            <Card className="border-red-800/30 bg-gradient-to-br from-red-950/40 to-rose-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  Non-Returnable Items
                </CardTitle>
                <p className="text-white mt-2">Items that cannot be returned for hygiene or technical reasons</p>
              </CardHeader>
              <CardContent>
                <div className="bg-red-900/20 p-6 rounded-lg border border-red-700/30">
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Gift cards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Downloadable software products</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Items with sanitation requirements (AirTurn Bite Switch)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Sale items are not eligible for refund</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Partial Refunds */}
            <Card className="border-amber-800/30 bg-gradient-to-br from-amber-950/40 to-yellow-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  Partial Refunds
                </CardTitle>
                <p className="text-white mt-2">Conditions that may result in partial refunds</p>
              </CardHeader>
              <CardContent>
                <div className="bg-amber-900/20 p-6 rounded-lg border border-amber-700/30">
                  <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    Partial Refunds May Apply For:
                  </h3>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Items with obvious signs of use</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Opened media items</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Items that arrive damaged or defective</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Returns submitted after the 30-day window</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Refund Processing */}
            <Card className="border-emerald-800/30 bg-gradient-to-br from-emerald-950/40 to-green-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <CreditCard className="w-6 h-6 text-emerald-600" />
                  </div>
                  Refund Processing
                </CardTitle>
                <p className="text-white mt-2">How refunds are processed and when to expect them</p>
              </CardHeader>
              <CardContent>
                <div className="bg-emerald-900/20 p-6 rounded-lg border border-emerald-700/30">
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Refunds are processed via the original payment method</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Email notification sent after return inspection is complete</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Processing time varies by payment method and financial institution</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Gift Returns */}
            <Card className="border-purple-800/30 bg-gradient-to-br from-purple-950/40 to-violet-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Gift className="w-6 h-6 text-purple-600" />
                  </div>
                  Gift Returns
                </CardTitle>
                <p className="text-white mt-2">Special conditions for returning gift purchases</p>
              </CardHeader>
              <CardContent>
                <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-700/30">
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Items marked as gifts receive a gift credit for the return value</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Items not marked as gifts are refunded to the original purchaser</span>
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
                    <Mail className="w-6 h-6 text-slate-600" />
                  </div>
                  Contact for Returns
                </CardTitle>
                <p className="text-white mt-2">Get help with your return process</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-800/20 p-6 rounded-lg border border-slate-600/30">
                    <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                      <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                      Return Support
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-3 bg-slate-800/30 rounded-lg border border-slate-600/30 hover:bg-slate-700/40 transition-colors">
                        <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center shadow-sm">
                          <Mail className="w-5 h-5 text-slate-600" />
                        </div>
                        <div>
                          <p className="font-bold text-white">Email Support</p>
                          <p className="text-white text-sm">support@airturn.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-3 bg-slate-800/30 rounded-lg border border-slate-600/30 hover:bg-slate-700/40 transition-colors">
                        <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center shadow-sm">
                          <Phone className="w-5 h-5 text-slate-600" />
                        </div>
                        <div>
                          <p className="font-bold text-white">Phone Support</p>
                          <p className="text-white text-sm">888-247-1223 (M-F 9am-5pm MST)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-800/20 p-6 rounded-lg border border-slate-600/30">
                    <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                      <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                      Return Address
                    </h3>
                    <div className="flex items-start gap-4 p-3 bg-slate-800/30 rounded-lg border border-slate-600/30">
                      <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mt-1 shadow-sm">
                        <MapPin className="w-5 h-5 text-slate-600" />
                      </div>
                      <div className="text-slate-700 leading-relaxed">
                        <p className="font-bold text-white mb-1">AirTurn, Inc.</p>
                        <p className="text-white">1668 Valtec Lane Unit G</p>
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

export default ReturnPolicy;