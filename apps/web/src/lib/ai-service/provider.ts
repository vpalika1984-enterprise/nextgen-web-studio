import { anthropic } from "@ai-sdk/anthropic";
import type { LanguageModel } from "ai";

import { getAiServiceEnv } from "./env";
import type { AiProviderId } from "./types";

type ProviderFactory = (model: string) => LanguageModel;

/**
 * The only place in the codebase that knows AI providers exist. Adding a
 * provider is one entry here; no other call site changes.
 */
const PROVIDERS: Record<AiProviderId, ProviderFactory> = {
  anthropic: (model) => anthropic(model),
};

/**
 * Resolves the currently configured model instance from AI_PROVIDER /
 * AI_MODEL. This is the only function outside this directory should ever
 * need to obtain a model — nothing else should import a provider package.
 */
export function getAiModel(): LanguageModel {
  const { provider, model } = getAiServiceEnv();
  return PROVIDERS[provider](model);
}
