import React from "react";
import AllProjects from "./components/AllProjects";
import { HeadingText } from "@/components/ui/heading-text";
import SearchProjects from "../../../../components/ui/Search";

export const metadata = {
  title: "Projects",
  description: "All my projects",
};

export default function ProjectPage({
  searchParams,
}: {
  searchParams?: {
    Search?: string;
  };
}) {
  const searchTerm = searchParams?.Search || "";

  return (
    <main className="flex flex-col py-8">
      <div className="space-y-4">
        <HeadingText>My GitHub Repositories</HeadingText>
        <SearchProjects placeholder={"Search for a repository"} />
        <AllProjects filter={searchTerm} />
      </div>
    </main>
  );
}
