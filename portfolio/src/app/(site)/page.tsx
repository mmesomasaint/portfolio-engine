// src/app/(site)/page.tsx
import { Hero } from "@/components/sections/hero";
import { TechMatrix } from "@/components/sections/tech-matrix";
import { ArchitecturePhilosophy } from "@/components/sections/architecture-philosophy";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-400">
      <Hero />
      <TechMatrix />
      <ArchitecturePhilosophy />
    </main>
  );
}
