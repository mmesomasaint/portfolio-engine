import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ProjectSchema, type ProjectFrontmatter } from "@/lib/schema";
import { ProjectPost } from "@/types/project";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export function getAllProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) return [];
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.mdx?$/, ""));
}

export function getProjectBySlug(slug: string): ProjectPost | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Validate frontmatter through Zod schema
    const validatedData = ProjectSchema.parse(data);

    return {
      meta: validatedData,
      content,
    };
  } catch (err) {
    console.error(`Error loading MDX for slug: ${slug}`, err);
    return null;
  }
}

export function getAllProjects(): ProjectFrontmatter[] {
  const slugs = getAllProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is ProjectPost => project !== null)
    .map((project) => project.meta);

  return projects;
}
