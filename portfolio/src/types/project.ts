export interface ProjectMetric {
  label: string;
  value: string;
  context: string;
}

export interface ProjectMetadata {
  title: string;
  slug: string;
  tagline: string;
  role: string;
  domain: "Backend" | "DevOps" | "Security" | "Cloud" | "Distributed Systems";
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  stack: string[];
  metrics: ProjectMetric[];
  architectureHighlights: string[];
  securityPractices: string[];
}

export interface ProjectPost {
  meta: ProjectMetadata;
  content: string;
}
