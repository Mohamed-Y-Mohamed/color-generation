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
          <h2 className="text-4xl font-bold mb-4">
            Generate Beautiful Color Themes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Create professional website color schemes with light and dark modes
            using AI-powered generation. Works completely in your browser!
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Free To use{" "}
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Groq AI Powered theme Generation
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Export with ease
            </span>
          </div>
        </div>

        {/* Input Methods */}
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
              Generate your first color theme using the tabs above
            </p>
          </div>
        )}
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
