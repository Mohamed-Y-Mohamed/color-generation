import sharp from "sharp";

export interface DominantColor {
  hex: string;
  count: number;
  percentage: number;
}

export interface ExtractedColors {
  dominant: DominantColor[];
  palette: string[];
}

export async function extractColorsFromImage(
  imageBuffer: Buffer
): Promise<ExtractedColors> {
  try {
    // Resize image for faster processing
    const resizedBuffer = await sharp(imageBuffer)
      .resize(150, 150, { fit: "cover" })
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { data, info } = resizedBuffer;
    const pixelCount = info.width * info.height;
    const colorMap = new Map<string, number>();

    // Sample pixels and count colors
    for (let i = 0; i < data.length; i += 12) {
      // Sample every 4th pixel
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      // Quantize colors to reduce noise
      const qR = Math.round(r / 16) * 16;
      const qG = Math.round(g / 16) * 16;
      const qB = Math.round(b / 16) * 16;

      const hex = rgbToHex(qR, qG, qB);
      colorMap.set(hex, (colorMap.get(hex) || 0) + 1);
    }

    // Sort colors by frequency
    const sortedColors = Array.from(colorMap.entries())
      .map(([hex, count]) => ({
        hex,
        count,
        percentage: (count / pixelCount) * 100,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 20); // Top 20 colors

    // Filter out very light/dark colors and select diverse palette
    const palette = selectDiversePalette(sortedColors, 8);

    return {
      dominant: sortedColors.slice(0, 5),
      palette,
    };
  } catch (error) {
    console.error("Error extracting colors from image:", error);
    throw new Error(
      "Failed to extract colors from image: " + (error as Error).message
    );
  }
}

function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = Math.max(0, Math.min(255, x)).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        h = 0;
    }
    h /= 6;
  }

  return [h * 360, s * 100, l * 100];
}

function selectDiversePalette(
  colors: DominantColor[],
  count: number
): string[] {
  const selected: string[] = [];
  const minDistance = 30; // Minimum color distance

  for (const color of colors) {
    if (selected.length >= count) break;

    const [h, s, l] = hexToHsl(color.hex);

    // Skip very light or very dark colors
    if (l < 15 || l > 85) continue;

    // Check if color is diverse enough from already selected
    let isDiverse = true;
    for (const selectedHex of selected) {
      const [sh, ss, sl] = hexToHsl(selectedHex);
      const distance = Math.sqrt(
        Math.pow(h - sh, 2) + Math.pow(s - ss, 2) + Math.pow(l - sl, 2)
      );

      if (distance < minDistance) {
        isDiverse = false;
        break;
      }
    }

    if (isDiverse) {
      selected.push(color.hex);
    }
  }

  return selected;
}

export function generateThemesFromColors(colors: string[]): any[] {
  const themes = [];

  for (let i = 0; i < Math.min(3, colors.length); i++) {
    const primaryColor = colors[i];
    const secondaryColor = colors[Math.min(i + 1, colors.length - 1)];
    const accentColor = colors[Math.min(i + 2, colors.length - 1)];

    const theme = {
      name: `Extracted Theme ${i + 1}`,
      light: generateWCAGCompliantLightTheme(
        primaryColor,
        secondaryColor,
        accentColor
      ),
      dark: generateWCAGCompliantDarkTheme(
        primaryColor,
        secondaryColor,
        accentColor
      ),
    };

    themes.push(theme);
  }

  return themes;
}

function generateWCAGCompliantLightTheme(
  primary: string,
  secondary: string,
  accent: string
) {
  const lightBackground = "#ffffff";
  const lightBackgroundSecondary = "#f8fafc";

  // Ensure text colors have sufficient contrast (WCAG AA: 4.5:1)
  const textColor = ensureContrastRatio(lightBackground, "#1e293b", 4.5);
  const textSecondaryColor = ensureContrastRatio(
    lightBackground,
    "#64748b",
    3.0
  );

  // Adjust primary colors for better contrast on backgrounds
  const adjustedPrimary = ensureContrastRatio(lightBackground, primary, 3.0);
  const adjustedSecondary = ensureContrastRatio(
    lightBackground,
    secondary,
    3.0
  );
  const adjustedAccent = ensureContrastRatio(lightBackground, accent, 3.0);

  return {
    primary: adjustedPrimary,
    secondary: adjustedSecondary,
    accent: adjustedAccent,
    background: lightBackground,
    backgroundSecondary: lightBackgroundSecondary,
    text: textColor,
    textSecondary: textSecondaryColor,
    border: "#e2e8f0",
    shadow: "rgba(0, 0, 0, 0.1)",
  };
}

