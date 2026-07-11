import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

const CLIENT_LOGOS = [
    "Northwind Health",
    "Summit Realty Group",
    "Cascade Fitness",
    "Blueline Legal",
    "Harborview Hotels",
    "Atlas Manufacturing",
  ];

/**
 * TrustBar
 *
 * Muted logo strip shown directly beneath the hero to establish credibility
 * before the visitor scrolls further. Uses wordmarks rather than real client
 * logos as placeholders until brand assets are supplied.
 */
export function TrustBar() {
    return (
          <Section className="border-y border-border/60 bg-muted/20 py-10">
                <Container>
                        <p className="text-center text-xs font-medium uppercase tracking-wide text-muted-foreground">
                                  Trusted by growing teams across every industry
                        </p>
                        <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
                          {CLIENT_LOGOS.map((name) => (
                        <div
                                        key={name}
                                        className="flex items-center justify-center text-sm font-semibold tracking-tight text-muted-foreground/70 grayscale transition-opacity hover:opacity-100"
                                      >
                          {name}
                        </div>
                      ))}
                        </div>
                </Container>
          </Section>
      
