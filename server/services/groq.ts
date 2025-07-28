// server/services/groq.ts - Updated Groq AI service with current model
import Groq from "groq-sdk";

// Debug API key loading
console.log("🔍 Groq Service Debug:");
console.log("API key available:", !!process.env.GROQ_API_KEY);
console.log("API key length:", process.env.GROQ_API_KEY?.length || 0);

// Get API key with validation
function getApiKey(): string {
  const apiKey = process.env.GROQ_API_KEY || "";

  if (!apiKey) {
    console.error("❌ No Groq API key found in environment");
    throw new Error("Groq API key not found in environment variables");
  }

  if (!apiKey.startsWith("gsk_")) {
    console.error("❌ Invalid Groq API key format");
    throw new Error("Invalid Groq API key format. Should start with 'gsk_'");
  }

  console.log("✅ Groq API key validated successfully");
  return apiKey.trim();
}

// Initialize Groq client with error handling
let groq: Groq;

try {
  const apiKey = getApiKey();
  groq = new Groq({
    apiKey: apiKey,
  });
  console.log("✅ Groq client initialized successfully");
} catch (error) {
  console.error("❌ Failed to initialize Groq client:", error);
  throw error;
}

export interface ThemeDescription {
  name: string;
  light: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    backgroundSecondary: string;
    text: string;
    textSecondary: string;
    border: string;
    shadow: string;
  };
  dark: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    backgroundSecondary: string;
    text: string;
    textSecondary: string;
    border: string;
    shadow: string;
  };
}

// AI-powered color theme generation from user colors using Groq
export async function generateThemeFromColors(colors: {
  primary: string;
  secondary?: string;
  accent?: string;
}): Promise<ThemeDescription[]> {
  try {
    console.log("🚀 Starting Groq AI color theme generation...");
    console.log("Input colors:", colors);

    // Double-check API key is available
    if (!process.env.GROQ_API_KEY) {
      throw new Error("Groq API key not available at runtime");
    }

    const prompt = `As an expert UI/UX designer and color theorist, analyze the provided colors and generate 3 intelligent color theme variations.

User provided colors:
- Primary: ${colors.primary}
${
  colors.secondary
    ? `- Secondary: ${colors.secondary}`
    : "- Secondary: NOT PROVIDED (you choose the best one)"
}
${
  colors.accent
    ? `- Accent: ${colors.accent}`
    : "- Accent: NOT PROVIDED (you choose the best one)"
}

Your task:
1. Analyze the provided color(s) for mood, saturation, brightness, and color temperature
2. For missing colors (secondary/accent), intelligently suggest the BEST complementary colors using color theory
3. Generate 3 distinct theme variations with different moods/styles
4. Ensure WCAG AA compliance for all text/background combinations
5. Create meaningful, descriptive names that reflect the color palette and mood

Requirements:
- Each theme must have both light and dark modes
- Use the provided primary color as the base for all themes
- If secondary/accent colors are missing, choose colors that create beautiful, professional color schemes
- Consider color harmony principles (complementary, triadic, analogous, etc.)
- Names should be creative and descriptive (e.g., "Ocean Breeze Professional", "Sunset Creative", "Forest Minimal")

Return ONLY a valid JSON response in this exact format (no other text):
{
  "themes": [
    {
      "name": "Descriptive Theme Name",
      "light": {
        "primary": "#hexcolor",
        "secondary": "#hexcolor", 
        "accent": "#hexcolor",
        "background": "#ffffff",
        "backgroundSecondary": "#f8f9fa",
        "text": "#1a1a1a",
        "textSecondary": "#6b7280",
        "border": "#e5e7eb",
        "shadow": "#00000010"
      },
      "dark": {
        "primary": "#hexcolor",
        "secondary": "#hexcolor",
        "accent": "#hexcolor", 
        "background": "#0f172a",
        "backgroundSecondary": "#1e293b",
        "text": "#f1f5f9",
        "textSecondary": "#94a3b8",
        "border": "#334155",
        "shadow": "#00000030"
      }
    }
  ]
}`;

    console.log("📤 Sending request to Groq...");

    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are an expert UI/UX designer and color theorist. Generate beautiful, accessible color themes with intelligent color suggestions. Always respond with valid JSON only, no other text.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.1-8b-instant", // ✅ Updated to current supported model
      temperature: 0.8,
      max_tokens: 2000,
    });

    console.log("📥 Received response from Groq");

    if (!response.choices[0].message.content) {
      throw new Error("Empty response from Groq");
    }

    // Clean the response to ensure it's valid JSON
    let content = response.choices[0].message.content.trim();

    // Remove any non-JSON text before or after the JSON
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      content = jsonMatch[0];
    }

    const result = JSON.parse(content);

    if (
      !result.themes ||
      !Array.isArray(result.themes) ||
      result.themes.length !== 3
    ) {
      console.error("Invalid Groq response format:", result);
      throw new Error("Invalid response format from Groq AI");
    }

    console.log(
      "✅ Successfully generated",
      result.themes.length,
      "themes with Groq"
    );
    console.log(
      "Theme names:",
      result.themes.map((t: any) => t.name)
    );

    return result.themes;
  } catch (error) {
    console.error("❌ Groq API Error Details:");
    console.error(
      "Error type:",
      error instanceof Error ? error.constructor.name : "Unknown"
    );
    console.error(
      "Error message:",
      error instanceof Error ? error.message : String(error)
    );

    // Check for specific Groq errors
    if (error instanceof Error && error.message.includes("JSON")) {
      console.error("❌ JSON parsing failed - Groq returned invalid JSON");
    }

    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(
      "Failed to generate AI-powered theme from colors using Groq: " +
        errorMessage
    );
  }
}

