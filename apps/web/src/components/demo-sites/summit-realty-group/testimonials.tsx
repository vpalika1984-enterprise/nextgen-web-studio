import { Star } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { TESTIMONIALS } from "./realty-data";

/**
 * Testimonials
 *
 * Client review social proof, styled as star-rated quote cards.
 */
export function Testimonials() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-slate-600">Real feedback from recent buyers, sellers, and investors.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <div className="flex gap-1 text-amber-600">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm text-slate-700">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-medium text-slate-900">
                {testimonial.name}
                <span className="block text-xs font-normal text-slate-500">
                  {testimonial.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
