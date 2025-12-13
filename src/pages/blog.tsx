import { Link } from "wouter";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const blogPosts = [
  {
    id: "color-theory-basics",
    title: "Understanding Color Theory: A Designer's Essential Guide",
    description:
      "Learn the fundamentals of color theory and how to apply them to create stunning designs that captivate your audience.",
    date: "December 10, 2025",
    readTime: "8 min read",
    category: "Color Theory",
  },
  {
    id: "wcag-accessibility",
    title: "WCAG Compliance: Creating Accessible Color Schemes",
    description:
      "Discover how to ensure your color choices meet accessibility standards and provide great experiences for all users.",
    date: "December 8, 2025",
    readTime: "6 min read",
    category: "Accessibility",
  },
  {
    id: "dark-mode-design",
    title: "Mastering Dark Mode: Best Practices for Modern Websites",
    description:
      "Explore the art and science of creating beautiful dark mode themes that users love.",
    date: "December 5, 2025",
    readTime: "7 min read",
    category: "Design Tips",
  },
  {
    id: "color-psychology",
    title: "Color Psychology in Web Design: Influence User Behavior",
    description:
      "Understand how different colors affect emotions and decision-making to boost conversions and engagement.",
    date: "December 3, 2025",
    readTime: "9 min read",
    category: "Psychology",
  },
  {
    id: "brand-colors",
    title: "Choosing the Perfect Brand Colors for Your Business",
    description:
      "A comprehensive guide to selecting colors that represent your brand identity and resonate with your target audience.",
    date: "November 30, 2025",
    readTime: "10 min read",
    category: "Branding",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navbar />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Color Design Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tips, and guides on color theory, accessibility, and
            modern design practices.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
