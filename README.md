# yunusyilmaz.dev

Personal site of Yunus Yılmaz — Next.js 16 (App Router, fully static), React 19, TypeScript, HeroUI v3 and Tailwind CSS v4.

## Development

```bash
npm install
npm run dev
```

| Script              | What it does                                 |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Dev server on http://localhost:3000          |
| `npm run build`     | Production build (every route is static)     |
| `npm run lint`      | Biome lint + format check                    |
| `npm run format`    | Apply Biome fixes                            |
| `npm run typecheck` | `tsc --noEmit` (TypeScript 7)                |
| `npm test`          | Vitest unit tests                            |
| `npm run check`     | All of the above — the same gate CI runs     |

`.npmrc` sets `min-release-age=3`, so npm never resolves a version published less than three days ago.

## Editing content

All copy lives in typed modules under `src/content/` — no component changes needed:

- `profile.ts` — name, role, email, social links, education
- `experience.ts` — roles with `YYYY-MM` periods; durations and "N+ years" are computed (pages revalidate daily)
- `stack.ts` — tech stack groups
- `projects.ts` — published projects (the page shows a short note while empty)

## Structure

```
src/
  app/          routes, metadata, OG image, sitemap, robots
  components/   UI (HeroUI: Accordion, Button, Toast)
  content/      site data
  lib/          date helpers (+ tests)
```

Theme tokens are in `src/app/globals.css`; they override HeroUI's default theme with the site's neutral palette. Only the HeroUI component styles in use are imported.

Security headers (CSP, HSTS, Permissions-Policy) are set in `next.config.ts`. `/contact` permanently redirects to `/about#contact`.
