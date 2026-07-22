/**
 * Local, stable types for the AI service layer's public surface. Call
 * sites depend on these, not on `ai` package types directly, so an SDK
 * version bump or provider swap is isolated to this directory.
 */

export type AiProviderId = "anthropic";

export type ChatRole = "system" | "user" | "assistant";

export interface ChatMessage {
  role: ChatRole;
  content: string;
}
