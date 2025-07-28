// shared/schema.ts - Updated for memory storage only
import { z } from "zod";

// Color roles schema
export const colorRoleSchema = z.object({
  primary: z.string(),
  secondary: z.string(),
  accent: z.string(),
  background: z.string(),
  backgroundSecondary: z.string().optional(),
  text: z.string(),
  textSecondary: z.string().optional(),
  border: z.string(),
  shadow: z.string().optional(),
});

export const themeColorsSchema = z.object({
  light: colorRoleSchema,
  dark: colorRoleSchema,
});

export type ColorRole = z.infer<typeof colorRoleSchema>;
export type ThemeColors = z.infer<typeof themeColorsSchema>;

// Input schemas
export const colorInputSchema = z.object({
  primary: z.string(),
  secondary: z.string().optional(),
  accent: z.string().optional(),
});

export const imageInputSchema = z.object({
  imageData: z.string(), // base64 encoded image
  fileName: z.string(),
});

export const descriptionInputSchema = z.object({
  description: z.string().min(10).max(500),
});

export type ColorInput = z.infer<typeof colorInputSchema>;
export type ImageInput = z.infer<typeof imageInputSchema>;
export type DescriptionInput = z.infer<typeof descriptionInputSchema>;

// Theme interface for memory storage
export interface Theme {
  id: string;
  name: string;
  colors: ThemeColors;
  inputType: "color" | "image" | "description";
  inputData?: any;
  createdAt: Date;
}

export interface InsertTheme {
  name: string;
  colors: ThemeColors;
  inputType: "color" | "image" | "description";
  inputData?: any;
}

// Validation schemas for the Theme interfaces
export const insertThemeSchema = z.object({
  name: z.string(),
  colors: themeColorsSchema,
  inputType: z.enum(["color", "image", "description"]),
  inputData: z.any().optional(),
});

export const themeSchema = insertThemeSchema.extend({
  id: z.string(),
  createdAt: z.date(),
});
