# BACKLOG.md

Known, deliberately deferred issues. Not current milestone status — see
[CLAUDE.md](CLAUDE.md) for how this repository is meant to be worked in.
Entries here should only be resolved as their own explicitly-scoped task.

## PoweredByBadge overlaps section content at the bottom of the viewport

`components/demo-sites/shared/powered-by-badge.tsx` is `fixed bottom-4
right-4 z-50` on every demo site page. Whenever a section's bottom-right
corner is the last thing in view (e.g. the final row of a stats grid, or
the last item in a footer's link row), the badge visually overlaps and can
block clicks on that content. Confirmed on the Meridian AI Consulting demo
in Company Statistics (a stat label's second line was clipped) and in the
Footer (the last quick-link overlapped and effectively unclickable).

This is a shared-component/site-wide pattern, not specific to one demo, so
fixing it demo-by-demo just papers over the root cause. Worth addressing
once in `PoweredByBadge` itself (e.g. reserve bottom-right padding site-wide,
or make it dismiss/collapse near the page end) rather than adding local
workarounds to every future demo.

## FaqAccordion doesn't match a light-themed demo section under the site's dark default theme

`components/shared/faq-accordion.tsx` uses global theme tokens (`bg-card`,
`border-border`, `text-foreground`, `text-muted-foreground`). The site's
`ThemeProvider` defaults to `defaultTheme="dark"`
(`apps/web/src/app/providers.tsx`), so under that default the accordion
renders as a dark card. Every demo site hardcodes explicit light-mode
colors for its own sections (by design, so a demo doesn't visually change
with the visitor's site theme), but `FaqAccordion` itself isn't
color-overridable via props - so any demo wrapping it in a light section
gets a dark card floating inside a light section. Confirmed on the Meridian
AI Consulting demo's FAQ section; likely present on every existing demo
that reuses `FaqAccordion` (Hotel, Realty, etc.) the same way.

Fix belongs in `FaqAccordion` itself - either accept a `className`/theme
override prop, or have it default to explicit light-mode colors regardless
of the active site theme, since every demo site page is a fixed-appearance
page and isn't meant to respond to the visitor's theme toggle.