export async function generateThemeFromDescription(
  description: string
): Promise<ThemeDescription[]> {
  try {
    console.log(
      "🚀 Generating themes from description with Groq:",
      description
    );

    // Double-check API key
    if (!process.env.GROQ_API_KEY) {
      throw new Error("Groq API key not available at runtime");
    }

    const prompt = `Based on the following description, generate 3 distinct color themes with meaningful names.

Description: "${description}"

Requirements:
- Generate exactly 3 unique themes
- Each theme must have a descriptive name
- Include both light and dark mode colors
- Ensure WCAG AA contrast compliance for text/background combinations
- Colors should be in hex format
- Consider the mood, style, and context from the description

Return ONLY a valid JSON response in this exact format (no other text):
{
  "themes": [
    {
      "name": "Theme Name",
      "light": {
        "primary": "#hexcolor",
        "secondary": "#hexcolor", 
        "accent": "#hexcolor",
        "background": "#ffffff",
        "backgroundSecondary": "#f8f9fa",
        "text": "#1a1a1a",
        "textSecondary": "#6b7280",
        "border": "#e5e7eb",
        "shadow": "#00000010"
      },
      "dark": {
        "primary": "#hexcolor",
        "secondary": "#hexcolor",
        "accent": "#hexcolor", 
        "background": "#0f172a",
        "backgroundSecondary": "#1e293b",
        "text": "#f1f5f9",
        "textSecondary": "#94a3b8",
        "border": "#334155",
        "shadow": "#00000030"
      }
    }
  ]
}`;

    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are an expert UI/UX designer and color theorist. Generate beautiful, accessible color themes based on user descriptions. Always respond with valid JSON only, no other text.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.1-8b-instant", // ✅ Updated to current supported model
      temperature: 0.8,
      max_tokens: 2000,
    });

    if (!response.choices[0].message.content) {
      throw new Error("Empty response from Groq");
    }

    // Clean the response to ensure it's valid JSON
    let content = response.choices[0].message.content.trim();
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      content = jsonMatch[0];
    }

    const result = JSON.parse(content);

    if (
      !result.themes ||
      !Array.isArray(result.themes) ||
      result.themes.length !== 3
    ) {
      throw new Error("Invalid response format from Groq AI");
    }

    console.log("✅ Successfully generated themes from description with Groq");
    return result.themes;
  } catch (error) {
    console.error("Error generating theme from description with Groq:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(
      "Failed to generate theme from description using Groq: " + errorMessage
    );
  }
}
