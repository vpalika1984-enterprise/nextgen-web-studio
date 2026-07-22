# Review Response

**Review date:** 2026-07-22
**Reviewed request:** `docs/project-os/REVIEW_REQUEST.md` (Phase 2 — Prompt Registry)
**Review scope:** AI Website Consultant milestone, Phase 2 only —
`apps/web/src/lib/prompts/website-consultant.ts` and
`apps/web/src/lib/prompts/index.ts`. No other files were in scope for this
review; Phase 1 (AI Service Layer foundation) was reviewed and committed
separately (`1ed2de0`).

## Decision

**APPROVED**

## Strengths

- Prompt Registry architecture follows the approved AI Service Layer
  design in `docs/architecture/ai-service-layer.md` — prompts are
  versioned constants loaded by name, not literals scattered through
  route handlers or components.
- Prompt loading is centralized through a single `loadPrompt(name)`
  entry point, backed by a typed `PROMPTS` map (`PromptName` derived from
  `keyof typeof PROMPTS`), so an invalid prompt name is a compile-time
  error, not a runtime one.
- No provider-specific logic exists inside prompts — confirmed by grep
  (`Claude|Anthropic|GPT|OpenAI|Gemini|claude-|gpt-`, zero matches in
  `lib/prompts/`). The prompt describes persona and behavioral boundaries
  only.
- No prompt strings exist outside the Prompt Registry — confirmed by
  grep (`systemPrompt|SYSTEM_PROMPT|_PROMPT\s*=|PROMPT:`), one match,
  the registry file itself.
- The public API (`loadPrompt()`) establishes a clean abstraction: callers
  depend on a name and a string return type, never on how a prompt is
  stored or assembled internally.
- Exit gate passed: build, lint, typecheck all clean, independently
  re-verified in a follow-up session with identical results. No
  regressions detected — route count, page sizes, and build output
  unchanged from pre-Phase-2 state.

## Risks

None identified specific to this phase. `loadPrompt()` has no live caller
yet — Phase 3 adds the first — so there is nothing in production this
phase could regress. The only latent risk is the same one flagged in
Phase 1's `IMPLEMENTATION_REPORT.md` entry (pre-existing `npm audit`
findings, unrelated to this phase's scope).

## Conditions

Before Phase 3:

- No architectural changes are required.
- Continue using the Prompt Registry as the only source of system
  prompts.
- Do not introduce prompt strings into API routes, React components,
  Business Engines, or Tool Orchestrators.
- All future assistants must register through the Prompt Registry
  (one file per assistant under `lib/prompts/`, one entry in
  `index.ts`'s `PROMPTS` map).

## Recommendation

Do not refactor the Prompt Registry yet. The current flat structure is
appropriate for a single prompt. Only consider splitting into subfolders
(`consultants/`, `shared/`, `system/`) once roughly 5–10 prompts exist —
avoid speculative architecture ahead of that need.

## Approval Status

**Phase 2 approved.** Its files may now be committed. Phase 3 — API Layer
(`docs/project-os/NEXT_TASK.md`) is the next approved milestone.
