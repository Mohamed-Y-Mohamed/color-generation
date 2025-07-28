import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Theme } from "../../shared/schema";
import { Monitor, Tablet, Smartphone, Menu } from "lucide-react";

interface LivePreviewProps {
  themes: Theme[];
  selectedTheme?: Theme;
  onThemeSelect: (theme: Theme) => void;
}

export function LivePreview({
  themes,
  selectedTheme,
  onThemeSelect,
}: LivePreviewProps) {
  const [deviceView, setDeviceView] = useState<"desktop" | "tablet" | "mobile">(
    "desktop"
  );
  const [previewMode, setPreviewMode] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!selectedTheme) {
    return (
      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Live UI Theme Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Generate themes to see live preview
          </p>
        </CardContent>
      </Card>
    );
  }

  const colors = selectedTheme.colors as any;
  const currentColors = colors[previewMode];

  const getDeviceStyles = () => {
    switch (deviceView) {
      case "mobile":
        return {
          width: "375px",
          minHeight: "667px",
          margin: "0 auto",
        };
      case "tablet":
        return {
          width: "768px",
          minHeight: "1024px",
          margin: "0 auto",
        };
      default:
        return {
          width: "100%",
          minHeight: "600px",
        };
    }
  };

  return (
    <Card className="mt-12">
      <CardHeader>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <CardTitle className="text-lg lg:text-xl">
            Live UI Theme Preview
          </CardTitle>

          {/* Controls - Responsive Layout */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-4">
            {/* Device View Toggle */}
            <div className="flex bg-muted rounded-lg p-1">
              <Button
                size="sm"
                variant={deviceView === "desktop" ? "default" : "ghost"}
                onClick={() => {
                  setDeviceView("desktop");
                  setMobileMenuOpen(false);
                }}
                className="px-2 py-1 text-xs lg:px-3 lg:text-sm"
              >
                <Monitor className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden sm:ml-1 sm:inline">Desktop</span>
              </Button>
              <Button
                size="sm"
                variant={deviceView === "tablet" ? "default" : "ghost"}
                onClick={() => {
                  setDeviceView("tablet");
                  setMobileMenuOpen(false);
                }}
                className="px-2 py-1 text-xs lg:px-3 lg:text-sm"
              >
                <Tablet className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden sm:ml-1 sm:inline">Tablet</span>
              </Button>
              <Button
                size="sm"
                variant={deviceView === "mobile" ? "default" : "ghost"}
                onClick={() => {
                  setDeviceView("mobile");
                  setMobileMenuOpen(false);
                }}
                className="px-2 py-1 text-xs lg:px-3 lg:text-sm"
              >
                <Smartphone className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden sm:ml-1 sm:inline">Mobile</span>
              </Button>
            </div>

            {/* Theme Selector */}
            <Select
              value={selectedTheme.id}
              onValueChange={(value) => {
                const theme = themes.find((t) => t.id === value);
                if (theme) onThemeSelect(theme);
              }}
            >
              <SelectTrigger className="w-full sm:w-48">
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

            {/* Mode Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setPreviewMode(previewMode === "light" ? "dark" : "light")
              }
              className="text-xs lg:text-sm"
            >
              {previewMode === "light" ? "🌙 Dark" : "☀️ Light"} Mode
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-3 lg:p-6">
        <div className="border-2 border-border rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
          <div
            className="transition-all duration-300 bg-white dark:bg-gray-900 shadow-lg"
            style={getDeviceStyles()}
          >
            {/* Header */}
            <div
              className="text-white p-3 lg:p-4"
              style={{ backgroundColor: currentColors.primary }}
            >
              <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2 lg:space-x-4">
                  <div
                    className="w-6 h-6 lg:w-8 lg:h-8 rounded-lg flex items-center justify-center opacity-20"
                    style={{ backgroundColor: currentColors.background }}
                  >
                    <div className="w-3 h-3 lg:w-4 lg:h-4 bg-current rounded"></div>
                  </div>
                  <span className="font-semibold text-sm lg:text-base">
                    YourBrand
                  </span>
                </div>

                {/* Navigation - Desktop/Tablet */}
                {(deviceView === "desktop" || deviceView === "tablet") && (
                  <nav className="hidden sm:flex items-center space-x-3 lg:space-x-6 text-xs lg:text-sm">
                    <a href="#" className="hover:opacity-80">
                      Home
                    </a>
                    <a href="#" className="hover:opacity-80">
                      About
                    </a>
                    <a href="#" className="hover:opacity-80">
                      Services
                    </a>
                    <a href="#" className="hover:opacity-80">
                      Contact
                    </a>
                  </nav>
                )}

                {/* Mobile Menu Button */}
                {deviceView === "mobile" && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="p-1 h-8 w-8 text-white hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    <Menu className="w-4 h-4" />
                  </Button>
                )}

                {/* CTA Button - Hide on mobile if space is tight */}
                {deviceView !== "mobile" && (
                  <Button
                    size="sm"
                    style={{
                      backgroundColor: currentColors.accent,
                      color: currentColors.background,
                    }}
                    className="hover:opacity-90 text-xs lg:text-sm px-2 lg:px-4"
                  >
                    Get Started
                  </Button>
                )}
              </div>

              {/* Mobile Menu Dropdown */}
              {deviceView === "mobile" && mobileMenuOpen && (
                <div className="mt-3 pt-3 border-t border-white/20">
                  <nav className="flex flex-col space-y-2 text-sm">
                    <a href="#" className="hover:opacity-80 py-1">
                      Home
                    </a>
                    <a href="#" className="hover:opacity-80 py-1">
                      About
                    </a>
                    <a href="#" className="hover:opacity-80 py-1">
                      Services
                    </a>
                    <a href="#" className="hover:opacity-80 py-1">
                      Contact
                    </a>
                    <div className="pt-2">
                      <Button
                        size="sm"
                        style={{
                          backgroundColor: currentColors.accent,
                          color: currentColors.background,
                        }}
                        className="w-full text-xs"
                      >
                        Get Started
                      </Button>
                    </div>
                  </nav>
                </div>
              )}
            </div>

            {/* Main Content */}
            <div
              className="p-2 sm:p-4 lg:p-8 overflow-auto"
              style={{
                backgroundColor: currentColors.background,
                color: currentColors.text,
                minHeight:
                  deviceView === "mobile"
                    ? "500px"
                    : deviceView === "tablet"
                    ? "700px"
                    : "500px",
              }}
            >
              <div
                className={`mx-auto ${
                  deviceView === "mobile" ? "max-w-none" : "max-w-4xl"
                }`}
              >
                {/* Hero Section */}
                <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                  <h1
                    className={`font-bold mb-2 lg:mb-4 ${
                      deviceView === "mobile"
                        ? "text-lg"
                        : deviceView === "tablet"
                        ? "text-2xl"
                        : "text-3xl"
                    }`}
                  >
                    Welcome to Our Platform
                  </h1>
                  <p
                    className={`leading-relaxed ${
                      deviceView === "mobile"
                        ? "text-xs px-2"
                        : deviceView === "tablet"
                        ? "text-sm"
                        : "text-lg"
                    }`}
                    style={{ color: currentColors.textSecondary }}
                  >
                    Experience the power of beautiful design with our color
                    theme generator.
                  </p>
                </div>

                {/* Features Grid */}
                <div
                  className={`grid gap-2 sm:gap-3 lg:gap-6 mb-4 sm:mb-6 lg:mb-8 ${
                    deviceView === "mobile"
                      ? "grid-cols-1"
                      : deviceView === "tablet"
                      ? "grid-cols-2"
                      : "grid-cols-3"
                  }`}
                >
                  {[
                    {
                      icon: "🎨",
                      title: "Theme Generator",
                      desc: "Create beautiful color schemes for your projects.",
                    },
                    {
                      icon: "💻",
                      title: "Export Code",
                      desc: "Get ready-to-use CSS and component code.",
                    },
                    {
                      icon: "📱",
                      title: "Responsive",
                      desc: "Perfect for all devices and screen sizes.",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className={`rounded-lg ${
                        deviceView === "mobile"
                          ? "p-3"
                          : deviceView === "tablet"
                          ? "p-4"
                          : "p-6"
                      }`}
                      style={{
                        backgroundColor: currentColors.backgroundSecondary,
                      }}
                    >
                      <div
                        className={`rounded-lg flex items-center justify-center mb-2 lg:mb-4 ${
                          deviceView === "mobile"
                            ? "w-6 h-6 text-sm"
                            : deviceView === "tablet"
                            ? "w-8 h-8 text-base"
                            : "w-12 h-12 text-xl"
                        }`}
                        style={{ backgroundColor: currentColors.primary }}
                      >
                        {feature.icon}
                      </div>
                      <h3
                        className={`font-semibold mb-1 lg:mb-2 ${
                          deviceView === "mobile"
                            ? "text-xs"
                            : deviceView === "tablet"
                            ? "text-sm"
                            : "text-lg"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`leading-relaxed ${
                          deviceView === "mobile"
                            ? "text-xs"
                            : deviceView === "tablet"
                            ? "text-xs"
                            : "text-sm"
                        }`}
                        style={{ color: currentColors.textSecondary }}
                      >
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Contact Form */}
                <div
                  className={`rounded-lg ${
                    deviceView === "mobile"
                      ? "p-3"
                      : deviceView === "tablet"
                      ? "p-4"
                      : "p-6"
                  }`}
                  style={{ backgroundColor: currentColors.backgroundSecondary }}
                >
                  <h3
                    className={`font-semibold mb-3 lg:mb-4 ${
                      deviceView === "mobile"
                        ? "text-sm"
                        : deviceView === "tablet"
                        ? "text-base"
                        : "text-lg"
                    }`}
                  >
                    Contact Form
                  </h3>
                  <div
                    className={`${
                      deviceView === "mobile"
                        ? "space-y-2"
                        : "space-y-3 lg:space-y-4"
                    }`}
                  >
                    {/* Name and Email - Stack on mobile */}
                    <div
                      className={`grid gap-2 sm:gap-3 lg:gap-4 ${
                        deviceView === "mobile" ? "grid-cols-1" : "grid-cols-2"
                      }`}
                    >
                      <Input
                        placeholder="Your Name"
                        className={
                          deviceView === "mobile" ? "text-xs h-8" : "text-sm"
                        }
                        style={{
                          backgroundColor: currentColors.background,
                          borderColor: currentColors.border,
                          color: currentColors.text,
                        }}
                      />
                      <Input
                        placeholder="Your Email"
                        className={
                          deviceView === "mobile" ? "text-xs h-8" : "text-sm"
                        }
                        style={{
                          backgroundColor: currentColors.background,
                          borderColor: currentColors.border,
                          color: currentColors.text,
                        }}
                      />
                    </div>

                    {/* Message */}
                    <Textarea
                      placeholder="Your Message"
                      className={`resize-none ${
                        deviceView === "mobile"
                          ? "h-12 text-xs"
                          : deviceView === "tablet"
                          ? "h-16 text-sm"
                          : "h-24 text-sm"
                      }`}
                      style={{
                        backgroundColor: currentColors.background,
                        borderColor: currentColors.border,
                        color: currentColors.text,
                      }}
                    />

                    {/* Submit Button */}
                    <Button
                      size={deviceView === "mobile" ? "sm" : "default"}
                      className={`w-full ${
                        deviceView === "mobile"
                          ? "text-xs h-8"
                          : "text-sm lg:text-base"
                      }`}
                      style={{
                        backgroundColor: currentColors.primary,
                        color: currentColors.background,
                      }}
                    >
                      Send Message
                    </Button>
                  </div>
                </div>

                {/* Mobile CTA - Show only on mobile and when menu is closed */}
                {deviceView === "mobile" && !mobileMenuOpen && (
                  <div className="mt-4 text-center">
                    <Button
                      size="sm"
                      style={{
                        backgroundColor: currentColors.accent,
                        color: currentColors.background,
                      }}
                      className="w-full text-xs h-8"
                    >
                      Get Started
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Device Info */}
        <div className="mt-4 text-center">
          <p className="text-xs lg:text-sm text-muted-foreground">
            Preview: {deviceView.charAt(0).toUpperCase() + deviceView.slice(1)}
            {deviceView === "mobile" && " (375px width - Fully optimized)"}
            {deviceView === "tablet" && " (768px width - 2-column layout)"}
            {deviceView === "desktop" &&
              " (Full width - 3-column layout)"}•{" "}
            {previewMode.charAt(0).toUpperCase() + previewMode.slice(1)} Mode
            {deviceView === "mobile" && mobileMenuOpen && " • Menu Open"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
