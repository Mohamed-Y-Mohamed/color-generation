import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Theme } from "@shared/schema";
import { Monitor, Tablet, Smartphone } from "lucide-react";

interface LivePreviewProps {
  themes: Theme[];
  selectedTheme?: Theme;
  onThemeSelect: (theme: Theme) => void;
}

export function LivePreview({ themes, selectedTheme, onThemeSelect }: LivePreviewProps) {
  const [deviceView, setDeviceView] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [previewMode, setPreviewMode] = useState<"light" | "dark">("light");

  if (!selectedTheme) {
    return (
      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Live UI Theme Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Generate themes to see live preview</p>
        </CardContent>
      </Card>
    );
  }

  const colors = selectedTheme.colors as any;
  const currentColors = colors[previewMode];

  const getDeviceWidth = () => {
    switch (deviceView) {
      case "mobile": return "375px";
      case "tablet": return "768px";
      default: return "100%";
    }
  };

  return (
    <Card className="mt-12">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Live UI Theme Preview</CardTitle>
          <div className="flex items-center space-x-4">
            <div className="flex bg-muted rounded-lg p-1">
              <Button
                size="sm"
                variant={deviceView === "desktop" ? "default" : "ghost"}
                onClick={() => setDeviceView("desktop")}
                className="px-3 py-1"
              >
                <Monitor className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant={deviceView === "tablet" ? "default" : "ghost"}
                onClick={() => setDeviceView("tablet")}
                className="px-3 py-1"
              >
                <Tablet className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant={deviceView === "mobile" ? "default" : "ghost"}
                onClick={() => setDeviceView("mobile")}
                className="px-3 py-1"
              >
                <Smartphone className="w-4 h-4" />
              </Button>
            </div>
            <Select
              value={selectedTheme.id}
              onValueChange={(value) => {
                const theme = themes.find(t => t.id === value);
                if (theme) onThemeSelect(theme);
              }}
            >
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {themes.map((theme) => (
                  <SelectItem key={theme.id} value={theme.id}>
                    {theme.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              onClick={() => setPreviewMode(previewMode === "light" ? "dark" : "light")}
            >
              {previewMode === "light" ? "Dark" : "Light"} Mode
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div
            className="mx-auto transition-all duration-300"
            style={{ width: getDeviceWidth() }}
          >
            {/* Mock Website Preview */}
            <div
              className="text-white p-4"
              style={{ backgroundColor: currentColors.primary }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center opacity-20"
                    style={{ backgroundColor: currentColors.background }}
                  >
                    <div className="w-4 h-4 bg-current rounded"></div>
                  </div>
                  <span className="font-semibold">YourBrand</span>
                </div>
                {deviceView !== "mobile" && (
                  <nav className="hidden md:flex items-center space-x-6 text-sm">
                    <a href="#" className="hover:opacity-80">Home</a>
                    <a href="#" className="hover:opacity-80">About</a>
                    <a href="#" className="hover:opacity-80">Services</a>
                    <a href="#" className="hover:opacity-80">Contact</a>
                  </nav>
                )}
                <Button
                  size="sm"
                  style={{
                    backgroundColor: currentColors.accent,
                    color: currentColors.background
                  }}
                  className="hover:opacity-90"
                >
                  Get Started
                </Button>
              </div>
            </div>

            <div
              className="p-8"
              style={{
                backgroundColor: currentColors.background,
                color: currentColors.text
              }}
            >
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold mb-4">Welcome to Our Platform</h1>
                  <p
                    className="text-lg"
                    style={{ color: currentColors.textSecondary }}
                  >
                    Experience the power of beautiful design with our color theme generator.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {[
                    { icon: "🎨", title: "Theme Generator", desc: "Create beautiful color schemes for your projects." },
                    { icon: "💻", title: "Export Code", desc: "Get ready-to-use CSS and component code." },
                    { icon: "📱", title: "Responsive", desc: "Perfect for all devices and screen sizes." }
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-lg"
                      style={{ backgroundColor: currentColors.backgroundSecondary }}
                    >
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-xl"
                        style={{ backgroundColor: currentColors.primary }}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p
                        className="text-sm"
                        style={{ color: currentColors.textSecondary }}
                      >
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  className="p-6 rounded-lg"
                  style={{ backgroundColor: currentColors.backgroundSecondary }}
                >
                  <h3 className="text-lg font-semibold mb-4">Contact Form</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      style={{
                        backgroundColor: currentColors.background,
                        borderColor: currentColors.border,
                        color: currentColors.text
                      }}
                    />
                    <Input
                      placeholder="Your Email"
                      style={{
                        backgroundColor: currentColors.background,
                        borderColor: currentColors.border,
                        color: currentColors.text
                      }}
                    />
                    <Textarea
                      placeholder="Your Message"
                      className="md:col-span-2 h-24 resize-none"
                      style={{
                        backgroundColor: currentColors.background,
                        borderColor: currentColors.border,
                        color: currentColors.text
                      }}
                    />
                    <Button
                      className="md:col-span-2"
                      style={{
                        backgroundColor: currentColors.primary,
                        color: currentColors.background
                      }}
                    >
                      Send Message
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
