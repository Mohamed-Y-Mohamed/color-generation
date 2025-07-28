import { Theme } from "@shared/schema";

export function exportTheme(theme: Theme) {
  return {
    id: theme.id,
    name: theme.name,
    colors: theme.colors,
    inputType: theme.inputType,
    createdAt: theme.createdAt
  };
}

export function generateCSSVariables(theme: Theme): string {
  const colors = theme.colors as any;
  
  return `:root {
  /* Light mode colors */
  --primary-color: ${colors.light.primary};
  --secondary-color: ${colors.light.secondary};
  --accent-color: ${colors.light.accent};
  --background-color: ${colors.light.background};
  --background-secondary-color: ${colors.light.backgroundSecondary};
  --text-color: ${colors.light.text};
  --text-secondary-color: ${colors.light.textSecondary};
  --border-color: ${colors.light.border};
  --shadow-color: ${colors.light.shadow};
}

[data-theme="dark"] {
  /* Dark mode colors */
  --primary-color: ${colors.dark.primary};
  --secondary-color: ${colors.dark.secondary};
  --accent-color: ${colors.dark.accent};
  --background-color: ${colors.dark.background};
  --background-secondary-color: ${colors.dark.backgroundSecondary};
  --text-color: ${colors.dark.text};
  --text-secondary-color: ${colors.dark.textSecondary};
  --border-color: ${colors.dark.border};
  --shadow-color: ${colors.dark.shadow};
}`;
}

export function generateComponentCSS(theme: Theme) {
  const colors = theme.colors as any;
  
  return {
    primaryButton: `.btn-primary {
  background-color: var(--primary-color);
  color: var(--background-color);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.btn-primary:hover {
  opacity: 0.9;
}`,

    secondaryButton: `.btn-secondary {
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  background-color: transparent;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background-color: var(--primary-color);
  color: var(--background-color);
}`,

    textButton: `.btn-text {
  color: var(--primary-color);
  background-color: transparent;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-text:hover {
  background-color: var(--primary-color);
  opacity: 0.1;
}`,

    input: `.form-input {
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px var(--primary-color);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-color) 20%, transparent);
}`,

    select: `.form-select {
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.form-select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-color) 20%, transparent);
}`,

    alerts: {
      success: `.alert-success {
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: color-mix(in srgb, var(--accent-color) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--accent-color) 30%, transparent);
  color: var(--accent-color);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}`,

      info: `.alert-info {
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: color-mix(in srgb, var(--primary-color) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--primary-color) 30%, transparent);
  color: var(--primary-color);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}`,

      error: `.alert-error {
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: color-mix(in srgb, #ef4444 10%, transparent);
  border: 1px solid color-mix(in srgb, #ef4444 30%, transparent);
  color: #ef4444;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}`
    }
  };
}
