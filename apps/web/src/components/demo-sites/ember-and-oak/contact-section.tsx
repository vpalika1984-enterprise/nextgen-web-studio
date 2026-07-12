import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { OPENING_HOURS, RESTAURANT_INFO } from "./restaurant-data";

/**
 * ContactSection
 *
 * Address, phone, email, opening hours, and social links.
 */
export function ContactSection() {
    return (
          <Section id="contact" className="bg-neutral-900 text-white">
                <Container>
                        <div className="mx-auto max-w-2xl text-center">
                                  <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Visit Us</h2>
                                  <p className="mt-4 text-white/70">Walk-ins welcome, reservations recommended.</p>
                        </div>
                        <div className="mt-12 grid gap-8 sm:grid-cols-3">
                                  <div className="flex flex-col items-center text-center">
                                              <MapPin className="h-6 w-6 text-amber-400" aria-hidden="true" />
                                              <p className="mt-3 text-sm text-white/70">{RESTAURANT_INFO.address}</p>
                                  </div>
                                  <div className="flex flex-col items-center text-center">
                                              <Phone className="h-6 w-6 text-amber-400" aria-hidden="true" />
                                              <a
                                                              href={RESTAURANT_INFO.phoneHref}
                                                              className="mt-3 text-sm text-white/70 hover:text-white"
                                                            >
                                                {RESTAURANT_INFO.phone}
                                              </a>
                                  </div>
                                  <div className="flex flex-col items-center text-center">
                                              <Mail className="h-6 w-6 text-amber-400" aria-hidden="true" />
                                              <a
                                                              href={`mailto:${RESTAURANT_INFO.email}`}
                                                              className="mt-3 text-sm text-white/70 hover:text-white"
                                                            >
                                                {RESTAURANT_INFO.email}
                                              </a>
                                  </div>
                        </div>
                        <div className="mx-auto mt-12 max-w-md rounded-2xl border border-white/10 bg-white/5 p-6">
                                  <div className="flex items-center gap-2 text-amber-400">
                                              <Clock className="h-5 w-5" aria-hidden="true" />
                                              <h3 className="text-sm font-semibold uppercase tracking-wide">Hours</h3>
                                  </div>
                                  <dl className="mt-4 space-y-2">
                                    {OPENING_HOURS.map((row) => (
                          <div key={row.days} className="flex items-center justify-between text-sm">
                                          <dt className="text-white/60">{row.days}</dt>
                                          <dd className="font-medium">{row.hours}</dd>
                          </div>
                        ))}
                                  </dl>
                        </div>
                        <div className="mt-10 flex justify-center gap-4">
                                  <a
                                                href={RESTAURANT_INFO.instagramHref}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
                                              >
                                              Instagram
                                  </a>
                                  <a
                                                href={RESTAURANT_INFO.facebookHref}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
                                              >
                                              Facebook
                                  </a>
                        </div>
                </Container>
          </Section>
        );
}
