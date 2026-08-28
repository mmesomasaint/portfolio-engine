export interface ImpactMetric {
  label: string;
  value: string;
}

export interface ExperienceRole {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "Full-time" | "Contract" | "Venture" | "Open-Source";
  summary: string;
  stack: string[];
  metrics: ImpactMetric[];
  highlights: string[];
}
