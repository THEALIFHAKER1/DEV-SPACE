import React from "react";
import { HeadingText } from "./components/heading-text";
import { DiscordActivity } from "./components/discord-activity";

export default async function DashboardPage() {
  return (
    <main className="">
      <div className="">
        <HeadingText subtext="Statistics about my activities">
          Dashboard
        </HeadingText>
        <DiscordActivity />
      </div>
    </main>
  );
}
