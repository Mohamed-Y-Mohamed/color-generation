import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Download, Eye, Moon, Sun } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Theme } from "@shared/schema";
import { exportTheme } from "@/lib/themeExporter";
import { WCAGComplianceIndicator, ContrastMeter } from "@/components/WCAGComplianceIndicator";

interface ThemeResultsProps {
  themes: Theme[];
  onExportAll: () => void;
}

export function ThemeResults({ themes, onExportAll }: ThemeResultsProps) {
  const [previewMode, setPreviewMode] = useState<"light" | "dark">("light");
  const { toast } = useToast();

  const copyColor = async (color: string) => {
    try {
      await navigator.clipboard.writeText(color);
      toast({
        title: "Copied!",
        description: `Color ${color} copied to clipboard`,
      });
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Could not copy color to clipboard",
        variant: "destructive"
      });
    }
  };

  const exportThemeData = (theme: Theme) => {
    const exported = exportTheme(theme);
    const blob = new Blob([JSON.stringify(exported, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${theme.name.toLowerCase().replace(/\s+/g, "-")}-theme.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (themes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No themes generated yet. Use one of the input methods above to create themes.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Generated Themes</h2>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={() => setPreviewMode(previewMode === "light" ? "dark" : "light")}
            className="flex items-center space-x-2"
          >
            {previewMode === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            <span>Toggle Preview Mode</span>
          </Button>
          <Button onClick={onExportAll} className="flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export All Themes</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {themes.map((theme) => {
          const colors = theme.colors as any;
          const currentColors = colors[previewMode];

          return (
            <Card key={theme.id} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{theme.name}</CardTitle>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyColor(JSON.stringify(currentColors))}
                      title="Copy theme"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => exportThemeData(theme)}
                      title="Export theme"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Live Preview */}
                <div
                  className="rounded-lg p-4 min-h-48"
                  style={{
                    background: `linear-gradient(135deg, ${currentColors.primary} 0%, ${currentColors.secondary} 100%)`
                  }}
                >
                  <div
                    className="rounded-lg p-4 shadow-lg"
                    style={{ backgroundColor: currentColors.background }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className="w-20 h-6 rounded"
                        style={{ backgroundColor: currentColors.primary }}
                      ></div>
                      <div className="flex space-x-2">
                        <div
                          className="w-6 h-6 rounded"
                          style={{ backgroundColor: currentColors.border }}
                        ></div>
                        <div
                          className="w-6 h-6 rounded"
                          style={{ backgroundColor: currentColors.border }}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div
                        className="w-full h-4 rounded"
                        style={{ backgroundColor: currentColors.text, opacity: 0.8 }}
                      ></div>
                      <div
                        className="w-3/4 h-3 rounded"
                        style={{ backgroundColor: currentColors.textSecondary, opacity: 0.6 }}
                      ></div>
                    </div>
                    <div className="flex space-x-2">
                      <div
                        className="px-3 py-1 rounded text-xs font-medium"
                        style={{
                          backgroundColor: currentColors.primary,
                          color: currentColors.background
                        }}
                      >
                        Primary
                      </div>
                      <div
                        className="px-3 py-1 rounded text-xs font-medium"
                        style={{
                          backgroundColor: currentColors.accent,
                          color: currentColors.background
                        }}
                      >
                        Accent
                      </div>
                    </div>
                  </div>
                </div>

                {/* Color Swatches with WCAG Compliance */}
                <div className="space-y-3">
                  {Object.entries(currentColors).map(([role, color]) => (
                    <div key={role} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-8 h-8 rounded-lg border-2 border-border"
                            style={{ backgroundColor: color as string }}
                          ></div>
                          <div>
                            <div className="text-sm font-medium capitalize">
                              {role.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                            <div className="text-xs text-muted-foreground font-mono">
                              {color as string}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {(role === 'text' || role === 'textSecondary') && (
                            <WCAGComplianceIndicator 
                              foreground={color as string}
                              background={currentColors.background as string}
                            />
                          )}
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyColor(color as string)}
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                      
                      {/* Show contrast meter for text colors */}
                      {(role === 'text' || role === 'textSecondary') && (
                        <div className="ml-11 mr-8">
                          <ContrastMeter 
                            foreground={color as string}
                            background={currentColors.background as string}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full">
                  <Eye className="w-4 h-4 mr-2" />
                  View All Colors
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
