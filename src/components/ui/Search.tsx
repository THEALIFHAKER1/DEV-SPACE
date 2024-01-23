"use client";
import { Button } from "@/components/ui/button";
import React, { Suspense, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export function SearchBar({ placeholder }: { placeholder: string }) {
  const SearchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // State to manage the input value
  const [searchTerm, setSearchTerm] = useState<string | undefined>(
    SearchParams.get("Search")?.toString()
  );

  function handleSearch() {
    const params = new URLSearchParams(SearchParams);
    if (searchTerm) {
      params.set("Search", searchTerm);
    } else {
      params.delete("Search");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        aria-label="Search for a repository"
        className="px-2 w-full text-sm rounded-lg h-10 bg-background "
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm || ""}
      />
      <Button variant="outline" onClick={handleSearch}>
        Search
      </Button>
    </>
  );
}

export function Search({ placeholder }: { placeholder: string }) {
  return (
    <div
      className={
        " dark:bg-neutral-800 bg-neutral-200 p-3 rounded-lg border border-black dark:border-neutral-700"
      }
    >
      <div className="flex gap-2">
        <Suspense fallback={<div>Loading...</div>}>
          <SearchBar placeholder={placeholder} />
        </Suspense>
      </div>
    </div>
  );
}
