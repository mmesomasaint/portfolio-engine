import { z } from "zod";

export const ProjectSchema = z.object({
  title: z.string(),
  slug: z.string(),
  tagline: z.string(),
  role: z.string(),
  domain: z.enum(["Backend", "DevOps", "Security", "Cloud", "Distributed Systems"]),
  featured: z.boolean().default(false),
  githubUrl: z.string().url(),
  liveUrl: z.string().url().optional(),
  stack: z.array(z.string()),
  metrics: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
      context: z.string(),
    })
  ),
  architectureHighlights: z.array(z.string()),
  securityPractices: z.array(z.string()),
});

export type ProjectFrontmatter = z.infer<typeof ProjectSchema>;
