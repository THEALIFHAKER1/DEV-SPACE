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
import { ExternalLink, Star } from "lucide-react";

export default async function AllProjects() {
  //   {
  //   limit,
  //   offset,
  // }: {
  //   limit: number;
  //   offset: number;
  // }
  const repositories = (await getRepositories()) as Repository[];
  // limit, offset
  return (
    <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
      {repositories.map((repo) => (
        <Card
          key={repo.id}
          className="flex flex-col justify-between rounded-xl border-2 border-zinc-500 bg-background dark:border-zinc-400"
        >
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
            <Badge>{repo.language}</Badge>
            <CardDescription className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              {repo.stargazers_count}
            </CardDescription>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}