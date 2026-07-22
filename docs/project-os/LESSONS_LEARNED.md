# Lessons Learned

## 2026-07-22 — Verify peer dependencies before installing, not after

**Lesson:** Before adding a new package, check its `peerDependencies` via
`npm view <package> peerDependencies` against what's actually installed —
don't assume a package installs cleanly just because `npm install`
succeeds without an error under `legacy-peer-deps=true`.

**Why it matters:** During Phase 0 dependency verification for the AI
Service Layer, `npm view` revealed that `ai`/`@ai-sdk/anthropic` require
`zod ^3.25.76 || ^4.1.8` (repo had `3.23.8` — did not satisfy), and
`@ai-sdk/react` requires `react ^18 || ~19.0.1 || ~19.1.2 || ^19.2.1`
(repo had exactly `19.0.0` — did not satisfy any branch of that range).
Because this repository has `legacy-peer-deps=true` set in `.npmrc`
(for an unrelated, pre-existing Next.js/React 19 RC issue), `npm install`
would not have surfaced either conflict as a hard error — it would have
installed anyway, silently, with an unsatisfied peer dependency. Catching
this in Phase 0 (before writing any code) meant the two version bumps
(`zod`, `react`/`react-dom`) were deliberate, scoped, and verified against
actual usage in the codebase, rather than discovered later as a mysterious
runtime bug.

**Where it applies:** Any future dependency addition in this repository,
especially for packages (like AI SDKs) that tend to pin narrow peer
ranges around fast-moving ecosystems (React, Zod). Re-run this check
before Phase 3 adds `@ai-sdk/react` for the chat UI.

## 2026-07-22 — `npm install` defaults to caret ranges; this repo pins exact versions

**Lesson:** `npm install <pkg>@<version>` writes a caret range
(`^<version>`) to `package.json` by default. This repository's existing
convention (no `save-exact=true` in `.npmrc`, but every existing
dependency manually pinned) is exact versions with no `^`/`~` anywhere.
After any `npm install`, diff `package.json` and strip carets before
committing, rather than assuming the default output matches repo
convention.

**Why it matters:** Silently introducing caret ranges into a
previously-exact-pinned `package.json` changes the reproducibility
guarantee the lockfile is supposed to provide, and is the kind of
inconsistency that's easy to miss in a large diff.

**Where it applies:** Every future `npm install` in this repository.
