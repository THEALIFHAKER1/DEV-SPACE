import { Skeleton } from "@/components/ui/skeleton";
export function GuestBookSkeleton() {
  return (
    <>
      <div>
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="hover:bg-neutral-200 hover:dark:bg-neutral-800 hover:drop-shadow-md duration-100 rounded-lg p-3 "
          >
            <Skeleton className="mb-2 h-4 w-[60%]" />
            <Skeleton className=" h-4 w-[20%] " />
          </div>
        ))}
      </div>
    </>
  );
}
