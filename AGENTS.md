# AGENTS.md

## Global Rules

- **Context7:** Always use Context7 for querying documentation and resolving library IDs. This is the primary source of truth for external libraries and frameworks.

## Build & Lint Commands

```bash
# Development
npm run dev                 # Start Next.js dev server

# Build
npm run build              # Build for production (Next.js)

# Quality
npm run lint               # Run ESLint (Next.js config)

# Testing
# No test runner currently configured. 
# If tests are added, prefer Vitest or Jest.
```

## Project Configuration

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Radix UI
- **Strict Mode:** Enabled (`noUnusedLocals`, `noUnusedParameters`, etc.)

## Code Style Guidelines

### Imports & File Organization

**Order:** React/Next imports → external libs → internal imports (@/...) → type imports

```ts
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // App Router hook
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { User } from '@/types';
```

**Aliases:** Always use `@/` for internal imports (configured in `tsconfig.json`).

### Components (Next.js App Router)

**Server vs Client:**
- Default to **Server Components** (no `'use client'`).
- Add `'use client'` at the top only when needing hooks (`useState`, `useEffect`) or event listeners.

**Structure:**
```tsx
// src/components/FeatureCard.tsx
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  className?: string;
}

export const FeatureCard = ({ title, className }: FeatureCardProps) => {
  return (
    <div className={cn("p-4 rounded-lg border", className)}>
      <h3 className="font-bold">{title}</h3>
    </div>
  );
};
```

### Naming Conventions

- **Components:** PascalCase (`HeroSection`, `UserCard`)
- **Files:** kebab-case or PascalCase (match existing: `page.tsx`, `layout.tsx`, `utils.ts`)
- **Functions/Vars:** camelCase (`isLoading`, `handleSubmit`)
- **Types/Interfaces:** PascalCase

### State Management

- Prefer **URL state** (searchParams) for shareable state.
- Use `React.Context` sparingly for global UI state (theme, sidebar).
- Use local `useState`/`useReducer` for component-level state.

### Styling (Tailwind CSS)

- Use the `cn()` utility for conditional classes and merging.
- **Order:** Layout (`flex`, `grid`) → Spacing (`p-4`, `m-2`) → Sizing (`w-full`) → Typography → Visuals (`bg-`, `border-`).
- Use CSS variables for theme colors (defined in `globals.css`).

```tsx
// Good
<div className={cn("flex items-center gap-2", isActive && "text-primary")}>
```

### Error Handling

- **API:** Handle errors in Server Actions or Route Handlers gracefully.
- **UI:** Use `error.tsx` boundaries in App Router for page-level errors.
- **Images:** Handle loading/error states for `next/image` or `img` tags.

### Animations (Framer Motion)

- Use `framer-motion` for complex UI transitions.
- Prefer `layout` prop for automatic layout animations.
- Ensure animations are client-side only (wrap in `'use client'` component).

```tsx
'use client';
import { motion } from 'framer-motion';

export const FadeIn = ({ children }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    {children}
  </motion.div>
);
```

## Pre-commit Requirements

1. **Linting:** Run `npm run lint` and fix issues.
2. **Type Check:** Ensure no TypeScript errors (implicit in build, but check `tsconfig.json` strictness).
3. **Build:** Run `npm run build` to verify production build passes.
4. **Cleanup:** Remove `console.log` and unused imports.
5. **Conventions:** Verify file placement (`src/app` for routes, `src/components` for UI).
