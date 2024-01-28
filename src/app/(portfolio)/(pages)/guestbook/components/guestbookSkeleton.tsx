import { Skeleton } from "@/components/ui/skeleton";
export function GuestBookSkeleton() {
  return (
    <div>
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="flex rounded-lg p-3 gap-2 items-center">
          <Skeleton className="h-10 w-10 rounded-full mx-auto mb-4" />
          <div className="w-full">
            <Skeleton className="mb-2 h-4 w-[60%]" />
            <Skeleton className=" h-4 w-[20%] " />
          </div>
        </div>
      ))}
    </div>
  );
}
