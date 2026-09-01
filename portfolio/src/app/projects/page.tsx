import Link from "next/link";
import { getAllProjects } from "@/lib/mdx";
import { FolderGit2, ArrowRight, Cpu, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Case Studies & Systems RFCs | Mmesoma Saint",
  description: "Comprehensive architectural breakdowns, benchmarks, and threat models for backend systems.",
};

export default function ProjectsIndexPage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 lg:py-20 space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400">
          <FolderGit2 className="h-3.5 w-3.5" />
          <span>Case Studies Archive</span>
        </div>
        <h1 className="text-3xl font-extrabold text-zinc-100 sm:text-4xl">
          Systems Architecture &amp; Production RFCs
        </h1>
        <p className="max-w-2xl text-sm text-zinc-400">
          Every system is documented with its failure modes, design constraints, and verified throughput metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-zinc-700"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="rounded bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 font-mono text-[11px] font-medium text-emerald-400 uppercase">
                  {project.domain}
                </span>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-zinc-400 hover:text-emerald-400 flex items-center gap-1"
                >
                  <Cpu className="h-3 w-3" />
                  <span>Repo</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <h2 className="text-xl font-bold text-zinc-100">{project.title}</h2>
              <p className="text-xs text-zinc-400 leading-relaxed">{project.tagline}</p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.stack.map((t, idx) => (
                  <span key={idx} className="rounded bg-zinc-800/60 border border-zinc-700/40 px-2 py-0.5 font-mono text-[10px] text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-400 hover:text-emerald-300"
              >
                <span>Read Full System RFC</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
