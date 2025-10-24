import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, AlertTriangle, Users, CreditCard, Link2, MessageSquare, Globe, Scale, Mail } from "lucide-react";

const TermsOfService = () => {
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
                Terms of 
              </span>{" "}
              <span className="text-foreground">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete terms and conditions governing the use of AirTurn's website and services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-8">
            
            {/* Online Store Terms */}
            <Card className="border-blue-800/30 bg-gradient-to-br from-blue-950/40 to-indigo-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  Online Store Terms
                </CardTitle>
                <p className="text-white mt-2">Terms governing the use of our online store</p>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-700/30">
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Users must be of legal age to use our website and services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Products cannot be used for illegal or unauthorized purposes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Prohibited from transmitting viruses or destructive code</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Service hosted on Shopify platform</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* General Conditions */}
            <Card className="border-purple-800/30 bg-gradient-to-br from-purple-950/40 to-violet-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Scale className="w-6 h-6 text-purple-600" />
                  </div>
                  General Conditions
                </CardTitle>
                <p className="text-white mt-2">General terms and conditions of service</p>
              </CardHeader>
              <CardContent>
                <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-700/30">
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">We reserve the right to refuse service to anyone for any reason</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Content may be transferred unencrypted over various networks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Prohibited from reproducing or exploiting any part of the service without permission</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Information Accuracy & Service Modifications */}
            <Card className="border-orange-800/30 bg-gradient-to-br from-orange-950/40 to-amber-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                  </div>
                  Information Accuracy & Service Modifications
                </CardTitle>
                <p className="text-white mt-2">Terms regarding information accuracy and service changes</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-orange-900/20 p-6 rounded-lg border border-orange-700/30">
                  <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Information Accuracy
                  </h3>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Not responsible for inaccurate or incomplete information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Historical information provided for reference only</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Right to modify site content at any time</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-900/20 p-6 rounded-lg border border-orange-700/30">
                  <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Service Modifications
                  </h3>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Prices are subject to change without notice</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Can modify or discontinue service without notice</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Products & Billing */}
            <Card className="border-green-800/30 bg-gradient-to-br from-green-950/40 to-emerald-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CreditCard className="w-6 h-6 text-green-600" />
                  </div>
                  Products & Billing
                </CardTitle>
                <p className="text-white mt-2">Terms regarding products and billing information</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-900/20 p-6 rounded-lg border border-green-700/30">
                  <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Products & Services
                  </h3>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Some products may be exclusively available online</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Product quantities may be limited</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Right to limit sales quantities to any person or region</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-900/20 p-6 rounded-lg border border-green-700/30">
                  <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Billing & Account Information
                  </h3>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Can refuse or cancel orders at our discretion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Requires accurate and complete account information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Payment methods include credit card, PayPal, and Amazon Pay</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Services & Links */}
            <Card className="border-cyan-800/30 bg-gradient-to-br from-cyan-950/40 to-teal-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-cyan-100 rounded-lg">
                    <Link2 className="w-6 h-6 text-cyan-600" />
                  </div>
                  Third-Party Services & Links
                </CardTitle>
                <p className="text-white mt-2">Terms regarding third-party tools and external links</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-cyan-900/20 p-6 rounded-lg border border-cyan-700/30">
                  <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    Optional Tools
                  </h3>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Provides access to third-party tools for convenience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">No liability for third-party tool usage or performance</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-cyan-900/20 p-6 rounded-lg border border-cyan-700/30">
                  <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    Third-Party Links
                  </h3>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Not responsible for third-party website content or policies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Users should review third-party policies before engaging</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* User Content & Comments */}
            <Card className="border-indigo-800/30 bg-gradient-to-br from-indigo-950/40 to-purple-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-indigo-600" />
                  </div>
                  User Comments & Submissions
                </CardTitle>
                <p className="text-white mt-2">Terms regarding user-generated content and submissions</p>
              </CardHeader>
              <CardContent>
                <div className="bg-indigo-900/20 p-6 rounded-lg border border-indigo-700/30">
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">We can edit and use submitted content for promotional purposes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">May monitor and remove inappropriate or offensive content</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Personal information handling governed by Privacy Policy</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Prohibited Uses */}
            <Card className="border-red-800/30 bg-gradient-to-br from-red-950/40 to-rose-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  Prohibited Uses
                </CardTitle>
                <p className="text-white mt-2">Activities that are strictly prohibited when using our services</p>
              </CardHeader>
              <CardContent>
                <div className="bg-red-900/20 p-6 rounded-lg border border-red-700/30">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white mb-4">Illegal Activities</h4>
                      <ul className="space-y-3 text-white">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">Using services for illegal purposes</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">Harassment or abuse of others</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">Transmitting spam or unsolicited emails</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white mb-4">Technical Violations</h4>
                      <ul className="space-y-3 text-white">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">Unauthorized system access attempts</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">Interfering with service functionality</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">Violating intellectual property rights</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimers & Liability */}
            <Card className="border-amber-800/30 bg-gradient-to-br from-amber-950/40 to-yellow-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <Shield className="w-6 h-6 text-amber-600" />
                  </div>
                  Disclaimers & Liability
                </CardTitle>
                <p className="text-white mt-2">Important disclaimers and liability limitations</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-amber-900/20 p-6 rounded-lg border border-amber-700/30">
                  <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    Disclaimer of Warranties
                  </h3>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">No guarantee of uninterrupted or error-free service</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Services provided "as is" without warranties</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-900/20 p-6 rounded-lg border border-amber-700/30">
                  <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    Limitation of Liability
                  </h3>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Limited liability for damages arising from service use</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">User agrees to protect AirTurn from third-party claims</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Legal Terms */}
            <Card className="border-slate-700/30 bg-gradient-to-br from-slate-900/40 to-gray-900/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <Globe className="w-6 h-6 text-slate-600" />
                  </div>
                  Legal Terms & Contact
                </CardTitle>
                <p className="text-white mt-2">Additional legal terms and contact information</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-slate-800/20 p-6 rounded-lg border border-slate-600/30">
                  <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                    Additional Legal Terms
                  </h3>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Terms are severable - invalid provisions don't affect others</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Agreement can be terminated by either party</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Governed by applicable laws and jurisdiction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">Terms may be updated - changes take effect immediately</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800/20 p-6 rounded-lg border border-slate-600/30">
                  <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                    Contact for Questions
                  </h3>
                  <div className="flex items-center gap-4 p-3 bg-slate-800/30 rounded-lg border border-slate-600/30 hover:bg-slate-700/40 transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center shadow-sm">
                      <Mail className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <p className="font-bold text-white">Terms of Service Questions</p>
                      <p className="text-white text-sm">customerservice@airturn.com</p>
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

export default TermsOfService;