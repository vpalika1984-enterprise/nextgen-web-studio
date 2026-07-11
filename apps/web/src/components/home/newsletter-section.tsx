"use client";

import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Mail, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

const emailSchema = z.string().email("Enter a valid email address");

/**
 * NewsletterSection
 *
 * Email capture with Zod-validated input. Submit handler is a placeholder
 * until the email provider integration is wired up in a later phase.
 */
export function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const result = emailSchema.safeParse(email);

      if (!result.success) {
              setError(result.error.issues[0]?.message ?? "Enter a valid email address");
              return;
      }

      setError(null);
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 600));
        console.log("Newsletter signup:", result.data);
        setIsSubmitting(false);
        setSubmitted(true);
        setEmail("");
  }

  return (
        <Section className="py-24">
              <Container className="max-w-4xl">
                      <div className="rounded-3xl border border-border bg-muted/30 px-6 py-14 text-center sm:px-12">
                                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <Mail className="h-5 w-5" />
                                </span>
                                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                                            Web strategy insights, straight to your inbox
                                </h2>
                                <p className="mt-2 text-sm text-muted-foreground">
                                            One email a month. No spam, unsubscribe anytime.
                                </p>
                      
                        {submitted ? (
                      <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 text-sm font-medium text-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    You&apos;re subscribed — thanks for joining!
                      </div>
                    ) : (
                      <form
                                      onSubmit={onSubmit}
                                      noValidate
                                      className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
                                    >
                                    <div className="flex-1 text-left">
                                                    <label htmlFor="newsletter-email" className="sr-only">
                                                                      Email address
                                                    </label>
                                                    <input
                                                                        id="newsletter-email"
                                                                        type="email"
                                                                        placeholder="you@company.com"
                                                                        value={email}
                                                                        onChange={(event) => setEmail(event.target.value)}
                                                                        className="h-11 w-full rounded-lg border border-input bg-background px-4 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                                                      />
                                      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
                                    </div>
                                    <Button type="submit" size="lg" disabled={isSubmitting}>
                                      {isSubmitting ? "Subscribing..." : "Subscribe"}
                                    </Button>
                      </form>
                                )}
                      </div>
              </Container>
        </Section>
      );
}
