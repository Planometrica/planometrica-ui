// src/tokens/typography.ts
var MANROPE_STACK = ["Manrope", "system-ui", "sans-serif"];
var JETBRAINS_MONO_STACK = ["JetBrains Mono", "Fira Code", "monospace"];
var fonts = {
  // Font Families
  families: {
    heading: MANROPE_STACK,
    body: JETBRAINS_MONO_STACK,
    logo: ["Unbounded", "sans-serif"],
    /** @deprecated legacy alias, use `heading` */
    sans: MANROPE_STACK,
    mono: JETBRAINS_MONO_STACK
  },
  // Font Sizes (rem based)
  sizes: {
    xs: "0.75rem",
    // 12px
    sm: "0.875rem",
    // 14px
    base: "1rem",
    // 16px
    lg: "1.125rem",
    // 18px
    xl: "1.25rem",
    // 20px
    "2xl": "1.5rem",
    // 24px
    "3xl": "1.875rem",
    // 30px
    "4xl": "2.25rem",
    // 36px
    "5xl": "3rem",
    // 48px
    "6xl": "3.75rem"
    // 60px
  },
  // Line Heights
  lineHeights: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2"
  },
  // Font Weights
  weights: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900"
  },
  // Letter Spacing
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  }
};
var HEADING_FONT_FAMILY = fonts.families.heading.join(", ");
var BODY_FONT_FAMILY = fonts.families.body.join(", ");
var textStyles = {
  // Headings — Manrope
  h1: {
    fontFamily: HEADING_FONT_FAMILY,
    fontSize: fonts.sizes["4xl"],
    fontWeight: fonts.weights.bold,
    lineHeight: fonts.lineHeights.tight,
    letterSpacing: fonts.letterSpacing.tight
  },
  h2: {
    fontFamily: HEADING_FONT_FAMILY,
    fontSize: fonts.sizes["3xl"],
    fontWeight: fonts.weights.semibold,
    lineHeight: fonts.lineHeights.tight,
    letterSpacing: fonts.letterSpacing.tight
  },
  h3: {
    fontFamily: HEADING_FONT_FAMILY,
    fontSize: fonts.sizes["2xl"],
    fontWeight: fonts.weights.semibold,
    lineHeight: fonts.lineHeights.snug
  },
  h4: {
    fontFamily: HEADING_FONT_FAMILY,
    fontSize: fonts.sizes.xl,
    fontWeight: fonts.weights.semibold,
    lineHeight: fonts.lineHeights.snug
  },
  // Body text — JetBrains Mono
  body: {
    fontFamily: BODY_FONT_FAMILY,
    fontSize: fonts.sizes.base,
    fontWeight: fonts.weights.normal,
    lineHeight: fonts.lineHeights.normal
  },
  bodySmall: {
    fontFamily: BODY_FONT_FAMILY,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.normal,
    lineHeight: fonts.lineHeights.normal
  },
  bodyLarge: {
    fontFamily: BODY_FONT_FAMILY,
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.normal,
    lineHeight: fonts.lineHeights.relaxed
  },
  // Lead text
  lead: {
    fontFamily: BODY_FONT_FAMILY,
    fontSize: fonts.sizes.xl,
    fontWeight: fonts.weights.normal,
    lineHeight: fonts.lineHeights.relaxed
  },
  // Caption
  caption: {
    fontFamily: BODY_FONT_FAMILY,
    fontSize: fonts.sizes.xs,
    fontWeight: fonts.weights.medium,
    lineHeight: fonts.lineHeights.normal,
    letterSpacing: fonts.letterSpacing.wide
  },
  // Code
  code: {
    fontFamily: fonts.families.mono.join(", "),
    fontSize: fonts.sizes.sm
  }
};

// src/tailwind.preset.ts
var planometricaPreset = {
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      // Brand Colors
      colors: {
        // CSS Variable-based colors for theming
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Brand colors (fixed)
        primary: {
          DEFAULT: "#0A4C76",
          foreground: "#ffffff",
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0A4C76",
          600: "#083D5F",
          700: "#062E48",
          800: "#041F31",
          900: "#02101A"
        },
        secondary: {
          DEFAULT: "#1A7BB3",
          foreground: "#ffffff"
        },
        accent: {
          DEFAULT: "#92CF93",
          foreground: "#1a1918"
        },
        warning: {
          DEFAULT: "#F59E0B",
          foreground: "#1a1918"
        },
        // Semantic colors (CSS variables)
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        // Sidebar colors
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))"
        },
        // Chart colors
        chart: {
          1: "#0A4C76",
          2: "#1A7BB3",
          3: "#92CF93",
          4: "#F59E0B",
          5: "#EF4444"
        }
      },
      // Border Radius
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      // Font Families — brand canon: Unbounded только логотип,
      // Manrope только заголовки, JetBrains Mono — основной текст.
      // Стеки — из tokens/typography (единый источник истины)
      fontFamily: {
        heading: [...fonts.families.heading],
        body: [...fonts.families.body],
        logo: [...fonts.families.logo],
        // legacy алиас heading — см. tokens/typography
        sans: [...fonts.families.heading],
        mono: [...fonts.families.mono]
      },
      // Animations
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" }
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" }
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" }
        },
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 1.5s infinite",
        shake: "shake 0.5s ease-in-out",
        "scale-in": "scale-in 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-in-up": "fade-in-up 0.4s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-in-left": "slide-in-left 0.3s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        spin: "spin 1s linear infinite"
      },
      // Spacing scale additions
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem"
      },
      // Z-index scale
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100"
      },
      // Box shadow additions
      boxShadow: {
        "inner-lg": "inset 0 2px 4px 0 rgb(0 0 0 / 0.10)",
        "elevation-1": "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        "elevation-2": "0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)",
        "elevation-3": "0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.10)",
        "elevation-4": "0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05)"
      }
    }
  }
  // Note: plugins should be added in the consuming project's tailwind.config
  // because require() doesn't work in ESM context
  // Add these plugins to your tailwind.config.ts:
  // plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
};
var tailwind_preset_default = planometricaPreset;
export {
  tailwind_preset_default as default
};
//# sourceMappingURL=tailwind.preset.js.map