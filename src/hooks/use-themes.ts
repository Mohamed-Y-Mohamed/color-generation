// src/hooks/use-themes.ts - Updated for frontend-only with localStorage
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  generateThemeFromColors,
  generateThemeFromDescription,
  themeStorage,
  type ColorInput,
} from "../services";
import { Theme } from "../../shared/schema";

// Custom hook for theme storage using localStorage
export function useThemes() {
  return useQuery<{ themes: Theme[] }>({
    queryKey: ["themes"],
    queryFn: () => {
      // Get themes from localStorage via themeStorage service
      const themes = themeStorage.getAllThemes();
      return Promise.resolve({ themes });
    },
    staleTime: Infinity, // Never stale since it's local storage
  });
}

// Generate themes from colors using Groq API
export function useGenerateFromColors() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (colors: ColorInput) => {
      console.log("🎨 Generating themes from colors:", colors);

      // Call Groq API directly from frontend
      const groqThemes = await generateThemeFromColors(colors);

      // Convert to Theme format and store using themeStorage
      const newThemes = groqThemes.map((theme) => ({
        name: theme.name,
        colors: {
          light: theme.light,
          dark: theme.dark,
        },
        inputType: "color" as const,
        inputData: colors,
      }));

      // Replace all themes in storage with new ones
      const savedThemes = themeStorage.replaceAllThemes(newThemes);

      console.log(
        `✅ Generated and saved ${savedThemes.length} themes from colors`
      );

      return { themes: savedThemes };
    },
    onSuccess: () => {
      // Invalidate themes query to trigger re-fetch
      queryClient.invalidateQueries({ queryKey: ["themes"] });
    },
  });
}

// Generate themes from description using Groq API
export function useGenerateFromDescription() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (description: { description: string }) => {
      console.log(
        "📝 Generating themes from description:",
        description.description
      );

      // Call Groq API directly from frontend
      const groqThemes = await generateThemeFromDescription(
        description.description
      );

      // Convert to Theme format and store using themeStorage
      const newThemes = groqThemes.map((theme) => ({
        name: theme.name,
        colors: {
          light: theme.light,
          dark: theme.dark,
        },
        inputType: "description" as const,
        inputData: description,
      }));

      // Replace all themes in storage with new ones
      const savedThemes = themeStorage.replaceAllThemes(newThemes);

      console.log(
        `✅ Generated and saved ${savedThemes.length} themes from description`
      );

      return { themes: savedThemes };
    },
    onSuccess: () => {
      // Invalidate themes query to trigger re-fetch
      queryClient.invalidateQueries({ queryKey: ["themes"] });
    },
  });
}

// Clear all themes
export function useClearThemes() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      themeStorage.clearAllThemes();
      return { message: "All themes cleared successfully" };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["themes"] });
    },
  });
}

// Export themes to JSON file
export function useExportThemes() {
  return useMutation({
    mutationFn: async () => {
      const themes = themeStorage.getAllThemes();

      if (themes.length === 0) {
        throw new Error("No themes to export");
      }

      const dataStr = themeStorage.exportToJSON();
      const dataBlob = new Blob([dataStr], { type: "application/json" });

      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `color-themes-${
        new Date().toISOString().split("T")[0]
      }.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      return {
        message: "Themes exported successfully",
        count: themes.length,
      };
    },
  });
}

// Import themes from JSON file
export function useImportThemes() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (file: File) => {
      return new Promise<{ message: string; count: number }>(
        (resolve, reject) => {
          const reader = new FileReader();

          reader.onload = (event) => {
            try {
              const jsonString = event.target?.result as string;
              const success = themeStorage.importFromJSON(jsonString);

              if (success) {
                const newCount = themeStorage.getThemesCount();
                resolve({
                  message: "Themes imported successfully",
                  count: newCount,
                });
              } else {
                reject(new Error("Failed to import themes"));
              }
            } catch (error) {
              reject(error);
            }
          };

          reader.onerror = () => {
            reject(new Error("Failed to read file"));
          };

          reader.readAsText(file);
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["themes"] });
    },
  });
}

// Add a single theme manually
export function useAddTheme() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (themeData: {
      name: string;
      colors: Theme["colors"];
      inputType: Theme["inputType"];
      inputData?: any;
    }) => {
      const newTheme = themeStorage.addTheme(
        themeData.name,
        themeData.colors,
        themeData.inputType,
        themeData.inputData
      );

      return { theme: newTheme };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["themes"] });
    },
  });
}

// Delete a specific theme
export function useDeleteTheme() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (themeId: string) => {
      const success = themeStorage.deleteTheme(themeId);
      if (!success) {
        throw new Error("Theme not found");
      }
      return { message: "Theme deleted successfully" };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["themes"] });
    },
  });
}

// Get themes by type
export function useThemesByType(inputType: Theme["inputType"]) {
  return useQuery({
    queryKey: ["themes", "by-type", inputType],
    queryFn: () => {
      const themes = themeStorage.getThemesByType(inputType);
      return { themes };
    },
    staleTime: Infinity,
  });
}

// Search themes
export function useSearchThemes(query: string) {
  return useQuery({
    queryKey: ["themes", "search", query],
    queryFn: () => {
      const themes = query.trim()
        ? themeStorage.searchThemes(query)
        : themeStorage.getAllThemes();
      return { themes };
    },
    enabled: query.length >= 0, // Always enabled, but returns all if empty
    staleTime: Infinity,
  });
}
