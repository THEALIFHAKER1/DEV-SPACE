import { Button } from "@/components/ui/button";
import React from "react";

function SearchProjects() {
  return (
    <div
      className={
        " dark:bg-neutral-800 bg-neutral-200 p-3 rounded-lg border border-black dark:border-neutral-700"
      }
    >
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search for a repository"
          aria-label="Search for a repository"
          className="px-2 w-full text-sm rounded-lg h-10 bg-background "
        />
        <Button variant="outline">Search</Button>
      </div>
      <p className={`text-red-600 text-md font-bold text-sm hidden `}>
        Message is empty
      </p>
    </div>
  );
}

export default SearchProjects;
