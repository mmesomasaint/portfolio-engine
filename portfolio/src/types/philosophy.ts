export interface PhilosophyPillar {
  id: string;
  code: string;
  title: string;
  coreThesis: string;
  iconName: "ShieldAlert" | "GitFork" | "Zap" | "ActivitySquare" | "Scale";
  rules: string[];
  antiPatternsAvoided: string;
}
