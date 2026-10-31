export type ProjectStatus = "Completed" | "In Development";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  filter: string;
  status: ProjectStatus;
  featured?: boolean;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  problem?: string;
  features: string[];
  solution?: string;
  challenges?: string[];
  gallery?: string[];
}

export interface Experience {
  role: string;
  company: string;
  parentCompany: string;
  duration: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}
