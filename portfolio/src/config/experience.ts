import { ExperienceRole } from "@/types/experience";

export const careerTimeline: ExperienceRole[] = [
  {
    id: "optima-logic",
    role: "Lead Systems Architect & Founder",
    organization: "Optima Logic",
    location: "Remote / Lagos, NG",
    period: "2024 — Present",
    type: "Venture",
    summary: "Spearheaded technical architecture and automated infrastructure delivery for distributed applications, microservices, and internal client tooling.",
    stack: ["FastAPI", "Python", "Docker", "Terraform", "PostgreSQL", "Redis", "AWS"],
    metrics: [
      { label: "Deployment Velocity", value: "3x Faster" },
      { label: "API Uptime SLA", value: "99.95%" },
      { label: "P95 Latency", value: "<120ms" },
    ],
    highlights: [
      "Architected containerized microservice backends with automated CI/CD pipelines, slashing release cycle times by over 65%.",
      "Designed zero-trust IAM policies, VPC networking, and Terraform IaC modules for multi-tenant customer cloud workloads.",
      "Engineered asynchronous processing workers using Redis queues to offload heavy I/O and PDF/report generation tasks.",
    ],
  },
  {
    id: "backend-systems-eng",
    role: "Backend & Cloud Infrastructure Engineer",
    organization: "Enterprise Systems & Consulting",
    location: "Remote",
    period: "2023 — 2024",
    type: "Contract",
    summary: "Built high-reliability REST APIs, optimized SQL execution paths, and provisioned resilient container clusters for cloud deployments.",
    stack: ["Python", "Django", "PostgreSQL", "GitHub Actions", "Docker", "Linux"],
    metrics: [
      { label: "Query Optimization", value: "45% Reduction" },
      { label: "Pipeline Security", value: "100% Automated" },
    ],
    highlights: [
      "Refactored relational database queries, query execution plans, and indexing strategies, dropping average query execution times significantly.",
      "Standardized Docker multi-stage build profiles across engineering teams to shrink image footprints and eliminate build vulnerabilities.",
      "Integrated Trivy container CVE scans and TruffleHog secret scanning to gate automated production pull requests.",
    ],
  },
  {
    id: "ai-eval-systems",
    role: "Technical Systems & Code Evaluator",
    organization: "Specialized AI Data Platforms",
    location: "Remote",
    period: "2023 — 2024",
    type: "Contract",
    summary: "Audited complex algorithmic code bases, evaluated code correctness, and benchmarked multi-language system scripts.",
    stack: ["Python", "TypeScript", "Algorithms", "System Design", "Benchmarking"],
    metrics: [
      { label: "Evaluations Delivered", value: "500+" },
      { label: "Accuracy Benchmark", value: "99.2%" },
    ],
    highlights: [
      "Rigidly audited asynchronous logic, edge-case handling, and runtime complexity in production-level code submissions.",
      "Designed rigorous unit and integration test harnesses to validate algorithmic reliability and deterministic outputs.",
    ],
  },
];
