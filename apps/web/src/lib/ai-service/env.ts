import type { AiProviderId } from "./types";

const SUPPORTED_PROVIDERS: readonly AiProviderId[] = ["anthropic"];

export interface AiServiceEnv {
  provider: AiProviderId;
  model: string;
}

function isSupportedProvider(value: string): value is AiProviderId {
  return (SUPPORTED_PROVIDERS as readonly string[]).includes(value);
}

/**
 * Resolves and validates AI service configuration from environment
 * variables. Throws immediately with a clear message when configuration
 * is missing or invalid, rather than failing later inside a request.
 */
export function getAiServiceEnv(): AiServiceEnv {
  const provider = process.env.AI_PROVIDER ?? "anthropic";
  const model = process.env.AI_MODEL ?? "claude-opus-4-8";

  if (!isSupportedProvider(provider)) {
    throw new Error(
      `Unsupported AI_PROVIDER "${provider}". Supported providers: ${SUPPORTED_PROVIDERS.join(", ")}.`
    );
  }

  if (provider === "anthropic" && !process.env.ANTHROPIC_API_KEY) {
    throw new Error(
      'ANTHROPIC_API_KEY is required when AI_PROVIDER is "anthropic".'
    );
  }

  return { provider, model };
}
