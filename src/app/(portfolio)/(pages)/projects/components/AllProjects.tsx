import React from "react";
import { getRepositories } from "@/lib/api/github";
import { Repository } from "@/types";
import ProjectCard from "./projectCard";
export default async function AllProjects({ filter }: { filter: string }) {
  const repositories = (await getRepositories()) as Repository[];
  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(filter?.toLowerCase() || "")
  );
  return (
    <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-3 md:grid-cols-2">
      {filteredRepositories.map((repo) => (
        <ProjectCard repo={repo} key={repo.id} />
      ))}
    </div>
  );
}
