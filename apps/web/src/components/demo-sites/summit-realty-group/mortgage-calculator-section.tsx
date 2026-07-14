"use client";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { FinancialCalculator } from "@/components/demo-sites/shared/financial-calculator";
import { MORTGAGE_CALCULATOR_CONFIG } from "./realty-data";

/**
 * MortgageCalculatorSection
 *
 * Real Estate-specific presentation wrapper around the generic,
 * industry-agnostic FinancialCalculator engine (see lib/calculators.ts).
 * The same engine can later power EMI, loan, ROI, investment, and
 * website-pricing calculators for other demo sites by swapping config.
 */
export function MortgageCalculatorSection() {
  return (
    <Section id="calculator" className="bg-white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <FinancialCalculator config={MORTGAGE_CALCULATOR_CONFIG} />
        </div>
      </Container>
    </Section>
  );
}
