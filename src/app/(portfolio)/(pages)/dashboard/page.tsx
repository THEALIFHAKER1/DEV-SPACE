import React from "react";
import { HeadingText } from "../../../../components/ui/heading-text";
import { DiscordActivity } from "./components/discord/discord-activity";
import BlankActivity from "./components/blank/blank";
import LongBlankActivity from "./components/blank/longBlank";

export const metadata = {
  title: "Dashboard",
  description: "Statistics about my activities",
};

export default function DashboardPage() {
  return (
    <main className="flex flex-col py-8">
      <div className="space-y-4">
        <HeadingText subtext="Statistics about my activities">
          Dashboard
        </HeadingText>
        <div className="flex flex-wrap gap-2">
          <DiscordActivity />
          <BlankActivity />
          <LongBlankActivity />
        </div>
      </div>
    </main>
  );
}
