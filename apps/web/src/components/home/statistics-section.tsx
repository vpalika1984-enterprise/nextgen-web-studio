"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

interface Stat {
    label: string;
    value: number;
    suffix?: string;
}

const STATS: Stat[] = [
  { label: "Websites launched", value: 240, suffix: "+" },
  { label: "Industries served", value: 35, suffix: "+" },
  { label: "Average performance score", value: 98, suffix: "" },
  { label: "Client satisfaction", value: 99, suffix: "%" },
  ];

function AnimatedNumber({ value, suffix }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [display, setDisplay] = useState(0);

  useEffect(() => {
        if (!isInView) return;

                const duration = 1200;
        const start = performance.now();

                function tick(now: number) {
                        const progress = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setDisplay(Math.round(eased * value));
                        if (progress < 1) requestAnimationFrame(tick);
                }

                const frame = requestAnimationFrame(tick);
         return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  return (
        <span ref={ref}>
          {display}
          {suffix}
        </span>
      );
}

/**
 * StatisticsSection
 *
 * Animated counters that reinforce credibility with concrete numbers.
 * Counts up from zero once each figure scrolls into view.
 */
export function StatisticsSection() {
    return (
          <Section className="py-20">
                <Container>
                        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                          {STATS.map((stat) => (
                        <div key={stat.label} className="text-center">
                                      <div className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                                                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                                      </div>
                                      <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                        </div>
                </Container>
          </Section>
        );
      }
      
