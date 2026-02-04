# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Professional portfolio website for a strategy consultant, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Deployed on Vercel.

## Commands

```bash
npm run dev      # Start dev server on localhost:3000
npm run build    # Production build
npm run start    # Run production server
npm run lint     # ESLint (next/core-web-vitals)
```

No test framework is configured.

## Architecture

### Routing (Next.js App Router)

- `app/layout.tsx` — Root layout: loads three Google Fonts (Plus Jakarta Sans, Sora, JetBrains Mono) as CSS variables, wraps app in ThemeProvider (next-themes, class-based dark mode), renders Navbar/Footer/BackToTop globally.
- `app/page.tsx` — Home page (hero, stats, featured projects, recent updates)
- `app/about/page.tsx` — About page (timeline, skills, expertise)
- `app/contact/page.tsx` — Contact form (Formspree integration — requires `YOUR_FORM_ID` in `components/ContactForm.tsx`)
- `app/projects/page.tsx` — Projects listing with status filtering
- `app/projects/[slug]/page.tsx` — Dynamic project detail from MDX
- `app/updates/page.tsx` — Blog listing
- `app/updates/[slug]/page.tsx` — Dynamic blog post from MDX

Most page components use `"use client"` for Framer Motion animations.

### Content System

Content lives in `content/projects/` and `content/updates/` as `.mdx` files with YAML frontmatter. `lib/mdx.ts` provides the data layer:

- `getProjects()` / `getProjectBySlug(slug)` — reads project MDX files
- `getUpdates()` / `getUpdateBySlug(slug)` — reads update MDX files with computed reading time
- Frontmatter is parsed with `gray-matter`

**Project frontmatter**: `title`, `description`, `tags[]`, `status` (`ongoing`|`completed`|`archived`), `date`, optional `github`, `demo`, `featured`.

**Update frontmatter**: `title`, `excerpt`, `date`, `category`, optional `image`.

### Styling

- Tailwind CSS with custom `primary` (blue) and `accent` (magenta/purple) color palettes defined in `tailwind.config.ts`
- Three font families: `font-sans` (Plus Jakarta), `font-display` (Sora), `font-mono` (JetBrains Mono)
- `app/globals.css` defines reusable component classes: `.btn`, `.card`, `.badge`, `.gradient-text`, `.mesh-gradient`, `.section-heading`
- Dark/light theme via CSS variables and Tailwind's `dark:` modifier (class strategy)
- `@tailwindcss/typography` plugin for MDX prose styling

### Component Patterns

- `components/` exports via `index.ts` barrel file
- Layout: `Navbar` (fixed, scroll-aware), `Footer`, `BackToTop`
- Theme: `ThemeProvider` (wraps next-themes), `ThemeToggle`
- Animation: `PageTransition` (Framer Motion wrapper), `AnimatedText`, `ScrollProgress`
- Content: `ProjectCard`, `UpdateCard`, `ContactForm`, `PhotoSection`
- Path alias: `@/*` maps to project root (configured in `tsconfig.json`)

### Static Assets

- `public/images/avatar.jpg` — profile photo
- `public/images/about-hero.jpg` — about page hero
- `public/images/projects/` — project cover images
- `public/resume.pdf` — downloadable resume
