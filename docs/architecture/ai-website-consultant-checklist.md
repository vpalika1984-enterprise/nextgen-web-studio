# AI Website Consultant — Implementation Checklist

Derived from `docs/architecture/ai-service-layer.md` (Agency AI
Architecture). Scope is bounded by that document's "MVP scope today" note:
AI Service Layer + Prompt Registry + API layer + UI + Business Discovery +
Lead Capture. No Tool Orchestrator, no Business Engines, no formal
Persistence Layer — those are future work, not part of this build.

Each phase must independently compile, pass lint/typecheck/build (and QA
where noted), and receive explicit approval before the next phase starts.

## Rules (apply to every phase)

- Never import provider SDKs outside `lib/ai-service`.
- Never place prompts inside route handlers.
- Never calculate pricing using AI.
- Never bypass the Prompt Registry.
- Never bypass the AI Service Layer.
- Never modify existing demos unless required for integration.
- No breaking changes; preserve all existing site functionality.
- No speculative features beyond the documented MVP scope.

---

## Phase 0 — Verification (this phase)

### Dependency Verification — Findings

| Package | Needed for | Current repo state | Action required |
|---|---|---|---|
| `ai` | AI Service Layer core | not installed | Add `7.0.34` |
| `@ai-sdk/anthropic` | Default provider | not installed | Add `4.0.18` |
| `@ai-sdk/react` | Phase 4 chat UI (`useChat`) | not installed | Add `4.0.37` |
| `zod` | Peer dep of `ai` / `@ai-sdk/anthropic` (`^3.25.76 \|\| ^4.1.8`) | `3.23.8` — **does not satisfy** | Bump to latest 3.x (`3.25.76`+), stay on the 3.x line (not zod 4) |
| `react` / `react-dom` | Peer dep of `@ai-sdk/react` (`^18 \|\| ~19.0.1 \|\| ~19.1.2 \|\| ^19.2.1`) | `19.0.0` — **does not satisfy any branch** | Bump to `19.0.1` (patch only) |
| `@supabase/supabase-js` | Phase 6 persistence | `2.46.1`, currently unused in source | No change required for MVP; noted as behind latest (`2.110.8`) for awareness only, not an MVP blocker |

**Blast-radius check on the two required bumps:**
- `zod` is imported in exactly one file (`components/home/newsletter-section.tsx`), using only `z.string().email()` + `.safeParse()` — stable, trivial API surface unaffected by a 3.23→3.25 minor bump. `@hookform/resolvers@3.9.1`'s only peer constraint is `react-hook-form: ^7.0.0`, unaffected.
- `react`/`react-dom` 19.0.0 → 19.0.1 is a patch release. No app code changes expected.
- Both bumps happen at the start of Phase 1, verified by a full lint/typecheck/build pass before any AI Service Layer code is written — if either bump surfaces a regression, Phase 1 stops there rather than proceeding.

**Tooling gap found:** `apps/web/package.json` has no `typecheck` script (only `dev`/`build`/`start`/`lint`/`format`). `next build` does run type checking internally, but the requested gate ("Run: npm lint, npm typecheck, npm build") needs its own command. Adding `"typecheck": "tsc --noEmit"` to `apps/web/package.json` and a matching root delegator — additive, zero risk — as part of Phase 1 setup.

### Architecture Verification

