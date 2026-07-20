"use client";

import { useState } from "react";
import { ArrowRight, Gauge } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { READINESS_DIMENSIONS, SAMPLE_READINESS_RESULT } from "./consulting-data";

/**
 * ReadinessAssessment
 *
 * Static, no-backend AI readiness assessment. Selecting a level per
 * dimension is a purely visual engagement mechanic (selection state
 * only, nothing computed or submitted); revealing the result always
 * shows the same clearly-labeled sample result, so the section is
 * honest about not calculating a real, personalized score. The result
 * itself exists to drive the visitor toward booking a real assessment
 * on a discovery call.
 */
export function ReadinessAssessment() {
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  function selectLevel(dimensionId: string, level: string) {
    setSelections((previous) => ({ ...previous, [dimensionId]: level }));
  }

  return (
    <Section id="readiness-assessment" className="bg-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-blue-600">Where Do You Stand?</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            AI Readiness Assessment
          </h2>
          <p className="mt-4 text-slate-600">
            Get a feel for how AI-ready your organization is across four key dimensions. This is
            a quick self-check, not a substitute for a real assessment on a discovery call.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {READINESS_DIMENSIONS.map((dimension) => {
            const Icon = dimension.icon;
            const selected = selections[dimension.id];
            return (
              <div
                key={dimension.id}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{dimension.label}</h3>
                    <p className="mt-1 text-sm text-slate-600">{dimension.description}</p>
                  </div>
                </div>
                <div
                  className="flex flex-wrap gap-2"
                  role="group"
                  aria-label={`Self-rate: ${dimension.label}`}
                >
                  {dimension.levels.map((level) => {
                    const isSelected = selected === level;
                    return (
                      <button
                        key={level}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => selectLevel(dimension.id, level)}
                        className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                          isSelected
                            ? "border-blue-600 bg-blue-600 text-white"
                            : "border-slate-300 bg-white text-slate-600 hover:border-blue-400"
                        }`}
                      >
                        {level}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center gap-6">
          <Button
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-500"
            onClick={() => setShowResult(true)}
          >
            <Gauge className="h-4 w-4" aria-hidden="true" />
            Show My Sample Result
          </Button>

          <div aria-live="polite" className="w-full">
            {showResult && (
              <div className="mx-auto max-w-xl rounded-2xl border border-blue-200 bg-blue-50 p-8 text-center">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                  {SAMPLE_READINESS_RESULT.scoreLabel}
                </p>
                <p className="mt-2 text-5xl font-semibold tracking-tight text-blue-700">
                  {SAMPLE_READINESS_RESULT.score}
                  <span className="text-2xl text-blue-400">/{SAMPLE_READINESS_RESULT.maxScore}</span>
                </p>
                <p className="mt-1 text-sm font-medium text-blue-700">
                  {SAMPLE_READINESS_RESULT.tier}
                </p>
                <p className="mt-4 text-sm text-slate-600">{SAMPLE_READINESS_RESULT.summary}</p>
                <p className="mt-2 text-sm text-slate-600">
                  {SAMPLE_READINESS_RESULT.recommendation}
                </p>
                <Button className="mt-6" asChild>
                  <a href="#consultation">
                    Book Your Free AI Discovery Call
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
