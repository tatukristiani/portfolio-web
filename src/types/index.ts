// ================ TypeScript Interfaces ================
export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: React.ReactNode;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}