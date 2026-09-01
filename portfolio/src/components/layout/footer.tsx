import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Server, Radio } from "lucide-react";

export function Footer() {
  const buildYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-800/80 bg-zinc-950 px-6 py-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-mono text-sm font-bold text-zinc-200">
              <Server className="h-4 w-4 text-emerald-400" />
              <span>{siteConfig.name}</span>
            </div>
            <p className="text-xs text-zinc-500 font-mono">
              Designed with strict CSP, zero-trust principles, and standalone containerization.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-zinc-400">
            <Link
              href="/api/health"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-emerald-400 transition"
            >
              <Radio className="h-3.5 w-3.5 text-emerald-500" />
              <span>System Healthcheck</span>
            </Link>
            <span className="text-zinc-700">|</span>
            <div className="inline-flex items-center gap-1 text-zinc-500">
              <ShieldCheck className="h-3.5 w-3.5 text-zinc-400" />
              <span>HSTS / CSP Hardened</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-zinc-900 pt-6 text-xs text-zinc-600 font-mono sm:flex-row sm:items-center sm:justify-between">
          <p>© {buildYear} {siteConfig.name}. All systems operational.</p>
          <p>Next.js App Router • Strict TypeScript • Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
