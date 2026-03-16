# Linux Dork

Linux Dork is a multilingual Astro site focused on Linux content, including articles, news, self-hosted app guides, and practical tools.

## Tech Stack

- Astro 6
- TypeScript
- Tailwind CSS v4
- Astro Content Collections (Markdown/MDX)

## Current Features

- Localized routes and UI for:
	- `en` (default)
	- `de`, `pt`, `es`, `fr`, `nl`, `it`, `zh`
- Localized blog pages with translation-first routing and fallback behavior
- Localized news pages backed by Astro content collections
- Tools index that shows internal tools from `src/content/resources/`
- Internal Linux tool: Crontab Generator
	- Route: `/tools/crontab-generator`
	- Localized routes: `/<locale>/tools/crontab-generator`
	- Human-readable cron parsing
	- Next run preview
	- FAQ + FAQPage JSON-LD
- Internal Linux tool: chmod/chown Command Builder
	- Route: `/tools/chmod-chown-builder`
	- Localized routes: `/<locale>/tools/chmod-chown-builder`
	- Permission matrix and special bits support
	- Command preview and copy actions
- Homepage includes both recent articles and recent news
- Localized privacy policy pages:
	- `/privacy-policy`
	- `/<locale>/privacy-policy`

## Project Structure

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   │   ├── blog/
│   │   ├── news/
│   │   ├── resources/
│   │   └── selfHostedApps/
│   ├── i18n/
│   ├── layouts/
│   └── pages/
│       ├── [lang]/
│       ├── news/
│       └── tools/
├── astro.config.mjs
├── package.json
└── README.md
```

## Requirements

- Node.js `>=22.12.0`
- npm

## Commands

Run from the repository root:

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server |
| `npm run build` | Build static output to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run astro -- --help` | Show Astro CLI help |

## Content Workflow

- Blog posts live in `src/content/blog/` (with locale variants where available)
- News posts live in `src/content/news/`
- Tool/resource cards live in `src/content/resources/`
- Self-hosted app content lives in `src/content/selfHostedApps/`
- Collection schemas are defined in `src/content.config.ts`

## Notes

- `en` is the default locale (non-prefixed routes).
- Non-default locales use prefixed routes (for example, `/de/...` and `/zh/...`).
