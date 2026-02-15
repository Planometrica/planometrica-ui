# Planometrica Frontend Instructions

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

## Response Format

```tsx
[code changes only]
```

Changed: [1-line summary]

If unsure: "I need to see [X] to answer accurately."

## Tech Stack

### Framework
- React 18 + TypeScript
- Functional components with hooks only
- Konva for 2D canvas editor

### Styling
- **Tailwind CSS** — use existing utility classes
- Responsive: mobile-first (sm:, md:, lg:, xl:)

### Design System Colors (Planometrica Brand)
- Primary: `#0A4C76` — brand blue (`brand-primary`, `primary`)
- Secondary: `#1A7BB3` — accent blue (`brand-secondary`, `secondary`)
- Accent: `#92CF93` — green accent (`brand-green`, `accent`)
- Warning: `#F59E0B` — orange (`brand-orange`)

### Components
- **shadcn/ui** (Radix-based)
- Import from: `@/components/ui/button`, `@/components/ui/card`, etc.
- Don't create custom components if shadcn/ui has one

### Icons
- **Lucide React** only
- Import: `import { IconName } from 'lucide-react'`
- Size: `className="w-4 h-4"` or `size={16}`

### 3D
- Three.js via **@react-three/fiber**
- Helpers: **@react-three/drei**

### Standard Imports
```tsx
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight, Settings } from 'lucide-react'
import { useState, useEffect } from 'react'
```

## Self-Check

- Answered exactly what was asked?
- Only modified requested elements?
- All classes/components exist?
- Response is minimal?
