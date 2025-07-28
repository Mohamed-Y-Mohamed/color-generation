// src/services/groqService.ts
import Groq from "groq-sdk";

// Security: Check if current origin is allowed
function validateOrigin(): boolean {
  if (typeof window === "undefined") return true; // SSR

  const allowedOrigins = import.meta.env.VITE_ALLOWED_ORIGINS?.split(",") || [
    "localhost:3000",
  ];
  const currentHost = window.location.host;

  console.log("🔐 Security Check:", { currentHost, allowedOrigins });

  // Check if current host is in allowed list
  const isAllowed = allowedOrigins.some(
    (origin) =>
      currentHost.includes(origin.trim()) || currentHost === origin.trim()
  );

  if (!isAllowed && import.meta.env.PROD) {
    console.error("❌ Unauthorized origin:", currentHost);
    throw new Error("Unauthorized: This domain is not allowed to use this API");
  }

  return true;
}

// Initialize Groq client
function createGroqClient(): Groq {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;

  if (!apiKey) {
    throw new Error(
      "Groq API key not found. Please set VITE_GROQ_API_KEY in your environment."
    );
  }

  if (!apiKey.startsWith("gsk_")) {
    throw new Error('Invalid Groq API key format. Should start with "gsk_"');
  }

  return new Groq({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true, // Required for frontend usage
  });
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

export interface ColorInput {
  primary: string;
  secondary?: string;
  accent?: string;
}

// Generate themes from colors using Groq AI
export async function generateThemeFromColors(
  colors: ColorInput
): Promise<ThemeDescription[]> {
  // Security check
  validateOrigin();

  const groq = createGroqClient();

  const prompt = `As an expert UI/UX designer and color theorist, analyze the provided colors and generate 3 intelligent color theme variations.

User provided colors:
- Primary: ${colors.primary}
- Secondary: ${colors.secondary || "NOT PROVIDED (you choose the best one)"}
- Accent: ${colors.accent || "NOT PROVIDED (you choose the best one)"}

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

  try {
    console.log("🚀 Calling Groq API from frontend for color generation...");

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
      model: "llama-3.1-8b-instant",
      temperature: 0.8,
      max_tokens: 2000,
    });

    if (!response.choices[0].message.content) {
      throw new Error("Empty response from Groq");
    }

    // Parse JSON response
    let content = response.choices[0].message.content.trim();
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      content = jsonMatch[0];
    }

    const result = JSON.parse(content);

    if (
      !result.themes ||
      !Array.isArray(result.themes) ||
      result.themes.length === 0
    ) {
      throw new Error("Invalid response format from Groq AI");
    }

    console.log(`✅ Generated ${result.themes.length} themes from colors`);
    return result.themes;
  } catch (error) {
    console.error("❌ Groq API Error (colors):", error);

    if (error instanceof Error) {
      if (error.message.includes("Unauthorized")) {
        throw new Error("This domain is not authorized to use the API");
      } else if (error.message.includes("API key")) {
        throw new Error(
          "API configuration error. Please check your Groq API key."
        );
      } else if (error.message.includes("JSON")) {
        throw new Error("Failed to parse AI response. Please try again.");
      }
    }

    throw new Error(
      `Failed to generate themes from colors: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

// Generate themes from description using Groq AI
export async function generateThemeFromDescription(
  description: string
): Promise<ThemeDescription[]> {
  // Security check
  validateOrigin();

  const groq = createGroqClient();

  const prompt = `Based on the following description, generate 3 distinct color themes with meaningful names.

Description: "${description}"

Requirements:
- Generate exactly 3 unique themes with different moods and personalities
- Each theme must have a descriptive name that reflects the description
- Include both light and dark mode colors
- Ensure WCAG AA contrast compliance for text/background combinations
- Colors should be in hex format
- Consider the mood, style, and context from the description
- Make themes visually distinct from each other

Return ONLY a valid JSON response in this exact format (no other text):
{
  "themes": [
    {
      "name": "Theme Name Based On Description",
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

  try {
    console.log(
      "🚀 Calling Groq API from frontend for description generation..."
    );

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
      model: "llama-3.1-8b-instant",
      temperature: 0.8,
      max_tokens: 2000,
    });

    if (!response.choices[0].message.content) {
      throw new Error("Empty response from Groq");
    }

    let content = response.choices[0].message.content.trim();
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      content = jsonMatch[0];
    }

    const result = JSON.parse(content);

    if (
      !result.themes ||
      !Array.isArray(result.themes) ||
      result.themes.length === 0
    ) {
      throw new Error("Invalid response format from Groq AI");
    }

    console.log(`✅ Generated ${result.themes.length} themes from description`);
    return result.themes;
  } catch (error) {
    console.error("❌ Groq API Error (description):", error);

    if (error instanceof Error) {
      if (error.message.includes("Unauthorized")) {
        throw new Error("This domain is not authorized to use the API");
      } else if (error.message.includes("API key")) {
        throw new Error(
          "API configuration error. Please check your Groq API key."
        );
      } else if (error.message.includes("JSON")) {
        throw new Error("Failed to parse AI response. Please try again.");
      }
    }

    throw new Error(
      `Failed to generate themes from description: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

// Test connection to Groq API
export async function testGroqConnection(): Promise<boolean> {
  try {
    validateOrigin();
    const groq = createGroqClient();

    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: "Hello, respond with just 'OK' to test the connection.",
        },
      ],
      model: "llama-3.1-8b-instant",
      max_tokens: 10,
    });

    return !!response.choices[0].message.content;
  } catch (error) {
    console.error("❌ Groq connection test failed:", error);
    return false;
  }
}
