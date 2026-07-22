# ADR-001: AI Service Layer, Provider Abstraction, and Prompt Registry

## Status

Accepted

## Date

2026-07-22

## Context

The AI Website Consultant is the first AI-driven feature in this codebase.
It will not be the last — Proposal Writer, Requirements Engine, QA
Assistant, Project Manager, and Maintenance Assistant are all planned. Each
of those needs to call a language model. The decision recorded here is how
that call happens, so every subsequent module follows one pattern instead
of each wiring its own integration.

Requirements driving this decision:

- Never couple the application to a specific LLM vendor.
- The rest of the Agency OS must communicate only with an internal AI
  service layer.
- The provider must be replaceable later through configuration, without
  changing business logic.
- Optimize for a multi-year Agency OS roadmap, not for today's provider.

## Decision

### AI Service Layer

All AI/LLM access goes through a single internal module,
`apps/web/src/lib/ai-service`. No route, component, or future module calls
a model provider directly. The layer's public surface (`@/lib/ai-service`)
is intentionally small: model resolution and environment validation in the
initial phase, with chat and structured-output capabilities added in the
phase that first needs them, rather than built ahead of a real caller.

### Provider Abstraction

The layer is built on the Vercel AI SDK (`ai` + `@ai-sdk/anthropic`), with
the active provider resolved from `AI_PROVIDER` / `AI_MODEL` environment
variables through a small registry (`provider.ts`). Anthropic is the
initial and default provider.

The Vercel AI SDK was chosen specifically because it already exposes a
provider-agnostic interface (`LanguageModel`) that multiple vendors
implement as interchangeable `@ai-sdk/*` packages — Anthropic, OpenAI,
Google, and others. Building a custom abstraction on top of individual
vendor SDKs would mean re-implementing what the AI SDK already solves.
Adopting it buys provider-agnosticism for the cost of one dependency
instead of N vendor integrations: adding OpenAI or Gemini later is a
registry entry, not new architecture.

### Prompt Registry

System prompts live as versioned constants under `lib/prompts`, loaded by
name (`loadPrompt("website-consultant")`), never inlined in a route
handler or component. This keeps prompts reviewable and diffable as their
own artifact rather than buried inside request-handling code.

### Deterministic Business Rules Stay Outside AI

Pricing, timelines, project scope, and contract terms are never computed
by a language model. They are computed by deterministic code (Business
Engines — `lib/engines`, built as each is actually needed), and the AI's
role is limited to collecting inputs and explaining outputs in natural
language.

## Alternatives Considered

- **Call `@anthropic-ai/sdk` (Anthropic's own SDK) directly.** Rejected —
  couples every call site to one vendor's request/response shape, directly
  contradicting the "never couple to a specific LLM vendor" requirement
  for a multi-year Agency OS roadmap.
- **No abstraction; each module imports whichever AI SDK it wants.**
  Rejected — produces inconsistent per-module integrations instead of one
  pattern, and turns a future provider migration into a per-module effort
  instead of a single registry entry.
- **Build a fully custom provider abstraction instead of adopting the
  Vercel AI SDK.** Rejected — the Vercel AI SDK already solves this
  problem and is maintained by a party with a direct incentive to keep
  provider support current; re-implementing it would be ongoing
  maintenance burden for no architectural benefit.

## Consequences

- Every future AI-driven module has a fixed integration pattern to follow.
- Swapping or adding a provider is a configuration change (`AI_PROVIDER`),
  not a code change — verified in Phase 1: `provider.ts` contains the only
  provider-specific import in the codebase.
- The AI Website Consultant's first implementation phase is intentionally
  narrow (model resolution + env validation only); chat capabilities are
  added once there is a real caller to verify their shape against, rather
  than speculated in advance.
- Pricing/timeline/scope logic must be implemented as deterministic
  Business Engines, not as prompts — this is a constraint future modules
  must design around, not an implementation detail they can bypass.

## Related Documents

- `docs/architecture/ai-service-layer.md` — full architecture (Vision,
  Core Principles, Architecture Diagram, Provider Layer, Prompt Registry,
  Tool Orchestrator, Business Engines, Future Evolution).
- `docs/architecture/ai-website-consultant-checklist.md` — phased
  implementation plan for the AI Website Consultant.
- `CLAUDE.md` — repository-wide rule: AI/LLM integrations always go
  through `apps/web/src/lib/ai-service`.
