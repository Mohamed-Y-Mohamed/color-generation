import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Download, FileText, Code } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Theme } from "@shared/schema";
import { generateComponentCSS, generateCSSVariables } from "@/lib/themeExporter";

interface ComponentStyleGeneratorProps {
  themes: Theme[];
  selectedTheme?: Theme;
}

export function ComponentStyleGenerator({ themes, selectedTheme }: ComponentStyleGeneratorProps) {
  const [selectedFormat, setSelectedFormat] = useState<"css" | "json" | "html">("css");
  const { toast } = useToast();

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: "Code copied to clipboard",
      });
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Could not copy code to clipboard",
        variant: "destructive"
      });
    }
  };

  const downloadFile = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!selectedTheme) {
    return (
      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Component Style Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Select a theme to generate component styles</p>
        </CardContent>
      </Card>
    );
  }

  const colors = selectedTheme.colors as any;
  const componentCSS = generateComponentCSS(selectedTheme);
  const cssVariables = generateCSSVariables(selectedTheme);

  return (
    <Card className="mt-12">
      <CardHeader>
        <CardTitle>Component Style Generator</CardTitle>
        <p className="text-muted-foreground">
          Generate ready-to-use component styles with your selected theme
        </p>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Component Previews */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Button Styles</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Button
                    style={{
                      backgroundColor: colors.light.primary,
                      color: colors.light.background
                    }}
                    className="hover:opacity-90"
                  >
                    Primary Button
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(componentCSS.primaryButton)}
                    title="Copy CSS"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    style={{
                      borderColor: colors.light.primary,
                      color: colors.light.primary
                    }}
                    className="hover:opacity-90"
                  >
                    Secondary Button
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(componentCSS.secondaryButton)}
                    title="Copy CSS"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="ghost"
                    style={{ color: colors.light.primary }}
                    className="hover:opacity-90"
                  >
                    Text Button
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(componentCSS.textButton)}
                    title="Copy CSS"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Alert Components</h3>
              <div className="space-y-3">
                {[
                  { type: "success", color: colors.light.accent, icon: "✓" },
                  { type: "info", color: colors.light.primary, icon: "ℹ" },
                  { type: "error", color: "#ef4444", icon: "⚠" }
                ].map((alert) => (
                  <div
                    key={alert.type}
                    className="p-4 rounded-lg flex items-center space-x-3 border"
                    style={{
                      backgroundColor: `${alert.color}10`,
                      borderColor: `${alert.color}30`,
                      color: alert.color
                    }}
                  >
                    <span>{alert.icon}</span>
                    <span className="capitalize">{alert.type} alert message</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(componentCSS.alerts[alert.type as keyof typeof componentCSS.alerts])}
                      className="ml-auto"
                      title="Copy CSS"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Form Elements</h3>
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label>Input Field</Label>
                  <div className="flex items-center space-x-3">
                    <Input
                      placeholder="Enter text..."
                      style={{
                        borderColor: colors.light.border,
                        backgroundColor: colors.light.background
                      }}
                      className="flex-1"
                    />
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(componentCSS.input)}
                      title="Copy CSS"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Select Dropdown</Label>
                  <div className="flex items-center space-x-3">
                    <Select>
                      <SelectTrigger
                        style={{
                          borderColor: colors.light.border,
                          backgroundColor: colors.light.background
                        }}
                      >
                        <SelectValue placeholder="Choose an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(componentCSS.select)}
                      title="Copy CSS"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Output */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Generated Code</h3>
              <Tabs value={selectedFormat} onValueChange={(value) => setSelectedFormat(value as any)}>
                <TabsList>
                  <TabsTrigger value="css">CSS</TabsTrigger>
                  <TabsTrigger value="json">JSON</TabsTrigger>
                  <TabsTrigger value="html">HTML + CSS</TabsTrigger>
                </TabsList>

                <TabsContent value="css" className="mt-4">
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto max-h-96 overflow-y-auto">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-400">/* Component Styles */</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(Object.values(componentCSS).join('\n\n'))}
                        className="text-slate-400 hover:text-white"
                        title="Copy CSS"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <pre className="text-xs leading-relaxed">
                      {Object.values(componentCSS).join('\n\n')}
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="json" className="mt-4">
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto max-h-96 overflow-y-auto">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-400">/* Theme JSON */</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(JSON.stringify(colors, null, 2))}
                        className="text-slate-400 hover:text-white"
                        title="Copy JSON"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <pre className="text-xs leading-relaxed">
                      {JSON.stringify(colors, null, 2)}
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="html" className="mt-4">
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto max-h-96 overflow-y-auto">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-400">/* CSS Variables */</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(cssVariables)}
                        className="text-slate-400 hover:text-white"
                        title="Copy CSS Variables"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <pre className="text-xs leading-relaxed">
                      {cssVariables}
                    </pre>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Export Options</h3>
              <div className="space-y-3">
                <Button
                  onClick={() => downloadFile(
                    Object.values(componentCSS).join('\n\n'),
                    `${selectedTheme.name.toLowerCase().replace(/\s+/g, '-')}-components.css`,
                    'text/css'
                  )}
                  className="w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Complete CSS
                </Button>
                <Button
                  variant="outline"
                  onClick={() => downloadFile(
                    JSON.stringify(colors, null, 2),
                    `${selectedTheme.name.toLowerCase().replace(/\s+/g, '-')}-theme.json`,
                    'application/json'
                  )}
                  className="w-full"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Export as JSON
                </Button>
                <Button
                  variant="outline"
                  onClick={() => downloadFile(
                    cssVariables + '\n\n' + Object.values(componentCSS).join('\n\n'),
                    `${selectedTheme.name.toLowerCase().replace(/\s+/g, '-')}-complete.css`,
                    'text/css'
                  )}
                  className="w-full"
                >
                  <Code className="w-4 h-4 mr-2" />
                  Copy HTML + CSS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
