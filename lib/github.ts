import { cache } from "react";
import { siteIdentity } from "@/data/site";
import type { GitHubRepo } from "@/types/project";

const GITHUB_API = "https://api.github.com";
const GITHUB_REVALIDATE_SECONDS = 3600;
const GITHUB_TIMEOUT_MS = 4000;
export const GITHUB_REVALIDATE_TAG = "github-repos";

const GITHUB_USERNAME =
  process.env.GITHUB_USERNAME ?? siteIdentity.githubUsername;

async function fetchGitHubJSON<T>(path: string): Promise<T | null> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(`${GITHUB_API}${path}`, {
      headers,
      signal: AbortSignal.timeout(GITHUB_TIMEOUT_MS),
      next: {
        revalidate: GITHUB_REVALIDATE_SECONDS,
        tags: [GITHUB_REVALIDATE_TAG],
      },
    });

    if (!res.ok) {
      console.error(`GitHub API error: ${res.status} for ${path}`);
      return null;
    }

    return (await res.json()) as T;
  } catch (error) {
    console.error("GitHub API request failed", error);
    return null;
  }
}

export const getGitHubRepos = cache(async (): Promise<GitHubRepo[]> => {
  const repos =
    await fetchGitHubJSON<GitHubRepo[]>(
      `/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
    );

  return (repos ?? []).filter((repo) => !repo.fork && !repo.archived);
});
