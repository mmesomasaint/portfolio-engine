import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const uptime = process.uptime();
  const timestamp = new Date().toISOString();

  return NextResponse.json(
    {
      status: "healthy",
      service: "portfolio-edge-node",
      timestamp,
      uptimeSeconds: Math.floor(uptime),
      environment: process.env.NODE_ENV || "production",
      region: process.env.VERCEL_REGION || "edge-global",
      checks: {
        runtime: "Node.js / V8 Edge",
        tls: "TLS 1.3 / Strict-Transport-Security",
      },
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
        "X-Content-Type-Options": "nosniff",
      },
    }
  );
}
