"use client";
import React from "react";

export default function PaginationControl({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"] ?? 1;
  const per_page = searchParams["per_page"] ?? 6;
  const limit = Number(per_page);
  const offset = (Number(page) - 1) * limit;
  console.log("limit", limit);
  console.log("offset", offset);
  return (
    <div>
      <button
        onClick={() => {
          const newPage = Number(page) - 1;
          // Update the URL or state with the new page value
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          const newPage = Number(page) + 1;
          // Update the URL or state with the new page value
        }}
      >
        Next
      </button>
    </div>
  );
}
