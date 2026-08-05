<!-- BEGIN:nextjs-agent-rules -->
# Next.js 16+ App Router & React 19 Best Practices

This project uses Next.js 16+ (App Router) and React 19. APIs, conventions, and file structure follow modern React 19 Server Components and Next.js App Router guidelines.
<!-- END:nextjs-agent-rules -->

# my_cv_web — Global Best Practice AI Agent Architecture & Coding Standards

---

## ⚡ 1. POINTER RULE (MANDATORY — EXECUTE BEFORE ANY CODE)

This document (`AGENTS.md`) is the **Single Source of Truth** for the `my_cv_web` Next.js project.

**Every AI agent MUST follow these steps at the start of every session:**

1. **READ THIS FILE FIRST** — Call `view_file` on `AGENTS.md` before planning or writing any code.
2. **OBEY 100%** — Every file name, component structure, import, CSS rule, and verification step must comply with this document. No exceptions.
3. **AUTO-VERIFY AFTER TASK** — After completing any task, you MUST verify the checklist (Section 7) and run both `npm run lint` and `npm run build` before marking the task as done.

> ⛔ **FORBIDDEN**: 
> - Modifying code without verifying Type Safety (`tsc --noEmit`).
> - Leaving orphaned or dead component files.
> - Using inline styles (`style={{...}}`).
> - Using `any` type anywhere in the codebase.

---

## 🚦 QUICK-REFERENCE RULE MATRIX

| Category | ❌ FORBIDDEN | ✅ MANDATORY |
|----------|-------------|-------------|
| **Component Naming** | `myComponent.tsx` (camelCase) | `MyComponent.tsx` (PascalCase) |
| **Component CSS** | `style={{ padding: "10px" }}` (Inline) | CSS Modules (`MyComponent.module.css`) |
| **Type Safety** | `any`, loose casts | `interface`, `type`, Zod runtime validation |
| **Secrets & Env** | Direct `process.env` lookups without validation | Centralized Zod schema validation in `src/lib/env.ts` |
| **Error Handling** | Silent catch `catch (e) {}` | `catch (err: unknown)` with explicit error narrowing |
| **Page Structure** | Heavy state & data fetching inside `page.tsx` | Clean `page.tsx` delegating logic to custom hooks (`src/hooks/`) |
| **Component Files** | Orphaned / unused `.tsx` or `.module.css` files | Clean tree with only active, imported single-purpose components |

---

## 🛡️ 2. SECURITY & ENVIRONMENT VARIABLES

1. **Environment Validation**: All environment variables MUST be validated at application startup using Zod in `src/lib/env.ts`. Never read unvalidated `process.env` directly in feature components.
2. **Secret Guardrails**: Only variables prefixed with `NEXT_PUBLIC_` may be exposed to the client bundle. Never hardcode credentials, tokens, or sensitive API keys.
3. **Input Sanitization**: Validate all external inputs, API parameters, and database objects using Zod schemas before rendering or processing.

---

## 🏗️ 3. ARCHITECTURE & DIRECTORY CONVENTIONS

Follow a modular, clean layer separation:

```text
src/
├── app/                  # Next.js App Router (Layouts, Pages, API Routes, Globals)
│   ├── api/              # Server-side API endpoints
│   ├── globals.css       # Design tokens, CSS variables, global reset
│   ├── layout.tsx        # Root layout, dynamic Metadata, Fonts
│   └── page.tsx          # Clean page compositions
├── components/           # UI Presentation Components (PascalCase.tsx + PascalCase.module.css)
├── constants/            # Immutable static configurations & translations
├── hooks/                # Custom React Hooks (Business logic, state, side-effects)
├── lib/                  # External SDK initializations (Firebase, validated Env)
├── types/                # TypeScript interfaces, types & Zod schemas
└── utils/                # Pure stateless utility functions
```

### Server vs. Client Components Boundary Rule
- Next.js App Router defaults to **Server Components**.
- Add `"use client";` ONLY at the top of components or hooks that explicitly require state (`useState`, `useReducer`), effects (`useEffect`), browser APIs (`localStorage`), or event handlers.
- Keep `page.tsx` minimal: delegate state management to custom hooks (e.g. `src/hooks/useCVData.ts`).

---

## 💪 4. TYPE SAFETY & CODING STANDARDS

1. **Strict TypeScript**: TypeScript `strict: true` must be maintained.
2. **Zero `any`**: Do NOT use `any` under any circumstances. Use `unknown` for caught errors or generics, and narrow with type guards or Zod.
3. **Zod Data Contracts**: Define data schemas in `src/types/` using Zod (`z.object(...)`) and infer types (`z.infer<typeof Schema>`). Validate incoming network & database responses.
4. **Explicit Return Types**: Functions in utility modules and custom hooks should have explicit return types or clear type signatures.

---

## 🎨 5. STYLING & ACCESSIBILITY (A11Y) STANDARDS

1. **Strict Prohibition of Inline Styles**: 
   - NEVER use `style={{...}}` in `.tsx` files.
   - Use CSS Modules (`[Component].module.css`) for component-specific styles.
   - Use global CSS classes (`globals.css`) for project-wide Design System tokens (CSS Variables: `--bg-primary`, `--text-primary`, `--accent-primary`, etc.).
2. **Semantic HTML5**: Always use appropriate tags (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, `<article>`, `<h1>`-`<h6>`).
3. **Accessibility**:
   - Provide `aria-label` or `aria-labelledby` for interactive buttons and navigation toggles.
   - Maintain color contrast ratios compliant with WCAG AA.
   - Ensure clean focus rings for keyboard navigation.
4. **Responsive & Fluid Layouts**: Design for Mobile-First or responsive breakpoints (`@media (max-width: 768px)`). Avoid hardcoded pixel widths.

---

## 🚀 6. PERFORMANCE & SEO OPTIMIZATION

1. **Metadata API**: Configure comprehensive page metadata in `layout.tsx` or `page.tsx` using Next.js `Metadata` type (Title, Description, Open Graph, Twitter cards, Icons, Viewport).
2. **Next.js Assets**: Use `next/image` for image optimization and `next/font` for web font loading where applicable.
3. **Print Media Styles**: Preserve print CSS (`@media print`) so personal CV web pages render cleanly as PDF documents when printed (`window.print()`).

---

## ✅ 7. MANDATORY PRE-COMMIT & HANDOVER CHECKLIST

Before marking ANY task as completed, you MUST run and pass all of the following checks:

- [ ] **No `any` types** in modified or new files.
- [ ] **Zero Inline Styles** (`style={{...}}` removed 100%).
- [ ] **Env Validation**: All `process.env` access routed through validated `src/lib/env.ts`.
- [ ] **Clean Component Tree**: No orphaned/unused `.tsx` or `.module.css` files remain in `src/components`.
- [ ] **Typed Error Handling**: All `try/catch` blocks use `catch (err: unknown)`.
- [ ] **`npm run lint`** → Passed with **0 errors**.
- [ ] **`npm run build`** → Passed with **0 errors** (TypeScript compilation & Next.js production build successful).

*Do NOT declare success to the user until both build and lint pass cleanly.*
