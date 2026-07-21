# Agency AI Architecture

*File path is `docs/architecture/ai-service-layer.md` for now (kept stable
since work was already in progress under this name); the document's scope
is the full Agency AI foundation, not just the service layer. A path rename
to something like `agency-ai-architecture.md` can happen later without
losing this history — not a priority over content quality right now.*

## Vision

### Why Agency AI Exists

NextGen Web Studio's agency work — discovery calls, requirements gathering,
scoping, pricing, proposals, project management — is currently manual,
person-dependent, and non-reusable across engagements. Agency AI is the set
of AI-driven modules that turns those repeated agency workflows into
software: reusable, testable building blocks instead of one-off effort on
every new demo, client, or project.

### Relationship to Agency OS

Agency AI is the intelligence layer *within* the broader Agency OS. Agency
OS is the full operating system for running the agency — client intake,
project delivery, dashboards, QA, deployment, maintenance. Agency AI is
specifically the part of that system responsible for conversation,
reasoning, and language generation. It does not own business logic (see
Core Principles) — it sits alongside deterministic engines and a
persistence layer that, together with Agency AI, make up Agency OS.

## Core Principles

1. **Provider agnostic.** No feature, route, or component depends on a
   specific LLM vendor. Every AI call goes through one internal
   abstraction, and the underlying provider is a configuration value, not
   a code dependency.
2. **AI never owns business rules.** Pricing, timelines, project scope, and
   contract terms are never computed by a language model. AI collects
   information and explains results; deterministic engines compute them.
3. **Deterministic engines.** Every business calculation lives in its own
   engine (Requirements, Pricing, Proposal, Technology, Features, Timeline,
   Contract) — plain code, unit-testable, auditable, with no dependency on
   model behavior.
4. **Prompt registry.** Prompts are versioned assets in one place, not
   strings scattered through route handlers or components.
5. **Internal abstraction layer.** The rest of the application — and every
   future Agency OS module — talks to Agency AI through a small, stable
   interface. It never imports a provider SDK, and it never reaches past
   the AI Service Layer into prompt or provider internals.

## Architecture Diagram

Orchestration (deciding what to do) is kept separate from execution (doing
it). The AI Service Layer fans out to two siblings — Prompt Registry and
Tool Orchestrator — which both feed the same Business Engines layer, rather
than the AI calling engines directly.

```
                    ┌─────────────────────────────┐
                    │     Visitor / Client        │
                    └─────────────┬───────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────────┐
                    │    AI Website Consultant    │
                    │ (Conversation Experience)   │
                    └─────────────┬───────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────────┐
                    │      AI Service Layer       │
                    │  (Provider Abstraction)     │
                    └─────────────┬───────────────┘
                                  │
                  ┌───────────────┴───────────────┐
                  ▼                               ▼
      ┌──────────────────────┐       ┌──────────────────────┐
      │   Prompt Registry    │       │   Tool Orchestrator  │
      │  (Versioned Prompts) │       │ (Workflow Dispatcher)│
      └──────────┬───────────┘       └──────────┬───────────┘
                 │                              │
                 └──────────────┬───────────────┘
                                ▼
                 ┌─────────────────────────────┐
                 │     Business Engines        │
                 ├─────────────────────────────┤
                 │ Requirements Engine         │
                 │ Technology Engine           │
                 │ Feature Engine              │
                 │ Pricing Engine              │
                 │ Timeline Engine             │
                 │ Proposal Engine             │
                 │ Contract Engine             │
                 └─────────────┬───────────────┘
                               │
                               ▼
                 ┌─────────────────────────────┐
                 │    Persistence Layer        │
                 │ (Supabase / Clerk / Files)  │
                 └─────────────┬───────────────┘
                               │
                               ▼
                 ┌─────────────────────────────┐
                 │     Client Workspace        │
                 │ Dashboard • Assets • CRM    │
                 └─────────────────────────────┘
```

**Reading it:** a visitor talks to an assistant (e.g. the AI Website
Consultant). Every model call the assistant makes goes through the AI
Service Layer. The Service Layer draws its system prompt from the Prompt
Registry, and when the assistant needs something computed or done, it goes
through the Tool Orchestrator rather than the model doing it itself. The
Orchestrator dispatches into whichever Business Engine owns that
computation. Engine output is saved through the Persistence Layer, which is
infrastructure the engines don't need to know the details of. Over time,
persisted data surfaces in the Client Workspace.

**Why this shape, not AI → Engines directly:**
- *AI stays the "brain," not the business logic.* `"I need a restaurant
  website"` → the assistant understands intent → Requirements Engine →
  Pricing Engine → Proposal Engine → the assistant explains the result in
  plain language. The engines are deterministic and testable regardless of
  what the model does.
- *The Tool Orchestrator becomes the Agency OS backbone.* New capabilities
  (CRM, calendar booking, invoicing, email sending, deployment,
  maintenance tasks) are added as new things the Orchestrator can dispatch
  to — the AI Service Layer and the assistant's prompt don't change.
- *Persistence is infrastructure, not business logic.* Business Engines
  produce results; where those results end up stored (Supabase today,
  potentially Clerk-scoped per-client data or file storage later) is a
  concern of the Persistence Layer, not of the engine doing the
  calculation.

## Provider Layer

The bottom of the AI Service Layer's own internals — the part of the
diagram inside the "AI Service Layer" box:

```
AI Service Layer (lib/ai-service)
  │
  ▼
Vercel AI SDK
  │
  ▼
Provider
```

