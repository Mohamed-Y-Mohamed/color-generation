// Updated Home component without image upload functionality

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Palette, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { InputMethodTabs } from "@/components/InputMethodTabs";
import { ThemeResults } from "@/components/ThemeResults";
import { LivePreview } from "@/components/LivePreview";
import { ComponentStyleGenerator } from "@/components/ComponentStyleGenerator";
import {
  useThemes,
  useGenerateFromColors,
  useGenerateFromDescription,
} from "@/hooks/use-themes";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { Theme } from "@shared/schema";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedTheme, setSelectedTheme] = useState<Theme | undefined>();

  // NEW: Local state to override themes during generation
  const [isGenerating, setIsGenerating] = useState(false);
  const [localThemes, setLocalThemes] = useState<Theme[]>([]);

  const { data: themesData } = useThemes();
  const generateFromColors = useGenerateFromColors();
  const generateFromDescription = useGenerateFromDescription();

  // Use real themes from API
  const realThemes = themesData?.themes || [];

  // 🎯 KEY FIX: Use local themes when generating, real themes otherwise
  const themes = isGenerating ? localThemes : realThemes;

  const isLoading =
    generateFromColors.isPending || generateFromDescription.isPending;

  // Update local themes when real themes change (and not generating)
  useEffect(() => {
    if (!isGenerating) {
      setLocalThemes(realThemes);
    }
  }, [realThemes, isGenerating]);

  // 🎯 IMPROVED: Clear themes immediately using local state
  const clearThemesImmediately = () => {
    console.log("🗑️ Clearing themes immediately with state override");

    setIsGenerating(true); // Start overriding with local state
    setLocalThemes([]); // Clear themes immediately in UI
    setSelectedTheme(undefined); // Clear selected theme

    console.log("✅ Themes cleared immediately via local state");

    toast({
      title: "Generating...",
      description: "Creating new AI-powered themes",
    });
  };

  const handleGenerateFromColors = async (colors: {
    primary: string;
    secondary?: string;
    accent?: string;
  }) => {
    try {
      // 🎯 Clear themes immediately when button clicked
      clearThemesImmediately();

      console.log("🎨 Generating themes from colors:", colors);
      const result = await generateFromColors.mutateAsync(colors);

      // 🎯 Stop overriding and use real data
      setIsGenerating(false);

      if (result.themes && result.themes.length > 0) {
        setSelectedTheme(result.themes[0]);
        console.log(`✅ Generated ${result.themes.length} new themes`);
      }

      toast({
        title: "Success!",
        description: `Generated ${result.themes.length} AI-powered themes`,
      });
    } catch (error) {
      // 🎯 Reset state on error
      setIsGenerating(false);

      console.error("❌ Error generating themes from colors:", error);
      toast({
        title: "Error",
        description: "Failed to generate themes from colors",
        variant: "destructive",
      });
    }
  };

  const handleGenerateFromDescription = async (description: string) => {
    try {
      // 🎯 Clear themes immediately when button clicked
      clearThemesImmediately();

      console.log("📝 Generating themes from description:", description);
      const result = await generateFromDescription.mutateAsync({ description });

      // 🎯 Stop overriding and use real data
      setIsGenerating(false);

      if (result.themes && result.themes.length > 0) {
        setSelectedTheme(result.themes[0]);
        console.log(
          `✅ Generated ${result.themes.length} new themes from description`
        );
      }

      toast({
        title: "Success!",
        description: `Generated ${result.themes.length} AI-powered themes`,
      });
    } catch (error) {
      // 🎯 Reset state on error
      setIsGenerating(false);

      console.error("❌ Error generating themes from description:", error);
      toast({
        title: "Error",
        description: "Failed to generate themes from description",
        variant: "destructive",
      });
    }
  };

  const handleExportAll = () => {
    if (themes.length === 0) {
      toast({
        title: "No themes to export",
        description: "Generate some themes first",
        variant: "destructive",
      });
      return;
    }

    const allThemes = themes.map((theme) => ({
      id: theme.id,
      name: theme.name,
      colors: theme.colors,
      inputType: theme.inputType,
      createdAt: theme.createdAt,
    }));

    const blob = new Blob([JSON.stringify(allThemes, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "all-themes.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Exported!",
      description: "All themes exported successfully",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center">
                <Palette className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-bold">Smart Color Theme Generator</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="p-2"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Generate Beautiful Color Themes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Create professional website color schemes with light and dark modes
            using colors or descriptions. Perfect for designers and developers.
          </p>
        </div>

        {/* Input Methods */}
        <InputMethodTabs
          onGenerateFromColors={handleGenerateFromColors}
          onGenerateFromDescription={handleGenerateFromDescription}
          isLoading={isLoading}
        />

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-8">
            <div className="inline-flex items-center space-x-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
              <span className="text-muted-foreground">
                Generating AI-powered themes...
              </span>
            </div>
          </div>
        )}

        {/* Theme Results */}
        <ThemeResults themes={themes} onExportAll={handleExportAll} />

        {/* Live Preview */}
        <LivePreview
          themes={themes}
          selectedTheme={selectedTheme}
          onThemeSelect={setSelectedTheme}
        />

        {/* Component Style Generator */}
        <ComponentStyleGenerator
          themes={themes}
          selectedTheme={selectedTheme}
        />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-muted-foreground">
            <p>
              &copy; 2024 Smart Color Theme Generator. Built for designers and
              developers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
