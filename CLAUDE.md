# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio website for Aniraj Kesavan. The site is a Next.js 16 static export hosted on GitHub Pages at anirajk.github.io. All active development happens in `nextjs-site/`; the repo root contains the compiled static export (the `_next/`, `index.html`, etc. at the root are the deployed output).

## Development Commands

All commands run from `nextjs-site/`:

```bash
cd nextjs-site

npm install          # install dependencies
npm run dev          # dev server at http://localhost:3000
npm run build        # static export to nextjs-site/out/
npm run lint         # ESLint via next lint
npx serve out        # preview the production build locally
```

## Deploying to GitHub Pages

After building, copy the contents of `nextjs-site/out/` to the repo root (the root is what GitHub Pages serves). The `.nojekyll` file at the root must be preserved so GitHub Pages doesn't try to process Next.js output as Jekyll.

## Architecture

### Data flow

Content is entirely static TypeScript — no CMS, no API calls. The data pipeline is:

```
content/*.ts  →  components/sections/*.tsx  →  app/page.tsx
lib/constants.ts  →  layout components + metadata
```

- `lib/constants.ts` — site-wide config (name, title, social links, nav links). This is the single source of truth for personal info and navigation.
- `lib/types.ts` — shared TypeScript interfaces (`Experience`, `Publication`, `Advisor`).
- `content/` — structured data arrays typed against `lib/types.ts`.
- `components/sections/` — one component per page section; each imports directly from its corresponding `content/` file.
- `app/page.tsx` — composes all section components in order.
- `app/layout.tsx` — root layout: applies Inter font, wraps content in `Header + Container + Footer`, sets metadata from `siteConfig`.

### Key design decisions

- `next.config.ts` sets `output: "export"` and `images: { unoptimized: true }` — required for static GitHub Pages deployment; no server-side features can be used.
- Navigation links in `Header.tsx` use anchor hrefs (`#experience`, etc.) — smooth scrolling is enabled globally in `globals.css`.
- Tailwind CSS v4 (PostCSS plugin) with `@tailwindcss/typography` for prose styling.
- `lib/utils.ts` exports a `cn()` helper (clsx + tailwind-merge) used throughout components.

## Content Editing

| What to change | Where |
|---|---|
| Name, title, email, site URL | `lib/constants.ts` → `siteConfig` |
| Social links | `lib/constants.ts` → `socialLinks` |
| Nav items | `lib/constants.ts` → `navLinks` |
| Work history | `content/experience.ts` |
| Publications | `content/publications.ts` |
| Academic advisors | `content/advisors.ts` |
| Resume PDF | `public/documents/cv-kesavan.pdf` |
| Profile photo | `public/images/profile.jpeg` |

## Destructive Actions Protocol

**IMPORTANT:** Before any destructive action (deleting code, removing files, major refactors), follow this workflow:

1. **Stash work in progress** — `git stash` any uncommitted changes
2. **Ensure last known good state is safe** — verify the codebase is committed and pushed to remote
3. **Apply and commit the stash** — `git stash pop` and commit the WIP changes
4. **Apply the destructive changes** — proceed with deletions/removals
5. **Request review** — ask the user to review the changes before finalizing; run `npm run build` inside `nextjs-site/` to verify the site still builds correctly
