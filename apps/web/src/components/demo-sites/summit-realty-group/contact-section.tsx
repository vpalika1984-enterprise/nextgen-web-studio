import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { AGENCY_INFO } from "./realty-data";

/**
 * ContactSection
 *
 * Address, phone, email, and office hours for Summit Realty Group.
 */
export function ContactSection() {
  const fullAddress = `${AGENCY_INFO.address.street}, ${AGENCY_INFO.address.city}, ${AGENCY_INFO.address.state} ${AGENCY_INFO.address.zip}`;

  return (
    <Section id="contact" className="bg-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-slate-600">
            Reach out to schedule a showing, request a valuation, or ask us anything.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <MapPin className="h-6 w-6 text-amber-600" aria-hidden="true" />
            <p className="mt-3 text-sm text-slate-600">{fullAddress}</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Phone className="h-6 w-6 text-amber-600" aria-hidden="true" />
            <a href={`tel:${AGENCY_INFO.phone}`} className="mt-3 text-sm text-slate-600 hover:text-slate-900">
              {AGENCY_INFO.phone}
            </a>
          </div>
          <div className="flex flex-col items-center text-center">
            <Mail className="h-6 w-6 text-amber-600" aria-hidden="true" />
            <a href={`mailto:${AGENCY_INFO.email}`} className="mt-3 text-sm text-slate-600 hover:text-slate-900">
              {AGENCY_INFO.email}
            </a>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-2 text-amber-600">
              <Clock className="h-5 w-5" aria-hidden="true" />
              <h3 className="text-sm font-semibold uppercase tracking-wide">Office Hours</h3>
            </div>
            <dl className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <dt className="text-slate-500">Weekdays</dt>
                <dd className="font-medium text-slate-900">{AGENCY_INFO.hours.weekday}</dd>
              </div>
              <div className="flex items-center justify-between text-sm">
                <dt className="text-slate-500">Saturday</dt>
                <dd className="font-medium text-slate-900">{AGENCY_INFO.hours.saturday}</dd>
              </div>
              <div className="flex items-center justify-between text-sm">
                <dt className="text-slate-500">Sunday</dt>
                <dd className="font-medium text-slate-900">{AGENCY_INFO.hours.sunday}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  );
}
