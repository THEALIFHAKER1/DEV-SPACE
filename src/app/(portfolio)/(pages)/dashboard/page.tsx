import React from "react";
import { HeadingText } from "../../../../components/ui/heading-text";
import { DiscordActivity } from "./components/discord-activity";
import CodeActivity from "./components/CodeActivity";

export const metadata = {
  title: "Dashboard",
  description: "Statistics about my activities",
};

export default function DashboardPage() {
  return (
    <main className="flex flex-col items-center py-8">
      <div className="space-y-4">
        <HeadingText subtext="Statistics about my activities">
          Dashboard
        </HeadingText>
        <div className="flex flex-wrap gap-2">
          <DiscordActivity />
          <CodeActivity />
        </div>
      </div>
    </main>
  );
}
