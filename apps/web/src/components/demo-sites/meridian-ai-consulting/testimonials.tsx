import { Star } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { TESTIMONIALS } from "./consulting-data";

/**
 * Testimonials
 *
 * Client quotes with role and company, reinforcing enterprise and SME
 * credibility.
 */
export function Testimonials() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            What Clients Say
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="flex gap-1" aria-hidden="true">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-slate-600">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-xs text-slate-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
