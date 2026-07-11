import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

/**
 * Not found boundary for /live-demos/[slug].
 *
 * Renders when a requested demo slug does not match any entry in the demo
 * catalog, keeping visitors inside the on-brand marketing shell instead of
 * the frameworks default 404.
 */
export default function DemoNotFound() {
    return (
          <Section className="py-32">
                <Container className="max-w-2xl text-center">
                        <p className="text-sm font-medium text-primary">404</p>
                        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                  We could not find that demo
                        </h1>
                        <p className="mt-4 text-muted-foreground">
                                  The live demo you are looking for may have been renamed or removed.
                                  Browse the full marketplace to find a build for your industry.
                        </p>
                        <div className="mt-8 flex justify-center">
                                  <Button asChild size="lg" className="group">
                                              <Link href="/live-demos">
                                                            Browse Live Demo Marketplace
                                                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                                              </Link>
                                  </Button>
                        </div>
                </Container>
          </Section>
        );
}
