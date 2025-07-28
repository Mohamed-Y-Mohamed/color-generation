import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, PenTool } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface InputMethodTabsProps {
  onGenerateFromColors: (colors: {
    primary: string;
    secondary?: string;
    accent?: string;
  }) => void;
  onGenerateFromDescription: (description: string) => void;
  isLoading: boolean;
}

export function InputMethodTabs({
  onGenerateFromColors,
  onGenerateFromDescription,
  isLoading,
}: InputMethodTabsProps) {
  const [colors, setColors] = useState({
    primary: "#6366f1",
    secondary: "#8b5cf6",
    accent: "#10b981",
  });
  const [description, setDescription] = useState("");
  const { toast } = useToast();

  const handleColorChange = (role: string, value: string) => {
    setColors((prev) => ({ ...prev, [role]: value }));
  };

  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <Tabs defaultValue="color" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="color" className="flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Pick Colors
            </TabsTrigger>
            <TabsTrigger
              value="description"
              className="flex items-center gap-2"
            >
              <PenTool className="w-4 h-4" />
              Describe Theme
            </TabsTrigger>
          </TabsList>

          <TabsContent value="color" className="mt-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Choose Your Base Colors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(colors).map(([role, color]) => (
                  <div key={role} className="space-y-2">
                    <Label className="capitalize">{role} Color</Label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="color"
                        value={color}
                        onChange={(e) =>
                          handleColorChange(role, e.target.value)
                        }
                        className="w-12 h-12 rounded-lg border-2 border-border cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={color}
                        onChange={(e) =>
                          handleColorChange(role, e.target.value)
                        }
                        className="flex-1 font-mono text-sm"
                        placeholder="#hexcode"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => onGenerateFromColors(colors)}
                disabled={isLoading}
                className="w-full md:w-auto"
              >
                {isLoading ? "Generating..." : "Generate Themes"}
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="description" className="mt-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Describe Your Desired Theme
              </h3>
              <Textarea
                placeholder="e.g., A clean, warm color scheme for a lifestyle blog with earthy tones and good contrast..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-32 resize-none"
                maxLength={500}
              />
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {description.length}/500 characters
                </span>
                <Button
                  onClick={() => onGenerateFromDescription(description)}
                  disabled={isLoading || description.trim().length < 10}
                >
                  {isLoading ? "Generating..." : "Generate from Description"}
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