- Confirmed no `apps/web/src/app/api/` directory exists yet — clean slate, no conflicting routes.
- Confirmed no existing `lib/ai-service`, `lib/prompts`, `lib/engines`, or `lib/supabase` directories — nothing to reconcile.
- Confirmed `docs/architecture/ai-service-layer.md` and its `CLAUDE.md` pointer are committed and in sync (commit `b3ded14`).
- Confirmed `.env.example` has Supabase/Clerk/Stripe placeholders already but no AI provider key — will add `ANTHROPIC_API_KEY`, `AI_PROVIDER`, `AI_MODEL` in Phase 1.
- Confirmed `/book-consultation` and `/contact` remain unbuilt (per `BACKLOG.md` — no change needed here; the Consultant's Phase 6 confirmation is in-widget text, not a link, per the prior architecture decision).

### Phase 0 Deliverable

This document.

---

## Phase 1 — AI Foundation

**Files to create:**
- `apps/web/src/lib/ai-service/provider.ts` — provider registry, resolves model from `AI_PROVIDER`/`AI_MODEL` env vars
- `apps/web/src/lib/ai-service/types.ts` — local `ChatMessage`/`ToolDefinition` types
- `apps/web/src/lib/ai-service/env.ts` — startup env validation (fails fast with a clear error if `ANTHROPIC_API_KEY` is missing when `AI_PROVIDER=anthropic`)
- `apps/web/src/lib/ai-service/index.ts` — public barrel export

**Files to modify:**
- `apps/web/package.json` — add `ai`, `@ai-sdk/anthropic`, bump `zod`
- `apps/web/.env.example` — add `AI_PROVIDER`, `AI_MODEL`, `ANTHROPIC_API_KEY`
- root `package.json` / `apps/web/package.json` — add `typecheck` script

**Explicitly not in Phase 1:** `chat.ts` capabilities (`streamChatResponse`/`generateStructuredOutput`) land in Phase 3 alongside the route that first calls them, so this phase's build can be verified without needing a live API key.

**Exit gate:** `npm run lint`, `npm run typecheck`, `npm run build`. **STOP. Wait for approval.**

---

## Phase 2 — Prompt Registry

**Files to create:**
- `apps/web/src/lib/prompts/website-consultant.ts` — the system prompt as a versioned constant
- `apps/web/src/lib/prompts/index.ts` — `loadPrompt(name)` loader

**Exit gate:** lint, build. **STOP. Wait for approval.**

---

## Phase 3 — API Layer

**Files to create:**
- `apps/web/src/lib/ai-service/chat.ts` — `streamChatResponse()` (now implemented, using `ai`'s `streamText` under the hood — exact call shape confirmed against the installed package's type defs at implementation time, not assumed in advance)
- `apps/web/src/app/api/consultant/chat/route.ts` — POST handler; thin caller into `@/lib/ai-service`, no direct SDK imports
- `apps/web/src/lib/rate-limit.ts` — basic per-session/IP rate limiter for the public endpoint

**Exit gate:** lint, build. **STOP. Wait for approval.**

---

## Phase 4 — Consultant UI

**Files to create:**
- `apps/web/src/components/consultant/consultant-widget.tsx` — floating launcher, mounted in `app/layout.tsx`
- `apps/web/src/components/consultant/consultant-chat-panel.tsx` — chat UI using `@ai-sdk/react`'s `useChat`

**Files to modify:**
- `apps/web/src/app/layout.tsx` — mount the widget (additive; no existing content changes)

**Exit gate:** lint, build, then **visual QA** (desktop + confirm no regression to existing pages, per this repo's established QA practice). **STOP. Wait for approval.**

---

## Phase 5 — Business Discovery Flow

**Files to create/modify:**
- `apps/web/src/lib/prompts/website-consultant.ts` — extend with structured discovery questioning
- `apps/web/src/lib/ai-service/chat.ts` — add `generateStructuredOutput()` for the requirements summary
- `apps/web/src/lib/ai-service/types.ts` — requirements-summary schema/type

No pricing, timeline, or scope calculation here — output is a structured *summary* of what the visitor said, not a computed result.

**Exit gate:** lint, build, QA. **STOP. Wait for approval.**

---

## Phase 6 — Lead Capture

**Files to create:**
- `apps/web/src/lib/supabase/server.ts` — first real Supabase client (service-role key, server-only)
- `supabase/migrations/0001_consultant_schema.sql` — `consultant_conversations`, `consultant_messages`, `consultant_leads`

**Files to modify:**
- `apps/web/src/app/api/consultant/chat/route.ts` — add `capture_lead` tool handler writing to Supabase
- `apps/web/.env.example` — Supabase vars already present; confirm no changes needed

**Exit gate:** lint, build, QA (including confirming RLS denies anon-key access to the new tables). **STOP. Wait for approval.**
