import { env } from "@/env.mjs";
import { Repository } from "@/types";

const token = env.GITHUB_TOKEN;
export async function getRepositories(): Promise<Repository[]> {
  const apiUrl = "https://api.github.com/users/THEALIFHAKER1/repos";

  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return (await response.json()) as Repository[];
}
