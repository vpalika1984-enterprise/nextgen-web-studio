import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BackgroundGrid } from "@/components/shared/background-grid";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

/**
 * FinalCta
 *
 * Closing conversion section before the footer. Repeats the primary CTA
 * from the hero to catch visitors who scrolled the whole page without
 * converting yet.
 */
export function FinalCta() {
    return (
          <Section className="relative isolate overflow-hidden py-24">
                <BackgroundGrid fadeOut={false} />
                <Container className="max-w-3xl text-center">
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                  Ready to build a website that actually grows your business?
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                                  Book a free consultation and we&apos;ll map out exactly what a
                                  high-performing site looks like for your industry.
                        </p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                  <Button asChild size="lg" className="group">
                                              <Link href="/book-consultation">
                                                            Book a Consultation
                                                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                                              </Link>
                                  </Button>
                                  <Button asChild size="lg" variant="outline">
                                              <Link href="/portfolio">View our work</Link>
                                  </Button>
                        </div>
                </Container>
          </Section>
        );
}
