import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { CONSULTING_FAQS } from "./consulting-data";

/**
 * ConsultingFaq
 *
 * Frequently asked questions, reusing the shared FaqAccordion primitive
 * used across the Homepage, Services, Industries, and other demo
 * pages.
 */
export function ConsultingFaq() {
  return (
    <Section id="faq" className="bg-slate-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-600">Answers to what prospective clients ask us most.</p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqAccordion items={CONSULTING_FAQS} idPrefix="consulting-faq" />
        </div>
      </Container>
    </Section>
  );
}
