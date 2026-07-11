"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, LineChart, Workflow } from "lucide-react";

import { Button } from "@/components/ui/button";

const AI_FEATURES = [
  {
    icon: Bot,
    title: "AI Chat Assistants",
    description: "On-brand support and sales assistants trained on your content.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Connect forms, CRMs, and inboxes so nothing falls through the cracks.",
  },
  {
    icon: LineChart,
    title: "Predictive Insights",
    description: "Turn analytics into recommendations your team can act on.",
  },
];

/**
 * AISolutionsPreview
 *
 * Homepage teaser for the AI Solutions service line — a dark, gradient
 * "spotlight" section that visually differentiates it from the rest of the
 * page per the Visual Design System.
 */
export function AISolutionsPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-16 sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/30 via-fuchsia-500/20 to-transparent" />

          <div className="relative mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-primary-foreground/70">
              AI Solutions
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-background sm:text-4xl">
              Ship AI features your competitors don&apos;t have yet
            </h2>
            <p className="mt-4 text-background/70">
              From chat assistants to predictive dashboards, we build AI into
              your product — not bolt it on as an afterthought.
            </p>
          </div>

          <div className="relative mt-12 grid gap-6 sm:grid-cols-3">
            {AI_FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-background/10 bg-background/5 p-6 backdrop-blur-sm"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 text-background">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-background">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-background/60">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="relative mt-12 flex justify-center">
            <Button asChild size="lg" variant="secondary" className="group">
              <Link href="/ai-solutions">
                Explore AI Solutions
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