function generateWCAGCompliantDarkTheme(
  primary: string,
  secondary: string,
  accent: string
) {
  const darkBackground = "#0f172a";
  const darkBackgroundSecondary = "#1e293b";

  // Ensure text colors have sufficient contrast (WCAG AA: 4.5:1)
  const textColor = ensureContrastRatio(darkBackground, "#f1f5f9", 4.5);
  const textSecondaryColor = ensureContrastRatio(
    darkBackground,
    "#94a3b8",
    3.0
  );

  // Adjust primary colors for better contrast on dark backgrounds
  const adjustedPrimary = ensureContrastRatio(
    darkBackground,
    adjustColorBrightness(primary, 20),
    3.0
  );
  const adjustedSecondary = ensureContrastRatio(
    darkBackground,
    adjustColorBrightness(secondary, 20),
    3.0
  );
  const adjustedAccent = ensureContrastRatio(
    darkBackground,
    adjustColorBrightness(accent, 20),
    3.0
  );

  return {
    primary: adjustedPrimary,
    secondary: adjustedSecondary,
    accent: adjustedAccent,
    background: darkBackground,
    backgroundSecondary: darkBackgroundSecondary,
    text: textColor,
    textSecondary: textSecondaryColor,
    border: "#334155",
    shadow: "rgba(0, 0, 0, 0.3)",
  };
}

// WCAG Compliance utility functions for color extraction
function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  if (!rgb1 || !rgb2) return 1;

  const luminance1 = getLuminance(rgb1);
  const luminance2 = getLuminance(rgb2);

  const lighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);

  return (lighter + 0.05) / (darker + 0.05);
}

function getLuminance([r, g, b]: [number, number, number]): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function hexToRgb(hex: string): [number, number, number] | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
}

function ensureContrastRatio(
  background: string,
  foreground: string,
  targetRatio: number
): string {
  let adjustedColor = foreground;
  let currentRatio = getContrastRatio(background, adjustedColor);
  let attempts = 0;
  const maxAttempts = 50;

  // If contrast is already sufficient, return the color
  if (currentRatio >= targetRatio) {
    return adjustedColor;
  }

  // Try adjusting lightness to meet contrast ratio
  const [h, s, l] = hexToHsl(foreground);
  const isBackgroundLight =
    getLuminance(hexToRgb(background) || [255, 255, 255]) > 0.5;

  // If background is light, make foreground darker; if dark, make foreground lighter
  const step = isBackgroundLight ? -2 : 2;
  let newL = l;

  while (currentRatio < targetRatio && attempts < maxAttempts) {
    newL += step;
    newL = Math.max(0, Math.min(100, newL));

    adjustedColor = hslToHex(h, s, newL);
    currentRatio = getContrastRatio(background, adjustedColor);
    attempts++;

    // Prevent infinite loops at extremes
    if (newL <= 0 || newL >= 100) {
      break;
    }
  }

  return adjustedColor;
}

function adjustColorBrightness(hex: string, amount: number): string {
  const [h, s, l] = hexToHsl(hex);
  const newL = Math.max(0, Math.min(100, l + amount));
  return hslToHex(h, s, newL);
}

function hslToHex(h: number, s: number, l: number): string {
  h = h / 360;
  s = s / 100;
  l = l / 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h * 6) % 2) - 1));
  const m = l - c / 2;
  let r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 1 / 6) {
    r = c;
    g = x;
    b = 0;
  } else if (1 / 6 <= h && h < 1 / 3) {
    r = x;
    g = c;
    b = 0;
  } else if (1 / 3 <= h && h < 1 / 2) {
    r = 0;
    g = c;
    b = x;
  } else if (1 / 2 <= h && h < 2 / 3) {
    r = 0;
    g = x;
    b = c;
  } else if (2 / 3 <= h && h < 5 / 6) {
    r = x;
    g = 0;
    b = c;
  } else if (5 / 6 <= h && h < 1) {
    r = c;
    g = 0;
    b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}
