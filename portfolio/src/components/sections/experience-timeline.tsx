"use client";

import React from "react";
import { careerTimeline } from "@/config/experience";
import { Briefcase, Calendar, MapPin, CheckCircle, GitCommit, Layers } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      aria-label="Professional Experience and System Impact"
      className="relative w-full border-b border-zinc-800/80 bg-zinc-950 px-6 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-5xl space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400">
            <Briefcase className="h-3.5 w-3.5" />
            <span>04 // Track Record &amp; Impact</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Engineering Experience &amp; System Impact
          </h2>
          <p className="max-w-2xl text-base text-zinc-400 leading-relaxed">
            Production history focused on backend throughput, infrastructure reliability, automated DevSecOps, 
            and scalable software delivery.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-zinc-800 ml-3 md:ml-4 space-y-12">
          {careerTimeline.map((item) => (
            <div key={item.id} className="relative pl-6 md:pl-8 group">
              {/* Timeline Marker Node */}
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-zinc-700 bg-zinc-950 group-hover:border-emerald-400 group-hover:bg-emerald-950 transition-colors flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-zinc-400 group-hover:bg-emerald-400 transition-colors" />
              </div>

              {/* Experience Card */}
              <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 md:p-8 transition-all hover:border-zinc-700 hover:bg-zinc-900/70 space-y-6">
                
                {/* Role & Org Header */}
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-emerald-400 font-medium mt-0.5">
                      <span>{item.organization}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="font-mono text-xs text-zinc-400">{item.type}</span>
                    </div>
                  </div>

                  {/* Metadata Badge */}
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-400">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-zinc-500" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Role Summary */}
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {item.summary}
                </p>

                {/* System Impact Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 border-y border-zinc-800/60 py-4">
                  {item.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="space-y-0.5">
                      <div className="font-mono text-xs text-zinc-500 uppercase">{metric.label}</div>
                      <div className="font-mono text-base font-bold text-emerald-400">{metric.value}</div>
                    </div>
                  ))}
                </div>

                {/* Key Technical Highlights */}
                <div className="space-y-2.5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                    Key Architectural Contributions
                  </p>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-500 mr-1">
                    <Layers className="h-3 w-3" />
                    <span>STACK:</span>
                  </div>
                  {item.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded bg-zinc-800/80 px-2 py-0.5 font-mono text-[11px] text-zinc-300 border border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
