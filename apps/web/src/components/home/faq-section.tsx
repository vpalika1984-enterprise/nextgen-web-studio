"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

interface FaqItem {
    question: string;
    answer: string;
}

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
 * Single-open accordion answering common pre-sales questions. Built with
 * plain state + Framer Motion height animation rather than a headless UI
 * dependency to keep the bundle lean. Each trigger/panel pair is linked via
 * matching id/aria-controls/aria-labelledby so assistive technology can
 * associate the question with its answer per the WAI-ARIA accordion pattern.
 */
export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
        <Section className="py-24">
              <Container className="max-w-3xl">
                      <div className="text-center">
                                <p className="text-sm font-medium text-primary">FAQ</p>
                                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                            Frequently asked questions
                                </h2>
                      </div>
              
                      <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card">
                        {FAQS.map((faq, index) => {
                      const isOpen = openIndex === index;
                      const triggerId = `faq-trigger-${index}`;
                      const panelId = `faq-panel-${index}`;
          
                      return (
                                      <div key={faq.question} className="px-6">
                                                      <button
                                                                          type="button"
                                                                          id={triggerId}
                                                                          onClick={() => setOpenIndex(isOpen ? null : index)}
                                                                          className="flex w-full items-center justify-between gap-4 py-5 text-left"
                                                                          aria-expanded={isOpen}
                                                                          aria-controls={panelId}
                                                                        >
                                                                        <span className="text-sm font-medium text-foreground">
                                                                          {faq.question}
                                                                        </span>
                                                                        <Plus
                                                                                              aria-hidden="true"
                                                                                              className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                                                                                                                      isOpen ? "rotate-45" : ""
                                                                                                }`}
                                                                                            />
                                                      </button>
                                                      <AnimatePresence initial={false}>
                                                        {isOpen && (
                                                            <motion.div
                                                                                    id={panelId}
                                                                                    role="region"
                                                                                    aria-labelledby={triggerId}
                                                                                    initial={{ height: 0, opacity: 0 }}
                                                                                    animate={{ height: "auto", opacity: 1 }}
                                                                                    exit={{ height: 0, opacity: 0 }}
                                                                                    transition={{ duration: 0.2 }}
                                                                                    className="overflow-hidden"
                                                                                  >
                                                                                  <p className="pb-5 text-sm text-muted-foreground">{faq.answer}</p>
                                                            </motion.div>
                                                          )}
                                                      </AnimatePresence>
                                      </div>
                                    );
        })}
                      </div>
              </Container>
        </Section>
      );
}
