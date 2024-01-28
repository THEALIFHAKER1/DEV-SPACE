import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
export function AllProjectsSkeleton() {
  return (
    <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3 ">
      {Array.from({ length: 9 }).map((_, index) => (
        <Card
          key={index}
          className="flex-grow rounded-xl dark:bg-neutral-800 bg-neutral-200 border border-black dark:border-neutral-700"
        >
          <CardHeader>
            <Skeleton className="mb-2 h-4 w-[50%] " />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[10rem]" />
          </CardHeader>
          <CardFooter className="mt-2 flex justify-between">
            <Skeleton className="h-4 w-[5rem]" />
            <Skeleton className="h-4 w-[2rem]" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
