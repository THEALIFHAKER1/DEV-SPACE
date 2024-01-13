import React from "react";
import AllProjects from "./components/AllProjects";
import { HeadingText } from "@/components/ui/heading-text";

export const metadata = {
  title: "Projects",
  description: "All my projects",
};

export default function ProjectPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className="flex flex-col py-8">
      <div className="space-y-4">
        <HeadingText>My GitHub Repositories</HeadingText>
        <AllProjects />
      </div>
    </main>
  );
}
