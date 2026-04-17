# Crux

AI meeting summarizer — click-through prototype (agency demo MVP).

Built as a portfolio piece for [professionalmvp.com](https://professionalmvp.com). Presents as a fully functional product: polished landing page, working-looking dashboard, realistic meeting details, upload flow, and pricing. All data is seeded — no real AI, transcription, or backend.

## Stack

- **Next.js 16** (App Router)
- **TypeScript** (strict)
- **Tailwind CSS v4**
- **shadcn/ui** primitives
- **Playwright** for E2E smoke tests
- **Vercel** for hosting (deferred)

## Prerequisites

- **Node** 20+ ([volta](https://volta.sh/) recommended)
- **npm** 10+ (or pnpm 9+ / bun — adjust scripts accordingly)
- **Git**

## Getting Started

```bash
git clone https://github.com/respawner8/crux.git
cd crux
npm install
npm run dev
```

Open <http://localhost:3000>.

## Scripts

| Command | Does |
| --- | --- |
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run test` | Playwright smoke tests (headless) |
| `npm run test:ui` | Playwright interactive UI mode |

## Project Structure (planned)

```
app/                  App Router routes (landing, app/*, pricing)
components/           Page-level components
components/ui/        shadcn primitives
lib/
  mock-data.ts        All seeded demo data (meetings, users, transcripts)
  utils.ts            Helpers
public/               Static assets
tests/                Playwright smoke tests
docs/
  superpowers/
    specs/            Design specs (this is where the spec lives)
```

## Testing

### Type check + lint

```bash
npm run typecheck
npm run lint
```

### E2E (Playwright)

Smoke tests cover the 5 key flows: landing → dashboard → meeting detail → upload → pricing.

```bash
npm run test              # headless, all browsers
npm run test:ui           # interactive UI mode
npx playwright test --headed --project=chromium   # single browser, visible
npx playwright show-report  # last run's HTML report
```

First-time setup for Playwright:

```bash
npx playwright install   # download browser binaries
```

## Deployment

Not deployed yet — ready for Vercel when you want it.

### Deploy to Vercel (UI)

1. Push all changes to `main`.
2. Go to <https://vercel.com/new> → **Import Git Repository** → pick `respawner8/crux`.
3. Keep all defaults — Next.js is auto-detected. No env vars needed.
4. Click **Deploy**.

### Deploy via CLI

```bash
npx vercel           # preview deployment
npx vercel --prod    # promote to production
```

### Environment variables

None required — the demo uses seeded data only. If you later add real APIs, document them here.

## Design

Full design spec: [`docs/superpowers/specs/2026-04-17-crux-design.md`](docs/superpowers/specs/2026-04-17-crux-design.md).

## License

UNLICENSED — private repository.
