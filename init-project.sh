#!/usr/bin/env bash
set -e

PROJECT_NAME="portfolio"

echo "==> Scaffolding Next.js App Router project: $PROJECT_NAME"
npx create-next-app@latest "$PROJECT_NAME" \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --use-npm

cd "$PROJECT_NAME"

echo "==> Installing enterprise dependencies..."
npm install lucide-react clsx tailwind-merge zod @next/mdx @mdx-js/loader @mdx-js/react gray-matter
npm install -D prettier commitlint @commitlint/config-conventional husky

echo "==> Creating full enterprise directory hierarchy..."
mkdir -p \
  .github/workflows \
  .husky \
  deploy/docker \
  deploy/terraform \
  deploy/k8s \
  content/projects \
  public/diagrams \
  public/fonts \
  src/app/\(site\) \
  src/app/projects/\[slug\] \
  src/app/api/health \
  src/components/layout \
  src/components/sections \
  src/components/projects \
  src/components/ui \
  src/config \
  src/lib \
  src/types

echo "==> Creating configuration, CI/CD, and infrastructure files..."

# 1. CI/CD & Security Workflows
touch .github/workflows/ci.yml
touch .github/workflows/security-scan.yml
touch .github/workflows/deploy.yml

# 2. Deployment, Containers & IaC
touch deploy/docker/Dockerfile
touch deploy/docker/.dockerignore
touch deploy/terraform/main.tf
touch deploy/terraform/variables.tf
touch deploy/terraform/outputs.tf
touch deploy/k8s/deployment.yaml
touch deploy/k8s/service.yaml

# 3. Content MDX Placeholders
touch content/projects/distributed-task-queue.mdx
touch content/projects/cloud-cost-optimizer.mdx
touch content/projects/zero-trust-auth-service.mdx

# 4. App Router Routes
# Clean default page/layout if created at src/app root so we use route groups cleanly
touch src/app/\(site\)/page.tsx
touch src/app/\(site\)/layout.tsx
touch src/app/\(site\)/not-found.tsx
touch src/app/projects/page.tsx
touch src/app/projects/\[slug\]/page.tsx
touch src/app/api/health/route.ts
touch src/app/robots.ts
touch src/app/sitemap.ts

# 5. Modular Components
touch src/components/layout/header.tsx
touch src/components/layout/footer.tsx
touch src/components/layout/container.tsx
touch src/components/sections/hero.tsx
touch src/components/sections/tech-matrix.tsx
touch src/components/sections/architecture-philosophy.tsx
touch src/components/sections/experience-timeline.tsx
touch src/components/sections/metrics-badge.tsx
touch src/components/projects/project-card.tsx
touch src/components/projects/architecture-diagram.tsx
touch src/components/projects/metric-callout.tsx

# 6. Config, Lib, & Types
touch src/config/site.ts
touch src/config/navigation.ts
touch src/lib/mdx.ts
touch src/lib/schema.ts
touch src/lib/utils.ts
touch src/types/project.ts
touch src/types/metrics.ts

# 7. Root Quality & Config files
touch .dockerignore
touch .prettierrc
touch commitlint.config.js

# Populate default .env.example
cat << 'EOF' > .env.example
# Node Environment
NODE_ENV=development

# Site Metadata
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Telemetry / Security
NEXT_PUBLIC_APP_VERSION=1.0.0
EOF

# Populate Prettier
cat << 'EOF' > .prettierrc
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
EOF

# Populate Commitlint
cat << 'EOF' > commitlint.config.js
module.exports = {
  extends: ["@commitlint/config-conventional"],
};
EOF

echo "==> Initializing Husky Git Hooks..."
npx husky init || true

echo "==> Project scaffolding is 100% complete and matches the exact architecture tree!"