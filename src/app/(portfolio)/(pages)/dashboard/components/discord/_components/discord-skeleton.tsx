import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import React from "react";
import { BsDiscord } from "react-icons/bs";

export default function DiscordSkeleton() {
  return (
    <div className="flex flex-col-reverse justify-end items-end w-fit bg-background p-3 rounded-xl">
      <div className="flex gap-2">
        <div className="flex items-center justify-center">
          <Skeleton className="h-14 w-14 rounded-md" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <BsDiscord />
            <Skeleton className="h-3 w-11" />
          </div>
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex flex-col gap-2">
  <div className="flex gap-2">
    <Skeleton className="h-10 w-10 rounded-full" />
    <Skeleton className="h-10 w-[14rem]" />
  </div>
  <Skeleton className="h-8 w-full" />
</div>; */
}
