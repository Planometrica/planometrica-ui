/**
 * Planometrica Design Tokens - Typography
 * ========================================
 *
 * Font families and typography scale from PlanoCAD design system.
 */

export const fonts = {
  // Font Families
  families: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    logo: ['Aileron', 'Inter', 'sans-serif'],
    mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
  },

  // Font Sizes (rem based)
  sizes: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
  },

  // Line Heights
  lineHeights: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  // Font Weights
  weights: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

/**
 * Typography presets for common use cases
 */
export const textStyles = {
  // Headings
  h1: {
    fontSize: fonts.sizes['4xl'],
    fontWeight: fonts.weights.bold,
    lineHeight: fonts.lineHeights.tight,
    letterSpacing: fonts.letterSpacing.tight,
  },
  h2: {
    fontSize: fonts.sizes['3xl'],
    fontWeight: fonts.weights.semibold,
    lineHeight: fonts.lineHeights.tight,
    letterSpacing: fonts.letterSpacing.tight,
  },
  h3: {
    fontSize: fonts.sizes['2xl'],
    fontWeight: fonts.weights.semibold,
    lineHeight: fonts.lineHeights.snug,
  },
  h4: {
    fontSize: fonts.sizes.xl,
    fontWeight: fonts.weights.semibold,
    lineHeight: fonts.lineHeights.snug,
  },

  // Body text
  body: {
    fontSize: fonts.sizes.base,
    fontWeight: fonts.weights.normal,
    lineHeight: fonts.lineHeights.normal,
  },
  bodySmall: {
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.normal,
    lineHeight: fonts.lineHeights.normal,
  },
  bodyLarge: {
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.normal,
    lineHeight: fonts.lineHeights.relaxed,
  },

  // Lead text
  lead: {
    fontSize: fonts.sizes.xl,
    fontWeight: fonts.weights.normal,
    lineHeight: fonts.lineHeights.relaxed,
  },

  // Caption
  caption: {
    fontSize: fonts.sizes.xs,
    fontWeight: fonts.weights.medium,
    lineHeight: fonts.lineHeights.normal,
    letterSpacing: fonts.letterSpacing.wide,
  },

  // Code
  code: {
    fontFamily: fonts.families.mono.join(', '),
    fontSize: fonts.sizes.sm,
  },
} as const;

export type FontFamily = keyof typeof fonts.families;
export type FontSize = keyof typeof fonts.sizes;
export type FontWeight = keyof typeof fonts.weights;
export type TextStyle = keyof typeof textStyles;
