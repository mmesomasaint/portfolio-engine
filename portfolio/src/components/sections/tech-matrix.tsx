import React from "react";
import { techStackMatrix } from "@/config/skills";
import { 
  Server, 
  Cloud, 
  Database, 
  Shield, 
  Activity, 
  CheckCircle2,
  TerminalSquare
} from "lucide-react";

// Dynamic Icon Dispatcher
function renderCategoryIcon(iconName: string) {
  switch (iconName) {
    case "Cloud":
      return <Cloud className="h-5 w-5" />;
    case "Database":
      return <Database className="h-5 w-5" />;
    case "Shield":
      return <Shield className="h-5 w-5" />;
    case "Activity":
      return <Activity className="h-5 w-5" />;
    case "Server":
    default:
      return <Server className="h-5 w-5" />;
  }
}

export function TechMatrix() {
  return (
    <section 
      id="competencies"
      aria-label="Core Competencies and Technical Stack"
      className="relative w-full border-b border-zinc-800/80 bg-zinc-950 px-6 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-5xl space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400">
            <TerminalSquare className="h-3.5 w-3.5" />
            <span>02 // Systems &amp; Stack Matrix</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Architectural Competencies &amp; Infrastructure
          </h2>
          <p className="max-w-2xl text-base text-zinc-400 leading-relaxed">
            Organized by architectural domain. Every technology listed has been deployed to production 
            with automated pipelines, least-privilege access, and monitoring.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techStackMatrix.map((group) => {
            return (
              <div
                key={group.id}
                className="flex flex-col justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/70"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-emerald-400">
                      {renderCategoryIcon(group.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-zinc-100">{group.title}</h3>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills List */}
                  <div className="border-t border-zinc-800/60 pt-4">
                    <ul className="space-y-2.5">
                      {group.skills.map((skill, sIdx) => (
                        <li key={sIdx} className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-200">
                            <CheckCircle2 className="h-3 w-3 text-emerald-500/80 shrink-0" />
                            <span className={skill.isPrimary ? "font-semibold text-zinc-100" : "text-zinc-300"}>
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[11px] text-right font-mono text-zinc-500">
                            {skill.role}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Indicator */}
                <div className="mt-6 flex items-center justify-between border-t border-zinc-800/40 pt-3 text-[11px] font-mono text-zinc-500">
                  <span>DOMAIN: {group.id.toUpperCase()}</span>
                  <span className="text-emerald-500/70">PROD-VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
