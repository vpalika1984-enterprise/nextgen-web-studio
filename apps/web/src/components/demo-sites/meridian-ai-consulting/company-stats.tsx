"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { COMPANY_STATS } from "./consulting-data";

/**
 * AnimatedNumber
 *
 * Renders the real, final value immediately (server-rendered and on
 * first client paint) so search engines, no-JS clients, and assistive
 * technology always see the correct number. Once mounted and scrolled
 * into view, it cosmetically animates a count-up from zero to the same
 * final value. Mirrors the pattern used by the homepage's
 * StatisticsSection, kept local to this demo rather than shared.
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
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

/**
 * CompanyStats
 *
 * AI-transformation-specific metrics (hours saved, workflows built,
 * ROI) rather than generic corporate figures, reinforcing the AI
 * positioning of the page.
 */
export function CompanyStats() {
  return (
    <Section className="bg-slate-950 py-20 text-white">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {COMPANY_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-semibold tracking-tight text-cyan-300 sm:text-4xl">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-xs text-slate-300 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
