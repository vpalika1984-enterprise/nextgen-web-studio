# CLAUDE.md

Single source of truth for Claude Code sessions working on this repository.
This document describes stable structure and process; it does not track
project status and should rarely need to change.

## Project Overview

NextGen Web Studio is an enterprise-grade agency website and platform: a
marketing site that showcases web-development services alongside a library
of live, fully-built demo sites for different industry verticals (e.g.
restaurants, medical, real estate, hospitality). Each demo is a complete
mini-site under `/demo-sites/<slug>`, surfaced in the marketing site's
`/live-demos` catalog and on the `/industries` page.

## Repository Architecture

- npm workspaces monorepo; application code lives in the `apps/web`
  workspace (`@nextgen/web`).
- Root `package.json` scripts (`dev`, `build`, `start`, `lint`, `format`)
  delegate to `@nextgen/web` via `--workspace=@nextgen/web`.
- Inside `apps/web/src`:
  - `app/` — Next.js App Router routes, including `app/demo-sites/<slug>/page.tsx`
    for each live demo and `app/(marketing)/live-demos/` for the catalog.
  - `components/` — organized by feature area (`live-demos/`, `industries/`,
    `demo-sites/<slug>/`, `home/`, `footer/`, `navigation/`, etc.).
- Path alias `@/*` maps to `apps/web/src/*`.
- Each demo site follows a consistent pattern: a typed data file (e.g.
  `hotel-data.ts`), one component per page section under
  `components/demo-sites/<slug>/`, assembled in `app/demo-sites/<slug>/page.tsx`
  with metadata and JSON-LD, and registered in `industries-data.ts` and
  `demos-data.ts`. New demo sites should follow this same pattern.

## Development Workflow

- Install: `npm install` from the repo root.
- Run dev server: `npm run dev` (Next.js with Turbopack).
- Lint: `npm run lint`.
- Format: `npm run format` (Prettier, write mode).
- Build: `npm run build`.
- No test runner is configured in this repository.
- Husky `pre-commit` hook runs `npm run lint --workspace=@nextgen/web` — a
  commit fails if lint fails.
- Follow the repository's current Git workflow. Do not create branches,
  merge branches, or change repository strategy unless explicitly
  instructed. Push only when explicitly asked.

## Development Principles

- **Repository-first workflow.** Treat the repository, not memory or
  assumption, as the source of truth for current state. Check actual files,
  configs, and git history before acting on them.
- **Verify before modifying.** Read a file in full and confirm its current
  behavior before changing it. Do not edit based on a partial view or a
  guess about what it contains.
- **Inspect before implementing.** Before adding new code, look for existing
  patterns, data files, and components that already solve a similar problem
  in this repository, and follow their conventions.
- **Reuse over duplication.** Prefer extending or reusing existing shared
  components (e.g. `BookingInquiry`) over creating parallel, near-duplicate
  logic for a new page or feature.
- **Preserve existing functionality.** Changes should not silently break or
  regress behavior elsewhere in the app. When touching shared code, check
  its other call sites first.
- **Production-quality code.** Code should be typed, linted, formatted, and
  free of placeholder content before it's considered finished — treat every
  change as shippable, not a draft.

## Communication Rules

- Explain architectural decisions before implementation.
- Ask for clarification instead of guessing when requirements are ambiguous.
- Report blockers immediately.
- Do not fabricate repository state.
- Keep responses concise and evidence-based.

## Technology Stack

- **Framework:** Next.js 15 (App Router, Turbopack dev), React 19, TypeScript
  5.6 (strict mode, `noUncheckedIndexedAccess`).
- **Styling:** Tailwind CSS 3, `tailwindcss-animate`, `class-variance-authority`,
  `clsx` / `tailwind-merge`.
- **UI/Animation:** Radix UI primitives, `lucide-react` icons, Framer Motion,
  `cmdk`, `next-themes`.
- **Forms/Data:** React Hook Form + Zod, TanStack React Query.
- **Backend services:** Supabase, Clerk (auth), Stripe (payments).
- **Tooling:** ESLint (`next/core-web-vitals`, `next/typescript`), Prettier,
  Husky.

## Coding Standards

- TypeScript strict mode; no `any` without justification; respect
  `noUncheckedIndexedAccess`.
- Prettier config: double quotes off (`singleQuote: false`), semicolons on,
  2-space indent, 90-char print width, ES5 trailing commas. Run
  `npm run format` rather than hand-formatting.
- ESLint must pass (`npm run lint`) — enforced by the pre-commit hook.
  Unused vars are a warning unless prefixed with `_`.
- No comments explaining *what* code does; only add a comment where the
  *why* is non-obvious.
- **AI/LLM integrations always go through `apps/web/src/lib/ai-service`.**
  No feature, route, or component imports an LLM provider SDK (Vercel AI
  SDK provider packages, or any vendor SDK) directly — only that layer may.
  See `docs/architecture/ai-service-layer.md` for the full pattern.

## Verification Checklist

Before considering any change complete:

- [ ] Read and understood the current behavior of every file being changed.
- [ ] Confirmed existing patterns/components were reused where applicable.
- [ ] `npm run lint` passes with no errors.
- [ ] `npm run build` succeeds (no TypeScript or Next.js build errors).
- [ ] `npm run format` applied and output matches project conventions.
- [ ] Other usages of any shared code that was modified were checked and
      still behave correctly.
- [ ] No placeholder, mock, or temporary content left in place of real
      implementation.

## Definition of Done

A change is done when:

- Every item in the Verification Checklist above is satisfied.
- The change matches the architecture and conventions described in this
  document.
- Existing functionality has been verified and no regressions were
  introduced.
- Code is committed with a clear, conventional message (`feat(...)`,
  `fix(...)`, etc., matching existing history) — only when explicitly
  requested.
