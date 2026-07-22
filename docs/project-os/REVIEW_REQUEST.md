# Review Request

**Date:** 2026-07-22
**Requested review:** Phase 2 — Prompt Registry (AI Website Consultant milestone)

## Context

Phase 2 adds the Prompt Registry described in
`docs/architecture/ai-service-layer.md`: system prompts as versioned
constants, loaded by name via `loadPrompt()`, never inlined into a route
handler or component. Two files, both new and currently untracked (not yet
committed, pending this approval):

- `apps/web/src/lib/prompts/website-consultant.ts` — the Website
  Consultant system prompt (v1), exported as `WEBSITE_CONSULTANT_PROMPT`.
- `apps/web/src/lib/prompts/index.ts` — `loadPrompt(name: PromptName)`,
  the registry's public interface, backed by a `PROMPTS` map.

No files were modified; no dependencies changed. Full detail is in
`IMPLEMENTATION_REPORT.md` (Phase 2 entry) and its Exit Gate
Re-Verification addendum.

## Exit Gate Results

Re-run independently in this session:

- `npm run lint` — clean.
- `npm run typecheck` — clean.
- `npm run build` — compiles successfully, all 25 pages generate, same
  route set as before this phase, no regressions.

## Standards Confirmation

- **No prompts exist outside the Prompt Registry** — repo-wide grep for
  `systemPrompt|SYSTEM_PROMPT|_PROMPT\s*=|PROMPT:` returns exactly one
  match, `lib/prompts/website-consultant.ts` itself.
- **No API routes contain embedded prompt strings** — `apps/web/src/app/api/`
  does not exist yet; Phase 3 (the first API route) has not started.
- **No provider-specific instructions exist inside prompt files** —
  grepping `lib/prompts/` for `Claude|Anthropic|GPT|OpenAI|Gemini|claude-|gpt-`
  (case-insensitive) returns zero matches. The prompt describes persona and
  behavior only.
- `@ai-sdk/*` and `ai` package imports remain confined to
  `lib/ai-service/provider.ts` — no other file in `apps/web/src` imports a
  provider SDK.

## Questions for Reviewer

1. Is the Website Consultant prompt's content (persona, scope boundaries
   around pricing/timeline/scope, no-human-claim rule) acceptable as the
   v1 system prompt, or does it need revision before Phase 3 wires it into
   a live route?
2. Approve commit of `apps/web/src/lib/prompts/` and progression to
   Phase 3 — API Layer (scope recorded in `NEXT_TASK.md`)?

## Risks

None identified specific to this phase. `loadPrompt()` has no live caller
yet (Phase 3 adds the first), so there is nothing in production to regress
regardless of the outcome of this review.

## Specific Review Requested

Confirm the Prompt Registry structure, naming convention, and exit-gate
evidence above are sufficient to (a) commit Phase 2's files and (b) begin
Phase 3, per the Release Protocol and Milestone Completion Protocol in
`CLAUDE.md`. Per explicit instruction, Phase 3 does not begin until this
review is answered.