| Provider | Status |
|---|---|
| Anthropic | Default, configured first |
| OpenAI | Supported by the registry pattern; not wired until needed |
| Gemini | Supported by the registry pattern; not wired until needed |
| Future local models | Same registry pattern extends to self-hosted/local inference when that becomes relevant |

```
apps/web/src/lib/ai-service/
  provider.ts   — resolves the active model from a provider registry, keyed
                  by env vars (AI_PROVIDER, AI_MODEL). Adding a provider is
                  one registry entry here; no call-site changes.
  chat.ts       — the public capabilities: streamChatResponse(),
                  generateStructuredOutput().
  types.ts      — local ChatMessage / ToolDefinition types, so call sites
                  never depend on `ai` package types directly.
  index.ts      — the only import path the rest of the app is allowed to
                  use for AI calls (`@/lib/ai-service`).
```

```
AI_PROVIDER=anthropic       # default
AI_MODEL=claude-opus-4-8    # default
```

```ts
// provider.ts — the only place that knows providers exist
const PROVIDERS: Record<string, (model: string) => LanguageModel> = {
  anthropic: (model) => anthropic(model),
  // openai: (model) => openai(model),   // one line, zero call-site changes
  // gemini: (model) => google(model),
};
```

**Capabilities:**
- **`streamChatResponse({ messages, tools, systemPrompt })`** — streaming
  conversational responses. Used by the Consultant; reusable by every
  future conversational assistant.
- **`generateStructuredOutput({ prompt, schema })`** — non-streaming,
  schema-constrained generation, for extraction/summarization tasks (e.g.
  the Requirements Engine turning a conversation into structured intake
  data).

## Prompt Registry

```
apps/web/src/lib/prompts/
  website-consultant.ts
  # pricing-engine.ts, proposal-writer.ts, qa-assistant.ts,
  # project-manager.ts, maintenance-assistant.ts — added as each
  # assistant is built
```

The Assistant layer loads its prompt by name
(`loadPrompt("website-consultant")`) rather than a route constructing a
prompt string inline. This is what makes prompts versioned, diffable, and
reusable assets instead of scattered literals.

## Tool Orchestrator

*(Also referred to as Tool Workflow / Workflow Dispatcher in earlier
discussion of this architecture — Tool Orchestrator is the canonical name
going forward.)*

Planned, not yet implemented — `invokeToolWorkflow()` on the AI Service
Layer's public surface. When an assistant decides an action is needed (not
just a reply), it goes through this dispatcher, which routes to the
correct Business Engine (or, later, other tools — CRM, calendar, invoicing,
email, deployment, maintenance). The assistant and the AI Service Layer
never call an engine directly.

## Business Engines

**The AI never calculates pricing, timelines, project scope, or contract
terms.** Deterministic code does, so results stay predictable, testable,
and auditable independent of model behavior.

```
apps/web/src/lib/engines/
  requirements/
  technology/
  features/
  pricing/
  timeline/
  proposal/
  contract/
```

Built one at a time, as each is actually needed by a real module — not
speculatively ahead of demand.

## Persistence Layer & Client Workspace

- **Persistence Layer** — infrastructure (Supabase, Clerk-scoped data,
  file storage) that Business Engines write results through. Engines don't
  know or care where data physically lives. **Not built yet** as a formal
  abstraction. Today, the Consultant MVP persists captured leads via a
  direct Supabase write inside its own API route; that duplication is the
  trigger to extract a real Persistence Layer once a second module needs
  to save data.
- **Client Workspace** — the eventual surface where persisted data becomes
  visible to a client: dashboard, assets, CRM. This is the later Client
  Dashboard module from the original Agency OS module list, positioned
  here as the terminal point of the pipeline.

## Future Assistants

Each is a Prompt Registry entry plus, where needed, its own Business Engine
wiring through the Tool Orchestrator — not a separate AI integration.

- Website Consultant (building now)
- Proposal Writer
- QA Assistant
- Project Manager
- Maintenance Assistant

## Implementation Rules

- Never import provider SDKs (Vercel AI SDK provider packages, or any
  vendor SDK) outside `lib/ai-service`.
- Never let AI calculate pricing, timelines, scope, or contract terms —
  that's a Business Engine's job.
- Never embed prompts in routes or components — load them from the Prompt
  Registry.
- Always return structured outputs where the result feeds a deterministic
  process (e.g. handing data to a Business Engine) — free-text is only
  appropriate for the conversational reply itself.

## Future Evolution

**MVP scope today:** the AI Website Consultant uses the AI Service Layer
and Prompt Registry only. Tool Orchestrator, Business Engines, a formal
Persistence Layer, and Client Workspace do not exist yet — the Consultant
captures leads via a direct Supabase write, with no engines in between.

**Growth path**, each stage built when a real module needs it, not ahead of
time:

```
Visitor
  │
  ▼
AI Consultant
  │
  ▼
Business Discovery
  │
  ▼
Requirements Engine
  │
  ▼
Technology Engine
  │
  ▼
Feature Engine
  │
  ▼
Pricing Engine
  │
  ▼
Proposal Engine
  │
  ▼
Contract Engine
  │
  ▼
Client Workspace
  │
  ▼
Project Dashboard
  │
  ▼
QA
  │
  ▼
Deployment
  │
  ▼
Maintenance
```

Every block is independently reusable and testable, and every block is a
candidate to eventually stand alone as its own product surface. This
document is extended (not replaced) as each subsequent block is actually
built.
