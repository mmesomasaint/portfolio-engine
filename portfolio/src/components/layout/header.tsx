"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { navigationConfig } from "@/config/navigation";
import { Terminal, Github, Linkedin, Mail } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Node / Brand ID */}
        <Link 
          href="/" 
          className="flex items-center gap-2 font-mono text-sm font-bold text-zinc-100 transition hover:text-emerald-400"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded border border-zinc-800 bg-zinc-900 text-emerald-400">
            <Terminal className="h-4 w-4" />
          </div>
          <span>mmesoma.sys</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navigationConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-xs text-zinc-400 transition hover:text-zinc-100"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Direct Action / Outbound Channels */}
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex h-8 w-8 items-center justify-center rounded border border-zinc-800 bg-zinc-900/60 text-zinc-400 transition hover:border-zinc-700 hover:text-zinc-100"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-8 w-8 items-center justify-center rounded border border-zinc-800 bg-zinc-900/60 text-zinc-400 transition hover:border-zinc-700 hover:text-zinc-100"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.links.email}
            aria-label="Send Direct Email"
            className="hidden sm:inline-flex items-center gap-1.5 rounded border border-emerald-900/60 bg-emerald-950/40 px-3 py-1 font-mono text-xs text-emerald-400 transition hover:bg-emerald-900/40"
          >
            <Mail className="h-3 w-3" />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </header>
  );
}
