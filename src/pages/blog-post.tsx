import { Link, useParams } from "wouter";
import { Button } from "../components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Card } from "../components/ui/card";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const blogContent = {
  "color-theory-basics": {
    title: "Understanding Color Theory: A Designer's Essential Guide",
    date: "December 10, 2025",
    readTime: "8 min read",
    category: "Color Theory",
    content: `
      <h2>Introduction to Color Theory</h2>
      <p>Color theory is the foundation of visual design. Whether you're creating a website, designing a logo, or painting a masterpiece, understanding how colors work together is essential for creating compelling visual experiences.</p>
      
      <h2>The Color Wheel</h2>
      <p>The color wheel is your roadmap to understanding color relationships. It consists of:</p>
      <ul>
        <li><strong>Primary Colors:</strong> Red, Blue, and Yellow - the building blocks that can't be created by mixing other colors</li>
        <li><strong>Secondary Colors:</strong> Green, Orange, and Purple - created by mixing two primary colors</li>
        <li><strong>Tertiary Colors:</strong> The six colors created by mixing primary and secondary colors</li>
      </ul>

      <h2>Color Harmonies</h2>
      <p>Color harmonies are combinations that are pleasing to the eye. Here are the most important ones:</p>
      
      <h3>Complementary Colors</h3>
      <p>Colors opposite each other on the color wheel create high contrast and vibrant looks. Think blue and orange, or red and green. Perfect for call-to-action buttons!</p>
      
      <h3>Analogous Colors</h3>
      <p>Colors next to each other on the wheel create harmonious, serene designs. Great for backgrounds and creating a cohesive mood.</p>
      
      <h3>Triadic Colors</h3>
      <p>Three colors evenly spaced on the color wheel offer vibrant yet balanced designs. This scheme is popular in playful, energetic brands.</p>

      <h2>Practical Applications</h2>
      <p>When choosing colors for your project:</p>
      <ol>
        <li>Start with your brand's primary color</li>
        <li>Use the color wheel to find complementary or analogous colors</li>
        <li>Test contrast ratios for accessibility</li>
        <li>Create both light and dark mode variations</li>
      </ol>

      <h2>Tools for Success</h2>
      <p>Modern tools like our AI Color Theme Generator can help you create perfect color harmonies automatically. By understanding the theory behind these tools, you can make informed decisions and customize generated themes to perfection.</p>

      <h2>Conclusion</h2>
      <p>Mastering color theory takes practice, but the principles are timeless. Start experimenting with different color combinations, pay attention to successful designs you encounter, and don't be afraid to break the rules once you understand them!</p>
    `,
  },
  "wcag-accessibility": {
    title: "WCAG Compliance: Creating Accessible Color Schemes",
    date: "December 8, 2025",
    readTime: "6 min read",
    category: "Accessibility",
    content: `
      <h2>Why Accessibility Matters</h2>
      <p>Web accessibility isn't just about compliance—it's about ensuring everyone can use your website, regardless of visual abilities. Over 1 billion people worldwide have some form of disability, and many experience color vision deficiencies.</p>

      <h2>Understanding WCAG Standards</h2>
      <p>The Web Content Accessibility Guidelines (WCAG) provide specific requirements for color contrast:</p>
      <ul>
        <li><strong>Level AA:</strong> Minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text</li>
        <li><strong>Level AAA:</strong> Enhanced contrast ratio of 7:1 for normal text and 4.5:1 for large text</li>
      </ul>

      <h2>Contrast Ratios Explained</h2>
      <p>A contrast ratio compares the luminance (brightness) between two colors. The ratio ranges from 1:1 (white on white) to 21:1 (black on white).</p>
      
      <h3>How to Calculate Contrast</h3>
      <p>While you can calculate manually, modern tools do this automatically. Our AI Color Theme Generator ensures all generated color combinations meet WCAG AA standards by default.</p>

      <h2>Common Accessibility Mistakes</h2>
      <ul>
        <li>Using low contrast gray text on white backgrounds</li>
        <li>Relying solely on color to convey information</li>
        <li>Ignoring focus indicators for keyboard navigation</li>
        <li>Using red and green together (problematic for colorblind users)</li>
      </ul>

      <h2>Best Practices</h2>
      <ol>
        <li><strong>Test Your Colors:</strong> Use contrast checkers before finalizing your palette</li>
        <li><strong>Provide Alternatives:</strong> Don't rely only on color—use icons, labels, and patterns</li>
        <li><strong>Consider Dark Mode:</strong> Ensure both light and dark themes meet standards</li>
        <li><strong>Test with Real Users:</strong> Nothing beats actual user testing</li>
      </ol>

      <h2>Tools and Resources</h2>
      <p>Several tools can help you create accessible color schemes:</p>
      <ul>
        <li>WebAIM Contrast Checker</li>
        <li>Color Oracle (colorblindness simulator)</li>
        <li>Our AI Color Theme Generator with built-in WCAG compliance</li>
      </ul>

      <h2>The Business Case</h2>
      <p>Accessible design isn't just ethical—it's profitable. Accessible websites have better SEO, reach wider audiences, and demonstrate corporate responsibility. Plus, in many jurisdictions, accessibility is legally required.</p>

      <h2>Conclusion</h2>
      <p>Creating accessible color schemes is easier than ever with modern tools. Start checking your contrast ratios today, and make the web a more inclusive place for everyone!</p>
    `,
  },
  "dark-mode-design": {
    title: "Mastering Dark Mode: Best Practices for Modern Websites",
    date: "December 5, 2025",
    readTime: "7 min read",
    category: "Design Tips",
    content: `
      <h2>The Rise of Dark Mode</h2>
      <p>Dark mode has evolved from a niche feature to an expected standard. Users love it for reduced eye strain, better battery life on OLED screens, and sleek aesthetics. But implementing dark mode well requires more than just inverting colors.</p>

      <h2>Why Dark Mode Matters</h2>
      <ul>
        <li><strong>Eye Strain Reduction:</strong> Lower brightness in low-light environments</li>
        <li><strong>Battery Savings:</strong> OLED screens save significant power with dark pixels</li>
        <li><strong>Focus Enhancement:</strong> Content stands out better against dark backgrounds</li>
        <li><strong>User Preference:</strong> Many users simply prefer the aesthetic</li>
      </ul>

      <h2>Dark Mode Design Principles</h2>
      
      <h3>1. Don't Just Invert Colors</h3>
      <p>True black (#000000) can be harsh and cause eye strain. Instead, use dark grays (#121212 to #1E1E1E) as your primary background. This provides depth and reduces contrast stress.</p>

      <h3>2. Reduce Color Saturation</h3>
      <p>Highly saturated colors vibrate against dark backgrounds. Desaturate your colors by 10-20% for dark mode to create a more comfortable viewing experience.</p>

      <h3>3. Maintain Proper Contrast</h3>
      <p>Dark mode still needs to meet WCAG standards! Ensure text has sufficient contrast against dark backgrounds. White text should be slightly dimmed to #E0E0E0 or #F5F5F5 rather than pure white.</p>

      <h3>4. Use Elevation with Surfaces</h3>
      <p>Create depth by using lighter shades for elevated surfaces. Each level of elevation should be slightly lighter than the one below it.</p>

      <h2>Technical Implementation</h2>
      <p>Modern approaches to dark mode include:</p>
      
      <h3>CSS Custom Properties</h3>
      <p>Use CSS variables to define colors that change based on theme. This makes switching between modes seamless and maintainable.</p>

      <h3>System Preference Detection</h3>
      <p>Respect user's system preferences with the prefers-color-scheme media query, but always provide a manual toggle as well.</p>

      <h3>Persistent Preferences</h3>
      <p>Save user's theme choice in localStorage to maintain their preference across sessions.</p>

      <h2>Common Pitfalls to Avoid</h2>
      <ul>
        <li>Using pure black backgrounds (too harsh)</li>
        <li>Not adjusting shadows (they don't show on dark backgrounds)</li>
        <li>Forgetting to update images and illustrations</li>
        <li>Ignoring color blind users in dark mode too</li>
      </ul>

      <h2>Testing Your Dark Mode</h2>
      <ol>
        <li>Test in various lighting conditions</li>
        <li>Check all interactive states (hover, focus, active)</li>
        <li>Verify all components and pages, not just the homepage</li>
        <li>Get feedback from actual dark mode users</li>
      </ol>

      <h2>Conclusion</h2>
      <p>Great dark mode design enhances user experience and shows attention to detail. By following these best practices, you'll create a dark theme that users actually want to use. Start with our AI Color Theme Generator to get perfectly balanced light and dark modes automatically!</p>
    `,
  },
  "color-psychology": {
    title: "Color Psychology in Web Design: Influence User Behavior",
    date: "December 3, 2025",
    readTime: "9 min read",
    category: "Psychology",
    content: `
      <h2>The Science of Color Psychology</h2>
      <p>Colors don't just look pretty—they trigger emotional and psychological responses that influence decision-making, brand perception, and user behavior. Understanding color psychology can dramatically improve your website's effectiveness.</p>

      <h2>How Colors Affect Emotions</h2>
      
      <h3>Red - Energy, Passion, Urgency</h3>
      <p>Red increases heart rate and creates urgency. Perfect for call-to-action buttons, sales, and clearance events. However, use sparingly as too much red can be overwhelming or aggressive.</p>
      <p><strong>Best for:</strong> E-commerce, food industry, sports brands</p>

      <h3>Blue - Trust, Calm, Professionalism</h3>
      <p>The most universally liked color. Blue evokes feelings of trust and security, which is why banks, healthcare, and tech companies love it. It's calming and professional without being boring.</p>
      <p><strong>Best for:</strong> Finance, healthcare, technology, corporate sites</p>

      <h3>Green - Growth, Health, Nature</h3>
      <p>Green represents growth, harmony, and environmental consciousness. It's easy on the eyes and associated with positive actions. Great for "go" buttons and confirmation messages.</p>
      <p><strong>Best for:</strong> Environmental, health, finance (money), organic products</p>

      <h3>Yellow - Optimism, Warmth, Caution</h3>
      <p>Yellow grabs attention and stimulates mental activity. It's cheerful but can cause eye strain if overused. Works great for highlighting important information.</p>
      <p><strong>Best for:</strong> Warning messages, highlighting, cheerful brands, children's products</p>

      <h3>Purple - Luxury, Creativity, Wisdom</h3>
      <p>Purple combines the stability of blue with the energy of red. It's associated with royalty, luxury, and creativity. Less common in web design, which makes it stand out.</p>
      <p><strong>Best for:</strong> Luxury brands, creative industries, beauty products, spirituality</p>

      <h3>Orange - Enthusiasm, Creativity, Adventure</h3>
      <p>Orange is friendly and inviting without the urgency of red. It encourages action and creates a sense of warmth and enthusiasm.</p>
      <p><strong>Best for:</strong> Call-to-action buttons, creative industries, youth brands</p>

      <h3>Black - Sophistication, Power, Elegance</h3>
      <p>Black conveys luxury, sophistication, and timelessness. It's bold and modern but can feel heavy if overused.</p>
      <p><strong>Best for:</strong> Luxury brands, fashion, modern tech products</p>

      <h2>Cultural Considerations</h2>
      <p>Remember that color meanings vary across cultures:</p>
      <ul>
        <li>White: Purity in Western cultures, mourning in some Eastern cultures</li>
        <li>Red: Luck in China, danger in Western contexts</li>
        <li>Yellow: Happiness in Western cultures, sacred in Hindu tradition</li>
      </ul>

      <h2>Practical Applications</h2>
      
      <h3>Call-to-Action Buttons</h3>
      <p>Use colors that stand out from your background. Orange, green, and red consistently perform well for conversion buttons, but test what works for your audience.</p>

      <h3>Brand Identity</h3>
      <p>Choose colors that align with your brand values and target audience. Tech companies often use blue for trust, while eco-brands lean toward green.</p>

      <h3>User Interface Elements</h3>
      <ul>
        <li>Success messages: Green</li>
        <li>Warnings: Yellow/Orange</li>
        <li>Errors: Red</li>
        <li>Information: Blue</li>
      </ul>

      <h2>A/B Testing Colors</h2>
      <p>While psychology provides guidelines, your specific audience might respond differently. Always test:</p>
      <ol>
        <li>Button colors for conversions</li>
        <li>Background colors for readability</li>
        <li>Accent colors for engagement</li>
      </ol>

      <h2>Combining Colors Strategically</h2>
      <p>The real magic happens when colors work together:</p>
      <ul>
        <li>Use 60-30-10 rule: 60% dominant color, 30% secondary, 10% accent</li>
        <li>Create hierarchy with color weight</li>
        <li>Guide user attention with strategic color placement</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Color psychology is powerful, but it's not magic. Use these principles as a starting point, then test and refine based on your actual user data. Our AI Color Theme Generator can help you explore different psychological impacts by generating themed palettes aligned with your goals!</p>
    `,
  },
  "brand-colors": {
    title: "Choosing the Perfect Brand Colors for Your Business",
    date: "November 30, 2025",
    readTime: "10 min read",
    category: "Branding",
    content: `
      <h2>Why Brand Colors Matter</h2>
      <p>Your brand colors are often the first thing people notice about your business. They appear everywhere—your logo, website, products, marketing materials, and social media. Get them right, and you create instant recognition and emotional connection. Get them wrong, and you confuse or alienate your audience.</p>

      <h2>The Strategic Approach to Color Selection</h2>
      
      <h3>Step 1: Define Your Brand Personality</h3>
      <p>Before choosing colors, answer these questions:</p>
      <ul>
        <li>What emotions should your brand evoke?</li>
        <li>Who is your target audience?</li>
        <li>What makes you different from competitors?</li>
        <li>What values does your brand represent?</li>
      </ul>

      <h3>Step 2: Research Your Industry</h3>
      <p>Study successful competitors and industry standards, but don't copy them. Find gaps you can fill with differentiation. If everyone in your industry uses blue, maybe there's an opportunity with orange or purple.</p>

      <h3>Step 3: Consider Your Audience</h3>
      <p>Different demographics respond to colors differently:</p>
      <ul>
        <li><strong>Age:</strong> Younger audiences prefer bold, bright colors; older demographics often prefer sophisticated, muted tones</li>
        <li><strong>Gender:</strong> While stereotypes shouldn't dictate, be aware of general preferences and test with your specific audience</li>
        <li><strong>Culture:</strong> Color meanings vary globally—research if you're targeting international markets</li>
      </ul>

      <h2>Building Your Brand Color Palette</h2>
      
      <h3>Primary Brand Color</h3>
      <p>This is THE color people associate with your brand. Choose carefully:</p>
      <ul>
        <li>Should align with brand personality</li>
        <li>Must work across all mediums (digital and print)</li>
        <li>Should be distinctive in your market</li>
        <li>Needs to be timeless, not trendy</li>
      </ul>

      <h3>Secondary Colors</h3>
      <p>Supporting colors that complement your primary color. Typically 2-3 colors that:</p>
      <ul>
        <li>Provide flexibility in design</li>
        <li>Help create hierarchy</li>
        <li>Allow for variety without diluting brand recognition</li>
      </ul>

      <h3>Accent Colors</h3>
      <p>Used sparingly for calls-to-action, highlights, and emphasis. Should pop against your primary and secondary colors.</p>

      <h3>Neutral Colors</h3>
      <p>Don't forget grays, whites, and blacks. These provide breathing room and make your brand colors stand out.</p>

      <h2>Real-World Brand Color Examples</h2>
      
      <h3>Tech Industry</h3>
      <ul>
        <li><strong>Facebook:</strong> Blue - trust and communication</li>
        <li><strong>Apple:</strong> Monochrome - sophistication and simplicity</li>
        <li><strong>Google:</strong> Multi-color - playfulness and innovation</li>
      </ul>

      <h3>Food & Beverage</h3>
      <ul>
        <li><strong>Coca-Cola:</strong> Red - energy and excitement</li>
        <li><strong>Starbucks:</strong> Green - growth and relaxation</li>
        <li><strong>McDonald's:</strong> Red & Yellow - appetite and happiness</li>
      </ul>

      <h2>Technical Considerations</h2>
      
      <h3>Accessibility First</h3>
      <p>Your brand colors must meet WCAG standards. Ensure sufficient contrast between text and backgrounds. Use tools to verify all color combinations are readable.</p>

      <h3>Color Modes</h3>
      <p>Define how your colors work in:</p>
      <ul>
        <li>Light mode (standard website backgrounds)</li>
        <li>Dark mode (increasingly important for apps and websites)</li>
        <li>Print (CMYK values, not just RGB/HEX)</li>
      </ul>

      <h3>Consistency Across Platforms</h3>
      <p>Colors can look different on various screens and materials. Define specific color values:</p>
      <ul>
        <li>HEX codes for web</li>
        <li>RGB for digital</li>
        <li>CMYK for print</li>
        <li>Pantone for exact physical matching</li>
      </ul>

      <h2>Testing Your Color Choices</h2>
      <ol>
        <li><strong>Mock Up Everything:</strong> See your colors on websites, business cards, products, and social media</li>
        <li><strong>Get Feedback:</strong> Test with target audience members—not just your team</li>
        <li><strong>Check Competitors:</strong> Ensure you're distinctive</li>
        <li><strong>Live With It:</strong> Don't rush—sit with your choices for a few weeks</li>
      </ol>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Choosing too many colors (stick to 4-5 maximum)</li>
        <li>Following trends instead of timeless principles</li>
        <li>Ignoring how colors work together as a system</li>
        <li>Not documenting exact color values in a brand guide</li>
        <li>Forgetting accessibility requirements</li>
      </ul>

      <h2>When to Rebrand</h2>
      <p>Changing brand colors is serious business. Consider it only if:</p>
      <ul>
        <li>Your target audience has fundamentally changed</li>
        <li>Current colors have accessibility issues</li>
        <li>You're merging with another company</li>
        <li>Your current colors are too similar to a competitor</li>
      </ul>

      <h2>Tools to Help You Choose</h2>
      <p>Use our AI Color Theme Generator to:</p>
      <ul>
        <li>Generate professional color palettes instantly</li>
        <li>Ensure WCAG compliance automatically</li>
        <li>See light and dark mode variations</li>
        <li>Export colors in all necessary formats</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Choosing brand colors is both an art and a science. Take time to research, test, and refine. Your brand colors will represent you for years to come, so invest the effort to get them right. Start exploring possibilities with our AI-powered generator and find the perfect colors that tell your brand's story!</p>
    `,
  },
};

export default function BlogPost() {
  const params = useParams();
  const postId = params.id as string;
  const post = blogContent[postId as keyof typeof blogContent];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navbar />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back to Blog Button */}
        <div className="mb-6">
          <Link href="/blog">
            <a>
              <Button variant="ghost">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </a>
          </Link>
        </div>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <div className="mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </header>

          {/* Article Content */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              lineHeight: "1.8",
            }}
          />

          {/* Call to Action */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Create Your Perfect Color Palette?
            </h3>
            <p className="text-muted-foreground mb-6">
              Use our AI-powered color theme generator to create beautiful,
              accessible color schemes in seconds. Get WCAG-compliant themes
              with automatic light and dark modes!
            </p>
            <Link href="/">
              <a>
                <Button size="lg" className="w-full md:w-auto">
                  Try the Color Generator
                </Button>
              </a>
            </Link>
          </Card>
        </article>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">More Articles</h3>
          <Link href="/blog">
            <a>
              <Button variant="outline" className="w-full">
                View All Blog Posts
              </Button>
            </a>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
