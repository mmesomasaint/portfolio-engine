import { SkillGroup } from "@/types/skills";

export const techStackMatrix: SkillGroup[] = [
  {
    id: "compute",
    title: "Backend & Distributed Systems",
    iconName: "Server",
    description: "High-throughput asynchronous runtimes, RESTful/gRPC APIs, and event-driven worker services.",
    skills: [
      { name: "Python / FastAPI", role: "Async I/O Microservices & REST", isPrimary: true },
      { name: "TypeScript / Node.js", role: "Internal APIs & Edge Runtimes", isPrimary: true },
      { name: "Go (Golang)", role: "Concurrency & Low-Latency Services" },
      { name: "Celery / Redis Queue", role: "Distributed Task Pipelines", isPrimary: true },
      { name: "gRPC & Protocol Buffers", role: "Inter-Service RPC" },
    ],
  },
  {
    id: "infrastructure",
    title: "Cloud Infrastructure & Orchestration",
    iconName: "Cloud",
    description: "Declarative Infrastructure as Code (IaC), container lifecycle management, and immutable deployments.",
    skills: [
      { name: "Terraform / OpenTofu", role: "Multi-Environment Cloud IaC", isPrimary: true },
      { name: "Docker & Multi-Stage Builds", role: "Minimal Attack Surface Images", isPrimary: true },
      { name: "Kubernetes (K8s)", role: "Workload Orchestration & Helm" },
      { name: "AWS (ECS, RDS, S3, IAM)", role: "Cloud Systems Architecture", isPrimary: true },
      { name: "Linux / POSIX Shell", role: "Kernel Hardening & Automation", isPrimary: true },
    ],
  },
  {
    id: "data",
    title: "Data Persistence & Caching",
    iconName: "Database",
    description: "Relational modeling, indexing strategies, cache-aside layers, and migration versioning.",
    skills: [
      { name: "PostgreSQL", role: "Schema Design, Indexes, Partitioning", isPrimary: true },
      { name: "Redis", role: "Distributed Caching & Rate Limiting", isPrimary: true },
      { name: "SQLAlchemy / Prisma", role: "Type-Safe Query Mapping & Migrations" },
      { name: "Alembic", role: "Deterministic Database Migrations" },
      { name: "Supabase / Managed DBs", role: "Row-Level Security & Edge Sync" },
    ],
  },
  {
    id: "security",
    title: "DevSecOps & Zero-Trust Security",
    iconName: "Shield",
    description: "Automated vulnerability scanning, secret detection, identity protocols, and least-privilege IAM.",
    skills: [
      { name: "GitHub Actions CI/CD", role: "Automated Build/Test/Deploy", isPrimary: true },
      { name: "Trivy / Snyk / SAST", role: "Container & Dependency Scanning", isPrimary: true },
      { name: "IAM & Least Privilege", role: "Zero-Trust Role Architectures", isPrimary: true },
      { name: "JWT / OAuth2 / OIDC", role: "Stateless & Delegated Auth" },
      { name: "Gitleaks / Secret Mgt", role: "Pre-Commit & Pipeline Interception" },
    ],
  },
  {
    id: "observability",
    title: "Observability & System Health",
    iconName: "Activity",
    description: "Structured logging, metrics instrumentation, health probing, and error budget alerting.",
    skills: [
      { name: "Prometheus & Grafana", role: "Metric Scraping & Dashboards", isPrimary: true },
      { name: "OpenTelemetry (OTel)", role: "Distributed Tracing" },
      { name: "Structured JSON Logging", role: "Log Aggregation & Ingestion", isPrimary: true },
      { name: "Health Checks & Probes", role: "Liveness/Readiness Endpoints" },
    ],
  },
];
