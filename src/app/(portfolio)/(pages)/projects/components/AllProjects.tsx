import React from "react";
import { getRepositories } from "@/lib/api/github";
import { Repository } from "@/types";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { getTextColor } from "@/lib/get-text-color";
import { ExternalLink, Star } from "lucide-react";

export default async function AllProjects() {
  const repositories = (await getRepositories()) as Repository[];
  repositories.push(
    {
      id: 2,
      full_name: "Dummy Repo",
      name: "Dummy Repo",
      html_url: "https://github.com/dummy-repo",
      homepage: "",
      description: "This is a dummy repository",
      language: "TypeScript",
      stargazers_count: 0,
    },
    {
      id: 3,
      full_name: "Another Repo",
      name: "Another Repo",
      html_url: "https://github.com/another-repo",
      homepage: "",
      description: "This is another repository",
      language: "JavaScript",
      stargazers_count: 10,
    },
    {
      id: 4,
      full_name: "Sample Repo",
      name: "Sample Repo",
      html_url: "https://github.com/sample-repo",
      homepage: "",
      description: "This is a sample repository",
      language: "Python",
      stargazers_count: 5,
    },
    {
      id: 5,
      full_name: "Test Repo",
      name: "Test Repo",
      html_url: "https://github.com/test-repo",
      homepage: "",
      description: "This is a test repository",
      language: "Java",
      stargazers_count: 2,
    }
  );

  // console.log(repositories);
  return (
    <div className="pb-20">
      <h1>My GitHub Repositories</h1>
      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
        {repositories.map((repo) => (
          <Card key={repo.id} className="flex flex-col justify-between">
            <CardHeader>
              <div className="flex justify-between">
                <a
                  target="_blank"
                  href={repo.html_url}
                  rel="noopener noreferrer"
                  aria-label={repo.html_url}
                >
                  <CardTitle className="text-base hover:underline">
                    {repo.name}
                  </CardTitle>
                </a>
                <a
                  target="_blank"
                  href={repo.homepage || repo.html_url}
                  rel="noopener noreferrer"
                  aria-label="Visit the project's live url/repo"
                >
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
              </div>
              <CardDescription className="line-clamp-2 text-sm font-light">
                {repo.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <Badge
              // style={{
              //   backgroundColor: `${repo.language}`,
              //   color: `${getTextColor(repo.language)}`,
              // }}
              >
                {repo.language}
              </Badge>
              <CardDescription className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                {repo.stargazers_count}
              </CardDescription>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
