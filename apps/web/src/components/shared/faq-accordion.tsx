"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

export interface FaqItem {
    question: string;
    answer: string;
}

interface FaqAccordionProps {
    items: FaqItem[];
    idPrefix?: string;
}

/**
 * FaqAccordion
 *
 * Single-open accordion primitive shared by every FAQ section on the site
 * (Homepage, Services, and future pages). Built with plain state + Framer
 * Motion height animation rather than a headless UI dependency to keep the
 * bundle lean. Each trigger/panel pair is linked via matching
 * id/aria-controls/aria-labelledby so assistive technology can associate
 * the question with its answer per the WAI-ARIA accordion pattern.
 */
export function FaqAccordion({ items, idPrefix = "faq" }: FaqAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
        <div className="divide-y divide-border rounded-2xl border border-border bg-card">
          {items.map((faq, index) => {
                  const isOpen = openIndex === index;
                  const triggerId = `${idPrefix}-trigger-${index}`;
                  const panelId = `${idPrefix}-panel-${index}`;
          
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
      );
}
