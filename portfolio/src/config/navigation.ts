export interface NavItem {
  title: string;
  href: string;
  isExternal?: boolean;
}

export const navigationConfig: { mainNav: NavItem[] } = {
  mainNav: [
    { title: "Competencies", href: "#competencies" },
    { title: "Philosophy", href: "#philosophy" },
    { title: "Experience", href: "#experience" },
    { title: "Systems & Projects", href: "#projects" },
  ],
};
