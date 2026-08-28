export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  location: string;
  availability: "AVAILABLE" | "ENGAGED" | "SELECTIVE";
  links: {
    github: string;
    linkedin: string;
    email: string;
  };
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Mmesoma Saint",
  role: "Backend & Cloud Infrastructure & Security Engineer",
  tagline: "Architecting resilient, secure distributed systems and zero-overhead cloud pipelines that scale under load.",
  location: "Lagos, Nigeria (UTC+1) — Open to Global Remote",
  availability: "AVAILABLE",
  links: {
    github: "https://github.com/mmesomasaint",
    linkedin: "https://linkedin.com/in/mmesomasaint",
    email: "mmesomasaint@gmail.com",
  },
  metrics: [
    { label: "Core Focus", value: "Distributed Systems", detail: "FastAPI • Go • Node.js" },
    { label: "Infrastructure", value: "IaC & Kubernetes", detail: "Terraform • Docker • AWS" },
    { label: "Reliability Target", value: "99.99%", detail: "Zero-Trust & Fault Tolerance" },
  ],
};
