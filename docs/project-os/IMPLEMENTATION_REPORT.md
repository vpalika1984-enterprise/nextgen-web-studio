# Implementation Report

Newest entry first. Each entry corresponds to one completed implementation
phase, per the Milestone Completion Protocol in `CLAUDE.md`.

---

## Phase 2 — Prompt Registry (2026-07-22)

### Summary

Implemented the Prompt Registry: system prompts as versioned constants,
loaded by name, never inlined into a route handler or component. First
prompt registered: `website-consultant`.

### Files Created

- `apps/web/src/lib/prompts/website-consultant.ts` — the Website
  Consultant system prompt (v1), as an exported string constant.
- `apps/web/src/lib/prompts/index.ts` — `loadPrompt(name: PromptName)`,
  the registry's public interface.

### Files Modified

None.

### Dependency Changes

None.

### Architecture Decisions

- One file per assistant prompt under `lib/prompts/`, each exporting a
  single named constant (`<ASSISTANT>_PROMPT`), registered in
  `index.ts`'s `PROMPTS` map keyed by the assistant's kebab-case id.
  Adding a second assistant is one new file plus one registry entry — no
  changes to `loadPrompt`'s signature or any existing entry.
- Prompt content is provider-agnostic by construction: it describes the
  assistant's persona and behavior only, with no mention of any specific
  LLM vendor or model. Verified by direct grep (see Repository Standards
  Verification below).

### Repository Standards Verification

- No prompt-shaped strings (`systemPrompt`, `SYSTEM_PROMPT`, `*_PROMPT =`)
  exist anywhere outside `lib/prompts/` — confirmed via repository-wide
  grep, one match, `website-consultant.ts` itself.
- No API routes contain embedded prompts — `apps/web/src/app/api/` does
  not exist yet (Phase 3 has not started).
- No provider-specific instructions exist in prompt files — grepped
  `lib/prompts/` for `Claude|Anthropic|GPT|OpenAI|Gemini|claude-|gpt-`,
  zero matches.

### Test Evidence

- `npm run lint` — clean.
- `npm run typecheck` — clean.
- `npm run build` — `✓ Compiled successfully`, `✓ Generating static pages (25/25)`, same route set as before this phase, no regressions.

### Risks

None new. No route calls `loadPrompt` yet (that's Phase 3), so there is
nothing live to regress.

### Regression Observations

None. Route count, page sizes, and build output are unchanged from before
this phase.

### Exit Gate Re-Verification (2026-07-22)

Independently re-ran the Phase 2 exit gate in a follow-up session, per
explicit instruction, before formal review:

- `npm run lint` — clean, no errors or warnings.
- `npm run typecheck` — clean.
- `npm run build` — `✓ Compiled successfully`, `✓ Generating static pages (25/25)`, same 12 top-level routes as previously recorded.
- Repository standards re-confirmed by direct grep: exactly one
  `*_PROMPT =`-shaped match in the repo (`lib/prompts/website-consultant.ts`
  itself); zero `Claude|Anthropic|GPT|OpenAI|Gemini|claude-|gpt-` matches
  inside `lib/prompts/`; no `apps/web/src/app/api/` directory exists;
  `@ai-sdk/*`/`ai` imports found only in `lib/ai-service/provider.ts`.
- No regressions found. Results match the original Phase 2 entry above
  exactly.

---

## Phase 1 — AI Service Layer Foundation (2026-07-22)

### Summary

Implemented the AI Service Layer foundation: provider registry, local
types, environment validation, and the layer's public interface. No chat
capabilities yet — deferred to Phase 3 so their shape can be verified
against a real caller instead of assumed in advance.

### Files Created

- `apps/web/src/lib/ai-service/types.ts`
- `apps/web/src/lib/ai-service/env.ts`
- `apps/web/src/lib/ai-service/provider.ts`
- `apps/web/src/lib/ai-service/index.ts`
- `docs/architecture/adr/ADR-001-AI-Service-Layer.md`
- `docs/architecture/ai-website-consultant-checklist.md` (Phase 0
  deliverable, committed alongside Phase 1)

### Files Modified

- `apps/web/package.json` — added `ai@7.0.34`, `@ai-sdk/anthropic@4.0.18`;
  bumped `zod` 3.23.8→3.25.76 and `react`/`react-dom` 19.0.0→19.0.1 to
  satisfy peer dependency requirements (all exact-pinned, matching
  existing repository convention).
- `package.json` (root) — added `typecheck` delegator script.
- `package-lock.json` — reconciled with the above.
- `apps/web/.env.example` — added `AI_PROVIDER`, `AI_MODEL`,
  `ANTHROPIC_API_KEY` (blank placeholders only).

### Dependency Changes

| Package | Before | After |
|---|---|---|
| `ai` | — | `7.0.34` (new) |
| `@ai-sdk/anthropic` | — | `4.0.18` (new) |
| `zod` | `3.23.8` | `3.25.76` |
| `react` / `react-dom` | `19.0.0` | `19.0.1` |

### Architecture Decisions

Recorded formally in `docs/architecture/adr/ADR-001-AI-Service-Layer.md`:
AI Service Layer as the sole integration point, Vercel AI SDK as the
provider-agnostic abstraction, Prompt Registry, deterministic business
rules kept outside AI.

### Test Evidence

- `npm run lint` — clean.
- `npm run typecheck` — clean.
- `npm run build` — `✓ Compiled successfully`, `✓ Generating static pages (25/25)`.

### Risks

- Pre-existing `npm audit` findings (10 vulnerabilities across 504
  audited packages) — not investigated for whether any are newly
  introduced by this install vs. pre-existing in the dependency tree.
  Flagged, not acted on; out of this phase's scope.

### Regression Observations

None. Route count and build output unchanged from before this phase.

### Commits

- `ccd7ebd` — `docs(process): establish Project OS and repository operating protocols` (documentation only, no implementation)
- `1ed2de0` — `feat(ai): implement Phase 1 AI Service Layer foundation`
