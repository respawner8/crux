# Crux — Design Spec

**Date:** 2026-04-17
**Status:** Draft (awaiting review)
**Owner:** Nikhil Anand (respawner8)

## Overview

Crux is a click-through prototype of an AI meeting summarizer, built as a portfolio demo for **professionalmvp.com**. The demo presents as a fully functional product: polished landing page, working-looking dashboard, realistic meeting details, an upload flow, and pricing. All data is **seeded**; no real AI, transcription, or backend runs behind it.

The goal is a piece that photographs well in sales conversations, videos, and portfolio case studies — and proves the agency can deliver modern, mobile-friendly SaaS UIs.

## Goals

- Portfolio-grade UI quality — indistinguishable from a shipped product in screenshots or video walkthroughs.
- Fully mobile-responsive.
- Fast to build and maintain (no backend, no APIs, no auth).
- Reusable patterns for future agency demos (component library, Playwright harness, deploy pipeline).

## Non-Goals

- Real AI transcription or summarization.
- Authentication, user accounts, multi-tenancy.
- Backend persistence, databases, real-time features.
- Calendar / video-conferencing integrations (Zoom, Meet, Teams).
- Billing — Stripe is not integrated; pricing page is marketing only.

## Target User (Demo Persona)

Generic B2B knowledge workers — managers, consultants, PMs, sales leaders. Broadest appeal.
Seeded data uses realistic office contexts (roadmap reviews, discovery calls, 1:1s).

## Product Name

**Crux** — working name. "The essential point." Short, strong, semantically on-target for a summarizer.

## Screens (5)

### 1. Landing Page — `/`

Marketing page. Sections:

- Hero: headline, subhead, primary CTA ("Try the demo"), gradient backdrop.
- Feature highlights (3–4 cards — summary, action items, search, etc.).
- Product screenshot / sample output preview.
- Testimonial / social-proof row (seeded).
- Pricing CTA band.
- Footer.

### 2. Dashboard — `/app`

**Feed / timeline layout** (chronological cards grouped by date dividers: TODAY, YESTERDAY, THIS WEEK).

Each card:
- Meeting title.
- AI-generated summary snippet (2–3 lines).
- Participant avatars (stacked).
- Tags: action-item count, duration.

Top bar: "Your meetings" + "New" button.

### 3. Meeting Detail — `/app/meetings/[id]`

**Classic document layout** — sections stacked top to bottom:

- Header: title, date, duration, participant chips.
- **Summary** panel.
- **Action items** panel (checkable, each with owner + due date).
- **Transcript** panel (speaker-separated, collapsible).

### 4. Upload / Record — `/app/upload`

Simulated upload:
- Drag-drop zone for audio/video, or "Record from mic" option (mocked).
- Fake progress bar → "transcribing..." → "summarizing..." → redirect to a seeded meeting detail page.

### 5. Pricing — `/pricing`

Three tiers: **Starter**, **Pro**, **Team**. Feature comparison + monthly/annual toggle. All CTAs navigate to `/app` (no billing).

## Navigation

- **Landing / Pricing:** top nav — logo, links, "Log in" CTA.
- **App screens:** left sidebar on desktop; collapses to a drawer/sheet on mobile.

## Visual Direction

Direction **B — Tech-Forward Dark** (chosen during brainstorming).

- **Background:** near-black `#09090b`, surfaces `#18181b`.
- **Accent:** purple → indigo gradient (`#8b5cf6` → `#6366f1`), used for CTAs and focal elements.
- **Text:** `#fafafa` primary, `#a1a1aa` secondary, `#71717a` tertiary.
- **Borders:** `#27272a`.
- **Type:** system sans (SF Pro / Inter), 600 weight for headlines, tight letter-spacing (-0.02em to -0.03em).
- **Gradient glows / blurs** used sparingly on landing hero for depth — avoided elsewhere to keep info-dense screens readable.

## Responsive Behavior

| Breakpoint | Behavior |
| --- | --- |
| `< 768px` (mobile) | Single column; sidebar becomes a sheet; meeting cards full-width; action-item and transcript panels stack. |
| `768–1024px` (tablet) | Hybrid — narrower sidebar, content reflows. |
| `> 1024px` (desktop) | Full layouts as designed. |

## Tech Stack

- **Next.js 16** (App Router; React Server Components where practical).
- **TypeScript** (strict mode).
- **Tailwind CSS v4** (new `@tailwindcss/postcss` plugin).
- **shadcn/ui** primitives: Button, Card, Badge, Avatar, Sheet, Dialog, Tabs, Progress.
- **lucide-react** for icons.
- **Playwright** for E2E smoke tests.
- **npm** as default package manager (swap to pnpm if preferred).

## Data

All demo data lives in `lib/mock-data.ts` as typed TypeScript objects (not JSON — keeps it type-safe and refactorable).

Contents:
- ~8 seeded meetings spanning today / yesterday / this week / earlier.
- Realistic titles, participants, durations, summaries, action items, transcripts.
- 4–6 seeded user personas with names + colored avatars.

## State

Client-side React state only. No backend. Interactive state (e.g., checking an action item) lives in component state and resets on reload — acceptable for a click-through demo.

## Error Handling

Minimal — no network calls, no user input that can fail.
- Invalid route IDs (e.g., `/app/meetings/doesnotexist`) render the standard Next.js `not-found.tsx`.
- Upload page accepts any file type as the demo is mocked.

## Testing Strategy

- **TypeScript:** `npm run typecheck` — CI gate.
- **Lint:** `npm run lint`.
- **E2E (Playwright):** smoke tests, one per screen:
  1. Landing loads; hero CTA navigates to `/app`.
  2. Dashboard shows seeded meetings with correct date groupings.
  3. Clicking a meeting card opens its detail page; summary, action items, and transcript sections render.
  4. Upload page accepts a file, shows mocked progress, redirects to a meeting detail.
  5. Pricing page renders all three tiers; toggling monthly/annual updates prices.

Run: `npm run test`.

## Deployment

Deferred — user will deploy later.

When ready:
- Push to `main` on `respawner8/crux`.
- `vercel.com/new` → import → deploy. Next.js is auto-detected.
- No env vars required.

## Repository

- **GitHub:** [`respawner8/crux`](https://github.com/respawner8/crux) (private).
- **Local:** `~/Desktop/Dev/crux`.

## Open Questions

- Product name: working "Crux" — swap later if a better name emerges.
- Logo mark: placeholder gradient square; a proper mark can be designed after the UI is built.
- Portfolio presentation: separate task — demo video, landing section on professionalmvp.com.

## Future Extensions (Out of Scope for v1)

- Real Whisper / AssemblyAI transcription, OpenAI summaries.
- Auth via Clerk; multi-tenant workspaces.
- Zoom / Meet / Teams integrations.
- Stripe billing.
- Search across meetings.
- "Ask this meeting" AI chat (considered in brainstorming; deferred).
