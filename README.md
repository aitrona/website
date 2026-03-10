# AITRONA — Modern SaaS Website (Next.js 14)

Production-ready, responsive SaaS landing page for **AITRONA** (AI agents for WhatsApp, Instagram, phone calls, and personal assistant AI).

## Tech stack

- Next.js 14 (App Router)
- React + TypeScript
- TailwindCSS
- Framer Motion (scroll/reveal animations)
- Static export compatible (`output: "export"`) for Hostinger

## Getting started (local)

1. Install Node.js (LTS) and npm.
2. Install dependencies:

```bash
npm install
```

3. Run dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Customize content

Edit `lib/site.ts`:

- Company URL / description
- Demo placeholders (WhatsApp number, Instagram handle, call number)
- Social links

Founder cards + section copy live in:

- `components/sections/Team.tsx`
- `components/sections/*.tsx`

## Build + static export

This project is configured for static export in `next.config.mjs`:

- `output: "export"`
- `trailingSlash: true`
- `images.unoptimized: true`

Build:

```bash
npm run build
```

The static site will be generated into the `out/` folder.

## Deploy to Hostinger (static hosting)

### Option A — Hostinger File Manager (recommended)

1. Run:

```bash
npm install
npm run build
```

2. In Hostinger hPanel:
   - Open **File Manager**
   - Go to `public_html/`
   - Upload **the contents of** the `out/` folder (not the folder itself)
3. Ensure `index.html` exists in `public_html/`
4. Visit your domain.

### Option B — FTP

1. Build locally:

```bash
npm install
npm run build
```

2. Upload the contents of `out/` to `public_html/` via FTP (FileZilla or similar).

## Notes

- Anchored navigation uses smooth scrolling and section offsets (`scroll-mt-*`), so the sticky navbar doesn’t cover headings.
- Theme toggle uses `localStorage` and Tailwind `dark` class.

