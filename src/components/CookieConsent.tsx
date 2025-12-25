import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { X, Cookie, Shield, Info } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-5">
      <Card className="max-w-4xl mx-auto p-6 shadow-2xl border-2">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Cookie & Privacy Notice</h3>
              <p className="text-sm text-muted-foreground">
                We care about your privacy and data
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDecline}
            className="flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            We use essential cookies and local storage to save your color themes
            and preferences. We also use Google Analytics and Google AdSense to
            improve our service and show relevant ads. By clicking "Accept", you
            consent to our use of these technologies.
          </p>

          {showDetails && (
            <div className="space-y-3 p-4 bg-muted/50 rounded-lg text-sm">
              <div>
                <h4 className="font-semibold flex items-center mb-1">
                  <Shield className="w-4 h-4 mr-2 text-green-600" />
                  Essential (Always Active)
                </h4>
                <p className="text-muted-foreground">
                  Local storage for saving your generated color themes,
                  preferences, and settings. This data never leaves your
                  browser.
                </p>
              </div>

              <div>
                <h4 className="font-semibold flex items-center mb-1">
                  <Info className="w-4 h-4 mr-2 text-blue-600" />
                  Analytics & Advertising
                </h4>
                <p className="text-muted-foreground">
                  Google Analytics (GA4) to understand how visitors use our site
                  and Google AdSense to display relevant ads. These services may
                  use cookies to track your interaction with our site and other
                  websites.
                </p>
              </div>

              <div className="pt-2 border-t">
                <p className="text-xs text-muted-foreground">
                  You can learn more in our{" "}
                  <a
                    href="/privacy-policy"
                    className="text-primary hover:underline"
                  >
                    Privacy Policy
                  </a>
                  . You can change your cookie preferences anytime by clearing
                  your browser data.
                </p>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={handleAccept} size="lg" className="flex-1">
              Accept All Cookies
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              size="lg"
              className="flex-1"
            >
              Essential Only
            </Button>
            <Button
              onClick={() => setShowDetails(!showDetails)}
              variant="ghost"
              size="lg"
            >
              {showDetails ? "Hide" : "Show"} Details
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
