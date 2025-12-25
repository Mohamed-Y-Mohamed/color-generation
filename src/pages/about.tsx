import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Card } from "../components/ui/card";
import { Link } from "wouter";
import { Button } from "../components/ui/button";
import {
  Mail,
  ExternalLink,
  Users,
  Target,
  Zap,
  Heart,
  Globe,
  Shield,
  Lightbulb,
  Code,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navbar />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Creating beautiful, accessible color themes made simple
        </p>

        <div className="space-y-6">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed mb-4">
              Smart Color Theme Generator was created to democratize
              professional design tools and make beautiful, accessible color
              schemes available to everyone—from seasoned designers to
              developers just starting their creative journey. We believe that
              great design should not be locked behind expensive software
              licenses or require years of formal training in color theory.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our mission is to empower creators worldwide with AI-powered
              design tools that understand both the artistic and technical
              aspects of color selection. By combining advanced artificial
              intelligence with proven color theory principles and accessibility
              standards, we've created a tool that generates
              professional-quality themes in seconds while ensuring they meet
              international WCAG compliance standards.
            </p>
            <p className="text-lg leading-relaxed">
              We're committed to keeping this tool completely free and
              privacy-focused, working entirely in your browser with no server
              uploads, no subscriptions, and no hidden fees. Your creative work
              stays yours, and we believe that's how it should be.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's most trusted and accessible color theme
                generator, helping millions of creators build more beautiful and
                inclusive digital experiences. We envision a future where
                perfect color harmony is just seconds away for anyone with a
                creative vision.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Accessibility first, privacy by default, and quality without
                compromise. We're committed to building tools that respect your
                data, support inclusive design practices, and deliver
                professional results without requiring professional budgets or
                expertise.
              </p>
            </Card>
          </div>

          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      AI-Powered Theme Generation
                    </h3>
                    <p className="text-muted-foreground">
                      Using advanced AI technology powered by Groq's
                      llama-3.1-8b-instant model, we generate complete color
                      themes from simple descriptions or base colors. Our AI
                      understands color theory principles including
                      complementary, analogous, and triadic harmonies, creating
                      palettes that are both scientifically sound and
                      aesthetically pleasing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      WCAG Compliance
                    </h3>
                    <p className="text-muted-foreground">
                      All generated themes meet or exceed WCAG AAA accessibility
                      standards, ensuring your designs are usable by everyone,
                      including people with visual impairments, color blindness,
                      and other accessibility needs. We automatically calculate
                      contrast ratios and adjust colors to meet international
                      accessibility regulations for both light and dark modes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Light & Dark Modes
                    </h3>
                    <p className="text-muted-foreground">
                      Every theme comes with automatic light and dark mode
                      variants that maintain consistent brand identity while
                      adapting to user preferences. Our dark modes use
                      scientifically calculated reduced luminance to prevent eye
                      strain during extended use.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Code className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Easy Export</h3>
                    <p className="text-muted-foreground">
                      Export your themes as JSON or CSS custom properties, ready
                      to use in any project. Compatible with Tailwind CSS,
                      Bootstrap, Material-UI, and vanilla CSS. We also generate
                      component styles for common UI elements like buttons,
                      cards, and forms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-primary" />
                Who We Built This For
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Web Designers:</strong>{" "}
                  Rapidly prototype color schemes and present multiple options
                  to clients in minutes.
                </p>
                <p>
                  <strong className="text-foreground">Developers:</strong> Get
                  beautiful, accessible colors without design expertise or hours
                  of tweaking.
                </p>
                <p>
                  <strong className="text-foreground">Startups:</strong> Build
                  professional products on a budget with no design team needed.
                </p>
                <p>
                  <strong className="text-foreground">Students:</strong> Learn
                  color theory by seeing how AI applies principles in real-time.
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Lightbulb className="w-6 h-6 mr-2 text-primary" />
                How It Started
              </h2>
              <p className="text-muted-foreground mb-4">
                This project was born from frustration with manually adjusting
                colors, calculating contrast ratios, and testing
                accessibility—time better spent building features. We knew there
                had to be a better way.
              </p>
              <p className="text-muted-foreground">
                By combining AI with established color theory and accessibility
                standards, we created a tool that handles complexity
                automatically. What started as personal utility now helps
                thousands of creators worldwide.
              </p>
            </Card>
          </div>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Privacy & Data</h2>
            <p className="mb-4">
              Your privacy is important to us. Our color theme generator works
              entirely in your browser - your color selections and themes are
              stored locally and never transmitted to our servers (except AI
              requests which are processed securely).
            </p>
            <Link href="/privacy-policy">
              <a>
                <Button variant="outline" className="gap-2">
                  Read Privacy Policy <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </Link>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Frontend</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• React 18 with TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Shadcn/ui Components</li>
                  <li>• Vite Build Tool</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Services</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Groq AI (llama-3.1-8b)</li>
                  <li>• Google Analytics</li>
                  <li>• Netlify Hosting</li>
                  <li>• Google AdSense</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              Have questions, suggestions, or feedback? We'd love to hear from
              you!
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:v.i.o.usher@live.com"
                  className="text-primary hover:underline"
                >
                  v.i.o.usher@live.com
                </a>
              </div>
              <Link href="/contact">
                <a>
                  <Button variant="outline" size="sm" className="gap-2 mt-2">
                    Go to Contact Page <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              </Link>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Start Creating</h2>
            <p className="mb-4">
              Ready to generate your perfect color palette? Try our AI-powered
              theme generator now!
            </p>
            <Link href="/">
              <a>
                <Button size="lg">Try the Color Generator</Button>
              </a>
            </Link>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
