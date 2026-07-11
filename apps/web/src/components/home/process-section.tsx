import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

const STEPS = [
  {
        number: "01",
        title: "Discover",
        description: "We learn your business, goals, and audience before writing a single line.",
  },
  {
        number: "02",
        title: "Design",
        description: "High-fidelity mockups and a design system tailored to your brand.",
  },
  {
        number: "03",
        title: "Build",
        description: "Production-grade engineering with performance and accessibility baked in.",
  },
  {
        number: "04",
        title: "Launch & Grow",
        description: "We ship, monitor, and iterate — your site keeps improving after launch.",
  },
  ];

/**
 * ProcessSection
 *
 * Four-step horizontal process timeline explaining how an engagement runs
 * from discovery through post-launch growth.
 */
export function ProcessSection() {
    return (
          <Section className="py-24">
                <Container>
                        <div className="mx-auto max-w-2xl text-center">
                                  <p className="text-sm font-medium text-primary">How we work</p>
                                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                              A proven process, from kickoff to launch
                                  </h2>
                        </div>
                
                        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                                  <div className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" />
                          {STEPS.map((step) => (
                        <div key={step.number} className="relative flex flex-col items-start">
                                      <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold text-foreground">
                                        {step.number}
                                      </span>
                                      <h3 className="mt-5 text-base font-semibold text-foreground">
                                        {step.title}
                                      </h3>
                                      <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      ))}
                        </div>
                </Container>
          </Section>
        );
}
