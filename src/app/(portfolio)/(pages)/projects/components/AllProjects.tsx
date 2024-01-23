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
import { FaCodeFork } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import SearchProjects from "../../../../../components/ui/Search";

export default async function AllProjects({ filter }: { filter: string }) {
  const repositories = (await getRepositories()) as Repository[];
  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(filter?.toLowerCase() || "")
  );
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
        {filteredRepositories.map((repo) => (
          <Card
            key={repo.id}
            className="flex flex-col justify-between rounded-xl dark:bg-neutral-800 bg-neutral-200 border border-black dark:border-neutral-700"
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
              <div className="flex gap-2">
                <CardDescription className="flex items-center gap-1">
                  <FaCodeFork className="h-4 w-4" />
                  {repo.stargazers_count}
                </CardDescription>
                <CardDescription className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  {repo.stargazers_count}
                </CardDescription>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
