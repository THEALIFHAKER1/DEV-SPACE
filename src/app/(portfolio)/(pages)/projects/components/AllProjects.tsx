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
import { getTextColor } from "@/lib/utils/get-text-color";
import LanguageBadge from "./LanguageBadge";
import ProjectCard from "./projectCard";
export default async function AllProjects({ filter }: { filter: string }) {
  const repositories = (await getRepositories()) as Repository[];
  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(filter?.toLowerCase() || "")
  );
  return (
    <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
      {filteredRepositories.map((repo) => (
        <ProjectCard repo={repo} key={repo.id} />
      ))}
    </div>
  );
}
