# Linux Dork (Astro Blog)

A simple Astro-powered blog focused on Linux tutorials and terminal workflows.

## Commands

- `npm run dev` — start the local dev server.
- `npm run build` — create a production build.
- `npm run preview` — preview the production build.
- `npm run test` — run repository-level validation checks.
- `npm run test:astro` — run `astro check` (requires dependencies installed).

## Fixing Astro test/install failures

If you see `403 Forbidden` while running `npm install` or `astro: not found`, the dependency install did not complete.

1. Verify you can access your npm registry:
   - `npm config get registry`
2. If your environment requires a private mirror, configure it before install:
   - `npm config set registry <your-registry-url>`
3. Install dependencies again:
   - `npm install`
4. Re-run Astro checks:
   - `npm run test:astro`
   - `npm run build`

> In restricted environments, `npm run test` still validates project structure and blog frontmatter without requiring Astro binaries.
