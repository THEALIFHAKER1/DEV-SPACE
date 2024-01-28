"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { ExternalLink, Star } from "lucide-react";
import React from "react";
import { FaCodeFork } from "react-icons/fa6";
import LanguageBadge from "./LanguageBadge";
import { Repository } from "@/types";
import { motion } from "framer-motion";

export default function ProjectCard({ repo }: { repo: Repository }) {
  return (
    <motion.div style={{ overflow: "hidden" }}>
      <Card
        key={repo.id}
        className="hovers h-40 flex flex-col justify-between rounded-xl dark:bg-neutral-800 bg-neutral-200 border border-black dark:border-neutral-700"
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
          <div className="">
            {Object.keys(repo.languages)
              .filter((language) => language !== "Hack")
              .map((language) => (
                <LanguageBadge key={language} language={language} />
              ))}
          </div>
          <div className="flex gap-2">
            <CardDescription className="flex items-center gap-1">
              <FaCodeFork className="h-4 w-4" />
              {repo.forks_count}
            </CardDescription>
            <CardDescription className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              {repo.stargazers_count}
            </CardDescription>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
