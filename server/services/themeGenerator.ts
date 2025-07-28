import { ColorInput, ThemeColors } from "../../shared/schema";

export function generateThemesFromColors(colors: ColorInput): any[] {
  const { primary, secondary, accent } = colors;

  const themes = [
    {
      name: "Modern Professional",
      light: generateWCAGCompliantLightTheme(
        primary,
        secondary || adjustColor(primary, 30),
        accent || adjustColor(primary, -60)
      ),
      dark: generateWCAGCompliantDarkTheme(
        primary,
        secondary || adjustColor(primary, 30),
        accent || adjustColor(primary, -60)
      ),
    },
    {
      name: "Vibrant Creative",
      light: generateWCAGCompliantLightTheme(
        adjustSaturation(primary, 20),
        secondary || adjustColor(primary, 60),
        accent || adjustColor(primary, -90)
      ),
      dark: generateWCAGCompliantDarkTheme(
        adjustSaturation(primary, 20),
        secondary || adjustColor(primary, 60),
        accent || adjustColor(primary, -90)
      ),
    },
    {
      name: "Subtle Elegant",
      light: generateWCAGCompliantLightTheme(
        adjustSaturation(primary, -20),
        secondary || adjustColor(primary, 45),
        accent || adjustColor(primary, 120)
      ),
      dark: generateWCAGCompliantDarkTheme(
        adjustSaturation(primary, -20),
        secondary || adjustColor(primary, 45),
        accent || adjustColor(primary, 120)
      ),
    },
  ];

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

function adjustColor(hex: string, hueShift: number): string {
  const [h, s, l] = hexToHsl(hex);
  const newH = (h + hueShift + 360) % 360;
  return hslToHex(newH, s, l);
}

function adjustSaturation(hex: string, saturationShift: number): string {
  const [h, s, l] = hexToHsl(hex);
  const newS = Math.max(0, Math.min(100, s + saturationShift));
  return hslToHex(h, newS, l);
}

// WCAG Compliance utility functions
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
