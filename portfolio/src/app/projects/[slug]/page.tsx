"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/mdx";
import { ArrowLeft, Cpu, ExternalLink, ShieldAlert, CheckCircle2, Zap } from "lucide-react";

interface ProjectPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Not Found" };

  return {
    title: `${project.meta.title} — Architecture RFC`,
    description: project.meta.tagline,
  };
}

export default function ProjectRFCPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const { meta, content } = project;

  return (
    <article className="mx-auto max-w-4xl px-6 py-16 lg:py-20 space-y-12">
      {/* Back Navigation */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 hover:text-emerald-400 transition"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to Systems Overview
      </Link>

      {/* Header Info */}
      <div className="space-y-4 border-b border-zinc-800 pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-0.5 font-mono text-xs font-medium text-emerald-400 uppercase">
            RFC // {meta.domain}
          </span>
          <span className="font-mono text-xs text-zinc-500">Role: {meta.role}</span>
        </div>

        <h1 className="text-3xl font-extrabold text-zinc-100 sm:text-5xl">{meta.title}</h1>
        <p className="text-lg text-zinc-300 leading-relaxed">{meta.tagline}</p>

        <div className="flex items-center gap-4 pt-2">
          <a
            href={meta.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 px-4 py-2 font-mono text-xs font-medium text-zinc-200 hover:bg-zinc-800 transition"
          >
            <Cpu className="h-4 w-4 text-emerald-400" />
            Inspect GitHub Repository
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Benchmarks Grid */}
      <div className="space-y-3">
        <h2 className="font-mono text-xs uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
          <Zap className="h-3.5 w-3.5" />
          Production Benchmarks &amp; Targets
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {meta.metrics.map((m, idx) => (
            <div key={idx} className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4 space-y-1">
              <span className="font-mono text-[11px] text-zinc-500 uppercase">{m.label}</span>
              <p className="font-mono text-xl font-bold text-emerald-400">{m.value}</p>
              <p className="font-mono text-[11px] text-zinc-400">{m.context}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Architectural Guardrails & Security Policies */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-3">
          <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-300 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            System Architecture Invariants
          </h3>
          <ul className="space-y-2">
            {meta.architectureHighlights.map((h, idx) => (
              <li key={idx} className="text-xs text-zinc-300 leading-relaxed flex items-start gap-2">
                <span className="text-emerald-500 font-mono mt-0.5">•</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-3">
          <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-300 flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-amber-400" />
            Security &amp; Threat Mitigations
          </h3>
          <ul className="space-y-2">
            {meta.securityPractices.map((s, idx) => (
              <li key={idx} className="text-xs text-zinc-300 leading-relaxed flex items-start gap-2">
                <span className="text-amber-500 font-mono mt-0.5">•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* MDX Raw Content Body */}
      <div className="border-t border-zinc-800 pt-8">
        <div className="prose prose-invert max-w-none text-zinc-300 text-sm leading-relaxed space-y-6">
          <pre className="p-4 rounded-lg bg-zinc-900/80 border border-zinc-800 font-mono text-xs text-zinc-300 whitespace-pre-wrap">
            {content}
          </pre>
        </div>
      </div>
    </article>
  );
}
