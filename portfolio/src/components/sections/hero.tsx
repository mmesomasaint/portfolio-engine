import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, Terminal, ShieldCheck, Cpu } from "lucide-react";

export function Hero() {
  return (
    <section 
      aria-label="Engineering Profile Overview" 
      className="relative w-full border-b border-zinc-800/80 bg-zinc-950 px-6 py-20 lg:py-28"
    >
      {/* Background Micro-Grid Pattern */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"
      />

      <div className="relative mx-auto max-w-5xl space-y-10">
        {/* Telemetry Status Bar */}
        <div className="inline-flex flex-wrap items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/90 px-3.5 py-1.5 text-xs font-mono text-zinc-400 backdrop-blur">
          <span className="flex h-2 w-2 items-center justify-center">
            <span className="absolute h-2 w-2 animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-zinc-200 uppercase tracking-wide">
            Status: {siteConfig.availability}
          </span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-400">{siteConfig.location}</span>
        </div>

        {/* Core Positioning */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-emerald-400">
            <Terminal className="h-4 w-4" />
            <span>{siteConfig.role}</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl max-w-4xl leading-[1.1]">
            Engineering high-throughput backends &amp; zero-trust cloud infrastructure.
          </h1>

          <p className="max-w-2xl text-base text-zinc-400 sm:text-lg leading-relaxed">
            Specialized in low-latency microservice architectures, infrastructure-as-code automation, 
            and resilient data pipelines built to withstand failure at scale.
          </p>
        </div>

        {/* Primary CTA & Direct Action Group */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-white hover:ring-2 hover:ring-zinc-400"
          >
            Review Case Studies
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/60 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
          >
            <Cpu className="h-4 w-4 text-zinc-500" />
            GitHub Repositories
          </Link>

          <Link
            href="/api/health"
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-zinc-800 px-4 py-2 text-xs font-mono text-zinc-500 transition hover:border-emerald-500/50 hover:text-emerald-400"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            Live Healthcheck (/api/health)
          </Link>
        </div>

        {/* Architectural Pillars / Baseline Metrics */}
        <div className="grid grid-cols-1 gap-4 border-t border-zinc-800/80 pt-8 sm:grid-cols-3">
          {siteConfig.metrics.map((item, index) => (
            <div 
              key={index}
              className="rounded-lg border border-zinc-800/50 bg-zinc-900/30 p-4 transition hover:border-zinc-700/80"
            >
              <p className="font-mono text-xs text-zinc-500 uppercase tracking-wide">{item.label}</p>
              <p className="mt-1 text-lg font-semibold text-zinc-200">{item.value}</p>
              <p className="mt-0.5 font-mono text-xs text-zinc-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
