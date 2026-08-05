# 🚀 Personal Web CV & Portfolio — Trương Công Quốc Đạt

[![Next.js](https://img.shields.io/badge/Next.js-16.2.10-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Zod](https://img.shields.io/badge/Zod-Schema_Validation-3E67B1?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)

A modern, high-performance, single-page personal Web CV and Portfolio for **Trương Công Quốc Đạt** (Flutter Mobile Developer), built with Next.js 16 App Router, React 19, TypeScript, Firebase Firestore, and CSS Modules.

---

## ✨ Key Features

- **⚡ Dynamic Profile Hydration**: Renders live CV data dynamically fetched from Cloud Firebase Firestore with fallback to cached translated schemas.
- **🌐 Dual-Language Support (i18n)**: Seamless real-time switching between **Vietnamese (VI)** and **English (EN)** with client state persistence (`localStorage`).
- **🎨 Glassmorphism & Modern UI**: Built with custom CSS Modules and CSS Variables, featuring responsive Dark/Light mode theme toggling.
- **🖨️ Print & PDF Ready**: Integrated `@media print` layout stylesheet for printing or saving a clean PDF resume without navigation headers or action buttons.
- **🛡️ Type-Safe & Validated**: Strict TypeScript (`strict: true`), 0 `any` types, and Zod runtime schema validation for both environment variables (`src/lib/env.ts`) and database records (`src/types/cv.ts`).
- **📱 Fully Responsive**: Fluid layouts engineered for mobile, tablet, desktop, and ultra-wide viewports.

---

## 🛠️ Tech Stack

| Component | Technology | Description |
|-----------|------------|-------------|
| **Core Framework** | Next.js 16+ (App Router) | Server Components & Client Boundaries |
| **UI Library** | React 19 | Modern React Hooks & Component Architecture |
| **Language** | TypeScript 5 | Strict Type System with 0 `any` tolerance |
| **Database** | Firebase Firestore | Cloud NoSQL database for live CV data |
| **Validation** | Zod | Runtime validation for env vars & Firestore data |
| **Styling** | Vanilla CSS Modules | Scoped component styles (`.module.css`) & CSS Variables |

---

## 📂 Project Architecture

Follows a clean modular layer architecture adhering to `AGENTS.md` Global Best Practices:

```text
src/
├── app/                  # Next.js App Router (Layouts, Pages, API Routes, Globals)
│   ├── api/seed/         # API endpoint to seed CV profile into Firebase
│   ├── globals.css       # Design tokens, CSS variables, global resets
│   ├── layout.tsx        # Root layout, dynamic SEO Metadata, OpenGraph & Viewport
│   └── page.tsx          # Clean declarative page entry point
├── components/           # UI Components (PascalCase.tsx + PascalCase.module.css)
│   ├── Navbar.tsx        # Navigation header & theme/language controls
│   ├── Hero.tsx          # Main headline & introduction CTA
│   ├── AboutSection.tsx  # Career objective & summary
│   ├── SkillsSection.tsx # Technical skills & stack tags
│   ├── ExperienceSection.tsx # Detailed work experience & key accomplishments
│   ├── ProjectsSection.tsx   # Personal projects showcase
│   ├── EducationSection.tsx  # Academic background
│   └── ContactSection.tsx    # Contact links & footer
├── constants/            # Static constants & translation dictionaries
├── hooks/                # Custom React Hooks (`useCVData` for state & data layer)
├── lib/                  # External initializations (Firebase SDK, Zod Env parser)
├── types/                # Zod schemas & inferred TypeScript interfaces
└── utils/                # Helper functions & translation mappers
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.x` or higher
- **npm**: `v9.x` or higher

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/dattcq/me-cv.git
cd me-cv
npm install
```

### 2. Environment Setup

Create a `.env.local` file in the project root with your Firebase web app configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY="your-api-key"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-auth-domain.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project-id"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your-storage-bucket.appspot.com"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your-sender-id"
NEXT_PUBLIC_FIREBASE_APP_ID="your-app-id"
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="your-measurement-id"
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Verification & Build Commands

- **ESLint Check**:
  ```bash
  npm run lint
  ```

- **Production Build Check**:
  ```bash
  npm run build
  ```

---

## 🧑‍💻 Author

**Trương Công Quốc Đạt** — Flutter Mobile Developer
- **Email**: [dattr.coder@gmail.com](mailto:dattr.coder@gmail.com)
- **GitHub**: [@dattcq](https://github.com/dattcq)
- **Location**: Hanoi, Vietnam
