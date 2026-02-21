# @planometrica/ui

Shared UI components, design tokens and icon system for Planometrica platform.

## Overview

| | |
|---|---|
| **Package** | `@planometrica/ui` |
| **Version** | 1.0.0 |
| **License** | MIT |
| **Build** | tsup (ESM) |
| **Peer deps** | React 18+, Tailwind CSS 3.4+ |

This package is the single source of truth for the visual layer across all Planometrica products:

- **Planometrica Studio** (React) — main platform
- **PlanoCAD** (React) — CAD editor
- **Planometrica Landing** (Astro / lucide-astro) — marketing site

## What's Inside

```
src/
  index.ts                  # Main entry — components, tokens, icons, utils
  icons/index.ts            # Icon system (semantic aliases + Lucide re-exports)
  tokens/
    colors.ts               # Brand & semantic color tokens (HEX + HSL)
    typography.ts            # Font families, sizes, weights, presets
  lib/
    utils.ts                # cn(), formatCurrency(), formatArea(), etc.
  styles/
    globals.css             # CSS custom properties, base styles, utility classes
  tailwind.preset.ts        # Tailwind CSS preset (colors, fonts, animations)
  hooks/
    use-toast.ts            # Toast state management
    use-mobile.ts           # useIsMobile() responsive hook
  components/ui/            # 49 shadcn/ui components (see list below)
  assets/
    logos/                  # SVG logos (primary, inverse-white, inverse-transparent)
    social/                 # Social media icons (telegram, vk, max, dzen)
    watermark.svg           # Watermark asset
docs/
  components-audit.html     # Visual audit of icons across all products
```

## Installation

```bash
npm install @planometrica/ui
```

Peer dependencies:

```bash
npm install react react-dom tailwindcss
```

## Entry Points

| Import path | Description | Format |
|---|---|---|
| `@planometrica/ui` | Components, tokens, hooks, icons, utils | ESM |
| `@planometrica/ui/icons` | Lightweight icon-only bundle (1.5 KB) | ESM |
| `@planometrica/ui/tailwind` | Tailwind CSS preset | ESM + CJS |
| `@planometrica/ui/styles` | Global CSS (custom properties, base styles) | CSS |
| `@planometrica/ui/logos/primary` | Primary logo SVG | SVG |
| `@planometrica/ui/logos/inverse-white` | Inverse white logo SVG | SVG |
| `@planometrica/ui/logos/inverse-transparent` | Inverse transparent logo SVG | SVG |

## Setup in a Consuming Project

### 1. Tailwind CSS

```ts
// tailwind.config.ts
import planometricaPreset from '@planometrica/ui/tailwind'

export default {
  presets: [planometricaPreset],
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@planometrica/ui/dist/**/*.js',
  ],
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
}
```

### 2. Global Styles

```ts
// main.tsx or layout.tsx
import '@planometrica/ui/styles'
```

### 3. Use Components

```tsx
import { Button, Card, CardContent, Input } from '@planometrica/ui'

export function MyForm() {
  return (
    <Card>
      <CardContent className="space-y-4 p-6">
        <Input placeholder="Email" />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  )
}
```

## Icon System

