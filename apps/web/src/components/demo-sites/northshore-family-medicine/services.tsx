import { Check, Stethoscope } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { HEALTH_PACKAGES, SERVICES } from "./clinic-data";

/**
 * Services
 *
 * Department/service directory grid plus a health-package pricing strip,
 * covering both the "department listing" and "health packages" business
 * features for the clinic.
 */
export function Services() {
    return (
          <Section id="services" className="bg-white">
                <Container>
                        <div className="mx-auto max-w-2xl text-center">
                                  <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                                              Our Services
                                  </h2>
                                  <p className="mt-4 text-slate-600">
                                              Comprehensive primary and preventive care for every stage of life.
                                  </p>
                        </div>
                        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                          {SERVICES.map((service) => (
                        <div
                                        key={service.name}
                                        className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                                      >
                                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600">
                                                      <Stethoscope className="h-5 w-5" aria-hidden="true" />
                                      </span>
                                      <h3 className="mt-4 text-base font-semibold text-slate-900">{service.name}</h3>
                                      <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                        </div>
                      ))}
                        </div>
                
                        <div className="mt-20">
                                  <div className="mx-auto max-w-2xl text-center">
                                              <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                                                            Health Packages
                                              </h3>
                                              <p className="mt-4 text-slate-600">
                                                            Bundled care plans for patients who want more from every visit.
                                              </p>
                                  </div>
                                  <div className="mt-10 grid gap-6 sm:grid-cols-3">
                                    {HEALTH_PACKAGES.map((pkg) => (
                          <div
                                            key={pkg.name}
                                            className="flex flex-col rounded-2xl border border-teal-600/20 bg-teal-600/5 p-6"
                                          >
                                          <h4 className="text-base font-semibold text-slate-900">{pkg.name}</h4>
                                          <p className="mt-2 text-2xl font-semibold text-teal-700">
                                            {pkg.price}
                                                            <span className="ml-1 text-sm font-normal text-slate-500">{pkg.cadence}</span>
                                          </p>
                                          <ul className="mt-4 flex-1 space-y-2">
                                            {pkg.includes.map((item) => (
                                                                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                                                                                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
                                                                  {item}
                                                                </li>
                                                              ))}
                                          </ul>
                          </div>
                        ))}
                                  </div>
                        </div>
                </Container>
          </Section>
        );
}
