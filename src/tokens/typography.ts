/**
 * Planometrica Design Tokens - Typography
 * ========================================
 *
 * Font families and typography scale from PlanoCAD design system.
 */

// Font stacks — brand canon:
// Unbounded — только нейминг «Планометрика», Manrope — только заголовки,
// JetBrains Mono — основной текст
const MANROPE_STACK = ['Manrope', 'system-ui', 'sans-serif'] as const;
const JETBRAINS_MONO_STACK = ['JetBrains Mono', 'Fira Code', 'monospace'] as const;

export const fonts = {
  // Font Families
  families: {
    heading: MANROPE_STACK,
    body: JETBRAINS_MONO_STACK,
    logo: ['Unbounded', 'sans-serif'],
    /** @deprecated legacy alias, use `heading` */
    sans: MANROPE_STACK,
    mono: JETBRAINS_MONO_STACK,
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

const HEADING_FONT_FAMILY = fonts.families.heading.join(', ');
const BODY_FONT_FAMILY = fonts.families.body.join(', ');

/**
 * Typography presets for common use cases
 */
export const textStyles = {
  // Headings — Manrope
  h1: {
    fontFamily: HEADING_FONT_FAMILY,
    fontSize: fonts.sizes['4xl'],
    fontWeight: fonts.weights.bold,
    lineHeight: fonts.lineHeights.tight,
    letterSpacing: fonts.letterSpacing.tight,
  },
  h2: {
    fontFamily: HEADING_FONT_FAMILY,
    fontSize: fonts.sizes['3xl'],
    fontWeight: fonts.weights.semibold,
    lineHeight: fonts.lineHeights.tight,
    letterSpacing: fonts.letterSpacing.tight,
  },
  h3: {
    fontFamily: HEADING_FONT_FAMILY,
    fontSize: fonts.sizes['2xl'],
    fontWeight: fonts.weights.semibold,
    lineHeight: fonts.lineHeights.snug,
  },
  h4: {
    fontFamily: HEADING_FONT_FAMILY,
    fontSize: fonts.sizes.xl,
    fontWeight: fonts.weights.semibold,
    lineHeight: fonts.lineHeights.snug,
  },

  // Body text — JetBrains Mono
  body: {
    fontFamily: BODY_FONT_FAMILY,
    fontSize: fonts.sizes.base,
    fontWeight: fonts.weights.normal,
    lineHeight: fonts.lineHeights.normal,
  },
  bodySmall: {
    fontFamily: BODY_FONT_FAMILY,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.normal,
    lineHeight: fonts.lineHeights.normal,
  },
  bodyLarge: {
    fontFamily: BODY_FONT_FAMILY,
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.normal,
    lineHeight: fonts.lineHeights.relaxed,
  },

  // Lead text
  lead: {
    fontFamily: BODY_FONT_FAMILY,
    fontSize: fonts.sizes.xl,
    fontWeight: fonts.weights.normal,
    lineHeight: fonts.lineHeights.relaxed,
  },

  // Caption
  caption: {
    fontFamily: BODY_FONT_FAMILY,
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
