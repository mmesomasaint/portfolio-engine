import { PhilosophyPillar } from "@/types/philosophy";

export const engineeringPrinciples: PhilosophyPillar[] = [
  {
    id: "zero-trust",
    code: "SEC-01",
    title: "Zero-Trust & Shift-Left Security",
    coreThesis: "Assume perimeter breach. Trust nothing implicitly inside or outside the network boundary.",
    iconName: "ShieldAlert",
    rules: [
      "Strict least-privilege IAM policies with short-lived STS credentials.",
      "Automated SAST, DAST, and container CVE scanning gating every PR merge.",
      "Zero plain secrets in repos; dynamic retrieval via Vault or KMS.",
    ],
    antiPatternsAvoided: "Hardcoded API keys, wildcard IAM permissions (*:*), and unauthenticated internal microservices.",
  },
  {
    id: "immutable-iac",
    code: "OPS-02",
    title: "Immutable Infrastructure as Code",
    coreThesis: "Manual server configuration is technical debt. Infrastructure must be versioned, idempotent, and ephemeral.",
    iconName: "GitFork",
    rules: [
      "100% cloud resources declared in modular Terraform / OpenTofu.",
      "No manual SSH tweaks in production; roll forward via immutable container images.",
      "Isolated state locking with automated drift detection.",
    ],
    antiPatternsAvoided: "Snowflake servers, unversioned cloud consoles clicks, and configuration drift across environments.",
  },
  {
    id: "fault-tolerance",
    code: "RES-03",
    title: "Fault Tolerance & Graceful Degradation",
    coreThesis: "Systems fail constantly. The goal is uninterrupted availability and deterministic recovery under partial outages.",
    iconName: "Zap",
    rules: [
      "Idempotent API handlers and consumer queues with dead-letter recovery (DLQ).",
      "Circuit breakers, exponential backoff, and distributed rate-limiting.",
      "Stateless compute layers to allow instantaneous horizontal scaling.",
    ],
    antiPatternsAvoided: "Cascading failures, unhandled queue poisoning, and non-idempotent billing/mutation endpoints.",
  },
  {
    id: "observability",
    code: "OBS-04",
    title: "Observability-Driven Reliability",
    coreThesis: "If it is not measured, it is already broken. Telemetry must precede production deployment.",
    iconName: "ActivitySquare",
    rules: [
      "Structured JSON logs enriched with correlation IDs across distributed boundaries.",
      "Prometheus metrics covering the 4 Golden Signals: Latency, Traffic, Errors, Saturation.",
      "Health probes testing real downstream dependencies, not just HTTP 200 ping.",
    ],
    antiPatternsAvoided: "Opaque log dumps, unmonitored background workers, and reacting to outages after users report them.",
  },
  {
    id: "cost-efficiency",
    code: "PRF-05",
    title: "Cost-Aware & Efficient Compute",
    coreThesis: "Scaling is not just throwing CPU cores at latency bottlenecks. Architecture must optimize cost-per-request.",
    iconName: "Scale",
    rules: [
      "Asynchronous background offloading for long-running computational jobs.",
      "Cache-aside layers via Redis to shield database read replicas.",
      "Right-sized container resource requests/limits to avoid node over-provisioning.",
    ],
    antiPatternsAvoided: "Heavy synchronous blocking requests, unbounded memory allocations, and idle cloud resource waste.",
  },
];
