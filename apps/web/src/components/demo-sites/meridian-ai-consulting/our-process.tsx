import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { PROCESS_STEPS } from "./consulting-data";

/**
 * OurProcess
 *
 * Four-step engagement timeline explaining how a Meridian AI engagement
 * runs from discovery through post-launch optimization.
 */
export function OurProcess() {
  return (
    <Section id="process" className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-blue-600">How We Work</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Our Process
          </h2>
        </div>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-slate-200 lg:block" />
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="relative flex flex-col items-start">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-900">
                {step.number}
              </span>
              <h3 className="mt-5 text-base font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
