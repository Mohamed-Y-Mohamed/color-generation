import { Navbar } from "../components/Navbar";
import { Card } from "../components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navbar />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">
          Last updated: December 13, 2025
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p>
              Smart Color Theme Generator ("we," "our," or "us") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, and share information when you use our website.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Automatically Collected Information
            </h3>
            <p>
              When you visit our website, we automatically collect certain
              information about your device, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Information You Provide
            </h3>
            <p>
              We collect information you voluntarily provide when using our
              color theme generator, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Color selections and preferences</li>
              <li>Text descriptions for AI-generated themes</li>
              <li>Exported theme data (stored locally in your browser)</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve our color theme generation service</li>
              <li>Analyze website usage and optimize user experience</li>
              <li>Comply with legal obligations</li>
              <li>Detect and prevent fraud or abuse</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              Cookies and Tracking Technologies
            </h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              Google Analytics
            </h3>
            <p>
              We use Google Analytics to understand how visitors use our site.
              Google Analytics uses cookies to collect information such as how
              often users visit the site, what pages they visit, and what other
              sites they used prior to coming to this site.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Google AdSense</h3>
            <p>
              We use Google AdSense to display advertisements. Google uses
              cookies to serve ads based on your prior visits to our website or
              other websites. You may opt out of personalized advertising by
              visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google's Ads Settings
              </a>
              .
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Local Storage</h3>
            <p>
              We use browser local storage to save your generated color themes
              and preferences locally on your device. This data never leaves
              your browser and is not transmitted to our servers.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p>
              We use the following third-party services that may collect
              information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Google Analytics:</strong> For website analytics -{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <strong>Google AdSense:</strong> For advertisements -{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <strong>Groq AI:</strong> For AI-powered theme generation -{" "}
                <a
                  href="https://groq.com/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <strong>Netlify:</strong> For website hosting -{" "}
                <a
                  href="https://www.netlify.com/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
            <p>
              We retain automatically collected information for as long as
              necessary to fulfill the purposes outlined in this Privacy Policy.
              Data stored in your browser's local storage remains until you
              clear it manually.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of personalized advertising</li>
              <li>Disable cookies in your browser settings</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p>
              Our service is not directed to children under 13 years of age. We
              do not knowingly collect personal information from children under
              13. If you become aware that a child has provided us with personal
              information, please contact us.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last updated" date.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@smart-color-generator.com"
                className="text-primary hover:underline"
              >
                support@smart-color-generator.com
              </a>
            </p>
            <p className="mt-2">
              <strong>Website:</strong>{" "}
              <a
                href="https://smart-color-generator.netlify.app"
                className="text-primary hover:underline"
              >
                https://smart-color-generator.netlify.app
              </a>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
