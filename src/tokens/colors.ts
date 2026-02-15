/**
 * Planometrica Design Tokens - Colors
 * ====================================
 *
 * Brand colors extracted from PlanoCAD design system.
 * These are the single source of truth for all Planometrica products.
 */

export const colors = {
  // Brand Colors
  brand: {
    primary: '#0A4C76',      // Main blue (HSL: 203 83% 25%)
    secondary: '#1A7BB3',    // Light blue (HSL: 201 73% 40%)
    green: '#92CF93',        // Success green
    orange: '#F59E0B',       // Warning/accent orange
  },

  // Semantic Colors (Light Theme)
  light: {
    background: '#FFFFFF',
    foreground: '#0A4C76',
    card: '#FFFFFF',
    cardForeground: '#0A4C76',
    popover: '#FFFFFF',
    popoverForeground: '#0A4C76',
    primary: '#0A4C76',
    primaryForeground: '#F0F9FF',
    secondary: '#F0F9FF',
    secondaryForeground: '#0A4C76',
    muted: '#F0F9FF',
    mutedForeground: '#64748B',
    accent: '#F0F9FF',
    accentForeground: '#0A4C76',
    destructive: '#EF4444',
    destructiveForeground: '#FFFFFF',
    border: '#E2E8F0',
    input: '#E2E8F0',
    ring: '#0A4C76',
  },

  // Semantic Colors (Dark Theme)
  dark: {
    background: '#0F172A',
    foreground: '#F8FAFC',
    card: '#1E293B',
    cardForeground: '#F8FAFC',
    popover: '#1E293B',
    popoverForeground: '#F8FAFC',
    primary: '#3B82F6',
    primaryForeground: '#0F172A',
    secondary: '#334155',
    secondaryForeground: '#F8FAFC',
    muted: '#334155',
    mutedForeground: '#94A3B8',
    accent: '#334155',
    accentForeground: '#F8FAFC',
    destructive: '#7F1D1D',
    destructiveForeground: '#F8FAFC',
    border: '#334155',
    input: '#334155',
    ring: '#3B82F6',
  },

  // Chart Colors
  chart: {
    1: '#0A4C76',
    2: '#1A7BB3',
    3: '#92CF93',
    4: '#F59E0B',
    5: '#EF4444',
  },

  // Sidebar Colors
  sidebar: {
    background: '#FAFAFA',
    foreground: '#0A4C76',
    primary: '#0A4C76',
    primaryForeground: '#FFFFFF',
    accent: '#F0F9FF',
    accentForeground: '#0A4C76',
    border: '#E2E8F0',
    ring: '#0A4C76',
  },
} as const;

/**
 * HSL values for CSS custom properties
 * Used in Tailwind CSS configuration
 */
export const hslColors = {
  // Brand
  brandPrimary: '203 83% 25%',
  brandSecondary: '201 73% 40%',

  // Light Theme
  background: '0 0% 100%',
  foreground: '203 83% 25%',
  card: '0 0% 100%',
  cardForeground: '203 83% 25%',
  popover: '0 0% 100%',
  popoverForeground: '203 83% 25%',
  primary: '203 83% 25%',
  primaryForeground: '200 100% 97%',
  secondary: '200 100% 97%',
  secondaryForeground: '203 83% 25%',
  muted: '200 100% 97%',
  mutedForeground: '215 16% 47%',
  accent: '200 100% 97%',
  accentForeground: '203 83% 25%',
  destructive: '0 84% 60%',
  destructiveForeground: '0 0% 100%',
  border: '214 32% 91%',
  input: '214 32% 91%',
  ring: '203 83% 25%',

  // Radius
  radius: '0.5rem',
} as const;

export type ColorToken = keyof typeof colors;
export type BrandColor = keyof typeof colors.brand;
export type LightThemeColor = keyof typeof colors.light;
export type DarkThemeColor = keyof typeof colors.dark;
