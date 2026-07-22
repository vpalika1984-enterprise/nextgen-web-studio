import { WEBSITE_CONSULTANT_PROMPT } from "./website-consultant";

/**
 * Prompt Registry — the only place system prompts are defined. Callers
 * load a prompt by name rather than constructing prompt strings inline
 * in a route handler or component. See docs/architecture/ai-service-layer.md.
 */
const PROMPTS = {
  "website-consultant": WEBSITE_CONSULTANT_PROMPT,
} as const;

export type PromptName = keyof typeof PROMPTS;

export function loadPrompt(name: PromptName): string {
  return PROMPTS[name];
}
