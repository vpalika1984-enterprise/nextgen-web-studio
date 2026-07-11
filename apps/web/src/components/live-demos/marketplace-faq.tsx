import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { FaqAccordion, type FaqItem } from "@/components/shared/faq-accordion";

const MARKETPLACE_FAQS: FaqItem[] = [
  {
        question: "Are these real, working websites?",
        answer:
                "Yes. Every listing links to a fully interactive, production-quality build, not a static screenshot or mockup.",
  },
  {
        question: "Can I use one of these demos as a starting point?",
        answer:
                "Absolutely. Tell us which demo caught your eye during your consultation, and we'll use it as a reference point for your custom build.",
  },
  {
        question: "Will my website look exactly like a demo?",
        answer:
                "No two client sites are identical. We use these demos to showcase patterns and quality, then design a custom site around your brand and content.",
  },
  {
        question: "How often are new demos added?",
        answer:
                "We add new live demos as we complete flagship projects across new industries, so check back regularly for fresh examples.",
  },
  {
        question: "Do you build custom demos for enterprise clients?",
        answer:
                "Yes. Enterprise engagements often start with a bespoke interactive prototype before any production work begins.",
  },
  ];

/**
 * MarketplaceFaq
 *
 * FAQ section for the Live Demo Marketplace, sharing the FaqAccordion
 * primitive with marketplace-specific questions.
 */
export function MarketplaceFaq() {
    return (
          <Section className="py-24">
                <Container className="max-w-3xl">
                        <div className="text-center">
                                  <p className="text-sm font-medium text-primary">FAQ</p>
                                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                              Questions about the marketplace
                                  </h2>
                        </div>
                
                        <div className="mt-12">
                                  <FaqAccordion items={MARKETPLACE_FAQS} idPrefix="marketplace-faq" />
                        </div>
                </Container>
          </Section>
        );
}
