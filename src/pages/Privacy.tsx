import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Users, FileText, Mail, MapPin } from "lucide-react";

const Privacy = () => {
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
                Privacy 
              </span>{" "}
              <span className="text-foreground">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            
            {/* Information Collection */}
            <Card className="border-blue-800/30 bg-gradient-to-br from-blue-950/40 to-indigo-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  What Do We Do With Your Information?
                </CardTitle>
                <p className="text-white mt-2">How we collect and use your personal information</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-700/30">
                  <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Information We Collect
                  </h3>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Personal information during purchases (name, address, email)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">IP address automatically when browsing our site</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">App usage information for feedback and error logging</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Email marketing with your permission</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-700/30">
                  <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    How We Use Information
                  </h3>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Personalize your experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Improve customer service</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Improve our website and app</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Process transactions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Send periodic emails</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Administer contests and promotions</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Consent */}
            <Card className="border-green-800/30 bg-gradient-to-br from-green-950/40 to-emerald-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  Consent
                </CardTitle>
                <p className="text-white mt-2">Your consent to information collection and use</p>
              </CardHeader>
              <CardContent>
                <div className="bg-green-900/20 p-6 rounded-lg border border-green-700/30">
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Consent is implied when you provide personal information for transactions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">You can withdraw consent by contacting customerservice@airturn.com</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Disclosure & Third Parties */}
            <Card className="border-purple-800/30 bg-gradient-to-br from-purple-950/40 to-violet-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  Disclosure & Third-Party Services
                </CardTitle>
                <p className="text-white mt-2">When and how we share your information</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-700/30">
                  <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Information Disclosure
                  </h3>
                  <p className="text-white leading-relaxed">
                    We may disclose personal information if required by law or in cases of Terms of Service violations.
                  </p>
                </div>
                <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-700/30">
                  <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Third-Party Services
                  </h3>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">We may employ third-party companies for service facilitation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Third parties have access to personal information only as needed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">All providers are obligated not to misuse your information</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Security & Shopify */}
            <Card className="border-emerald-800/30 bg-gradient-to-br from-emerald-950/40 to-green-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Lock className="w-6 h-6 text-emerald-600" />
                  </div>
                  Security & Platform
                </CardTitle>
                <p className="text-white mt-2">How we protect your information</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-emerald-900/20 p-6 rounded-lg border border-emerald-700/30">
                  <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    Security Measures
                  </h3>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Industry best practices to protect personal information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">SSL encryption for data transmission</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">AES-256 encryption for credit card data</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-emerald-900/20 p-6 rounded-lg border border-emerald-700/30">
                  <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    Shopify Platform
                  </h3>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Our store is hosted on Shopify Inc.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Payment data encrypted through PCI-DSS standards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Follows payment gateway security requirements</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* AirTurn Manager App */}
            <Card className="border-cyan-800/30 bg-gradient-to-br from-cyan-950/40 to-teal-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-cyan-100 rounded-lg">
                    <Shield className="w-6 h-6 text-cyan-600" />
                  </div>
                  AirTurn Manager App
                </CardTitle>
                <p className="text-white mt-2">Privacy information specific to our mobile application</p>
              </CardHeader>
              <CardContent>
                <div className="bg-cyan-900/20 p-6 rounded-lg border border-cyan-700/30">
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Collects limited personally identifiable information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Uses third-party services that may collect user information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Requests location permissions for Bluetooth functionality (Android)</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Cookies & Other Terms */}
            <Card className="border-orange-800/30 bg-gradient-to-br from-orange-950/40 to-amber-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <FileText className="w-6 h-6 text-orange-600" />
                  </div>
                  Cookies & Additional Terms
                </CardTitle>
                <p className="text-white mt-2">Additional privacy considerations</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-orange-900/20 p-6 rounded-lg border border-orange-700/30">
                  <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Cookies
                  </h3>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">We use cookies to understand user behavior</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Cookies track session information and cart contents</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-900/20 p-6 rounded-lg border border-orange-700/30">
                  <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Age of Consent
                  </h3>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Users must be the age of majority in their jurisdiction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Parents/guardians can request removal of minor's information</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-900/20 p-6 rounded-lg border border-orange-700/30">
                  <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Changes to Privacy Policy
                  </h3>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">We reserve the right to modify this policy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Changes take effect immediately upon posting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Information may be transferred if company is acquired</span>
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
                  Questions & Contact Information
                </CardTitle>
                <p className="text-white mt-2">Contact our Privacy Compliance Officer</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-800/20 p-6 rounded-lg border border-slate-600/30">
                    <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                      <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                      Privacy Inquiries
                    </h3>
                    <div className="flex items-center gap-4 p-3 bg-slate-800/30 rounded-lg border border-slate-600/30 hover:bg-slate-700/40 transition-colors">
                      <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center shadow-sm">
                        <Mail className="w-5 h-5 text-slate-600" />
                      </div>
                      <div>
                        <p className="font-bold text-white">Privacy Compliance Officer</p>
                        <p className="text-white text-sm">customerservice@airturn.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-800/20 p-6 rounded-lg border border-slate-600/30">
                    <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                      <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                      Mailing Address
                    </h3>
                    <div className="flex items-start gap-4 p-3 bg-slate-800/30 rounded-lg border border-slate-600/30">
                      <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mt-1 shadow-sm">
                        <MapPin className="w-5 h-5 text-slate-600" />
                      </div>
                      <div className="text-slate-700 leading-relaxed">
                        <p className="font-bold text-white mb-1">AirTurn, Inc.</p>
                        <p className="text-white">1668 Valtec Lane, Unit G</p>
                        <p className="text-white">Boulder, Colorado 80301</p>
                        <p className="text-white">USA</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-slate-800/20 p-4 rounded-lg border border-slate-600/30">
                  <p className="text-white text-sm leading-relaxed">
                    <strong>Warning:</strong> Fraudulent credit card use is a federal crime and will be prosecuted to the fullest extent of the law.
                  </p>
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

export default Privacy;