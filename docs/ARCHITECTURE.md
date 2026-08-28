# Portfolio Architecture

## Production Repository Directory Structure

```Plaintext
.
├── .github/
│   └── workflows/
│       ├── ci.yml               # Linting, type-check, unit tests, secret scanning (TruffleHog/Gitleaks)
│       ├── security-scan.yml   # Trivy container scan, Snyk/CodeQL SAST
│       └── deploy.yml          # Automated deployment pipeline (Docker build, push, infra rollout)
├── .husky/                      # Git hooks (pre-commit lint-staged, commitlint)
├── deploy/                      # Infrastructure & Container orchestration
│   ├── docker/
│   │   ├── Dockerfile           # Multi-stage production build (standalone output, non-root user)
│   │   └── .dockerignore
│   ├── terraform/               # Cloud infrastructure provisioning
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   └── outputs.tf
│   └── k8s/                     # (Optional) Deployment & Service manifests
│       ├── deployment.yaml
│       └── service.yaml
├── content/                     # Data source for case studies & systems documentation
│   └── projects/
│       ├── distributed-task-queue.mdx
│       ├── cloud-cost-optimizer.mdx
│       └── zero-trust-auth-service.mdx
├── public/                      # Static assets
│   ├── diagrams/                # Architectural C4 / data-flow SVG assets
│   ├── fonts/
│   └── favicon.ico
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── (site)/              # Route group for main site layout
│   │   │   ├── page.tsx         # Hero, Tech Matrix, Philosophy, Featured Projects
│   │   │   ├── layout.tsx       # Root metadata, fonts, header/footer
│   │   │   └── not-found.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx         # Complete index of case studies
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # Dynamic MDX case study renderer
│   │   ├── api/
│   │   │   └── health/
│   │   │       └── route.ts     # Health check endpoint (uptime, commit SHA, latency)
│   │   ├── globals.css          # Tailwind base & system utility tokens
│   │   ├── robots.ts            # Dynamic SEO robots configuration
│   │   └── sitemap.ts           # Dynamic sitemap generation
│   ├── components/              # Modular UI components
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   └── container.tsx
│   │   ├── sections/            # Portfolio-specific section components
│   │   │   ├── hero.tsx
│   │   │   ├── tech-matrix.tsx
│   │   │   ├── architecture-philosophy.tsx
│   │   │   ├── experience-timeline.tsx
│   │   │   └── metrics-badge.tsx
│   │   ├── projects/
│   │   │   ├── project-card.tsx
│   │   │   ├── architecture-diagram.tsx
│   │   │   └── metric-callout.tsx
│   │   └── ui/                  # Reusable low-level primitives (buttons, badges, code blocks)
│   ├── config/                  # Static site configurations
│   │   ├── site.ts              # Global metadata, social URLs, open-graph defaults
│   │   └── navigation.ts
│   ├── lib/                     # Core utility libraries & integrations
│   │   ├── mdx.ts               # MDX parser, metadata extractor, and frontmatter reader
│   │   ├── schema.ts            # Zod schemas for validating project frontmatter
│   │   └── utils.ts             # Tailwind class mergers (clsx, tailwind-merge)
│   └── types/                   # Shared TypeScript definitions
│       ├── project.ts
│       └── metrics.ts
├── .dockerignore
├── .env.example                 # Documented environment variable template
├── .eslintrc.json               # Strict ESLint configuration
├── .gitignore
├── .prettierrc                  # Code formatting standards
├── commitlint.config.js         # Conventional Commits enforcement
├── next.config.mjs              # Security headers (CSP, HSTS, X-Frame-Options) & standalone output
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json                # Strict mode enabled, custom path aliases (@/*)
```

## Key Architectural Standards Built into This Layout

- Isolated Content Layer (`/content` + `/src/lib/schema.ts`): Case studies live in version-controlled `.mdx` files validated via Zod schemas at build time. Missing benchmark data or architectural diagrams fail the build.
- Production Standalone Docker Setup (`/deploy/docker`): Uses Next.js `output: 'standalone'` in a multi-stage non-root container, stripping unnecessary dependencies for minimum container size and attack surface.
- Strict Security Headers (`next.config.mjs`): Built-in CSP (Content Security Policy), HSTS, and frame-guard configuration directly demonstrating security awareness.
- Automated Guardrails (`.github/` + `.husky`): Type checking, unit tests, secret scanning, and conventional commit linting run on every push.
