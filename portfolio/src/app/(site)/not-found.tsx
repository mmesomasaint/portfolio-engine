import Link from "next/link";
import { Terminal, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="rounded-full border border-zinc-800 bg-zinc-900/80 p-4 text-emerald-400 mb-6">
        <Terminal className="h-8 w-8" />
      </div>
      <span className="font-mono text-xs uppercase tracking-widest text-emerald-500">
        HTTP 404 // Resource Not Found
      </span>
      <h1 className="mt-2 text-3xl font-extrabold text-zinc-100 sm:text-4xl">
        System Node Unreachable
      </h1>
      <p className="mt-3 max-w-md text-sm text-zinc-400">
        The requested routing path does not exist on this cluster or has been migrated.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-2 font-mono text-xs font-semibold text-zinc-950 transition hover:bg-white"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Return to Primary Node
      </Link>
    </div>
  );
}
