// src/services/groqService.ts - Updated with direct allowed origins

import Groq from "groq-sdk";

// Enhanced security check with better debugging
function validateOrigin(): boolean {
  if (typeof window === "undefined") return true; // SSR

  // Added directly here without needing environment variables
  const allowedOrigins = [
    "localhost:3000",
    "https://smart-color-generator.netlify.app", // Added the allowed origin directly
  ];
  const currentHost = window.location.host;

  console.log("🔐 Security Check:", {
    currentHost,
    allowedOrigins,
    environment: import.meta.env.MODE,
  });

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

// Enhanced Groq client initialization with detailed debugging
function createGroqClient(): Groq {
  // Debug environment variables
  console.log("🔍 Environment Debug:");
  console.log("- Mode:", import.meta.env.MODE);
  console.log("- Is Production:", import.meta.env.PROD);
  console.log("- Is Development:", import.meta.env.DEV);

  const apiKey = import.meta.env.VITE_GROQ_API_KEY;

  console.log("🔑 API Key Check:");
  console.log("- API Key exists:", !!apiKey);
  console.log("- API Key length:", apiKey?.length || 0);
  console.log(
    "- API Key preview:",
    apiKey ? `${apiKey.substring(0, 8)}...` : "Not found"
  );

  if (!apiKey) {
    const errorMsg = `
❌ Groq API key not found!

In Netlify Dashboard:
1. Go to Site Settings → Environment Variables
2. Add: VITE_GROQ_API_KEY = gsk_your_key_here
3. Trigger new deployment

Current environment: ${import.meta.env.MODE}
Expected variable: VITE_GROQ_API_KEY
    `.trim();

    console.error(errorMsg);
    throw new Error(
      "Groq API key not found. Check Netlify environment variables."
    );
  }

  if (!apiKey.startsWith("gsk_")) {
    console.error('❌ Invalid API key format. Expected to start with "gsk_"');
    throw new Error('Invalid Groq API key format. Should start with "gsk_"');
  }

  console.log("✅ Groq API key validated successfully");

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
  try {
    // Security and environment checks
    validateOrigin();
    const groq = createGroqClient();

    console.log("🚀 Calling Groq API for color generation...");
    console.log("Input colors:", colors);

    const prompt = `As an expert UI/UX designer and color theorist, analyze the provided colors and generate 3 intelligent color theme variations.

User provided colors:
- Primary: ${colors.primary}
- Secondary: ${colors.secondary || "NOT PROVIDED (you choose the best one)"}
- Accent: ${colors.accent || "NOT PROVIDED (you choose the best one)"}

Requirements:
- Generate exactly 3 unique themes with different moods
- Each theme must have both light and dark modes
- Ensure WCAG AA compliance
- Create descriptive names

Return ONLY valid JSON in this format:
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
            "You are an expert UI/UX designer. Generate beautiful, accessible color themes. Always respond with valid JSON only.",
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
          "API configuration error. Check Netlify environment variables."
        );
      } else if (error.message.includes("JSON")) {
        throw new Error("Failed to parse AI response. Please try again.");
      }
    }

    throw new Error(
      `Failed to generate themes: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

// Generate themes from description using Groq AI
export async function generateThemeFromDescription(
  description: string
): Promise<ThemeDescription[]> {
  try {
    // Security and environment checks
    validateOrigin();
    const groq = createGroqClient();

    console.log("🚀 Calling Groq API for description generation...");
    console.log("Description:", description);

    const prompt = `Based on this description, generate 3 distinct color themes: "${description}"

Return ONLY valid JSON in this format:
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
            "You are an expert UI/UX designer. Generate beautiful, accessible color themes based on descriptions. Always respond with valid JSON only.",
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
          "API configuration error. Check Netlify environment variables."
        );
      } else if (error.message.includes("JSON")) {
        throw new Error("Failed to parse AI response. Please try again.");
      }
    }

    throw new Error(
      `Failed to generate themes: ${
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

    console.log("🧪 Testing Groq connection...");

    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: "Respond with just 'OK' to test the connection.",
        },
      ],
      model: "llama-3.1-8b-instant",
      max_tokens: 10,
    });

    const success = !!response.choices[0].message.content;
    console.log(
      success
        ? "✅ Groq connection test passed"
        : "❌ Groq connection test failed"
    );
    return success;
  } catch (error) {
    console.error("❌ Groq connection test failed:", error);
    return false;
  }
}
