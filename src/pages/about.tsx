import { Navbar } from "../components/Navbar";
import { Card } from "../components/ui/card";
import { Link } from "wouter";
import { Button } from "../components/ui/button";
import { Mail, ExternalLink } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navbar />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Creating beautiful, accessible color themes made simple
        </p>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Smart Color Theme Generator was created to help designers,
              developers, and creatives generate beautiful, accessible color
              schemes effortlessly. We believe that great design should be
              accessible to everyone, which is why our tool is completely free
              and works entirely in your browser.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  🎨 AI-Powered Theme Generation
                </h3>
                <p>
                  Using advanced AI technology powered by Groq, we can generate
                  complete color themes from simple descriptions or base colors.
                  Our AI understands color theory and creates harmonious
                  palettes that work.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  ♿ WCAG Compliance
                </h3>
                <p>
                  All generated themes meet WCAG AA accessibility standards,
                  ensuring your designs are usable by everyone, including people
                  with visual impairments.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  🌓 Light & Dark Modes
                </h3>
                <p>
                  Every theme comes with automatic light and dark mode variants,
                  so your designs look great in any environment.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">💾 Easy Export</h3>
                <p>
                  Export your themes as JSON or CSS variables, ready to use in
                  your projects. We also generate component styles for common UI
                  elements.
                </p>
              </div>
            </div>
          </Card>

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
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:v.i.o.usher@live.com"
                  className="text-primary hover:underline"
                >
                  v.i.o.usher@live.com
                </a>
              </div>
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
    </div>
  );
}
