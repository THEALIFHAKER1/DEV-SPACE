import { env } from "@/env.mjs";

// Fetch my discord activity
export const getDiscordActivity = async () => {
  const response = await fetch(
    `https://api.lanyard.rest/v1/users/${env.DISCORD_ID}`,
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch discord activity");
  }

  return await response.json();
};
