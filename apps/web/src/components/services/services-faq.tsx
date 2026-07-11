import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { FaqAccordion, type FaqItem } from "@/components/shared/faq-accordion";

const SERVICE_FAQS: FaqItem[] = [
  {
        question: "Which service is the right starting point for my business?",
        answer:
                "Most small businesses start with a Business Website; restaurants, medical practices, and real estate teams typically choose the matching specialized package above, which bundles in the integrations they need most.",
  },
  {
        question: "Can services be combined into one project?",
        answer:
                "Yes. Most Growth and Enterprise engagements combine a core website with e-commerce, AI integrations, or automation, scoped as one project with one team.",
  },
  {
        question: "Do you build custom features not listed here?",
        answer:
                "Regularly. The categories above cover our most common engagements; if your project needs something bespoke, tell us about it during your consultation and we'll scope it.",
  },
  {
        question: "How is pricing determined for each service?",
        answer:
                "The prices shown are typical starting points based on scope. Final pricing depends on page count, integrations, and content needs, and you'll get a fixed quote before any work begins.",
  },
  {
        question: "Do you provide ongoing support after launch?",
        answer:
                "Every service includes a post-launch support window, and Growth/Enterprise engagements include ongoing maintenance, monitoring, and iteration as an add-on.",
  },
  ];

/**
 * ServicesFaq
 *
 * FAQ section specific to the Services page, sharing the FaqAccordion
 * primitive with the Homepage FAQ but with service-specific questions.
 */
export function ServicesFaq() {
    return (
          <Section className="py-24">
                <Container className="max-w-3xl">
                        <div className="text-center">
                                  <p className="text-sm font-medium text-primary">FAQ</p>
                                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                              Questions about our services
                                  </h2>
                        </div>
                
                        <div className="mt-12">
                                  <FaqAccordion items={SERVICE_FAQS} idPrefix="services-faq" />
                        </div>
                </Container>
          </Section>
        );
}
