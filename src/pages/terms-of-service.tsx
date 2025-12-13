import { Navbar } from "../components/Navbar";
import { Card } from "../components/ui/card";
import { Footer } from "../components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navbar />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Terms of Service
        </h1>
        <p className="text-muted-foreground mb-8">
          Last updated: December 13, 2025
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
          <Card className="p-6 bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800">
            <h2 className="text-2xl font-bold mb-4">Important Notice</h2>
            <p className="font-semibold">
              By using this website, you agree to these Terms of Service. If you
              do not agree, please do not use our service.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Smart Color Theme Generator ("the
              Service"), you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to these Terms of
              Service, you must not use the Service.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              2. Description of Service
            </h2>
            <p>
              Smart Color Theme Generator provides an AI-powered tool for
              generating color themes for design and development purposes. The
              Service is provided "as is" and "as available" without any
              warranties of any kind.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              3. Use of Service - Your Responsibilities
            </h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Use the Service only for lawful purposes</li>
              <li>Not attempt to interfere with or disrupt the Service</li>
              <li>Not use automated scripts or bots to access the Service</li>
              <li>
                Export and save any important data, as we do not provide backups
              </li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </Card>

          <Card className="p-6 bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800">
            <h2 className="text-2xl font-bold mb-4">
              4. Data Storage and User Responsibility
            </h2>
            <p className="font-semibold mb-4">CRITICAL DISCLAIMER:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Local Storage Only:</strong> All color themes and user
                data are stored exclusively in your browser's local storage.
              </li>
              <li>
                <strong>No Server Backups:</strong> We do not store, backup, or
                have access to your locally stored data.
              </li>
              <li>
                <strong>Your Responsibility:</strong> You are solely responsible
                for exporting and backing up any themes you wish to keep.
              </li>
              <li>
                <strong>Data Loss:</strong> Clearing browser data, switching
                devices, or browser updates may result in permanent data loss.
              </li>
              <li>
                <strong>No Liability:</strong> We accept NO responsibility or
                liability for any data loss, regardless of cause.
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              5. Disclaimer of Warranties
            </h2>
            <p className="font-semibold mb-2">
              THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.
            </p>
            <p>We specifically disclaim:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                Any warranties of merchantability or fitness for a particular
                purpose
              </li>
              <li>Any guarantees of service availability or uptime</li>
              <li>
                Any warranties regarding the accuracy of AI-generated content
              </li>
              <li>
                Any warranties that the Service will be error-free or
                uninterrupted
              </li>
              <li>Any responsibility for data loss or corruption</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              6. Limitation of Liability
            </h2>
            <p className="font-semibold mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                We shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages.
              </li>
              <li>
                We shall not be liable for any loss of data, profits, revenue,
                or business opportunities.
              </li>
              <li>
                Our total liability shall not exceed $0 (zero dollars), as this
                is a free service.
              </li>
              <li>
                We are not responsible for any damages resulting from your use
                or inability to use the Service.
              </li>
              <li>
                We are not liable for any third-party services, including but
                not limited to Google Analytics, AdSense, or Groq AI.
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">7. AI-Generated Content</h2>
            <p>
              Color themes generated by AI may not always meet your specific
              needs or expectations. You are solely responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                Verifying the suitability of generated themes for your purposes
              </li>
              <li>Testing color combinations for accessibility compliance</li>
              <li>Ensuring generated themes meet your project requirements</li>
              <li>
                Any use of AI-generated themes in commercial or personal
                projects
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">8. Third-Party Services</h2>
            <p>
              Our Service uses third-party services (Google Analytics, Google
              AdSense, Groq AI, Netlify). We are not responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>The privacy practices of these third parties</li>
              <li>The availability or performance of these services</li>
              <li>Any data collected by these third parties</li>
              <li>
                Any damages resulting from your interaction with these services
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              9. Intellectual Property
            </h2>
            <p>
              The Service's code, design, and branding are owned by Smart Color
              Theme Generator. However:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>You retain all rights to color themes you generate</li>
              <li>
                You may use generated themes for personal or commercial purposes
              </li>
              <li>We claim no ownership over user-generated content</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              10. Service Availability
            </h2>
            <p>We reserve the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Modify, suspend, or discontinue the Service at any time</li>
              <li>Change these Terms of Service without prior notice</li>
              <li>Refuse service to anyone for any reason</li>
              <li>Remove or modify features without notification</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Smart Color Theme
              Generator, its operators, and affiliates from any claims, damages,
              losses, or expenses arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Any data loss or security breach on your device</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              applicable laws. Any disputes shall be resolved in the appropriate
              courts.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">13. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Continued
              use of the Service after changes constitutes acceptance of the new
              Terms. It is your responsibility to review these Terms
              periodically.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">14. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the
              remaining provisions will remain in full force and effect.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">15. Contact Information</h2>
            <p>
              If you have questions about these Terms of Service, please contact
              us:
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

          <Card className="p-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <p className="font-semibold mb-2">Key Points to Remember:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>✓ Service is free and provided "as is"</li>
              <li>✓ You're responsible for backing up your data</li>
              <li>✓ We have no liability for data loss</li>
              <li>✓ Use the export feature to save important themes</li>
              <li>✓ Third-party services have their own terms and policies</li>
            </ul>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
