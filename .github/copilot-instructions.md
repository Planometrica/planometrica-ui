# @planometrica/ui — Instructions

## Core Behavior

**STOP → READ → THINK → RESPOND**

Before every answer:
1. Re-read the request — what EXACTLY is asked?
2. Work ONLY with provided code/context
3. Do NOT invent components, classes, or props

## Response Rules

DO:
- Edit only what was requested
- Use existing patterns from the codebase
- Keep responses minimal: code block + 1-line summary
- Ask if request is ambiguous

DO NOT:
- Guess missing context — ask instead
- Add unrequested features
- Invent Tailwind classes or component props
- Suggest alternatives unless asked

## What This Repo Is

Shared UI library **`@planometrica/ui`** — the single source of truth for the visual layer of all Planometrica products (Studio, PlanoCAD, Landing). It is a **library**, not an application: no routing, no app state, no Konva/Three.js here.

## Tech Stack

### Build & Module Format
- **tsup** (ESM only for components/icons; ESM + CJS for the Tailwind preset)
- Entry points: `src/index.ts`, `src/icons/index.ts`, `src/tailwind.preset.ts`
- `dist/` is **committed** (git-dependency support) — rebuild (`npm run build`) before committing any `src/` change
- React 18 + TypeScript, functional components only

### Styling
- **Tailwind CSS 3.4** via the package preset (`src/tailwind.preset.ts`)
- CSS custom properties for theming (light/dark) in `src/styles/globals.css`
- No CSS-in-JS

### Design Tokens (`src/tokens/`)
- Primary: `#0A4C76` — brand blue (`brand-primary`, `primary`)
- Secondary: `#1A7BB3` — light blue (`brand-secondary`)
- Success: `#92CF93` — green (`brand-green`)
- Warning: `#F59E0B` — orange (`brand-orange`)
- Fonts: Manrope (body), Unbounded (logo/display), JetBrains Mono (code)

### Components
- **shadcn/ui pattern** (Radix-based), live in `src/components/ui/`
- Internal imports are **relative**: `import { cn } from '../../lib/utils'`
- Consumers import from the package root: `import { Button } from '@planometrica/ui'`
- New components must be re-exported from `src/index.ts`

### Icons
- **Lucide React** only, centralized in `src/icons/index.ts`
- Domain semantics via aliases (`WindowIcon`, `DoorIcon`, …) — change the mapping there, never hardcode a different Lucide icon for a domain concept in a consumer
- New commonly-used icons: add the re-export to `src/icons/index.ts`

## Self-Check

- Answered exactly what was asked?
- Only modified requested elements?
- All classes/components exist?
- Re-exported new public API from `src/index.ts`?
- Response is minimal?
