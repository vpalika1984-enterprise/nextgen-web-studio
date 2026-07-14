"use client";

import { useMemo, useState } from "react";

import {
  CalculatorConfig,
  formatCalculatorValue,
} from "@/lib/calculators";

interface FinancialCalculatorProps {
  config: CalculatorConfig;
  accentClassName?: string;
}

export function FinancialCalculator({
  config,
  accentClassName = "text-amber-600",
}: FinancialCalculatorProps) {
  const [values, setValues] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    config.fields.forEach((field) => {
      initial[field.key] = field.defaultValue;
    });
    return initial;
  });

  const results = useMemo(() => config.compute(values), [config, values]);

  function handleChange(key: string, rawValue: string) {
    const numericValue = Number(rawValue);
    setValues((prev) => ({ ...prev, [key]: Number.isNaN(numericValue) ? 0 : numericValue }));
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="text-xl font-semibold text-slate-900">{config.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{config.description}</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-5">
          {config.fields.map((field) => (
            <label key={field.key} className="flex flex-col gap-2 text-sm">
              <span className="flex items-center justify-between font-medium text-slate-700">
                {field.label}
                <span className="text-slate-500">
                  {(values[field.key] ?? field.defaultValue).toLocaleString()}
                  {field.type === "percent" ? "%" : ""}
                </span>
              </span>
              <input
                type="range"
                min={field.min}
                max={field.max}
                step={field.step}
                value={values[field.key] ?? field.defaultValue}
                onChange={(event) => handleChange(field.key, event.target.value)}
                className={`h-2 w-full cursor-pointer rounded-full ${accentClassName}`}
                style={{ accentColor: "currentColor" }}
              />
            </label>
          ))}
        </div>

        <div className="flex flex-col gap-4 rounded-xl bg-slate-50 p-5">
          {config.resultFields.map((resultField) => (
            <div key={resultField.key} className="flex items-center justify-between">
              <span className="text-sm text-slate-600">{resultField.label}</span>
              <span
                className={
                  resultField.emphasis
                    ? `text-2xl font-bold ${accentClassName}`
                    : "text-sm font-semibold text-slate-900"
                }
              >
                {formatCalculatorValue(results[resultField.key] ?? 0, resultField.format)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {config.disclaimer && (
        <p className="mt-6 text-xs text-slate-400">{config.disclaimer}</p>
      )}
    </div>
  );
}
