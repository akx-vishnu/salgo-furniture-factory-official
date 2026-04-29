# Salgo Furniture Factory - Agent Instructions

## Tech Stack
- **Framework:** React 19 + Vite 8 + TypeScript
- **Styling:** Tailwind CSS v4 with custom `@theme` configuration in `src/index.css`
- **Animation:** Framer Motion v12
- **Icons:** Lucide React v1

## Key Architecture
- Single-page application with animated loader transition (2s initial load)
- Custom design system defines all colors and fonts via CSS `@theme`
- Component-based structure in `src/components/` with App.jsx as orchestrator
- Custom cursor component (`CustomCursor`) manages global cursor state

## Development Commands
```bash
npm install    # Install dependencies
npm run dev    # Start dev server on localhost
npm run build  # Typecheck + production build
npm run preview # Preview production build
```

## Important Configuration
- **No `tsconfig.json` present** - TypeScript runs with Vite defaults
- **Custom color palette:** Uses `cream-*`, `charcoal-*`, `gold-*`, `wood-*` variants defined in `src/index.css`
- **Premium utility classes:** `glass-nav`, `premium-card`, `gold-glow`, `text-gradient-gold` are custom Tailwind extensions
- **Entry point:** `src/main.jsx` → `src/App.jsx` (not App.tsx despite TypeScript dependency)

## Build/Deploy Notes
- Build process: `tsc && vite build` (typecheck happens first)
- All CSS custom properties use US spelling: `color`, not `colour`
- Fonts loaded from Google Fonts via `<link>` tags in `index.html`

## Agent Conventions
- Preserve the 2s loading animation timing - it's intentional for "premium feel"
- Keep scroll behavior smooth and scrollbar styling consistent
- Maintain the serif (Playfair Display) / sans (Inter) typography hierarchy

