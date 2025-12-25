import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Mail,
  MessageSquare,
  HelpCircle,
  Bug,
  Lightbulb,
  Github,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const mailtoLink = `mailto:v.i.o.usher@live.com?subject=${encodeURIComponent(
      formData.subject || "Contact from Smart Color Generator"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    toast({
      title: "Opening Email Client",
      description: "Your default email application will open with the message.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navbar />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions, feedback, or suggestions? We'd love to hear from
            you! Our team is here to help make your color design experience even
            better.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Methods */}
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-muted-foreground mb-4">
              Get in touch via email for detailed inquiries
            </p>
            <a
              href="mailto:v.i.o.usher@live.com"
              className="text-primary hover:underline font-medium"
            >
              v.i.o.usher@live.com
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">FAQ</h3>
            <p className="text-muted-foreground mb-4">
              Find answers to common questions
            </p>
            <a href="/faq" className="text-primary hover:underline font-medium">
              Visit FAQ Page
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Resources</h3>
            <p className="text-muted-foreground mb-4">
              Browse tutorials and guides
            </p>
            <a
              href="/resources"
              className="text-primary hover:underline font-medium"
            >
              Explore Resources
            </a>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us more..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                This will open your default email client with the message
                pre-filled.
              </p>
            </form>
          </Card>

          {/* Contact Information & Support Topics */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">How Can We Help?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Bug className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Report a Bug</h3>
                    <p className="text-sm text-muted-foreground">
                      Found something not working correctly? Let us know so we
                      can fix it.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Feature Request</h3>
                    <p className="text-sm text-muted-foreground">
                      Have an idea to make our tool better? We'd love to hear
                      your suggestions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">General Inquiry</h3>
                    <p className="text-sm text-muted-foreground">
                      Questions about features, usage, or partnerships? Reach
                      out anytime.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MessageSquare className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Feedback</h3>
                    <p className="text-sm text-muted-foreground">
                      Share your experience and help us improve the tool for
                      everyone.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
              <h2 className="text-xl font-bold mb-3">Quick Response Time</h2>
              <p className="text-muted-foreground mb-4">
                We typically respond to all inquiries within 24-48 hours during
                business days. For urgent technical issues, please include
                "URGENT" in your subject line.
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-muted-foreground">
                  Usually replies within a day
                </span>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-3">Before You Contact</h2>
              <p className="text-muted-foreground mb-4">
                Please check our FAQ and Resources pages—you might find your
                answer there!
              </p>
              <div className="space-y-2">
                <a
                  href="/faq"
                  className="block text-primary hover:underline font-medium"
                >
                  → Browse Frequently Asked Questions
                </a>
                <a
                  href="/resources"
                  className="block text-primary hover:underline font-medium"
                >
                  → View Tutorials & Guides
                </a>
                <a
                  href="/privacy-policy"
                  className="block text-primary hover:underline font-medium"
                >
                  → Read Privacy Policy
                </a>
              </div>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <Card className="p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">About Our Support</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                What We Can Help With
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Technical issues and bug reports</li>
                <li>✓ Feature requests and suggestions</li>
                <li>✓ Questions about color theory and accessibility</li>
                <li>✓ Export format assistance</li>
                <li>✓ Integration guidance for your projects</li>
                <li>✓ General inquiries about the tool</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Response Expectations
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Email responses: 24-48 hours</li>
                <li>• Bug fixes: Prioritized by severity</li>
                <li>• Feature requests: Evaluated quarterly</li>
                <li>• We read every message personally</li>
                <li>• Your feedback shapes our roadmap</li>
                <li>• Community-driven improvements</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Privacy Notice */}
        <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border">
          <h3 className="font-semibold mb-2 flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            Privacy Notice
          </h3>
          <p className="text-sm text-muted-foreground">
            By contacting us, you agree that we may store your email address and
            message content solely for the purpose of responding to your
            inquiry. We do not share your contact information with third
            parties. See our{" "}
            <a href="/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </a>{" "}
            for more details.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
