import { useState } from "react";
import { Button } from "../components/ui/button";
import { Palette, Moon, Sun, Download, Trash2, BookOpen } from "lucide-react";
import { useTheme } from "../components/ThemeProvider";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { InputMethodTabs } from "../components/InputMethodTabs";
import { ThemeResults } from "../components/ThemeResults";
import { LivePreview } from "../components/LivePreview";
import { ComponentStyleGenerator } from "../components/ComponentStyleGenerator";
import {
  useThemes,
  useGenerateFromColors,
  useGenerateFromDescription,
  useClearThemes,
  useExportThemes,
} from "../hooks/use-themes";
import { useToast } from "../hooks/use-toast";
import { Theme } from "../../shared/schema";
import { useLocation } from "wouter";
export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [selectedTheme, setSelectedTheme] = useState<Theme | undefined>();

  // Hooks for theme operations
  const { data: themesData, isLoading: themesLoading } = useThemes();
  const generateFromColors = useGenerateFromColors();
  const generateFromDescription = useGenerateFromDescription();
  const clearThemes = useClearThemes();
  const exportThemes = useExportThemes();

  const themes = themesData?.themes || [];

  const isGenerating =
    generateFromColors.isPending || generateFromDescription.isPending;

  // Handle color generation
  const handleGenerateFromColors = async (colors: {
    primary: string;
    secondary?: string;
    accent?: string;
  }) => {
    try {
      console.log("🎨 Generating themes from colors:", colors);

      const result = await generateFromColors.mutateAsync(colors);

      if (result.themes && result.themes.length > 0) {
        setSelectedTheme(result.themes[0]);
      }

      toast({
        title: "Success!",
        description: `Generated ${result.themes.length} AI-powered themes`,
      });
    } catch (error) {
      console.error("❌ Error generating themes from colors:", error);

      // Handle specific error types
      let errorMessage = "Failed to generate themes from colors";
      if (error instanceof Error) {
        if (error.message.includes("Unauthorized")) {
          errorMessage = "This domain is not authorized to use the API";
        } else if (error.message.includes("API key")) {
          errorMessage = "API configuration error. Please check your setup.";
        } else {
          errorMessage = error.message;
        }
      }

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  // Handle description generation
  const handleGenerateFromDescription = async (description: string) => {
    try {
      console.log("📝 Generating themes from description:", description);

      const result = await generateFromDescription.mutateAsync({ description });

      if (result.themes && result.themes.length > 0) {
        setSelectedTheme(result.themes[0]);
      }

      toast({
        title: "Success!",
        description: `Generated ${result.themes.length} AI-powered themes`,
      });
    } catch (error) {
      console.error("❌ Error generating themes from description:", error);

      let errorMessage = "Failed to generate themes from description";
      if (error instanceof Error) {
        if (error.message.includes("Unauthorized")) {
          errorMessage = "This domain is not authorized to use the API";
        } else if (error.message.includes("API key")) {
          errorMessage = "API configuration error. Please check your setup.";
        } else {
          errorMessage = error.message;
        }
      }

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  // Handle export all themes
  const handleExportAll = async () => {
    if (themes.length === 0) {
      toast({
        title: "No themes to export",
        description: "Generate some themes first",
        variant: "destructive",
      });
      return;
    }

    try {
      await exportThemes.mutateAsync();
      toast({
        title: "Exported!",
        description: "All themes exported successfully",
      });
    } catch (error) {
      toast({
        title: "Export failed",
        description: "Could not export themes",
        variant: "destructive",
      });
    }
  };

  // Handle clear all themes
  const handleClearAll = async () => {
    if (themes.length === 0) {
      toast({
        title: "No themes to clear",
        description: "Theme storage is already empty",
      });
      return;
    }

    try {
      await clearThemes.mutateAsync();
      setSelectedTheme(undefined);
      toast({
        title: "Cleared!",
        description: "All themes have been cleared",
      });
    } catch (error) {
      toast({
        title: "Clear failed",
        description: "Could not clear themes",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar
        showThemeActions={true}
        themesCount={themes.length}
        onExport={handleExportAll}
        onClear={handleClearAll}
        isExporting={exportThemes.isPending}
        isClearing={clearThemes.isPending}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Smart Color Theme Generator
          </h1>
          <h2 className="text-3xl font-bold mb-4">
            Generate Beautiful Color Themes with AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Create professional, accessible website color schemes with perfectly
            balanced light and dark modes using cutting-edge AI technology. Our
            intelligent color theme generator helps designers and developers
            craft beautiful, WCAG-compliant color palettes in seconds.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              100% Free To Use
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Groq AI Powered
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Export Ready
            </span>
          </div>
        </div>

        {/* Input Methods - THE TOOL COMES FIRST */}
        <InputMethodTabs
          onGenerateFromColors={handleGenerateFromColors}
          onGenerateFromDescription={handleGenerateFromDescription}
          isLoading={isGenerating}
        />

        {/* Loading State */}
        {isGenerating && (
          <div className="text-center py-8">
            <div className="inline-flex items-center space-x-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
              <span className="text-muted-foreground">
                Generating AI-powered themes with Groq...
              </span>
            </div>
          </div>
        )}

        {/* Theme Results */}
        {themes.length > 0 && (
          <ThemeResults themes={themes} onExportAll={handleExportAll} />
        )}

        {/* Live Preview */}
        {themes.length > 0 && (
          <LivePreview
            themes={themes}
            selectedTheme={selectedTheme}
            onThemeSelect={setSelectedTheme}
          />
        )}

        {/* Component Style Generator */}
        {themes.length > 0 && (
          <ComponentStyleGenerator
            themes={themes}
            selectedTheme={selectedTheme}
          />
        )}

        {/* Empty State */}
        {themes.length === 0 && !isGenerating && (
          <div className="text-center py-16">
            <Palette className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No themes yet</h3>
            <p className="text-muted-foreground mb-6">
              Generate your first color theme using the form above
            </p>
          </div>
        )}

        {/* Educational Content Below The Tool */}
        <div className="mt-24 space-y-16">
          {/* Features Grid */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">
              Why Choose Our Generator?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  AI-Powered Intelligence
                </h3>
                <p className="text-muted-foreground">
                  Our advanced Groq AI analyzes color relationships,
                  psychological impact, and design trends to generate themes
                  that feel professionally crafted.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Sun className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Light & Dark Modes
                </h3>
                <p className="text-muted-foreground">
                  Every theme automatically includes perfectly matched light and
                  dark mode variants with optimal readability.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">WCAG Compliance</h3>
                <p className="text-muted-foreground">
                  All generated themes meet WCAG AAA accessibility standards for
                  contrast ratios, ensuring readability for all users.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* How It Works Section */}
        <div className="bg-card p-8 rounded-lg border border-border mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Choose Your Input Method
              </h3>
              <p className="text-muted-foreground">
                Start by either selecting specific colors you want to use or
                describe your desired theme in natural language. Our AI
                understands descriptions like "modern tech startup" or "calm
                meditation app" and interprets color psychology to match your
                vision.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                AI Generates Themes
              </h3>
              <p className="text-muted-foreground">
                Our Groq-powered AI analyzes your input and generates complete
                color systems with primary, secondary, accent, background, and
                text colors. Each theme includes light and dark modes with
                proper contrast ratios and WCAG compliance for maximum
                accessibility.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Preview & Export</h3>
              <p className="text-muted-foreground">
                Test your themes with live component previews, switch between
                light and dark modes, and see exactly how colors will look in
                real UI elements. When satisfied, export as CSS variables or
                JSON for immediate integration into your project.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Our Color Theme Generator?
          </h2>
          <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3">
              Professional Quality, Zero Cost
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Unlike expensive design tools or hiring professional designers,
              our generator provides enterprise-quality color themes completely
              free. We believe great design should be accessible to everyone,
              from solo developers building side projects to large teams
              creating production applications.
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3">
              Privacy-First Architecture
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Your themes are stored locally in your browser—we never send your
              data to servers or collect personal information. This
              frontend-only architecture means faster generation, complete
              privacy, and no subscription fees or data tracking. Your creative
              work stays yours.
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              Built for Modern Development
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We understand modern web development workflows. Export themes as
              CSS custom properties compatible with Tailwind, Bootstrap, and
              vanilla CSS, or as JSON for integration with React, Vue, Angular,
              and other frameworks. Our exports are production-ready with no
              additional configuration needed.
            </p>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="bg-card p-8 rounded-lg border border-border mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Perfect For Every Project
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-background rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                🎨 Web Design Projects
              </h3>
              <p className="text-muted-foreground">
                Create cohesive color systems for websites, landing pages, and
                web applications. Generate multiple theme variations to present
                to clients or explore different brand directions.
              </p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                📱 Mobile App Development
              </h3>
              <p className="text-muted-foreground">
                Design accessible color schemes for iOS and Android apps that
                look great in both light and dark modes, ensuring consistent
                brand experience across all user preferences.
              </p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                🏢 Brand Identity Systems
              </h3>
              <p className="text-muted-foreground">
                Establish comprehensive color guidelines for corporate brands,
                ensuring consistency across digital platforms, marketing
                materials, and product interfaces.
              </p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                🎓 Learning & Education
              </h3>
              <p className="text-muted-foreground">
                Study color theory principles, understand WCAG compliance, and
                learn how professional designers create harmonious color schemes
                through interactive generation and real-time previews.
              </p>
            </div>
          </div>
        </div>

        {/* Getting Started CTA */}
        <div className="text-center py-12 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Create Beautiful Themes?
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Start generating professional color schemes in seconds. No signup,
            no credit card, no hidden fees—just powerful AI-driven design tools
            at your fingertips.
          </p>
          <Button
            size="lg"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Palette className="w-5 h-5 mr-2" />
            Generate Your First Theme
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">
              &copy; 2024 Smart Color Theme Generator. Built for designers and
              developers.
            </p>
            <p className="text-xs">
              Powered by Groq AI • Frontend-Only Architecture • No Server
              Required
            </p>
          </div>
        </div>
      </footer>

      <Footer />
    </div>
  );
}
