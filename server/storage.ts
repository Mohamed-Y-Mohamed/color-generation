// server/storage.ts - Updated with clear functionality
import { type Theme, type InsertTheme } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getTheme(id: string): Promise<Theme | undefined>;
  createTheme(theme: InsertTheme): Promise<Theme>;
  getAllThemes(): Promise<Theme[]>;
  clearAllThemes(): Promise<void>; // NEW: Clear all themes
  replaceAllThemes(themes: InsertTheme[]): Promise<Theme[]>; // NEW: Replace all themes at once
}

export class MemStorage implements IStorage {
  private themes: Map<string, Theme>;

  constructor() {
    this.themes = new Map();
    console.log("MemStorage initialized");
  }

  async getTheme(id: string): Promise<Theme | undefined> {
    console.log(`Getting theme with id: ${id}`);
    const theme = this.themes.get(id);
    console.log(`Theme found:`, theme ? "Yes" : "No");
    return theme;
  }

  async createTheme(insertTheme: InsertTheme): Promise<Theme> {
    console.log("Creating theme:", insertTheme.name);

    const id = randomUUID();
    const theme: Theme = {
      id,
      name: insertTheme.name,
      colors: insertTheme.colors,
      inputType: insertTheme.inputType,
      inputData: insertTheme.inputData,
      createdAt: new Date(),
    };

    this.themes.set(id, theme);
    console.log(`Theme created successfully with id: ${id}`);
    console.log(`Total themes in storage: ${this.themes.size}`);

    return theme;
  }

  async getAllThemes(): Promise<Theme[]> {
    const allThemes = Array.from(this.themes.values());
    console.log(`Returning ${allThemes.length} themes from storage`);
    return allThemes;
  }

  // NEW: Clear all themes from storage
  async clearAllThemes(): Promise<void> {
    const previousCount = this.themes.size;
    this.themes.clear();
    console.log(`🗑️ Cleared ${previousCount} themes from storage`);
  }

  // NEW: Replace all themes with new ones (clear + add multiple)
  async replaceAllThemes(insertThemes: InsertTheme[]): Promise<Theme[]> {
    console.log(
      `🔄 Replacing all themes with ${insertThemes.length} new themes`
    );

    // Clear existing themes
    await this.clearAllThemes();

    // Add new themes
    const newThemes: Theme[] = [];
    for (const insertTheme of insertThemes) {
      const theme = await this.createTheme(insertTheme);
      newThemes.push(theme);
    }

    console.log(`✅ Successfully replaced with ${newThemes.length} themes`);
    return newThemes;
  }
}

// Single instance
export const storage = new MemStorage();
