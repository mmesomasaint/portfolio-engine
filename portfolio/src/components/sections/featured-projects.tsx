import Link from "next/link";
import { 
  FolderGit2, 
  ExternalLink, 
  ShieldCheck, 
  Cpu, 
  ArrowRight 
} from "lucide-react";

interface ProjectData {
  title: string;
  slug: string;
  tagline: string;
  domain: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
}

const projects: ProjectData[] = [
  {
    title: "AutoInvoiceGenerator",
    slug: "autoinvoicegenerator",
    tagline: "Asynchronous high-volume document rendering microservice with isolated headless pipelines.",
    domain: "Distributed Systems",
    stack: ["FastAPI", "Python", "PostgreSQL", "Redis", "WeasyPrint", "Docker"],
    metrics: [
      { label: "Throughput", value: "250+ docs/sec" },
      { label: "P99 Latency", value: "<180ms" }
    ],
    githubUrl: "https://github.com/mmesomasaint/autoinvoicegenerator",
  },
  {
    title: "DisputeDrop Engine",
    slug: "disputedrop-engine",
    tagline: "High-integrity chargeback automation and idempotent financial webhook processor.",
    domain: "Security",
    stack: ["FastAPI", "Python", "Redis", "PostgreSQL", "HMAC-SHA256"],
    metrics: [
      { label: "Processing", value: "100% Exactly-Once" },
      { label: "Ingestion Latency", value: "<45ms" }
    ],
    githubUrl: "https://github.com/mmesomasaint/disputedrop-engine",
  },
  {
    title: "ReceiptLens Engine",
    slug: "receiptlens-engine",
    tagline: "Resilient document ingestion and heuristic data extraction pipeline.",
    domain: "Backend",
    stack: ["FastAPI", "OpenCV", "Tesseract", "Pydantic", "Docker"],
    metrics: [
      { label: "Accuracy", value: "97.8%" },
      { label: "Throughput", value: "50 Tasks/Pod" }
    ],
    githubUrl: "https://github.com/mmesomasaint/receiptlens-engine",
  },
  {
    title: "Store Sentinel",
    slug: "store-sentinel",
    tagline: "Autonomous health monitoring, synthetic probing, and anomaly alerting for storefronts.",
    domain: "DevOps",
    stack: ["Go", "Python", "Prometheus", "Grafana", "Docker"],
    metrics: [
      { label: "Detection SLA", value: "<30s" },
      { label: "False Positive", value: "<0.1%" }
    ],
    githubUrl: "https://github.com/mmesomasaint/store-sentinel",
  },
  {
    title: "Alert Bridge",
    slug: "alert-bridge",
    tagline: "Fault-tolerant webhook router, alert deduplication, and distributed dispatch engine.",
    domain: "Cloud",
    stack: ["FastAPI", "Redis", "PostgreSQL", "AsyncIO", "Docker"],
    metrics: [
      { label: "Deduplication", value: "100% Filtered" },
      { label: "Dispatch Latency", value: "<60ms" }
    ],
    githubUrl: "https://github.com/mmesomasaint/alert-bridge",
  },
];

export function FeaturedProjects() {
  return (
    <section 
      id="projects"
      aria-label="Systems Architecture and Backend Case Studies"
      className="relative w-full border-b border-zinc-800/80 bg-zinc-950 px-6 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-5xl space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400">
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>05 // Production Systems &amp; Case Studies</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Engineered Backend &amp; Cloud Architectures
          </h2>
          <p className="max-w-2xl text-base text-zinc-400 leading-relaxed">
            In-depth architectural breakdowns of distributed services, zero-trust webhook pipelines, 
            and automated observability systems.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="flex flex-col justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/70"
            >
              <div className="space-y-4">
                {/* Domain & Source Links */}
                <div className="flex items-center justify-between">
                  <span className="rounded bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 font-mono text-[11px] font-semibold text-emerald-400 uppercase">
                    {project.domain}
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-zinc-400 hover:text-emerald-400 transition"
                  >
                    <Cpu className="h-3.5 w-3.5" />
                    <span>Source</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-zinc-100">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Benchmark Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 border-y border-zinc-800/60 py-3">
                  {project.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="font-mono text-[10px] uppercase text-zinc-500">{m.label}</div>
                      <div className="font-mono text-sm font-bold text-zinc-200">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.stack.map((t, idx) => (
                    <span 
                      key={idx}
                      className="rounded bg-zinc-800/60 px-2 py-0.5 font-mono text-[11px] text-zinc-400 border border-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Deep-Dive RFC Link */}
              <div className="mt-6 pt-4 border-t border-zinc-800/60">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition"
                >
                  <span>Read Architecture RFC &amp; Failure Modes</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
