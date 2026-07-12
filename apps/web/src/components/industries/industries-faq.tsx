import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { FaqAccordion, type FaqItem } from "@/components/shared/faq-accordion";

const INDUSTRIES_FAQS: FaqItem[] = [
  {
        question: "Do you build for industries not listed on this page?",
        answer:
                "Yes. The 10 industries shown are our most common engagements, but our process, design system, and integrations apply across dozens of verticals. Tell us about your business during your consultation and we'll scope it.",
  },
  {
        question: "Can I see a live example before committing to a project?",
        answer:
                "Ember & Oak Steakhouse is a fully live restaurant demo you can click through right now. Every other industry card links to a detailed demo preview or the matching service page so you can see exactly what's included.",
  },
  {
        question: "Does my industry require special compliance, like HIPAA or PCI?",
        answer:
                "Some industries, like medical and finance, involve extra care around sensitive data. We design HIPAA-conscious intake forms and PCI-compliant checkout flows using vetted providers like Clerk and Stripe rather than handling sensitive data ourselves.",
  },
  {
        question: "How long does an industry-specific build typically take?",
        answer:
                "Most single-industry sites launch in 3 to 6 weeks depending on scope, integrations, and content readiness. Growth and Enterprise engagements that combine multiple features usually run 6 to 12 weeks.",
  },
  {
        question: "Can I combine features from more than one industry package?",
        answer:
                "Regularly. A boutique hotel with an on-site restaurant, for example, might combine booking and reservation features from both packages into a single project scoped as one engagement.",
  },
  ];

/**
 * IndustriesFaq
 *
 * FAQ section specific to the Industries page, sharing the FaqAccordion
 * primitive with the Homepage and Services FAQs but with industry-scoped
 * questions about compliance, timelines, and combining packages.
 */
export function IndustriesFaq() {
    return (
          <Section className="py-24">
                <Container className="max-w-3xl">
                        <div className="text-center">
                                  <p className="text-sm font-medium text-primary">FAQ</p>
                                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                              Questions about industry solutions
                                  </h2>
                        </div>
                
                        <div className="mt-12">
                                  <FaqAccordion items={INDUSTRIES_FAQS} idPrefix="industries-faq" />
                        </div>
                </Container>
          </Section>
        );
}
