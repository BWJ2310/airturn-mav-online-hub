import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">MAV Quick Start Guide</h1>
            <p className="text-xl text-muted-foreground">Everything you need to know about your AirTurn MAV</p>
          </div>

          {/* Product Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Product Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src="/lovable-uploads/cb138d97-a5af-4ddc-a4ed-5a56afb34ad2.png" 
                    alt="AirTurn MAV Button Layout" 
                    className="w-full max-w-md mx-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="space-y-6">
                  <div className="border rounded-lg p-4">
                    <Badge className="mb-2">Button 1</Badge>
                    <ul className="space-y-1 text-sm">
                      <li>• Tap: Volume up (Music/Podcast/Book)</li>
                      <li>• Tap: Answer call</li>
                      <li>• Hold: Summon voice assistant</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <Badge className="mb-2">Button 2</Badge>
                    <ul className="space-y-1 text-sm">
                      <li>• Tap: Previous Song (Music)</li>
                      <li>• Tap: Skip backward within track (Podcast/Book)</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <Badge className="mb-2">Button 3</Badge>
                    <ul className="space-y-1 text-sm">
                      <li>• Tap: Play/Pause</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <Badge className="mb-2">Button 4</Badge>
                    <ul className="space-y-1 text-sm">
                      <li>• Tap: Next Song (Music)</li>
                      <li>• Tap: Skip forward within track (Podcast/Book)</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <Badge className="mb-2">Button 5</Badge>
                    <ul className="space-y-1 text-sm">
                      <li>• Tap: Volume down / Decline call</li>
                      <li>• Press & Hold 2s: Power On</li>
                      <li>• Press & Hold 2s: Power Off</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Setup Instructions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Setup Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                  <p>Hold Button 5 for 2 seconds to turn on the MAV. LEDs will flash, indicating it's ready to pair.</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                  <p>On your device, open Bluetooth settings and tap "AirTurn MAV".</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                  <p>Launch a compatible app and begin using the MAV.</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                  <p>(Optional) Download the <em>AirTurn Manager</em> app from your app store for full customization options.</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm"><strong>Tip:</strong> For best performance, place the AirTurn MAV within 30 feet of your device with minimal obstructions.</p>
              </div>
            </CardContent>
          </Card>

          {/* Additional Instructions */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Disconnect and Reconnect to Another Device</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-secondary text-secondary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">1</div>
                  <p className="text-sm">Go to your phone's Settings → Bluetooth → Tap the info icon next to "AirTurn MAV" → Select "Forget This Device".</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-secondary text-secondary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">2</div>
                  <p className="text-sm">While the MAV is on, press and hold Button 5 for 12 seconds. LEDs will blink red to reset.</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-secondary text-secondary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">3</div>
                  <p className="text-sm">Turn the MAV on again by pressing Button 5.</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-secondary text-secondary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">4</div>
                  <p className="text-sm">Reconnect to your new device.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Reset Connection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-secondary text-secondary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">1</div>
                  <p className="text-sm">Forget "AirTurn MAV" in your Bluetooth settings.</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-secondary text-secondary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">2</div>
                  <p className="text-sm">While MAV is on, press & hold Button 5 for 12 seconds.</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-secondary text-secondary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">3</div>
                  <p className="text-sm">Red LEDs will flash three times, indicating pairing has been reset.</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-secondary text-secondary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">4</div>
                  <p className="text-sm">Reconnect the MAV with your desired device.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;