/**
 * Generic Financial Calculation Engine
 *
 * Powers every calculator-style feature across the platform. It is
 * intentionally decoupled from any single industry so the same engine can
 * drive a Mortgage Calculator today, and an EMI, Loan, ROI, Investment, or
 * Website Pricing calculator in future Agency OS modules.
 */

export interface AmortizationInput {
    principal: number;
    annualInterestRate: number;
    termYears: number;
}

export interface AmortizationResult {
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
    principal: number;
}

/**
 * Calculates a standard amortizing payment schedule.
 * Backs Mortgage, EMI, and general Loan calculators.
 */
export function calculateAmortization(input: AmortizationInput): AmortizationResult {
    const { principal, annualInterestRate, termYears } = input;
    const months = Math.max(termYears, 0) * 12;
    const monthlyRate = annualInterestRate / 100 / 12;

  if (months <= 0 || principal <= 0) {
        return { monthlyPayment: 0, totalPayment: 0, totalInterest: 0, principal: Math.max(principal, 0) };
  }

  const monthlyPayment =
        monthlyRate === 0
        ? principal / months
          : (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
            (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - principal;

  return {
        monthlyPayment,
        totalPayment,
        totalInterest,
        principal,
  };
}

export interface ROIInput {
    initialInvestment: number;
    finalValue: number;
}

export interface ROIResult {
    netGain: number;
    roiPercentage: number;
}

/**
       * Calculates return on investment. Backs ROI and Investment calculators.
 */
export function calculateROI(input: ROIInput): ROIResult {
    const { initialInvestment, finalValue } = input;
    const netGain = finalValue - initialInvestment;
    const roiPercentage = initialInvestment > 0 ? (netGain / initialInvestment) * 100 : 0;

  return { netGain, roiPercentage };
}

export interface CompoundGrowthInput {
    principal: number;
    annualRate: number;
    years: number;
    compoundingPerYear: number;
}

export interface CompoundGrowthResult {
    futureValue: number;
    totalGrowth: number;
}

/**
 * Calculates compound growth. Backs Investment and Website Pricing
 * (e.g. retainer growth) projections.
 */
export function calculateCompoundGrowth(input: CompoundGrowthInput): CompoundGrowthResult {
    const { principal, annualRate, years, compoundingPerYear } = input;
    const rate = annualRate / 100;
    const n = Math.max(compoundingPerYear, 1);

  const futureValue = principal * Math.pow(1 + rate / n, n * years);
    const totalGrowth = futureValue - principal;

  return { futureValue, totalGrowth };
}

export type CalculatorMode =
    | "mortgage"
  | "emi"
  | "loan"
  | "roi"
  | "investment"
  | "pricing";

export type CalculatorFieldType = "currency" | "percent" | "number" | "years";

export interface CalculatorFieldConfig {
    key: string;
    label: string;
    type: CalculatorFieldType;
    defaultValue: number;
    min: number;
    max: number;
    step: number;
}

export type CalculatorResultFormat = "currency" | "percent" | "number";

export interface CalculatorResultConfig {
    key: string;
    label: string;
    format: CalculatorResultFormat;
    emphasis?: boolean;
}

export interface CalculatorConfig {
    mode: CalculatorMode;
    title: string;
    description: string;
    fields: CalculatorFieldConfig[];
    resultFields: CalculatorResultConfig[];
    compute: (values: Record<string, number>) => Record<string, number>;
    disclaimer?: string;
}

export function formatCalculatorValue(value: number, format: CalculatorResultFormat): string {
    if (format === "currency") {
          return new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0,
          }).format(value);
    }

  if (format === "percent") {
        return `${value.toFixed(2)}%`;
  }

  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(value);
}
