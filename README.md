# Michelangelo OSS Field Notes

A static field-notes artifact: public-source analysis of Uber's Michelangelo OSS, paired with a contributor walkthrough of an open issue. Built as an interview preparation reference and a reusable portfolio asset.

## Why this exists

Uber's Michelangelo platform was open-sourced in late 2025 / early 2026 and is currently in pre-launch beta. This site is an independent reading of the publicly available engineering materials — the architecture, the open-source-vs-in-house posture, and the pull request flow that new ML platform engineers would follow when contributing for the first time.

It demonstrates:

- Technical communication of platform infrastructure
- Enterprise AI infrastructure interpretation
- Open-source strategy analysis
- Information architecture
- Frontend implementation
- Reusable content design

## Tech stack

Built with React, TypeScript, and Tailwind as a static field-notes artifact for AI infrastructure analysis.

- Vite 6
- React 18
- TypeScript (strict)
- Tailwind CSS 3
- Static deployable to GitHub Pages — no backend, no API calls

## Local setup

```bash
npm install
npm run dev
```

Opens on `http://localhost:5173`.

To produce a production build:

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Set `base` in `vite.config.ts` to match your repo name. Default is `/michelangelo-field-notes/`.
2. Commit and push to a GitHub repository named `michelangelo-field-notes`.
3. Run:

```bash
npm install --save-dev gh-pages
npm run deploy
```

This builds and pushes the `dist/` folder to a `gh-pages` branch. Then in your GitHub repo settings → Pages, set source to `gh-pages` branch, root.

The site will be available at `https://<your-username>.github.io/michelangelo-field-notes/`.

To deploy to a custom domain root instead, set `base: '/'` in `vite.config.ts`.

## Editing copy

All text content lives in `src/data/fieldNotes.ts`. Change strings there, not in components. The components are layout-only.

## Adding the demo video

Drop your `.mp4` file into `public/`, then in `src/App.tsx` pass it to `VideoHero`:

```tsx
<VideoHero videoSrc="/walkthrough.mp4" posterSrc="/walkthrough-poster.jpg" />
```

Without a video file passed in, the hero renders a clean placeholder with the title overlaid.

## Disclaimer

Independent public-source analysis. No affiliation with Uber implied. All trademarks belong to their respective owners.
