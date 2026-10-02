# Coreline Venture

A modern landing page for **Coreline Venture** — "Where Ambitious Founders Build". A community-focused marketing site for a founders network, built with Next.js, Tailwind CSS, and shadcn/ui, with smooth Framer Motion animations.

## Features

- **Hero + marketing sections** — landing page for a founders community: value props, community highlights, testimonials, and calls to action.
- **Animated UI** — scroll-triggered fade/slide animations via Framer Motion.
- **Modern component library** — shadcn/ui (Radix primitives) with Tailwind CSS v4 styling.
- **Dark/light ready design** — theme-aware styles via `next-themes`.
- **Toast notifications** — shadcn `Toaster` wired in the root layout.
- **SEO metadata** — title, description, and favicon set in `layout.tsx`.
- **Static export** — builds to plain static HTML/CSS/JS; deployable on any static host.

## Tech stack

| Technology | Role |
|---|---|
| Next.js 16 (static export) | React framework, `output: "export"` |
| React 19 + TypeScript | UI |
| Tailwind CSS v4 | Styling |
| shadcn/ui + Radix UI | Accessible component primitives |
| Framer Motion | Scroll and entrance animations |
| lucide-react | Icons |

Note: the repo scaffold also includes Prisma and next-auth dependencies from the original template, but the landing page itself uses neither — they are unused and can be removed if you want a leaner bundle.

## Quick start

Prerequisites: Node.js 18+ and npm.

```bash
git clone https://github.com/girishlade111/Coreline.git
cd Coreline
npm install --legacy-peer-deps
npm run dev        # local dev server on http://localhost:3000
```

Build the static site:

```bash
npm run build      # outputs to ./out
npx serve out      # preview the production build
```

## Project structure

```
Coreline/
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout, metadata, fonts, Toaster
│   │   ├── page.tsx      # Landing page content
│   │   └── globals.css   # Global Tailwind styles
│   ├── components/       # UI components (shadcn/ui)
│   ├── hooks/
│   └── lib/
├── public/
│   ├── logo.svg
│   └── robots.txt
├── next.config.ts        # Static-export config (output: "export", basePath for GitHub Pages)
├── package.json
└── tailwind.config.ts
```

## Deploying

The site builds to static files in `out/` and is deployed on **GitHub Pages** from the `gh-pages` branch:

- `main` — source code
- `gh-pages` — built static output (auto-served by GitHub Pages)

Any static host works too (Netlify, Cloudflare Pages, Vercel): build with `npm run build` and serve `out/`.

## Author

**Built by [Girish Lade](https://github.com/girishlade111)** — https://ladestack.in

## License

MIT — free to use, modify, and distribute.
