# Max Kovalyov — Portfolio

Personal portfolio site. React 18, TypeScript (strict), Vite 6, Tailwind CSS 4.
Static build, no server needed.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build into dist/
npm run preview  # serve dist/ locally
npm run lint     # typecheck only
```

## Add your photo

1. Drop the image into `public/` (e.g. `public/me.jpg`).
2. Open `src/data/portfolio.ts` and set:

```ts
photoUrl: "/me.jpg",
```

Leaving it empty renders the `MK` monogram panel instead — that's a deliberate
fallback, not a broken state.

The photo is rendered grayscale with `mix-blend-mode: luminosity` over the amber
fill, which produces the duotone. A high-contrast portrait works best; a flat or
low-contrast one will look muddy.

## Edit the content

Everything the site says lives in **`src/data/portfolio.ts`** — profile, projects,
stack list, capabilities, contacts. Components read from it and never hardcode copy,
so you can update the whole site without touching a component.

## Theming

Two themes, dark by default. Tokens are CSS custom properties on
`:root[data-theme="..."]` in `src/index.css`:

| Token | Dark | Light |
| --- | --- | --- |
| `--bg` | `#14120D` | `#E5E1D5` |
| `--bg-alt` | `#1C1913` | `#DAD5C6` |
| `--fg` | `#F2ECDD` | `#17140D` |
| `--muted` | `#9B9384` | `#6B6557` |
| `--accent` | `#E3A22B` | `#C1830F` |

The light accent is deliberately deeper — bright amber on a light ground fails
contrast checks, this holds 4.5:1.

Theme resolution order: saved choice in `localStorage` → OS preference → dark.

**Note:** the inline script in `index.html` applies the theme before first paint to
prevent a flash. It reads the same `"theme"` key as `src/hooks/useTheme.ts` — if you
rename the key, change both.

## Structure

```
src/
├── main.tsx                 entry point
├── App.tsx                  composition root
├── index.css                theme tokens + design system
├── types.ts                 shared interfaces
├── data/portfolio.ts        all content
├── hooks/
│   ├── useTheme.ts          theme state + persistence
│   ├── useReveal.ts         IntersectionObserver scroll reveal
│   └── useScrolled.ts       nav border on scroll
└── components/              one file per section
```

## Before you deploy

- [ ] Set `photoUrl` in `src/data/portfolio.ts`
- [ ] Replace `https://maxkovalyov.dev/` in `index.html` with your real domain
      (three places: `canonical`, `og:url`, `og:image`)
- [ ] Add `public/og.png` at 1200×630 for link previews
- [ ] Replace `public/favicon.svg` if you want something other than the monogram

## Deploy

Static output in `dist/` — any static host works.

**Vercel:** `vercel` or connect the repo. Config is in `vercel.json`.

**Netlify:** connect the repo, or `netlify deploy --prod --dir=dist`. Config is in
`netlify.toml`.

**GitHub Pages:** if deploying to `username.github.io/repo-name` rather than a root
domain, set the base path in `vite.config.ts`:

```ts
export default defineConfig({
  base: "/repo-name/",
  plugins: [react(), tailwindcss()],
});
```

## Accessibility

Skip link, semantic landmarks, visible focus rings on the accent color, `sr-only`
text where the display type is decorative, and `prefers-reduced-motion` disables
every animation. Worth re-checking after you change colors — the contrast ratios
above are the floor, not a margin.
