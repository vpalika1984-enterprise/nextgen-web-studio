import { Building2 } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { FACILITIES } from "./clinic-data";

/**
 * Facilities
 *
 * Highlight grid for the clinic's physical space and amenities.
 */
export function Facilities() {
    return (
          <Section id="facilities" className="bg-slate-50">
                <Container>
                        <div className="mx-auto max-w-2xl text-center">
                                  <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                                              Our Facilities
                                  </h2>
                                  <p className="mt-4 text-slate-600">
                                              A modern, comfortable space designed around patient experience.
                                  </p>
                        </div>
                        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                          {FACILITIES.map((facility) => (
                        <div
                                        key={facility.title}
                                        className="rounded-2xl border border-slate-200 bg-white p-6"
                                      >
                                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600">
                                                      <Building2 className="h-5 w-5" aria-hidden="true" />
                                      </span>
                                      <h3 className="mt-4 text-base font-semibold text-slate-900">{facility.title}</h3>
                                      <p className="mt-2 text-sm text-slate-600">{facility.description}</p>
                        </div>
                      ))}
                        </div>
                </Container>
          </Section>
        );
}
