import React, { Suspense } from "react";
import AllProjects from "./components/AllProjects";
import { HeadingText } from "@/components/ui/heading-text";
import { SearchBar } from "../../../../components/customUi/Search";
import { AllProjectsSkeleton } from "./components/AllProjectsSkeleton";
import ProjectsCarousel from "./components/ProjectsCarousel";

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
        <HeadingText subtext="All of my favorite projects">
          Spotlight Projects
        </HeadingText>
        <ProjectsCarousel />
        <HeadingText subtext="All of my repository on github">
          GitHub Repositories
        </HeadingText>
        <SearchBar placeholder={"Search for a repository"} />
        <Suspense fallback={<AllProjectsSkeleton />}>
          <AllProjects filter={searchTerm} />
        </Suspense>
      </div>
    </main>
  );
}
