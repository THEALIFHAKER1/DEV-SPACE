import React from "react";
import AllProjects from "./components/AllProjects";
import Search from "./components/Search";
import PaginationControl from "./components/PaginationControl";
import { start } from "repl";

export default function ProjectPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"] ?? 1;
  const per_page = searchParams["per_page"] ?? 6;
  const limit = Number(per_page);
  const offset = (Number(page) - 1) * limit;
  return (
    <div>
      <h1>My GitHub Repositories</h1>
      <AllProjects />
    </div>
  );
}
