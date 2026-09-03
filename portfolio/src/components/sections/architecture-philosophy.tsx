"use client";

import React from "react";
import { engineeringPrinciples } from "@/config/philosophy";
import { 
  ShieldAlert, 
  GitFork, 
  Zap, 
  ActivitySquare, 
  Scale, 
  Binary, 
  Check, 
  X 
} from "lucide-react";

function renderPhilosophyIcon(iconName: string) {
  switch (iconName) {
    case "GitFork":
      return <GitFork className="h-5 w-5" />;
    case "Zap":
      return <Zap className="h-5 w-5" />;
    case "ActivitySquare":
      return <ActivitySquare className="h-5 w-5" />;
    case "Scale":
      return <Scale className="h-5 w-5" />;
    case "ShieldAlert":
    default:
      return <ShieldAlert className="h-5 w-5" />;
  }
}

export function ArchitecturePhilosophy() {
  return (
    <section 
      id="philosophy"
      aria-label="Engineering Standards and Architecture Philosophy"
      className="relative w-full border-b border-zinc-800/80 bg-zinc-950 px-6 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-5xl space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400">
            <Binary className="h-3.5 w-3.5" />
            <span>03 // Engineering Standards</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Architecture &amp; Reliability Philosophy
          </h2>
          <p className="max-w-2xl text-base text-zinc-400 leading-relaxed">
            The design patterns, reliability principles, and operational guardrails I enforce across every 
            distributed service and cloud deployment.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {engineeringPrinciples.map((pillar) => {

            return (
              <div
                key={pillar.id}
                className="flex flex-col justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/70"
              >
                <div className="space-y-5">
                  {/* Card Header & Code */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-emerald-400">
                        {renderPhilosophyIcon(pillar.iconName)}
                      </div>
                      <div>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-500">
                          {pillar.code}
                        </span>
                        <h3 className="text-lg font-semibold text-zinc-100">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Core Thesis Statement */}
                  <div className="rounded-md border-l-2 border-emerald-500/80 bg-zinc-900/80 px-3.5 py-2.5">
                    <p className="font-mono text-xs leading-relaxed text-zinc-300">
                      &quot;{pillar.coreThesis}&quot;
                    </p>
                  </div>

                  {/* Operational Rules */}
                  <div className="space-y-2.5">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                      Standard Operational Invariants
                    </p>
                    <ul className="space-y-2">
                      {pillar.rules.map((rule, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Anti-Pattern Guardrail Footer */}
                <div className="mt-6 border-t border-zinc-800/60 pt-4">
                  <div className="flex items-start gap-2 rounded bg-red-950/20 border border-red-900/30 p-2.5 text-[11px] text-zinc-400">
                    <X className="h-3.5 w-3.5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-red-300">Zero Tolerance: </span>
                      <span>{pillar.antiPatternsAvoided}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
