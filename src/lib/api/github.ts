import { env } from "@/env.mjs";
import { Repository } from "@/types";

const token = env.GITHUB_TOKEN;
export async function getRepositories(): Promise<Repository[]> {
  const apiUrl = "https://api.github.com/users/THEALIFHAKER1/repos";

  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      tags: ["AllRepositories"],
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const repositories = await response.json();

  const repositoriesWithLanguages = await Promise.all(
    repositories.map(async (repo: Repository) => {
      const languagesUrl = repo.languages_url;

      const languagesResponse = await fetch(languagesUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!languagesResponse.ok) {
        throw new Error(`Failed to fetch languages for repo ${repo.name}`);
      }

      const languages = await languagesResponse.json();
      return { ...repo, languages };
    })
  );

  return repositoriesWithLanguages;
}
