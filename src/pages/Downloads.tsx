import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Download, FileText, Smartphone, Apple } from "lucide-react";
import { Link } from "react-router-dom";

const Downloads = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Downloads & Resources
              </h1>
              <p className="text-xl text-muted-foreground">
                Get the AirTurn MAV app and access warranty documents
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Mobile App Downloads */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-6 w-6 text-primary" />
                    AirTurn MAV App
                  </CardTitle>
                  <CardDescription>
                    Download the official AirTurn MAV app to control your device
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Button 
                      className="w-full justify-start gap-3 h-12" 
                      variant="outline"
                      asChild
                    >
                      <a 
                        href="https://apps.apple.com/app/airturn-mav" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Apple className="h-5 w-5" />
                        Download for iOS
                      </a>
                    </Button>
                    
                    <Button 
                      className="w-full justify-start gap-3 h-12" 
                      variant="outline"
                      asChild
                    >
                      <a 
                        href="https://play.google.com/store/apps/details?id=com.airturn.mav" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                        </svg>
                        Download for Android
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Warranty Documents */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-primary" />
                    Warranty Documents
                  </CardTitle>
                  <CardDescription>
                    Access warranty policy and registration forms
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Button 
                      className="w-full justify-start gap-3 h-12" 
                      variant="outline"
                      asChild
                    >
                      <Link to="/warranty-policy">
                        <FileText className="h-5 w-5" />
                        View Warranty Policy
                      </Link>
                    </Button>
                    
                    <Button 
                      className="w-full justify-start gap-3 h-12" 
                      variant="outline"
                      asChild
                    >
                      <Link to="/warranty">
                        <Download className="h-5 w-5" />
                        Register Your Device
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
                <p className="text-muted-foreground mb-4">
                  Visit our support page for troubleshooting guides and FAQs
                </p>
                <Button variant="outline" asChild>
                  <Link to="/support">
                    Go to Support
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Downloads;