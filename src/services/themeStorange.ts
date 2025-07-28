// src/services/themeStorage.ts
import { Theme } from "../../shared/schema";

// In-memory theme storage for frontend-only app
class ThemeStorage {
  private themes: Theme[] = [];
  private storageKey = "smart-color-themes";

  constructor() {
    this.loadFromLocalStorage();
  }

  // Load themes from localStorage on initialization
  private loadFromLocalStorage(): void {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          this.themes = parsed;
          console.log(
            `📥 Loaded ${this.themes.length} themes from localStorage`
          );
        }
      }
    } catch (error) {
      console.warn("⚠️ Failed to load themes from localStorage:", error);
      this.themes = [];
    }
  }

  // Save themes to localStorage
  private saveToLocalStorage(): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.themes));
      console.log(`💾 Saved ${this.themes.length} themes to localStorage`);
    } catch (error) {
      console.warn("⚠️ Failed to save themes to localStorage:", error);
    }
  }

  // Generate unique ID for themes
  private generateId(): string {
    return `theme-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  // Get all themes
  getAllThemes(): Theme[] {
    return [...this.themes]; // Return copy to prevent mutations
  }

  // Get theme by ID
  getTheme(id: string): Theme | undefined {
    return this.themes.find((theme) => theme.id === id);
  }

  // Add a single theme
  addTheme(
    name: string,
    colors: Theme["colors"],
    inputType: Theme["inputType"],
    inputData?: any
  ): Theme {
    const theme: Theme = {
      id: this.generateId(),
      name,
      colors,
      inputType,
      inputData,
      createdAt: new Date(),
    };

    this.themes.unshift(theme); // Add to beginning
    this.saveToLocalStorage();

    console.log(`✅ Added theme: ${name}`);
    return theme;
  }

  // Replace all themes with new ones
  replaceAllThemes(
    newThemes: Array<{
      name: string;
      colors: Theme["colors"];
      inputType: Theme["inputType"];
      inputData?: any;
    }>
  ): Theme[] {
    this.themes = newThemes.map((themeData) => ({
      id: this.generateId(),
      name: themeData.name,
      colors: themeData.colors,
      inputType: themeData.inputType,
      inputData: themeData.inputData,
      createdAt: new Date(),
    }));

    this.saveToLocalStorage();

    console.log(`🔄 Replaced all themes with ${this.themes.length} new themes`);
    return [...this.themes];
  }

  // Clear all themes
  clearAllThemes(): void {
    const count = this.themes.length;
    this.themes = [];
    this.saveToLocalStorage();

    console.log(`🗑️ Cleared ${count} themes`);
  }

  // Delete specific theme
  deleteTheme(id: string): boolean {
    const index = this.themes.findIndex((theme) => theme.id === id);
    if (index === -1) return false;

    const deleted = this.themes.splice(index, 1)[0];
    this.saveToLocalStorage();

    console.log(`🗑️ Deleted theme: ${deleted.name}`);
    return true;
  }

  // Update theme
  updateTheme(
    id: string,
    updates: Partial<Omit<Theme, "id" | "createdAt">>
  ): Theme | null {
    const index = this.themes.findIndex((theme) => theme.id === id);
    if (index === -1) return null;

    this.themes[index] = {
      ...this.themes[index],
      ...updates,
    };

    this.saveToLocalStorage();

    console.log(`✏️ Updated theme: ${this.themes[index].name}`);
    return this.themes[index];
  }

  // Export themes as JSON
  exportToJSON(): string {
    return JSON.stringify(this.themes, null, 2);
  }

  // Import themes from JSON
  importFromJSON(jsonString: string): boolean {
    try {
      const imported = JSON.parse(jsonString);
      if (!Array.isArray(imported)) {
        throw new Error("Invalid format: expected array of themes");
      }

      // Validate theme structure
      const validThemes = imported.filter(
        (theme) =>
          theme.name &&
          theme.colors &&
          theme.colors.light &&
          theme.colors.dark &&
          theme.inputType
      );

      if (validThemes.length === 0) {
        throw new Error("No valid themes found in import");
      }

      // Add imported themes (don't replace, add to existing)
      const newThemes = validThemes.map((theme) => ({
        ...theme,
        id: this.generateId(),
        createdAt: new Date(),
      }));

      this.themes = [...newThemes, ...this.themes];
      this.saveToLocalStorage();

      console.log(`📥 Imported ${newThemes.length} themes`);
      return true;
    } catch (error) {
      console.error("❌ Import failed:", error);
      return false;
    }
  }

  // Get themes count
  getThemesCount(): number {
    return this.themes.length;
  }

  // Check if storage is empty
  isEmpty(): boolean {
    return this.themes.length === 0;
  }

  // Get themes by input type
  getThemesByType(inputType: Theme["inputType"]): Theme[] {
    return this.themes.filter((theme) => theme.inputType === inputType);
  }

  // Search themes by name
  searchThemes(query: string): Theme[] {
    const lowercaseQuery = query.toLowerCase();
    return this.themes.filter((theme) =>
      theme.name.toLowerCase().includes(lowercaseQuery)
    );
  }
}

// Export singleton instance
export const themeStorage = new ThemeStorage();

// Export class for testing
export { ThemeStorage };
