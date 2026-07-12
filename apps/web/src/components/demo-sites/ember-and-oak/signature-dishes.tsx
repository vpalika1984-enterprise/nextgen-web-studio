import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SIGNATURE_DISHES } from "./restaurant-data";

/**
 * SignatureDishes
 *
 * Highlights a handful of standout menu items ahead of the full menu.
 */
export function SignatureDishes() {
    return (
          <Section className="bg-neutral-900 text-white">
                <Container>
                        <div className="mx-auto max-w-2xl text-center">
                                  <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Signature Dishes</h2>
                                  <p className="mt-4 text-white/70">
                                              A short list of the plates guests order again on every visit.
                                  </p>
                        </div>
                        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                          {SIGNATURE_DISHES.map((dish) => (
                        <div
                                        key={dish.name}
                                        className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6"
                                      >
                                      <div className="flex items-start justify-between gap-3">
                                                      <h3 className="text-lg font-semibold">{dish.name}</h3>
                                                      <span className="shrink-0 font-serif text-amber-400">{dish.price}</span>
                                      </div>
                                      <p className="mt-2 text-sm text-white/60">{dish.description}</p>
                          {dish.dietary && dish.dietary.length > 0 && (
                                                        <div className="mt-4 flex flex-wrap gap-2">
                                                          {dish.dietary.map((tag) => (
                                                                              <span
                                                                                                      key={tag}
                                                                                                      className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/50"
                                                                                                    >
                                                                                {tag}
                                                                              </span>
                                                                            ))}
                                                        </div>
                                      )}
                        </div>
                      ))}
                        </div>
                </Container>
          </Section>
        );
}
