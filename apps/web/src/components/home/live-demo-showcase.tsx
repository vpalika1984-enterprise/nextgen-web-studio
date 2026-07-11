"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";

interface DemoCard {
  industry: string;
  title: string;
  description: string;
  tech: string[];
  demoHref: string;
  caseStudyHref: string;
}

const FEATURED_DEMOS: DemoCard[] = [
  {
    industry: "Restaurant",
    title: "Ember & Oak Steakhouse",
    description: "Reservation-first site with live menu and table booking.",
    tech: ["Next.js", "Stripe", "Supabase"],
    demoHref: "/live-demos/restaurant-ember-oak",
    caseStudyHref: "/case-studies/restaurant-ember-oak",
  },
  {
    industry: "Medical Clinic",
    title: "Northshore Family Medicine",
    description: "Patient portal, appointment scheduling, and provider bios.",
    tech: ["Next.js", "Clerk", "Recharts"],
    demoHref: "/live-demos/medical-northshore",
    caseStudyHref: "/case-studies/medical-northshore",
  },
  {
    industry: "Real Estate",
    title: "Summit Realty Group",
    description: "Listing search, mortgage calculator, and agent profiles.",
    tech: ["Next.js", "Supabase", "Zod"],
    demoHref: "/live-demos/real-estate-summit",
    caseStudyHref: "/case-studies/real-estate-summit",
  },
];

/**
 * LiveDemoShowcase
 *
 * Homepage preview of the Live Demo Marketplace — the platform's flagship
 * feature. Surfaces a handful of interactive project cards and links out
 * to the full marketplace at /live-demos.
 */
export function LiveDemoShowcase() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium text-primary">Live Demo Marketplace</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Explore real, interactive websites
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Every demo is a fully working website you can click through —
              not a static screenshot.
            </p>
          </div>
          <Button asChild variant="outline" className="group shrink-0">
            <Link href="/live-demos">
              View all demos
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FEATURED_DEMOS.map((demo, index) => (
            <motion.div
              key={demo.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[4/3] w-full bg-gradient-to-br from-primary/10 via-fuchsia-500/10 to-cyan-400/10" />
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-medium uppercase tracking-wide text-primary">
                  {demo.industry}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{demo.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{demo.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {demo.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <Button asChild size="sm" className="flex-1">
                    <Link href={demo.demoHref}>
                      Open Live Demo
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="ghost" className="flex-1">
                    <Link href={demo.caseStudyHref}>View Case Study</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
