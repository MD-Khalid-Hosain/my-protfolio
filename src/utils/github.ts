import { cacheLife } from "next/cache";

export interface GitHubRepo {
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
}

export interface GitHubSummary {
  publicRepos: number;
  followers: number;
  memberSince: number;
  topLanguages: { name: string; share: number }[];
  repos: GitHubRepo[];
}

interface ApiRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  fork: boolean;
}

export async function getGitHubSummary(username: string): Promise<GitHubSummary | null> {
  "use cache";
  cacheLife("hours");

  const headers = { Accept: "application/vnd.github+json", "User-Agent": "portfolio" };
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`, {
        headers,
      }),
    ]);
    if (!userRes.ok || !reposRes.ok) return null;

    const user = (await userRes.json()) as {
      public_repos: number;
      followers: number;
      created_at: string;
    };
    const repos = ((await reposRes.json()) as ApiRepo[]).filter(
      (repo) => !repo.fork && repo.name.toLowerCase() !== username.toLowerCase(),
    );

    const languageCounts = new Map<string, number>();
    repos.forEach((repo) => {
      if (repo.language) {
        languageCounts.set(repo.language, (languageCounts.get(repo.language) ?? 0) + 1);
      }
    });
    const languageTotal = [...languageCounts.values()].reduce((sum, count) => sum + count, 0);

    return {
      publicRepos: user.public_repos,
      followers: user.followers,
      memberSince: new Date(user.created_at).getFullYear(),
      topLanguages: [...languageCounts.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([name, count]) => ({ name, share: Math.round((count / languageTotal) * 100) })),
      repos: repos.slice(0, 4).map((repo) => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updatedAt: repo.pushed_at,
      })),
    };
  } catch {
    return null;
  }
}
