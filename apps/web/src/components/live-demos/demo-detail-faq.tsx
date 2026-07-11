import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { FaqAccordion, type FaqItem } from "@/components/shared/faq-accordion";

const DEMO_DETAIL_FAQS: FaqItem[] = [
  {
        question: "Can I request a website just like this one?",
        answer:
                "Yes. Share this demo during your consultation and we will use it as a reference point for your custom build.",
  },
  {
        question: "Is this demo actually live and interactive?",
        answer:
                "Yes. The Launch Live Demo button opens a fully interactive, production-quality build, not a static screenshot.",
  },
  {
        question: "Will my website be identical to this demo?",
        answer:
                "No two client sites are identical. We use this build to showcase patterns and quality, then design around your brand and content.",
  },
  {
        question: "How long does a similar project take?",
        answer:
                "Most projects follow the timeline above, typically launching within seven to eight weeks depending on scope.",
  },
  ];

/**
 * DemoDetailFaq
 *
 * FAQ section for individual demo detail pages, sharing the FaqAccordion
 * primitive with questions specific to requesting and evaluating a demo.
 */
export function DemoDetailFaq() {
    return (
          <Section className="py-24">
                <Container className="max-w-3xl">
                        <div className="text-center">
                                  <p className="text-sm font-medium text-primary">FAQ</p>
                                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                              Questions about this demo
                                  </h2>
                        </div>
                
                        <div className="mt-12">
                                  <FaqAccordion items={DEMO_DETAIL_FAQS} idPrefix="demo-detail-faq" />
                        </div>
                </Container>
          </Section>
        );
}
