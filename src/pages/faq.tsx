import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Card } from "../components/ui/card";
import { HelpCircle, Palette, Shield, Zap, Download, Code } from "lucide-react";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our Smart Color Theme Generator.
            Can't find what you're looking for? Contact us at
            support@smart-color-generator.netlify.app
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <Card className="p-4">
            <Palette className="w-6 h-6 text-primary mb-2" />
            <h3 className="font-semibold mb-1">Getting Started</h3>
            <p className="text-sm text-muted-foreground">
              Learn the basics of theme generation
            </p>
          </Card>
          <Card className="p-4">
            <Shield className="w-6 h-6 text-green-600 mb-2" />
            <h3 className="font-semibold mb-1">Privacy & Security</h3>
            <p className="text-sm text-muted-foreground">
              How we protect your data
            </p>
          </Card>
          <Card className="p-4">
            <Code className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="font-semibold mb-1">Technical Details</h3>
            <p className="text-sm text-muted-foreground">
              Integration and export options
            </p>
          </Card>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {/* General Questions */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Zap className="w-6 h-6 mr-2 text-primary" />
              General Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem
                value="item-1"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  What is the Smart Color Theme Generator?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The Smart Color Theme Generator is a free, AI-powered tool
                  that helps designers and developers create professional color
                  schemes for websites and applications. Using advanced Groq AI
                  technology, it generates complete theme systems with light and
                  dark modes, ensuring WCAG accessibility compliance and
                  beautiful color harmonies. The tool works entirely in your
                  browser with no server required, providing instant results
                  while maintaining complete privacy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  Is this tool completely free to use?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! The Smart Color Theme Generator is 100% free with no
                  hidden costs, subscriptions, or premium tiers. You can
                  generate unlimited themes, preview them in real-time, and
                  export them in multiple formats without paying anything. We
                  believe great design tools should be accessible to everyone,
                  from students learning design to professional developers
                  building production applications. There are no feature
                  limitations or usage caps—every feature is available to all
                  users at no cost.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  Do I need to create an account or sign up?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No account or registration is required. You can start
                  generating themes immediately without providing any personal
                  information. The tool stores your generated themes locally in
                  your browser's storage, so they're available when you return,
                  but we never collect or store your data on servers. This
                  approach ensures maximum privacy and convenience—you can use
                  the tool anonymously and your themes remain completely private
                  to you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  How does the AI generation work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our tool uses Groq AI, powered by the llama-3.1-8b-instant
                  model, to intelligently analyze your input and generate
                  harmonious color schemes. When you provide colors or
                  descriptions, the AI considers color theory principles
                  (complementary, analogous, triadic harmonies), psychological
                  associations, accessibility requirements, and current design
                  trends. It calculates optimal contrast ratios, generates
                  matching light and dark mode variants, and ensures all colors
                  work together cohesively. The AI understands natural language
                  descriptions like "professional financial app" or "vibrant
                  creative portfolio" and translates them into appropriate color
                  palettes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  Can I use generated themes in commercial projects?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely! All themes generated by our tool are yours to use
                  without restrictions. You can use them in personal projects,
                  commercial products, client work, open-source software, or any
                  other purpose. There are no attribution requirements,
                  licensing fees, or usage limitations. The generated color
                  schemes are unique combinations created for you, and you have
                  full rights to use them however you wish. This includes
                  websites, mobile apps, desktop software, branding materials,
                  marketing collateral, and any other design applications.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Using the Tool */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Palette className="w-6 h-6 mr-2 text-primary" />
              Using the Tool
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem
                value="item-6"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  What are the two input methods for generating themes?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The tool offers two flexible input methods:
                  <br />
                  <br />
                  <strong>1. Color Input:</strong> Select specific hex colors
                  (primary, secondary, accent) that you want to include in your
                  theme. This is perfect when you have brand colors or specific
                  color requirements. The AI will build a complete theme system
                  around your chosen colors, generating complementary colors and
                  ensuring proper contrast.
                  <br />
                  <br />
                  <strong>2. Description Input:</strong> Describe your desired
                  theme in natural language. For example, "modern tech startup
                  with blue accents" or "warm cafe website with earthy tones."
                  The AI interprets your description, understands the mood and
                  style you're aiming for, and generates appropriate color
                  schemes that match your vision.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  How do light and dark modes work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Every generated theme includes both light and dark mode
                  variants that maintain your brand identity while adapting to
                  user preferences. The light mode uses lighter backgrounds with
                  darker text for optimal daytime viewing, while dark mode
                  inverts this with darker backgrounds and lighter text to
                  reduce eye strain in low-light conditions. Our AI ensures that
                  both modes maintain proper contrast ratios for accessibility
                  and that colors feel cohesive across both variants. You can
                  toggle between modes in the live preview to see how your theme
                  adapts.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-8"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  What is WCAG compliance and why does it matter?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  WCAG (Web Content Accessibility Guidelines) are international
                  standards that ensure digital content is accessible to
                  everyone, including people with visual impairments. WCAG
                  compliance focuses heavily on contrast ratios—the difference
                  in brightness between text and background colors. Our tool
                  automatically generates themes that meet or exceed WCAG AAA
                  standards (the highest level), ensuring contrast ratios of at
                  least 7:1 for normal text and 4.5:1 for large text. This means
                  your designs will be readable for users with low vision, color
                  blindness, or other visual disabilities, and you'll meet legal
                  accessibility requirements in many jurisdictions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-9"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  Can I generate multiple themes and compare them?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! The tool stores all your generated themes locally,
                  allowing you to create multiple variations and compare them
                  side by side. You can generate different themes for the same
                  project, explore various color directions, or create theme
                  variations for A/B testing. Each theme is saved automatically,
                  and you can preview any of them at any time using the live
                  preview feature. This makes it easy to present multiple
                  options to clients or team members and choose the best
                  direction for your project. You can export all themes at once
                  or select specific ones to export individually.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-10"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  How do I preview themes before exporting?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The live preview feature shows your themes applied to real UI
                  components including buttons, cards, forms, and text elements.
                  You can switch between light and dark modes to see how colors
                  adapt, view contrast ratios and WCAG compliance indicators,
                  and test themes with various component states (hover, active,
                  disabled). This real-world preview ensures your theme works in
                  practice, not just in theory. You can also see
                  component-specific style generators that show exactly how to
                  implement the theme in popular frameworks like React, Vue, and
                  plain CSS.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Exporting & Integration */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Download className="w-6 h-6 mr-2 text-primary" />
              Exporting & Integration
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem
                value="item-11"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  What export formats are available?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The tool exports themes in two production-ready formats:
                  <br />
                  <br />
                  <strong>CSS Format:</strong> Themes are exported as CSS custom
                  properties (variables) that work with any CSS framework
                  including Tailwind CSS, Bootstrap, Material-UI, and vanilla
                  CSS. The export includes both light and dark mode definitions
                  with proper media query selectors for automatic theme
                  switching based on user system preferences.
                  <br />
                  <br />
                  <strong>JSON Format:</strong> Themes are also available as
                  structured JSON objects perfect for JavaScript frameworks like
                  React, Vue, Angular, Svelte, and Next.js. The JSON format
                  includes all color values with semantic naming, making it easy
                  to integrate with styled-components, CSS-in-JS libraries, or
                  custom theme systems.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-12"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  How do I integrate exported themes into my project?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Integration is straightforward for both formats:
                  <br />
                  <br />
                  <strong>For CSS:</strong> Copy the exported CSS variables and
                  paste them into your global stylesheet (usually styles.css or
                  index.css). The variables follow CSS custom property syntax
                  like --color-primary, making them compatible with any modern
                  CSS workflow. You can then reference these variables
                  throughout your stylesheets using var(--color-primary).
                  <br />
                  <br />
                  <strong>For JSON:</strong> Import the exported JSON file into
                  your project and use it with your framework's theming system.
                  For React, you can create a theme context. For Vue, integrate
                  with your store. The JSON structure includes all semantic
                  color names (primary, secondary, accent, background,
                  foreground, etc.) for easy mapping.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-13"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  Are the exported themes compatible with Tailwind CSS?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! The exported CSS format is fully compatible with Tailwind
                  CSS. You can add the CSS variables to your base layer in your
                  Tailwind configuration, then reference them in your
                  tailwind.config.js to extend the default theme. For example,
                  you can map --color-primary to colors.primary in your Tailwind
                  config, allowing you to use classes like bg-primary,
                  text-primary, and border-primary throughout your project. The
                  component style generator also provides specific Tailwind
                  configuration examples for easy integration.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-14"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  Can I modify exported themes after exporting?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely! Exported themes are standard CSS or JSON that you
                  can modify as needed. You can adjust specific color values,
                  add additional shades or tints, rename variables, or
                  restructure the format to match your project's naming
                  conventions. The exports serve as a solid starting point with
                  professional color relationships and accessibility compliance,
                  but you have full control to fine-tune them for your specific
                  requirements. If you need variations, you can also regenerate
                  themes with slight adjustments to your original input and
                  export multiple versions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-15"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  How do I implement dark mode switching in my application?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The exported CSS includes both light and dark mode
                  definitions. For automatic switching based on system
                  preferences, the CSS uses @media (prefers-color-scheme: dark)
                  queries that modern browsers support. For manual toggling, you
                  can add a class-based approach by applying a .dark or
                  [data-theme="dark"] attribute to your root element and
                  adjusting the CSS selectors accordingly. The component style
                  generator provides implementation examples for popular
                  frameworks including React with context providers, Vue with
                  Vuex, and vanilla JavaScript with localStorage persistence.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Privacy & Security */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-primary" />
              Privacy & Security
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem
                value="item-16"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  Where is my data stored?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  All your generated themes are stored locally in your browser's
                  localStorage, not on any server. This means your data never
                  leaves your device—we don't have access to it, can't see it,
                  and don't collect it. This frontend-only architecture provides
                  maximum privacy and instant access to your themes. Your data
                  remains on your computer until you explicitly clear it using
                  the "Clear All" button or clear your browser's storage. There
                  are no databases, no cloud storage, and no data transmission
                  to external servers for theme storage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-17"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  Do you collect any personal information?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We collect minimal analytics data through Google Analytics
                  solely to understand how users interact with the tool (page
                  views, feature usage, etc.). We do not collect names, email
                  addresses, IP addresses beyond what Google Analytics
                  anonymizes, or any personally identifiable information. We
                  don't track your specific theme data or design choices. The
                  tool works entirely client-side, meaning your creative work
                  stays private. For full details on data collection, please
                  review our Privacy Policy page.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-18"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  What happens if I clear my browser data?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Since themes are stored in your browser's localStorage,
                  clearing your browser data will delete your generated themes.
                  This is why we recommend exporting themes you want to keep for
                  future reference. If you frequently clear your browser data or
                  use private/incognito browsing modes, make sure to export your
                  themes before closing the browser. We cannot recover themes
                  after browser data is cleared because we never store them on
                  servers. This is a trade-off for complete privacy—your data
                  never leaves your device, but you're responsible for backing
                  it up through exports.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-19"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  Is the tool safe to use on public or shared computers?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, the tool is safe to use on any computer. Since we don't
                  collect personal information or require login credentials,
                  there's no account security risk. However, be aware that
                  themes generated on shared computers are stored in that
                  browser's localStorage, meaning anyone using that browser
                  profile could potentially access them. If you're working on
                  sensitive projects on a shared computer, we recommend
                  exporting your themes and then clearing them from the tool
                  before logging off. You can clear themes using the "Clear All"
                  button in the navigation bar.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-20"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  Does the AI have access to my themes or project information?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The AI only sees the input you provide (color values or
                  description text) to generate themes. It doesn't have access
                  to your previously generated themes, project details, or any
                  other information about your work. Each generation request is
                  independent and stateless. The AI service (Groq) processes
                  your input to generate color schemes and returns the results,
                  but doesn't store or learn from your specific requests. Your
                  theme library remains entirely local and private.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Technical Questions */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Code className="w-6 h-6 mr-2 text-primary" />
              Technical Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem
                value="item-21"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  What technologies power this tool?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The Smart Color Theme Generator is built with modern web
                  technologies: React 18 for the user interface, TypeScript for
                  type safety, Tailwind CSS for styling, and Shadcn/ui for
                  accessible component library. The AI generation is powered by
                  Groq's lightning-fast inference engine running the
                  llama-3.1-8b-instant model. We use React Query for efficient
                  data management and Vite for blazing-fast build performance.
                  The entire application is a single-page application (SPA) that
                  runs entirely in the browser with no backend servers required.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-22"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  Which browsers are supported?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The tool works in all modern browsers including Chrome,
                  Firefox, Safari, Edge, Opera, and Brave. We support the latest
                  two major versions of each browser. The tool requires
                  JavaScript and localStorage to be enabled. For the best
                  experience, we recommend using the latest version of Chrome or
                  Firefox. Mobile browsers (iOS Safari, Chrome Mobile, Firefox
                  Mobile) are also fully supported, allowing you to generate
                  themes on phones and tablets.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-23"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  Can I use this tool offline?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The tool requires an internet connection for AI-powered theme
                  generation, as it communicates with Groq's API servers to
                  process your input and generate themes. However, once themes
                  are generated, you can view, preview, and export them offline
                  since they're stored locally in your browser. We're exploring
                  offline capabilities for future versions, but currently,
                  initial generation requires internet connectivity. Your
                  previously generated themes remain accessible offline.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-24"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  How fast is the AI generation?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Thanks to Groq's state-of-the-art inference technology, theme
                  generation typically takes 2-5 seconds. This includes
                  processing your input, analyzing color relationships,
                  calculating contrast ratios, generating light and dark mode
                  variants, and ensuring accessibility compliance. The speed
                  depends on your internet connection and current API load, but
                  we've optimized the system to provide near-instant results.
                  This is significantly faster than traditional design workflows
                  that can take hours to manually create and validate color
                  schemes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-25"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  Are there any API rate limits?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We implement reasonable rate limiting to ensure fair usage and
                  maintain service quality for all users. Under normal usage
                  patterns (generating a few themes per session), you won't
                  encounter any limits. If you need to generate many themes
                  rapidly, you might see temporary delays. These limits protect
                  the service from abuse while ensuring legitimate users can
                  always access the tool. If you have enterprise needs requiring
                  higher limits, please contact us to discuss custom solutions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Troubleshooting */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem
                value="item-26"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  Theme generation is failing. What should I do?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  If theme generation fails, try these steps: 1) Check your
                  internet connection; 2) Refresh the page and try again; 3) Try
                  a different input—if using colors, ensure they're valid hex
                  codes, or if using descriptions, make them more specific; 4)
                  Clear your browser cache and cookies; 5) Try a different
                  browser to rule out browser-specific issues. If problems
                  persist, the API service might be temporarily unavailable.
                  Wait a few minutes and try again. For persistent issues,
                  contact support with details about your browser, input method,
                  and any error messages displayed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-27"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  My generated themes disappeared. How do I recover them?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Themes are stored in browser localStorage and can be lost if
                  browser data is cleared, you switch browsers or devices, or
                  use private/incognito mode. Unfortunately, we cannot recover
                  lost themes because we never store them on servers— this is a
                  privacy trade-off. To prevent loss, always export important
                  themes using the Export button. Exported files serve as
                  backups you can reimport or reference later. We recommend
                  exporting themes immediately after generation if they're
                  important to your project.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-28"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  The colors generated don't match my expectations. Why?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  AI generation involves interpretation and creativity, so
                  results may vary. If colors don't match expectations: 1) For
                  color input, be specific about which colors are primary vs.
                  secondary vs. accent; 2) For description input, use more
                  detailed descriptions with specific color names, moods, or
                  references (e.g., "corporate blue like IBM" vs.
                  "professional"); 3) Generate multiple themes and compare—the
                  AI creates variations, so subsequent generations may better
                  match your vision; 4) Remember that the AI prioritizes
                  accessibility and harmony, which may adjust your input colors
                  for better contrast and usability. You can always export and
                  manually adjust themes after generation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-29"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  The live preview isn't showing correctly. What's wrong?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  If the live preview appears broken or incorrectly styled: 1)
                  Ensure you've generated at least one theme first; 2) Try
                  refreshing the page; 3) Check if your browser supports CSS
                  custom properties (all modern browsers do); 4) Disable browser
                  extensions that might interfere with styling (ad blockers,
                  dark mode extensions, etc.); 5) Try a different browser to
                  identify browser-specific issues. The preview relies on modern
                  CSS features, so very old browsers may have display issues. If
                  you're using IE11 or older, please upgrade to a modern
                  browser.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-30"
                className="bg-card px-6 rounded-lg border"
              >
                <AccordionTrigger className="text-left">
                  How do I report bugs or suggest features?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We welcome bug reports and feature suggestions! Please contact
                  us at support@smart-color-generator.netlify.app with: For
                  bugs—describe what happened, what you expected, your browser
                  and OS, steps to reproduce, and any error messages. For
                  features—explain the feature, why it would be useful, and how
                  you envision it working. We read all feedback and prioritize
                  improvements based on user needs. You can also check our blog
                  for announcements about new features and updates to the tool.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>

        {/* Still Have Questions */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-purple-500/10">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Visit our About page to
              learn more about the tool, check out our blog for in-depth
              tutorials and tips, or reach out to our support team.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/about">
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
                  About Us
                </button>
              </a>
              <a href="/blog">
                <button className="px-6 py-2 bg-card border border-border rounded-lg hover:bg-accent">
                  Read Blog
                </button>
              </a>
            </div>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
