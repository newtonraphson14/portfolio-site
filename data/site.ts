import type { FocusArea, SiteIdentity } from "@/types/project";

export const siteIdentity: SiteIdentity = {
  name: "Ikbar Faiz",
  role: "Computer Science student at BINUS University",
  headline: "Astrophysics, Scientific Computing, and Cloud Infrastructure",
  heroSummary:
    "I build research and infrastructure systems that carry raw observations into reproducible analysis, deployment, and usable technical outcomes.",
  introParagraphs: [
    "I am a second-year Computer Science student at BINUS University working at the intersection of astrophysics, scientific computing, and infrastructure engineering.",
    "My projects focus on survey-driven data analysis, reproducible Python workflows, and the cloud systems required to keep research execution clean and repeatable.",
    "This portfolio keeps completed work curated from GitHub and ongoing work manual, so the site stays intentional instead of becoming a raw repository feed.",
  ],
  availability:
    "Based in Indonesia. Interested in research software, data-intensive engineering, and infrastructure-heavy technical work.",
  email: "ikbarfaiz14@gmail.com",
  github: "https://github.com/newtonraphson14",
  githubUsername: "newtonraphson14",
  linkedin: "https://linkedin.com/in/ikbarfaiz",
};

export const technicalFocusAreas: FocusArea[] = [
  {
    title: "Astrophysics",
    description:
      "Survey data analysis, stellar cluster membership inference, color-magnitude diagram inspection, and astrometric quality assessment using Gaia-derived catalogs.",
  },
  {
    title: "Scientific Computing",
    description:
      "Scientific Python workflows, Monte Carlo methods, data preparation pipelines, and reproducible analysis systems for research and experimentation.",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Terraform modules, containerized deployments, Linux operations, and structured cloud environments across Azure and AWS.",
  },
];

export const currentDirection: string[] = [
  "Open-cluster analysis and recurrent nova research",
  "Scientific Python tooling for data preparation and inference",
  "Cloud infrastructure with Azure, Docker, Terraform, and Linux automation",
];
