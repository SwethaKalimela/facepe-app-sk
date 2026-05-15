# FacePe marketing site

Static **HTML + CSS + JavaScript**. **Tailwind** (Play CDN) and **Lucide** (ESM CDN). No build step.

## Preview

HTML partials use `fetch`, so serve the folder (do not open as `file://`):

```bash
npx --yes serve . -l 3000
```

Open [http://localhost:3000/](http://localhost:3000/)

## Tailwind

In each page `<head>`:

```html
<script src="https://cdn.tailwindcss.com"></script>
<script src="../js/tailwind-config.js"></script>
<link rel="stylesheet" href="../styles/globals.css" />
<link rel="stylesheet" href="../styles/animations.css" />
```

Design tokens: `js/tailwind-config.js` (mirrors `tailwind.config.js` for reference).

## Structure

| Path | Purpose |
|------|---------|
| `pages/` | Page shells |
| `components/` | HTML partials |
| `js/` | ES modules |
| `styles/` | Non-Tailwind CSS |
