import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/hooks": path.resolve(__dirname, "src/hooks"),
      "@/lib": path.resolve(__dirname, "src/lib"),
      "@/services": path.resolve(__dirname, "src/services"),
      "@/pages": path.resolve(__dirname, "src/pages"),
    },
  },
  server: {
    port: 3000,
    host: true, // Allow access from network
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000, // Increase limit to 1000kb for larger chunks
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for React and related libraries
          "react-vendor": ["react", "react-dom", "wouter"],
          // UI components library
          "ui-vendor": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-alert-dialog",
            "@radix-ui/react-avatar",
            "@radix-ui/react-checkbox",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-label",
            "@radix-ui/react-popover",
            "@radix-ui/react-select",
            "@radix-ui/react-separator",
            "@radix-ui/react-slot",
            "@radix-ui/react-switch",
            "@radix-ui/react-tabs",
            "@radix-ui/react-toast",
            "@radix-ui/react-tooltip",
          ],
          // Query and state management
          "query-vendor": ["@tanstack/react-query"],
          // Icons library
          "icons-vendor": ["lucide-react"],
          // Utility libraries
          "utils-vendor": [
            "clsx",
            "tailwind-merge",
            "class-variance-authority",
          ],
        },
      },
    },
  },
  // Make sure environment variables are available
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "development"
    ),
  },
});
