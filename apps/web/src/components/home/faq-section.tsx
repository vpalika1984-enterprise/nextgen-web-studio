import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { FaqAccordion, type FaqItem } from "@/components/shared/faq-accordion";

const FAQS: FaqItem[] = [
    {
            question: "How long does a typical project take?",
            answer:
                      "Most Starter sites launch in 2 weeks. Growth-tier projects with custom design and CMS work typically take 4-6 weeks, and Enterprise engagements are scoped individually.",
    },
    {
            question: "Do you work with businesses outside the industries listed?",
            answer:
                      "Yes. The industries on our site are our most common engagements, but we regularly build for teams outside those categories — reach out and we'll scope it.",
    },
    {
            question: "Can I see a live demo before committing?",
            answer:
                      "Absolutely. Our Live Demo Marketplace has fully interactive example sites by industry, and we can also build a tailored proof-of-concept for your business.",
    },
    {
            question: "What's included after launch?",
            answer:
                      "Every plan includes a post-launch support window, and Growth/Enterprise plans include ongoing maintenance, monitoring, and iteration options.",
    },
    ];

/**
 * FaqSection
 *
 * Single-open accordion answering common pre-sales questions, rendered via
 * the shared FaqAccordion primitive (also used by the Services page FAQ).
 */
export function FaqSection() {
      return (
              <Section className="py-24">
                    <Container className="max-w-3xl">
                            <div className="text-center">
                                      <p className="text-sm font-medium text-primary">FAQ</p>
                                      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                                  Frequently asked questions
                                      </h2>
                            </div>
                    
                            <div className="mt-12">
                                      <FaqAccordion items={FAQS} idPrefix="home-faq" />
                            </div>
                    </Container>
              </Section>
            );
}
