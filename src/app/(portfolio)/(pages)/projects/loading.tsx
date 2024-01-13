import { HeadingText } from "@/components/ui/heading-text";
import { ProjectsSkeleton } from "./components/projects-skeleton";

export default function ProjectPage() {
  return (
    <div>
      <main className="flex flex-col py-8">
        <div className="space-y-4">
          <HeadingText>My GitHub Repositories</HeadingText>
          <ProjectsSkeleton />
        </div>
      </main>
    </div>
  );
}
