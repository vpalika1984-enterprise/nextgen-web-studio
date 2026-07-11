import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { DEMOS } from "@/components/live-demos/demos-data";
import { FeaturedDemo } from "@/components/live-demos/featured-demo";

const FEATURED = DEMOS.filter((demo) => demo.featured);

/**
 * FeaturedDemos
 *
 * Highlights the marketplace's premium demonstrations above the full
 * searchable grid, giving visitors an immediate, high-quality first
 * impression of the work.
 */
export function FeaturedDemos() {
    return (
          <Section className="py-24">
                <Container>
                        <div className="mx-auto max-w-2xl text-center">
                                  <p className="text-sm font-medium text-primary">Featured</p>
                                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                              Premium demonstrations
                                  </h2>
                                  <p className="mt-4 text-muted-foreground">
                                              A closer look at three flagship builds spanning restaurants, real
                                              estate, and AI-powered products.
                                  </p>
                        </div>
                
                        <div className="mt-14 grid gap-6">
                          {FEATURED.map((demo) => (
                        <FeaturedDemo key={demo.id} demo={demo} />
                      ))}
                        </div>
                </Container>
          </Section>
        );
}
