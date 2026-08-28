export type SkillCategory = 
  | "compute" 
  | "infrastructure" 
  | "data" 
  | "security" 
  | "observability";

export interface SkillItem {
  name: string;
  role: string;
  isPrimary?: boolean;
}

export interface SkillGroup {
  id: SkillCategory;
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}
