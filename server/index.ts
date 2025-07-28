// server/index.ts - Updated for current Groq AI model
import dotenv from "dotenv";

// CRITICAL: Load environment variables FIRST
dotenv.config();

// Debug environment loading
console.log("🔧 Environment Configuration:");
console.log("================================");
console.log("NODE_ENV:", process.env.NODE_ENV || "development");
console.log("PORT:", process.env.PORT || "5000 (default)");
console.log(
  "GROQ_API_KEY:",
  process.env.GROQ_API_KEY ? "✅ Loaded" : "❌ Missing"
);
if (process.env.GROQ_API_KEY) {
  console.log("API Key length:", process.env.GROQ_API_KEY.length);
  console.log(
    "API Key format:",
    process.env.GROQ_API_KEY.startsWith("gsk_") ? "✅ Valid" : "❌ Invalid"
  );
}
console.log("AI Provider: Groq AI (llama-3.1-8b-instant)");
console.log("Model: Fast & Free with high request limits");
console.log("================================");

import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes.js"; // Note: .js extension for ES modules
import { setupVite, serveStatic, log } from "./vite.js"; // Note: .js extension

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  try {
    console.log("🚀 Starting server with updated Groq AI...");

    // Register API routes
    console.log("📝 Registering API routes...");
    const server = await registerRoutes(app);
    console.log("✅ API routes registered");

    // Error handling middleware
    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      console.error("❌ Server error:", err);
      res.status(status).json({ message });
    });

    // Setup Vite or static serving
    if (
      process.env.NODE_ENV === "development" ||
      app.get("env") === "development"
    ) {
      console.log("🔧 Setting up Vite middleware...");
      await setupVite(app, server);
      console.log("✅ Vite middleware ready");
    } else {
      console.log("📦 Setting up static file serving...");
      serveStatic(app);
      console.log("✅ Static files ready");
    }

    // Use correct default port for backend (5000, not 5173)
    const port = parseInt(process.env.PORT || "5000", 10);

    server.listen(
      {
        port,
        host: "0.0.0.0",
        reusePort: true,
      },
      () => {
        console.log(`🎉 Server running on http://localhost:${port}`);
        console.log(
          `📍 API endpoints available at http://localhost:${port}/api/*`
        );
        console.log(`🌐 Frontend available at http://localhost:${port}`);
        console.log(
          `🚀 AI Provider: Groq AI (llama-3.1-8b-instant - Updated!)`
        );
        console.log(`⚡ Using current supported model with high free limits`);

        // Test endpoints
        console.log("\n🧪 Test your setup:");
        console.log(`  Backend API: curl http://localhost:${port}/api/test`);
        console.log(`  Themes API: curl http://localhost:${port}/api/themes`);
        console.log(`  Frontend: http://localhost:${port}`);

        console.log("\n📝 Model Update Info:");
        console.log("  ✅ Fixed: Updated from deprecated mixtral-8x7b-32768");
        console.log("  🚀 New: Using llama-3.1-8b-instant (fast & free)");
        console.log("  🎯 Benefits: Higher request limits, better performance");
      }
    );
  } catch (error) {
    console.error("💥 Failed to start server:", error);

    if (error instanceof Error) {
      if (error.message.includes("EADDRINUSE")) {
        console.error(
          "🔴 Port is already in use. Try a different port or stop other servers."
        );
      } else if (error.message.includes("Cannot find module")) {
        console.error("🔴 Missing module. Try running: npm install");
      } else if (error.message.includes("GROQ_API_KEY")) {
        console.error("🔴 Groq API key issue. Check your .env file.");
      } else if (error.message.includes("model_decommissioned")) {
        console.error("🔴 Model deprecated - this should now be fixed!");
        console.error("    Make sure you're using the updated groq.ts file.");
      }
    }

    process.exit(1);
  }
})();
