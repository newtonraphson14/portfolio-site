import type { ProjectCategory, ProjectNarrative } from "@/types/project";

type ProjectOverride = {
  title: string;
  summary: string;
  category: ProjectCategory;
  stack: string[];
  featured: boolean;
  demoUrl?: string;
  narrative: ProjectNarrative;
};

export const projectOverrides: Record<string, ProjectOverride> = {
  "ruwe-radial-ks-clustering": {
    title: "RUWE Radial KS Clustering",
    summary:
      "A reproducible open-cluster analysis workflow that combines Monte Carlo KMeans voting, Gaia color-magnitude diagrams, RUWE inspection, and radial Kolmogorov-Smirnov testing.",
    category: "Astrophysics",
    stack: [
      "Python",
      "NumPy",
      "Pandas",
      "scikit-learn",
      "Matplotlib",
      "Jupyter",
    ],
    featured: true,
    narrative: {
      challenge:
        "Cluster analysis workflows often stay trapped in notebooks, which makes reruns, comparisons, and public sharing harder than they should be.",
      build:
        "This repository cleans the original notebooks into a public research workflow with a CLI entry point, Monte Carlo membership inference, Gaia CMD views, RUWE-colored inspection, and radial KS testing.",
      outcome:
        "The result is a reusable analysis pipeline that can compare multiple clusters in one summarized output while keeping the research steps transparent.",
    },
  },
};
