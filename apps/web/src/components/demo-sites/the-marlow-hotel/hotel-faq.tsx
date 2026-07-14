import { Gift, Sparkles } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { GIFT_VOUCHER, HOTEL_FAQS, LOYALTY_PROGRAM } from "./hotel-data";

/**
 * HotelFaq
 *
 * Frequently asked questions, reusing the shared FaqAccordion primitive
 * used across the Homepage, Services, and Industries pages, plus a
 * Loyalty Programme and Gift Vouchers callout so both business
 * features have a clean architectural home even before either is
 * fully built out.
 */
export function HotelFaq() {
  return (
    <Section id="faq" className="bg-slate-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-600">Answers to what guests ask us most.</p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqAccordion items={HOTEL_FAQS} idPrefix="hotel-faq" />
        </div>
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="text-base font-semibold text-slate-900">{LOYALTY_PROGRAM.name}</h3>
            <p className="text-sm text-slate-600">{LOYALTY_PROGRAM.description}</p>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <Gift className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="text-base font-semibold text-slate-900">{GIFT_VOUCHER.title}</h3>
            <p className="text-sm text-slate-600">{GIFT_VOUCHER.description}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
