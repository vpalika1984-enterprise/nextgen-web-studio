import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { WHY_CHOOSE_US } from "./consulting-data";

/**
 * WhyChooseUs
 *
 * Value proposition grid reinforcing Meridian's differentiators against
 * generic AI vendors.
 */
export function WhyChooseUs() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Why Choose Meridian
          </h2>
          <p className="mt-4 text-slate-600">
            The advantages our clients count on, from first roadmap to production support.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {WHY_CHOOSE_US.map((item) => (
            <div key={item.id} className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 shrink-0 text-blue-600" aria-hidden="true" />
              <div>
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
