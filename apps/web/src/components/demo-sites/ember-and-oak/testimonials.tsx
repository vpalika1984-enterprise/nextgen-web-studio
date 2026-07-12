import { Star } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { TESTIMONIALS } from "./restaurant-data";

/**
 * Testimonials
 *
 * Customer review social proof, styled as star-rated quote cards.
 */
export function Testimonials() {
    return (
          <Section className="bg-neutral-900 text-white">
                <Container>
                        <div className="mx-auto max-w-2xl text-center">
                                  <h2 className="font-serif text-3xl font-semibold sm:text-4xl">What Guests Say</h2>
                                  <p className="mt-4 text-white/70">Real feedback from recent reservations.</p>
                        </div>
                        <div className="mt-12 grid gap-6 sm:grid-cols-3">
                          {TESTIMONIALS.map((testimonial) => (
                        <figure
                                        key={testimonial.author}
                                        className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6"
                                      >
                                      <div className="flex gap-1 text-amber-400">
                                        {Array.from({ length: testimonial.rating }).map((_, index) => (
                                                          <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                                                        ))}
                                      </div>
                                      <blockquote className="mt-4 flex-1 text-sm text-white/80">
                                                      &ldquo;{testimonial.quote}&rdquo;
                                      </blockquote>
                                      <figcaption className="mt-4 text-sm font-medium text-white">
                                        {testimonial.author}
                                        {testimonial.role && (
                                                          <span className="block text-xs font-normal text-white/50">
                                                            {testimonial.role}
                                                          </span>
                                                      )}
                                      </figcaption>
                        </figure>
                      ))}
                        </div>
                </Container>
          </Section>
        );
}
