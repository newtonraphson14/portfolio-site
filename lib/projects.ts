import { cache } from "react";
import { featuredRepos } from "@/data/featured-repos";
import { ongoingWork } from "@/data/ongoing-work";
import { projectOverrides } from "@/data/project-overrides";
import { siteIdentity, technicalFocusAreas } from "@/data/site";
import { getGitHubRepos } from "@/lib/github";
import { slugify } from "@/lib/utils";
import type { CompletedProject, GitHubHighlight } from "@/types/project";

const GITHUB_BASE_URL = `https://github.com/${siteIdentity.githubUsername}`;

export const getCompletedProjects = cache(async (): Promise<
  CompletedProject[]
> => {
  const repos = await getGitHubRepos();
  const repoMap = new Map(repos.map((repo) => [repo.name, repo]));

  return featuredRepos.reduce<CompletedProject[]>((projects, repoName) => {
    const repo = repoMap.get(repoName);
    const override = projectOverrides[repoName];

    if (!override) {
      return projects;
    }

    projects.push({
        slug: slugify(repoName),
        repo: repoName,
        title: override.title,
        summary: override.summary,
        category: override.category,
        stack: override.stack,
        status: "Completed" as const,
        githubUrl: repo?.html_url ?? `${GITHUB_BASE_URL}/${repoName}`,
        demoUrl: override.demoUrl ?? repo?.homepage ?? undefined,
        featured: override.featured,
        updatedAt: repo?.updated_at,
        language: repo?.language ?? null,
        stars: repo?.stargazers_count ?? 0,
        topics: repo?.topics ?? [],
        repositorySummary: repo?.description ?? null,
        narrative: override.narrative,
      });

    return projects;
  }, []);
});

export const getFeaturedProjects = cache(async (): Promise<
  CompletedProject[]
> => {
  const all = await getCompletedProjects();
  return all.filter((p) => p.featured);
});

export const getProjectBySlug = cache(
  async (slug: string): Promise<CompletedProject | null> => {
    const all = await getCompletedProjects();
    return all.find((p) => p.slug === slug) ?? null;
  }
);

export const getGitHubHighlights = cache(async (): Promise<
  GitHubHighlight[]
> => {
  const repos = await getGitHubRepos();

  return repos
    .filter((repo) => repo.name !== siteIdentity.githubUsername)
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    )
    .slice(0, 4)
    .map((repo) => ({
      name: repo.name,
      htmlUrl: repo.html_url,
      description: repo.description,
      updatedAt: repo.updated_at,
      language: repo.language,
      stars: repo.stargazers_count,
      topics: repo.topics,
    }));
});

export const getHomePageData = cache(async () => {
  const [completedProjects, highlights] = await Promise.all([
    getCompletedProjects(),
    getGitHubHighlights(),
  ]);

  return {
    completedProjects,
    featuredProjects: completedProjects.filter((project) => project.featured),
    ongoingProjects: ongoingWork,
    focusAreas: technicalFocusAreas,
    highlights,
  };
});
