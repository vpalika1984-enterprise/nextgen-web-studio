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

/**
 * AnimatedNumber
 *
 * Renders the real, final value immediately (server-rendered and on first
 * client paint) so search engines, no-JS clients, and assistive technology
 * always see the correct number. Once mounted and scrolled into view, it
 * cosmetically animates a count-up from zero to the same final value. The
 * count-up is a purely visual enhancement layered on top of correct
 * content, never a requirement for the real number to be visible.
 */
function AnimatedNumber({ value, suffix }: { value: number; suffix?: string }) {
      const ref = useRef<HTMLSpanElement>(null);
      const isInView = useInView(ref, { once: true, margin: "-80px" });
      const [display, setDisplay] = useState(value);

  useEffect(() => {
          if (!isInView) return;

                const duration = 1200;
          const start = performance.now();

                setDisplay(0);

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
 * The real values are always present in the markup; the count-up from
 * zero is a cosmetic enhancement that plays once each figure scrolls
 * into view.
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
