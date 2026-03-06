export type ProjectCategory =
  | "Scientific Computing"
  | "Data Processing"
  | "Cloud Infrastructure"
  | "Tools"
  | "Astrophysics";

export type ProjectNarrative = {
  challenge: string;
  build: string;
  outcome: string;
};

export type CompletedProject = {
  slug: string;
  repo: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  stack: string[];
  status: "Completed";
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  updatedAt?: string;
  language?: string | null;
  stars: number;
  topics: string[];
  repositorySummary?: string | null;
  narrative: ProjectNarrative;
};

export type OngoingProject = {
  slug: string;
  title: string;
  currentFocus: string;
  status: "Ongoing";
};

export type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  updated_at: string;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  language: string | null;
  topics: string[];
};

export type GitHubHighlight = {
  name: string;
  htmlUrl: string;
  description: string | null;
  updatedAt: string;
  language: string | null;
  stars: number;
  topics: string[];
};

export type FocusArea = {
  title: string;
  description: string;
};

export type SiteIdentity = {
  name: string;
  role: string;
  headline: string;
  heroSummary: string;
  introParagraphs: string[];
  availability: string;
  email: string;
  github: string;
  githubUsername: string;
  linkedin: string;
};
