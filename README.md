# Meridian Build — Astro Site

## Project structure

```
src/
├── i18n/
│   ├── ui.ts        — all translations (en, de, fr, sr)
│   └── utils.ts     — t(), getLangFromUrl(), getLocalePath()
├── pages/
│   ├── index.astro  — redirects / → /en/
│   ├── en/index.astro
│   ├── de/index.astro
│   ├── fr/index.astro
│   └── sr/index.astro
├── layouts/
│   └── Base.astro   — shared HTML shell, font loading, JS
├── components/
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── Contact.astro
│   └── Footer.astro
└── styles/
    └── global.css   — all styles inline (zero render-blocking CDNs)
```

## Local dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
# Output goes to /dist
```

## Deploy to Netlify

### Option A — Manual (drag and drop)
1. `npm run build`
2. Go to Netlify → Sites → "Add new site" → "Deploy manually"
3. Drag the `dist/` folder into the dropzone

### Option B — CLI
```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod --dir=dist
```

### Option C — Git-connected (recommended)
1. Push this repo to GitHub / GitLab
2. Netlify → "Add new site" → "Import from Git"
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy — Netlify reads `netlify.toml` automatically

## Adding a new language

1. Add the locale code to `astro.config.mjs` → `i18n.locales`
2. Add a translation object to `src/i18n/ui.ts`
3. Create `src/pages/<locale>/index.astro` (copy any existing locale page, change the `lang` const)

## Netlify Forms

The contact form uses `data-netlify="true"`. It works automatically on Netlify — no backend needed.
Submissions appear in Netlify dashboard → Forms.
