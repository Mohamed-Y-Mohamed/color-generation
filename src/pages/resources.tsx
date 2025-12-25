import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Card } from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  BookOpen,
  Video,
  Code,
  Palette,
  Lightbulb,
  ExternalLink,
  Download,
  Eye,
  CheckCircle2,
} from "lucide-react";

export default function Resources() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Resources & Tutorials</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master color theory, learn accessibility best practices, and
            discover expert tips for creating stunning color themes. From
            beginner guides to advanced techniques, everything you need to
            become a color design expert.
          </p>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="tutorials" className="mb-12">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="tutorials">
              <Video className="w-4 h-4 mr-2" />
              Tutorials
            </TabsTrigger>
            <TabsTrigger value="guides">
              <BookOpen className="w-4 h-4 mr-2" />
              Guides
            </TabsTrigger>
            <TabsTrigger value="tools">
              <Code className="w-4 h-4 mr-2" />
              Tools & Code
            </TabsTrigger>
            <TabsTrigger value="inspiration">
              <Palette className="w-4 h-4 mr-2" />
              Inspiration
            </TabsTrigger>
          </TabsList>

          {/* Tutorials Tab */}
          <TabsContent value="tutorials" className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Step-by-Step Video Tutorials
              </h2>
              <p className="text-muted-foreground">
                Learn how to use the Smart Color Theme Generator effectively
                with our comprehensive video tutorial series. Each tutorial
                walks you through specific features and techniques to help you
                create professional color schemes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <Video className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Getting Started: Your First Theme
                </h3>
                <p className="text-muted-foreground mb-4">
                  Learn the basics of color theme generation. This tutorial
                  covers both input methods, understanding the interface, and
                  exporting your first theme. Perfect for beginners. (Duration:
                  8 minutes)
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    Beginner
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-600 text-sm rounded-full">
                    8 min
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                    Navigate the interface
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                    Generate from colors
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                    Generate from descriptions
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                    Export and use themes
                  </li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <Video className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Understanding WCAG Accessibility
                </h3>
                <p className="text-muted-foreground mb-4">
                  Deep dive into accessibility standards and why they matter.
                  Learn how our tool ensures compliance and how to read contrast
                  ratio indicators. (Duration: 12 minutes)
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-600 text-sm rounded-full">
                    Intermediate
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-600 text-sm rounded-full">
                    12 min
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                    WCAG standards explained
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                    Contrast ratio requirements
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                    Testing for color blindness
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                    Meeting AAA compliance
                  </li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <Video className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Mastering Light and Dark Modes
                </h3>
                <p className="text-muted-foreground mb-4">
                  Explore the nuances of creating themes that work beautifully
                  in both light and dark modes. Learn color adaptation
                  strategies and testing techniques. (Duration: 15 minutes)
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-600 text-sm rounded-full">
                    Advanced
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-600 text-sm rounded-full">
                    15 min
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                    Dark mode design principles
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                    Color adaptation techniques
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                    Maintaining brand consistency
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                    Testing in both modes
                  </li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <Video className="w-12 h-12 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Exporting and Integration Workflows
                </h3>
                <p className="text-muted-foreground mb-4">
                  Learn professional workflows for integrating generated themes
                  into React, Vue, Next.js, and other frameworks. Includes
                  Tailwind CSS integration. (Duration: 18 minutes)
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-600 text-sm rounded-full">
                    Advanced
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-600 text-sm rounded-full">
                    18 min
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                    CSS vs JSON exports
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                    React integration patterns
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                    Tailwind configuration
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                    Production best practices
                  </li>
                </ul>
              </Card>
            </div>
          </TabsContent>

          {/* Guides Tab */}
          <TabsContent value="guides" className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Comprehensive Written Guides
              </h2>
              <p className="text-muted-foreground">
                In-depth articles covering color theory, design principles, and
                advanced techniques. These guides provide detailed explanations
                and examples to help you master color design.
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      Complete Color Theory Guide
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Master the fundamentals of color theory including the
                      color wheel, primary/secondary/tertiary colors,
                      complementary and analogous harmonies, triadic and
                      tetradic schemes, warm vs cool colors, and psychological
                      impacts of different hues. This comprehensive guide covers
                      everything from basic concepts to advanced color
                      relationships that create visual harmony and emotional
                      resonance in design.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        15 min read
                      </span>
                      <span className="px-3 py-1 bg-green-500/10 text-green-600 text-sm rounded-full">
                        Beginner Friendly
                      </span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      Accessibility Standards Explained
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Understand WCAG 2.1 guidelines in depth, including Level
                      A, AA, and AAA requirements. Learn how to calculate
                      contrast ratios manually, why 4.5:1 and 7:1 ratios matter,
                      how to design for color blindness (protanopia,
                      deuteranopia, tritanopia), and legal requirements for
                      accessibility compliance in different regions. Includes
                      practical examples and tools for testing your designs
                      against accessibility standards.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-600 text-sm rounded-full">
                        20 min read
                      </span>
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-600 text-sm rounded-full">
                        Intermediate
                      </span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      Color Psychology in Design
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Explore how colors influence emotions, behaviors, and
                      perceptions. Learn what each color communicates: blue for
                      trust and professionalism, red for urgency and passion,
                      green for growth and nature, yellow for optimism and
                      energy. Understand cultural differences in color meaning,
                      industry-specific color conventions (finance, healthcare,
                      technology, food), and how to choose colors that align
                      with your brand message and target audience expectations.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-600 text-sm rounded-full">
                        18 min read
                      </span>
                      <span className="px-3 py-1 bg-green-500/10 text-green-600 text-sm rounded-full">
                        All Levels
                      </span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Download className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      Brand Color Systems Guide
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Learn how to create comprehensive brand color systems that
                      scale across digital and print media. Understand the
                      difference between primary, secondary, and accent colors,
                      when to use each, how many colors your brand needs, and
                      how to document color usage guidelines. Includes case
                      studies from major brands like Spotify, Airbnb, and
                      Stripe, showing how they structure their color systems for
                      consistency and flexibility across products and marketing
                      materials.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-500/10 text-green-600 text-sm rounded-full">
                        25 min read
                      </span>
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-600 text-sm rounded-full">
                        Intermediate
                      </span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      Dark Mode Design Best Practices
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Master the art of dark mode design with this comprehensive
                      guide. Learn why dark mode isn't just "inverting colors,"
                      how to adjust luminance and saturation for optimal
                      readability, when to use pure black vs dark grays, how to
                      handle shadows and depth in dark interfaces, and
                      techniques for maintaining brand colors in dark mode.
                      Includes technical implementation details, common pitfalls
                      to avoid, and examples from apps like Twitter, YouTube,
                      and Discord that implement dark mode exceptionally well.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-600 text-sm rounded-full">
                        22 min read
                      </span>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-600 text-sm rounded-full">
                        Advanced
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Tools & Code Tab */}
          <TabsContent value="tools" className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Developer Tools & Code Examples
              </h2>
              <p className="text-muted-foreground">
                Ready-to-use code snippets, integration examples, and
                complementary tools to enhance your workflow. All code is
                production-ready and follows best practices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">
                    React Theme Provider
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Complete React Context implementation for theme switching with
                  localStorage persistence. Includes TypeScript types, custom
                  hook, and theme toggle component.
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto">
                  <code>{`import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children, themes }) {
  const [currentTheme, setCurrentTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  const switchTheme = (themeId) => {
    setCurrentTheme(themeId);
    localStorage.setItem('theme', themeId);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, switchTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);`}</code>
                </div>
                <a
                  href="/blog/color-theory-basics"
                  className="text-primary hover:underline flex items-center"
                >
                  View full implementation{" "}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold">
                    Tailwind CSS Integration
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Configure Tailwind to use your generated theme colors.
                  Includes tailwind.config.js setup and CSS variable mapping for
                  seamless integration.
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto">
                  <code>{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
      },
    },
  },
  darkMode: 'class',
}`}</code>
                </div>
                <a
                  href="/blog/brand-colors"
                  className="text-primary hover:underline flex items-center"
                >
                  Complete Tailwind guide{" "}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold">
                    Contrast Ratio Calculator
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  JavaScript function to calculate WCAG contrast ratios between
                  two colors. Useful for validating custom color combinations
                  and ensuring accessibility.
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto">
                  <code>{`function getContrastRatio(color1, color2) {
  const getLuminance = (color) => {
    const rgb = parseInt(color.slice(1), 16);
    const r = ((rgb >> 16) & 0xff) / 255;
    const g = ((rgb >> 8) & 0xff) / 255;
    const b = (rgb & 0xff) / 255;
    const [rs, gs, bs] = [r, g, b].map(c => 
      c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
    );
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}`}</code>
                </div>
                <a
                  href="/blog/wcag-accessibility"
                  className="text-primary hover:underline flex items-center"
                >
                  Learn about WCAG <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-semibold">
                    CSS Custom Properties Template
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Complete CSS template with light/dark mode variables, semantic
                  naming, and prefers-color-scheme media query for automatic
                  theme switching.
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto">
                  <code>{`:root {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --color-accent: #10b981;
  --color-background: #ffffff;
  --color-foreground: #1f2937;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #60a5fa;
    --color-secondary: #a78bfa;
    --color-accent: #34d399;
    --color-background: #1f2937;
    --color-foreground: #f3f4f6;
  }
}`}</code>
                </div>
                <a
                  href="/blog/dark-mode-design"
                  className="text-primary hover:underline flex items-center"
                >
                  Dark mode implementation{" "}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </Card>
            </div>

            {/* External Tools */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Complementary Tools</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold mb-2">
                    WebAIM Contrast Checker
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Verify WCAG compliance for your color combinations with this
                    industry-standard tool.
                  </p>
                  <a
                    href="https://webaim.org/resources/contrastchecker/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline flex items-center"
                  >
                    Visit Tool <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Card>
                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold mb-2">Coolors.co</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Fast color scheme generator for finding complementary colors
                    and exploring palettes.
                  </p>
                  <a
                    href="https://coolors.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline flex items-center"
                  >
                    Visit Tool <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Card>
                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold mb-2">
                    Coblis Color Blindness Simulator
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Test how your designs appear to users with different types
                    of color blindness.
                  </p>
                  <a
                    href="https://www.color-blindness.com/coblis-color-blindness-simulator/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline flex items-center"
                  >
                    Visit Tool <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Inspiration Tab */}
          <TabsContent value="inspiration" className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Color Palette Inspiration
              </h2>
              <p className="text-muted-foreground">
                Explore curated color schemes from successful brands, websites,
                and design trends. Use these as starting points for your own
                themes or study how professional designers approach color
                selection.
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Popular Tech Brand Colors
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Spotify</h4>
                    <div className="flex gap-2 mb-2">
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#1DB954" }}
                        title="#1DB954"
                      ></div>
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#191414" }}
                        title="#191414"
                      ></div>
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#FFFFFF" }}
                        title="#FFFFFF"
                      ></div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Vibrant green with dark backgrounds creates energy and
                      focus on music.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Stripe</h4>
                    <div className="flex gap-2 mb-2">
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#635BFF" }}
                        title="#635BFF"
                      ></div>
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#0A2540" }}
                        title="#0A2540"
                      ></div>
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#00D4FF" }}
                        title="#00D4FF"
                      ></div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Professional purple with accents communicates trust and
                      innovation in fintech.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Airbnb</h4>
                    <div className="flex gap-2 mb-2">
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#FF5A5F" }}
                        title="#FF5A5F"
                      ></div>
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#00A699" }}
                        title="#00A699"
                      ></div>
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#FC642D" }}
                        title="#FC642D"
                      ></div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Warm coral primary with teal and orange creates welcoming,
                      adventurous feel.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Slack</h4>
                    <div className="flex gap-2 mb-2">
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#4A154B" }}
                        title="#4A154B"
                      ></div>
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#E01E5A" }}
                        title="#E01E5A"
                      ></div>
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#36C5F0" }}
                        title="#36C5F0"
                      ></div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Multi-color system emphasizes collaboration and
                      communication diversity.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Industry-Specific Color Trends
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Finance & Banking</h4>
                    <div className="flex gap-2 mb-2">
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#0052CC" }}
                        title="Corporate Blue"
                      ></div>
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#172B4D" }}
                        title="Navy"
                      ></div>
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#00875A" }}
                        title="Success Green"
                      ></div>
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#6B778C" }}
                        title="Neutral Gray"
                      ></div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Blues and navy convey trust, stability, and
                      professionalism. Green accents indicate growth and
                      success.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Healthcare & Wellness
                    </h4>
                    <div className="flex gap-2 mb-2">
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#00A8A8" }}
                        title="Medical Teal"
                      ></div>
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#5E9B6C" }}
                        title="Healing Green"
                      ></div>
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#F4F5F7" }}
                        title="Clean White"
                      ></div>
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#FF8B8B" }}
                        title="Warm Coral"
                      ></div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Calming teals and greens with soft accents create feelings
                      of care, cleanliness, and healing.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Creative & Entertainment
                    </h4>
                    <div className="flex gap-2 mb-2">
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#9B51E0" }}
                        title="Creative Purple"
                      ></div>
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#FF6B6B" }}
                        title="Energetic Red"
                      ></div>
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#FFD93D" }}
                        title="Playful Yellow"
                      ></div>
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#6BCB77" }}
                        title="Fresh Green"
                      ></div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Bold, vibrant colors communicate creativity, energy, and
                      artistic expression.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  2024 Design Trends
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Digital Lavender</h4>
                    <div className="flex gap-2 mb-2">
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#B4A7D6" }}
                        title="#B4A7D6"
                      ></div>
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#8E7CC3" }}
                        title="#8E7CC3"
                      ></div>
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#6A4C93" }}
                        title="#6A4C93"
                      ></div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Soft purples represent digital wellness and mindful
                      technology use.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Viva Magenta</h4>
                    <div className="flex gap-2 mb-2">
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#BE3455" }}
                        title="#BE3455"
                      ></div>
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#D84B6C" }}
                        title="#D84B6C"
                      ></div>
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: "#F26B8A" }}
                        title="#F26B8A"
                      ></div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Pantone's Color of the Year expresses confidence and
                      empowerment.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <Card className="p-8 bg-gradient-to-r from-primary/20 to-purple-500/20 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Put Your Knowledge to Practice?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Now that you've explored our resources, start creating professional
            color themes with our AI-powered generator. Apply what you've
            learned and generate beautiful, accessible color schemes in seconds.
          </p>
          <a href="/">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-semibold">
              Start Generating Themes
            </button>
          </a>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
