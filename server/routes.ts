// server/routes.ts - Updated for Groq AI
import type { Express, Request } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage.js";
import {
  colorInputSchema,
  imageInputSchema,
  descriptionInputSchema,
} from "@shared/schema";
import {
  generateThemeFromDescription,
  generateThemeFromColors as generateGroqThemeFromColors,
} from "./services/groq.js"; // Changed from openai.js to groq.js
import {
  extractColorsFromImage,
  generateThemesFromColors as generateFromExtracted,
} from "./services/colorExtractor.js";
import { generateThemesFromColors } from "./services/themeGenerator.js";
import multer from "multer";
import { ZodError } from "zod";

// Helper functions for error handling
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "Unknown error occurred";
}

function getErrorStack(error: unknown): string | undefined {
  if (error instanceof Error) return error.stack;
  return undefined;
}

function isZodError(error: unknown): error is ZodError {
  return error instanceof ZodError;
}

interface MulterRequest extends Request {
  file?: any;
}

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Test endpoint to debug theme generation
  app.get("/api/test", async (req, res) => {
    console.log("=== Test Endpoint ===");
    try {
      res.json({
        success: true,
        message: "Backend is working with Groq AI!",
        timestamp: new Date().toISOString(),
        groqConfigured: !!process.env.GROQ_API_KEY,
        aiProvider: "Groq",
      });
    } catch (error) {
      console.error("✗ Test failed:", error);
      res.status(500).json({ error: getErrorMessage(error) });
    }
  });

  // Generate themes from color input - NOW USES GROQ AI AND CLEARS OLD THEMES
  app.post("/api/themes/from-colors", async (req, res) => {
    console.log("=== Groq AI-Powered Generate Themes from Colors ===");
    console.log("Request body:", req.body);

    try {
      // Step 1: Validate input
      console.log("1️⃣ Validating input...");
      const colorInput = colorInputSchema.parse(req.body);
      console.log("✅ Input validated:", colorInput);

      // Step 2: Check Groq API key
      if (!process.env.GROQ_API_KEY) {
        throw new Error(
          "Groq API key not configured. Please set GROQ_API_KEY environment variable."
        );
      }

      // Step 3: Clear old themes first
      console.log("2️⃣ Clearing old themes...");
      try {
        if (typeof storage.clearAllThemes === "function") {
          await storage.clearAllThemes();
          console.log("✅ Old themes cleared");
        } else {
          console.log("⚠️ clearAllThemes not available, will replace manually");
        }
      } catch (clearError) {
        console.warn("⚠️ Could not clear themes:", clearError);
      }

      // Step 4: Generate themes using Groq AI
      console.log("3️⃣ Calling Groq AI for intelligent color generation...");
      const aiGeneratedThemes = await generateGroqThemeFromColors(colorInput);
      console.log(`✅ Groq AI generated ${aiGeneratedThemes.length} themes`);

      // Step 5: Save new themes
      console.log("4️⃣ Saving new Groq AI-generated themes...");
      const savedThemes = [];

      for (let i = 0; i < aiGeneratedThemes.length; i++) {
        const theme = aiGeneratedThemes[i];
        console.log(`Saving Groq AI theme ${i + 1}: ${theme.name}`);

        const saved = await storage.createTheme({
          name: theme.name,
          colors: {
            light: theme.light,
            dark: theme.dark,
          },
          inputType: "color",
          inputData: {
            ...colorInput,
            generatedBy: "Groq AI",
            model: "mixtral-8x7b-32768",
          },
        });
        savedThemes.push(saved);
      }

      console.log(
        `🚀 Successfully saved ${savedThemes.length} Groq AI-powered themes`
      );

      res.json({
        themes: savedThemes,
        metadata: {
          generatedBy: "Groq AI",
          model: "mixtral-8x7b-32768",
          inputColors: colorInput,
          action: "replaced",
        },
      });
    } catch (error) {
      console.error("=== ERROR ===");
      console.error("Error:", error);

      if (isZodError(error)) {
        console.error("Validation errors:", error.errors);
        res.status(400).json({
          message: "Invalid input data",
          errors: error.errors,
          receivedData: req.body,
        });
      } else {
        const errorMessage = getErrorMessage(error);
        const errorStack = getErrorStack(error);

        // Special handling for Groq errors
        if (errorMessage.includes("Groq") || errorMessage.includes("API key")) {
          res.status(500).json({
            message: "Groq AI service error: " + errorMessage,
            suggestion: "Check Groq API key configuration",
            details:
              process.env.NODE_ENV === "development"
                ? {
                    stack: errorStack,
                    receivedData: req.body,
                    hasApiKey: !!process.env.GROQ_API_KEY,
                  }
                : undefined,
          });
        } else {
          res.status(500).json({
            message:
              "Failed to generate Groq AI-powered themes from colors: " +
              errorMessage,
            details:
              process.env.NODE_ENV === "development"
                ? {
                    stack: errorStack,
                    receivedData: req.body,
                  }
                : undefined,
          });
        }
      }
    }
  });

  // Generate themes from image upload - ALSO USES GROQ AI AND CLEARS OLD THEMES
  app.post(
    "/api/themes/from-image",
    upload.single("image"),
    async (req: MulterRequest, res) => {
      console.log("=== Generate Themes from Image with Groq AI ===");

      try {
        if (!req.file) {
          return res.status(400).json({ message: "No image file provided" });
        }

        // Clear old themes first
        console.log("🗑️ Clearing old themes...");
        try {
          if (typeof storage.clearAllThemes === "function") {
            await storage.clearAllThemes();
          }
        } catch (clearError) {
          console.warn("⚠️ Could not clear themes:", clearError);
        }

        console.log("📸 Extracting colors from image...");
        const extractedColors = await extractColorsFromImage(req.file.buffer);
        console.log("✅ Colors extracted:", extractedColors.palette.length);

        // Use Groq AI to generate themes from extracted colors
        console.log(
          "🚀 Using Groq AI to generate themes from extracted colors..."
        );
        const primaryColor = extractedColors.palette[0];
        const secondaryColor = extractedColors.palette[1];
        const accentColor = extractedColors.palette[2];

        const aiThemes = await generateGroqThemeFromColors({
          primary: primaryColor,
          secondary: secondaryColor,
          accent: accentColor,
        });

        console.log("✅ Groq AI generated themes from image colors");

        // Save new themes
        const savedThemes = [];
        for (const theme of aiThemes) {
          const saved = await storage.createTheme({
            name: theme.name,
            colors: { light: theme.light, dark: theme.dark },
            inputType: "image",
            inputData: {
              fileName: req.file.originalname,
              extractedColors: extractedColors.palette,
              generatedBy: "Groq AI",
              primaryExtracted: primaryColor,
            },
          });
          savedThemes.push(saved);
        }

        res.json({
          themes: savedThemes,
          extractedColors: extractedColors.palette,
          metadata: {
            generatedBy: "Groq AI",
            extractedColorsUsed: [primaryColor, secondaryColor, accentColor],
            action: "replaced",
          },
        });
      } catch (error) {
        console.error("Error generating themes from image:", error);
        res.status(500).json({
          message:
            "Failed to generate themes from image using Groq AI: " +
            getErrorMessage(error),
        });
      }
    }
  );

  // Generate themes from description using Groq AI - ALSO CLEARS OLD THEMES
  app.post("/api/themes/from-description", async (req, res) => {
    console.log("=== Generate Themes from Description with Groq AI ===");

    try {
      const descriptionInput = descriptionInputSchema.parse(req.body);
      console.log("✅ Description validated:", descriptionInput.description);

      // Clear old themes first
      console.log("🗑️ Clearing old themes...");
      try {
        if (typeof storage.clearAllThemes === "function") {
          await storage.clearAllThemes();
        }
      } catch (clearError) {
        console.warn("⚠️ Could not clear themes:", clearError);
      }

      const aiThemes = await generateThemeFromDescription(
        descriptionInput.description
      );
      console.log("✅ Groq AI generated themes from description");

      // Save new themes
      const savedThemes = [];
      for (const theme of aiThemes) {
        const saved = await storage.createTheme({
          name: theme.name,
          colors: { light: theme.light, dark: theme.dark },
          inputType: "description",
          inputData: {
            ...descriptionInput,
            generatedBy: "Groq AI",
          },
        });
        savedThemes.push(saved);
      }

      res.json({
        themes: savedThemes,
        metadata: {
          generatedBy: "Groq AI",
          description: descriptionInput.description,
          action: "replaced",
        },
      });
    } catch (error) {
      console.error("Error generating themes from description:", error);
      res.status(500).json({
        message:
          "Failed to generate themes from description using Groq AI: " +
          getErrorMessage(error),
      });
    }
  });

  // Get all themes
  app.get("/api/themes", async (req, res) => {
    console.log("=== Get All Themes ===");

    try {
      const themes = await storage.getAllThemes();
      console.log(`✅ Retrieved ${themes.length} themes`);
      res.json({ themes });
    } catch (error) {
      console.error("Error fetching themes:", error);
      res.status(500).json({
        message: "Failed to fetch themes: " + getErrorMessage(error),
      });
    }
  });

  // Get single theme
  app.get("/api/themes/:id", async (req, res) => {
    try {
      const theme = await storage.getTheme(req.params.id);
      if (!theme) {
        return res.status(404).json({ message: "Theme not found" });
      }
      res.json({ theme });
    } catch (error) {
      console.error("Error fetching theme:", error);
      res.status(500).json({
        message: "Failed to fetch theme: " + getErrorMessage(error),
      });
    }
  });

  // Clear all themes endpoint
  app.delete("/api/themes", async (req, res) => {
    console.log("=== Clear All Themes ===");

    try {
      if (typeof storage.clearAllThemes === "function") {
        await storage.clearAllThemes();
        console.log("✅ All themes cleared");
        res.json({
          message: "All themes cleared successfully",
          action: "cleared",
        });
      } else {
        res.status(501).json({
          message: "Clear all themes not implemented in current storage",
        });
      }
    } catch (error) {
      console.error("Error clearing themes:", error);
      res.status(500).json({
        message: "Failed to clear themes: " + getErrorMessage(error),
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