All icons are based on [Lucide](https://lucide.dev/). The package provides two layers:

### Domain-Specific Aliases

Semantic names for architectural/CAD context. Changing the mapping in one place updates the icon across all products.

```tsx
import { WindowIcon, DoorIcon, WallIcon, RoomIcon } from '@planometrica/ui'

// These resolve to specific Lucide icons:
// WindowIcon  -> Grid2x2
// DoorIcon    -> DoorOpen
// WallIcon    -> Square
// RoomIcon    -> Home
```

**Full list of domain aliases:**

| Alias | Lucide Icon | Domain |
|---|---|---|
| `WindowIcon` | Grid2x2 | Building elements |
| `DoorIcon` | DoorOpen | Building elements |
| `WallIcon` | Square | Building elements |
| `RoomIcon` | Home | Building elements |
| `OpeningIcon` | BoxSelect | Building elements |
| `StairsIcon` | TrendingUp | Building elements |
| `ColumnIcon` | Circle | Building elements |
| `FoundationIcon` | Cylinder | Building elements |
| `MeasureIcon` | Ruler | CAD tools |
| `SelectIcon` | MousePointer2 | CAD tools |
| `VentilationIcon` | Wind | MEP |
| `ElectricalIcon` | Zap | MEP |
| `WaterIcon` | Droplet | MEP |
| `SewerageIcon` | Waves | MEP |
| `HeatingIcon` | Flame | MEP |
| `CoolingIcon` | Snowflake | MEP |
| `BuildingIcon` | Building2 | Project |
| `FloorIcon` | Layers | Project |
| `MaterialIcon` | Palette | Project |
| `FinishingIcon` | Paintbrush | Project |
| `PlotIcon` | MapPin | Project |
| `AiIcon` | Sparkles | Project |

### Common Icons (Re-exports)

90+ frequently used Lucide icons re-exported for convenience:

```tsx
import { Check, Plus, ArrowRight, Search, Loader2 } from '@planometrica/ui'
```

### Lightweight Import

For projects that only need icons (e.g., Landing on Astro):

```tsx
import { WindowIcon, Check } from '@planometrica/ui/icons'
```

### Types

```tsx
import type { LucideIcon, LucideProps } from '@planometrica/ui'
```

## Design Tokens

### Colors

```ts
import { colors, hslColors } from '@planometrica/ui'

colors.brand.primary    // '#0A4C76'
colors.brand.secondary  // '#1A7BB3'
colors.brand.green      // '#92CF93'
colors.brand.orange     // '#F59E0B'

colors.light.background // '#FFFFFF'
colors.dark.background  // '#0F172A'
```

### Typography

```ts
import { fonts, textStyles } from '@planometrica/ui'

fonts.families.sans  // ['Manrope', 'system-ui', 'sans-serif']
fonts.families.logo  // ['Unbounded', 'sans-serif']
fonts.families.mono  // ['JetBrains Mono', 'Fira Code', 'monospace']

textStyles.h1        // { fontSize, fontWeight, lineHeight, letterSpacing }
textStyles.body      // { fontSize, fontWeight, lineHeight }
```

### Tailwind Preset

The preset configures:

- **Colors** — brand palette + CSS variable-based semantic colors (light/dark)
- **Fonts** — Manrope (body), Unbounded (logo), JetBrains Mono (code)
- **Animations** — accordion, fade-in, slide-in, float, shimmer, shake, scale-in
- **Shadows** — elevation-1 through elevation-4
- **Spacing** — extended scale (18, 88, 128)
- **Border radius** — CSS variable-based (lg, md, sm)

## Utilities

```ts
import { cn, formatCurrency, formatNumber, formatArea, formatVolume, formatPercentage } from '@planometrica/ui'

cn('flex items-center', isActive && 'bg-primary')  // Tailwind class merging

formatCurrency(1500000)     // '1 500 000 \u20BD'
formatNumber(42000)         // '42 000'
formatArea(120.5)           // '120,5 m\u00B2'
formatVolume(350)           // '350 m\u00B3'
formatPercentage(0.156)     // '15.6%'
```

## Components (49)

All components are based on [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) primitives.

| Component | Description |
|---|---|
| Accordion | Collapsible content sections |
| Alert | Status messages |
| AlertDialog | Confirmation dialogs |
| AspectRatio | Fixed aspect ratio container |
| Avatar | User avatar with fallback |
| Badge | Status/category badges |
| Breadcrumb | Navigation breadcrumbs |
| Button | Primary action element |
| Calendar | Date picker calendar |
| Card | Content container |
| Carousel | Scrollable content carousel |
| Chart | Recharts-based data visualization |
| Checkbox | Boolean input |
| Collapsible | Expandable section |
| Command | Command palette (cmdk) |
| ContextMenu | Right-click menu |
| Dialog | Modal dialogs |
| Drawer | Bottom/side drawer (vaul) |
| DropdownMenu | Dropdown actions |
| Form | Form with react-hook-form |
| HoverCard | Hover-triggered card |
| Input | Text input |
| InputOTP | One-time password input |
| Label | Form labels |
| Menubar | Application menu bar |
| NavigationMenu | Navigation with dropdowns |
| Pagination | Page navigation |
| PlanometricaLogo | Brand logo component |
| Popover | Floating content |
| Progress | Progress bar |
| RadioGroup | Radio button group |
| Resizable | Resizable panels |
| ScrollArea | Custom scrollbar area |
| Select | Dropdown select |
| Separator | Visual divider |
| Sheet | Side panel overlay |
| Sidebar | Application sidebar |
| Skeleton | Loading placeholder |
| Slider | Range input (supports multi-thumb) |
| Sonner | Toast notifications (sonner) |
| Switch | Toggle switch |
| Table | Data table |
| Tabs | Tab navigation |
| Textarea | Multi-line text input |
| Toast | Radix-based toast |
| Toaster | Toast renderer |
| Toggle | Toggle button |
| ToggleGroup | Toggle button group |
| Tooltip | Hover tooltip |

## Hooks

| Hook | Description |
|---|---|
| `useToast()` | Toast state management |
| `toast()` | Imperative toast trigger |
| `useIsMobile()` | Responsive breakpoint detection |
| `useSidebar()` | Sidebar open/close state |
| `useFormField()` | Form field context |

## Brand Assets

```tsx
import { PlanometricaLogo } from '@planometrica/ui'

// Variants: 'primary' | 'inverse-white' | 'inverse-transparent'
<PlanometricaLogo variant="primary" className="h-8" />
```

SVG files available as direct imports:

```ts
import logoSrc from '@planometrica/ui/logos/primary'
```

## Development

```bash
# Build
npm run build

# Watch mode
npm run dev

# Type check
npm run typecheck

# Lint
npm run lint
```

Build output goes to `dist/` with:
- ESM bundles (`.js`)
- Type declarations (`.d.ts`)
- Source maps (`.js.map`)
- Copied CSS and SVG assets

## Architecture Decisions

- **ESM only** for components and icons (modern bundlers)
- **ESM + CJS** for Tailwind preset (compatibility with PostCSS toolchain)
- **No CSS-in-JS** — Tailwind utilities only
- **Lucide** as the single icon library across all products
- **Semantic icon aliases** to decouple domain meaning from specific icon shapes
- **CSS custom properties** for runtime theming (light/dark)
- **shadcn/ui pattern** — components live in the package, not copy-pasted per project

## Repository

https://github.com/Planometrica/planometrica-ui
