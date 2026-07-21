<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# my_cv_web — AI Agent Architecture & Coding Standards

---

## ⚡ POINTER RULE (MANDATORY — EXECUTE BEFORE ANY CODE)

This file is the **Single Source of Truth** for the `my_cv_web` Next.js project.

**Every AI agent MUST follow these steps at the start of every session:**

1. **READ THIS FILE FIRST** — Call `view_file` on `AGENTS.md` before planning or writing any code.
2. **OBEY 100%** — Every file, component name, import, and verification step must comply with this document. No exceptions.
3. **AUTO-VERIFY AFTER TASK** — After completing any coding task, you MUST manually verify the Checklist (Section 5) and run build/lint checks before reporting the task as done.

> **FORBIDDEN**: Modifying core architecture or `.tsx` files without ensuring Type Safety (TypeScript) and Componentization rules are met.

---

## 🚦 QUICK-REFERENCE TABLE (Read this first)

| Rule | ❌ FORBIDDEN | ✅ MANDATORY |
|------|-------------|-------------|
| File Naming (Components) | `myComponent.tsx` (camelCase) | `MyComponent.tsx` (PascalCase) |
| Props & State Types | `any` | `interface` / `type` |
| Component Structure | Massive monolithic `page.tsx` | Break down into small `src/components/` |
| Secrets / API Keys | Hardcoded in `src/` | Stored in `.env.local` & `process.env` |
| Inline Styles | `style={{ margin: 0, color: 'red' }}` | CSS Modules (`.module.css`) or Global utility classes |
| Error Handling | Silent catch `catch (e) {}` | Proper typed catching `catch (e: unknown)` |

---

## 1. Security & Configuration
- **No Hardcoded Secrets**: Never hardcode API keys, tokens, or Firebase configuration directly in source code. Always use `.env.local`.
- **Environment Variables**: Use `NEXT_PUBLIC_` prefix only for variables that absolutely need to be exposed to the browser.
- **Data Validation & Sanitization**: Always validate and sanitize user inputs both on the client and server side to prevent XSS and injection attacks.

## 2. Architecture & Code Structure
- **Componentization (React/Next.js)**: Break down large UI files into small, reusable components inside `src/components`. Keep the `page.tsx` routing entry points clean and readable.
- **Separation of Concerns**: Separate business logic (data fetching, state management) from UI rendering. 
- **Server vs Client Components**: Next.js defaults to Server Components. Use `"use client";` ONLY when necessary (e.g. using `useState`, `useEffect`, or browser APIs).

## 3. Type Safety
- **Strict TypeScript**: Strictly use TypeScript. Define interfaces/types for all data structures (e.g. API responses, component props) in `src/types/`.
- **No `any`**: Avoid the use of `any` at all costs. Use `unknown` for caught errors and properly narrow types.

## 4. Styling
- **CSS Modules**: Use CSS Modules (`Component.module.css`) to scope styles and prevent global class conflicts.
- **Global CSS**: Use `globals.css` only for foundational utility classes (e.g. `.flex`, `.card`) or theme variables.
- **No Inline Styles**: Avoid inline styling (`style={{...}}`) to maintain clean HTML markup and CSS maintainability.

---

## 5. Pre-commit & Handover Checklist

> **MANDATORY**: Before marking any coding task as complete and handing it over to the user, the AI MUST confirm every single item below is checked:

- [ ] **No `any` types** remain in the modified or newly created files.
- [ ] **No Hardcoded Secrets**. All API keys or environment configs are properly routed through `.env.local`.
- [ ] **No Inline Styles** (`style={{...}}`) are used in the modified components.
- [ ] **Componentized UI**: Large UI blocks have been extracted into independent `PascalCase.tsx` files inside `src/components`.
- [ ] **Clean Console**: Code logic properly handles `try/catch` with `unknown` type, avoiding unhandled promise rejections.
- [ ] **`npm run lint`** → Passed with 0 errors.
- [ ] **`npm run build`** → Passed with 0 errors (TypeScript compilation and Next.js build successful).

*Do NOT ask the user to test the app until you have personally verified the build and lint steps pass.*
