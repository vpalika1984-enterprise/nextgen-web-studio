/**
 * AI Service Layer — public surface.
 *
 * The rest of the application, and every future Agency OS module, imports
 * AI capabilities only from this path (`@/lib/ai-service`). No provider
 * SDK (Vercel AI SDK provider packages, or any vendor SDK) is imported
 * anywhere outside this directory. See
 * docs/architecture/ai-service-layer.md for the full architecture.
 *
 * Chat/structured-output capabilities (streamChatResponse,
 * generateStructuredOutput) are added in a later phase, once a caller
 * exists to verify their shape against.
 */

export { getAiModel } from "./provider";
export { getAiServiceEnv } from "./env";
export type { AiServiceEnv } from "./env";
export type { AiProviderId, ChatMessage, ChatRole } from "./types";
