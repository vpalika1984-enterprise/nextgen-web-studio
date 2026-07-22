# Next Task

**Status:** Approved. Phase 2 was reviewed and approved on 2026-07-22 —
see `REVIEW_RESPONSE.md`. This is now the next approved milestone.

## Next Approved Milestone: Phase 3 — API Layer

From `docs/architecture/ai-website-consultant-checklist.md`.

**Scope:**
- `apps/web/src/lib/ai-service/chat.ts` — implement `streamChatResponse()`,
  verified against the installed `ai` package's actual `streamText` export
  signature (not assumed in advance).
- `apps/web/src/app/api/consultant/chat/route.ts` — POST handler; thin
  caller into `@/lib/ai-service`, no direct SDK imports (first API route
  in this repository).
- `apps/web/src/lib/rate-limit.ts` — basic per-session/IP rate limiter,
  since this is the first public endpoint that calls a metered, paid API.

**Exit gate:** lint, build (per the checklist) — plus typecheck, per this
repository's established practice for every phase so far.

**Do not start until:** Phase 2's files (see commit recommendation) have
been committed. This document does not itself authorize beginning
implementation in this session — per explicit instruction, Phase 3 work
starts only after separate approval.
