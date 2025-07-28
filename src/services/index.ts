// src/services/index.ts
// Export all services from a single entry point

// Groq AI API service
export {
  generateThemeFromColors,
  generateThemeFromDescription,
  testGroqConnection,
  type ThemeDescription,
  type ColorInput,
} from "./groqService";

// Theme storage service
export { themeStorage, ThemeStorage } from "./themeStorange";

// Service status checker
export async function checkServiceStatus() {
  const status = {
    groqApi: false,
    localStorage: false,
    environment: {
      hasApiKey: !!import.meta.env.VITE_GROQ_API_KEY,
      allowedOrigins: import.meta.env.VITE_ALLOWED_ORIGINS || "localhost:3000",
      isProduction: import.meta.env.PROD,
    },
  };

  try {
    // Test Groq API connection
    const { testGroqConnection } = await import("./groqService");
    status.groqApi = await testGroqConnection();
  } catch (error) {
    console.warn("Groq API test failed:", error);
    status.groqApi = false;
  }

  try {
    // Test localStorage
    const testKey = "__storage_test__";
    localStorage.setItem(testKey, "test");
    localStorage.removeItem(testKey);
    status.localStorage = true;
  } catch (error) {
    console.warn("localStorage not available:", error);
    status.localStorage = false;
  }

  console.log("🔍 Service Status:", status);
  return status;
}
