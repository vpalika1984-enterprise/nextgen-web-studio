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

## Project Operating System (Project OS)

The purpose of this section is to eliminate the need to copy conversations
between ChatGPT and Claude while keeping the repository as the single
source of truth.

Follow these rules for every future implementation.

### Repository is the Source of Truth

Do not rely on conversation history.

Always rely on the repository documentation.

Before starting any task, read the relevant documentation under:

- `docs/architecture/`
- `docs/project-os/`

If documentation conflicts with conversation history, ask for clarification
instead of making assumptions.

### Repository Memory

Conversation history is temporary.

Repository documentation is permanent.

Whenever conversation history and repository documentation differ:

Repository documentation takes precedence unless explicitly overridden by
the user.

If important knowledge exists only in conversation, record it in the
appropriate Project OS document before ending the session.

### Project OS Files

The following files are mandatory and must be kept current.

#### CURRENT_STATE.md

Always update after completing any milestone.

Include:

- Current milestone
- Current phase
- Current branch
- Latest commit hash
- Build status
- Lint status
- Typecheck status
- Current blockers
- Next approved milestone

#### NEXT_TASK.md

Always contains only the next approved task.

When work is completed:

- Remove completed task
- Replace with the next approved task

Never maintain multiple active implementation tasks here.

#### IMPLEMENTATION_REPORT.md

Update after every completed implementation phase.

Include:

- Summary
- Files created
- Files modified
- Dependency changes
- Architecture decisions
- Risks
- Test evidence
- Build results
- Lint results
- Typecheck results
- Regression observations

#### REVIEW_REQUEST.md

Whenever architectural or implementation review is required:

Record:

- Context
- Questions
- Risks
- Specific review requested

Never ask the user to copy long conversations into another AI. Instead,
ensure this file contains sufficient context for review.

#### DECISIONS.md

Whenever an architectural or engineering decision is accepted:

Record:

- Decision
- Reason
- Alternatives considered
- Consequences
- Status
- Date

This file supplements Architecture Decision Records (ADRs).

#### BACKLOG.md

Maintain all deferred work.

Each backlog item must contain:

- Description
- Reason for deferral
- Priority
- Target milestone

#### ROADMAP.md

Maintain the long-term roadmap.

Move completed milestones into a Completed section.

Never delete historical milestones.

#### LESSONS_LEARNED.md

Create this file if it does not exist.

Whenever an important engineering lesson is discovered, record:

- Date
- Lesson
- Why it matters
- Where it applies

This becomes the engineering knowledge base for the project.

### Architecture Rules

Before implementing any feature:

1. Read the relevant architecture documents.
2. Verify the implementation follows them.
3. If implementation requires changing architecture:
   - Stop.
   - Document the proposed change.
   - Wait for approval.

Never silently change architecture.

### Implementation Rules

Before implementation:

- Verify dependencies.
- Verify architecture.
- Verify repository conventions.

Implementation must proceed in independently verifiable phases.

Each phase must:

- Compile successfully
- Pass lint
- Pass typecheck
- Pass production build

Do not continue automatically to the next phase.

Always stop for approval.

### AI Service Layer Rules

- Never import provider SDKs outside the AI Service Layer.
- Never place prompts inside API routes.
- Never bypass the Prompt Registry.
- Never bypass the AI Service Layer.
- Never expose provider-specific code outside the provider abstraction.

### Business Rules

AI is responsible for:

- Conversation
- Requirement gathering
- Explanations
- Documentation
- Structured extraction

Deterministic code is responsible for:

- Pricing
- Timelines
- Technology selection
- Proposal calculations
- Contract generation
- Business rules

AI must never invent business rules.

### Documentation Rules

Every meaningful implementation must leave the repository in a better
documented state than before.

Documentation should evolve together with code.

### Milestone Completion Protocol

Every implementation milestone must finish with the following sequence:

1. Verify:
   - Build
   - Lint
   - Typecheck
   - Regression (if applicable)

2. Update Project OS:
   - `CURRENT_STATE.md`
   - `IMPLEMENTATION_REPORT.md`
   - `NEXT_TASK.md`
   - `REVIEW_REQUEST.md` (if needed)
   - `DECISIONS.md` (if architecture changed)
   - `BACKLOG.md` (if work deferred)
   - `ROADMAP.md` (if milestones changed)
   - `LESSONS_LEARNED.md` (if applicable)

3. Summarize:
   - Completed work
   - Remaining work
   - Risks
   - Recommended next action

Never proceed automatically to the next implementation phase. Wait for
explicit approval.

### Session Completion

Before ending any implementation session, update:

- `CURRENT_STATE.md`
- `IMPLEMENTATION_REPORT.md`
- `NEXT_TASK.md`
- `REVIEW_REQUEST.md` (if review is needed)
- `DECISIONS.md` (if new decisions were made)
- `BACKLOG.md` (if work was deferred)
- `ROADMAP.md` (if milestones changed)
- `LESSONS_LEARNED.md` (if applicable)

Then provide a concise summary of:

- What was completed
- Current status
- Remaining work
- Recommended next step

This repository should always be understandable by another engineer — or
another AI — without requiring previous conversation history.

### Release Protocol

A feature is not considered complete simply because the code has been
written.

Before any feature is committed or merged:

1. Verify:
   - Build passes
   - Lint passes
   - Typecheck passes
   - Relevant tests pass
   - Regression review completed (if applicable)

2. Update documentation:
   - `CURRENT_STATE.md`
   - `IMPLEMENTATION_REPORT.md`
   - `DECISIONS.md` (if architecture changed)
   - `BACKLOG.md` (if work deferred)

3. Review:
   - Confirm implementation matches approved architecture.
   - Confirm no unnecessary scope expansion.
   - Confirm repository conventions are preserved.

4. Only then:
   - Commit
   - Push
   - Proceed to the next milestone

Never treat implementation alone as completion.
