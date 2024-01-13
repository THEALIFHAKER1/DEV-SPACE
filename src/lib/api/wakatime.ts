import { env } from "@/env.mjs";

// Fetch stats from wakatime
export const getCodingStats = async () => {
  const response = await fetch(
    "https://wakatime.com/api/v1/users/current/stats",
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${Buffer.from(env.WAKATIME_API_KEY).toString(
          "base64"
        )}`,
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch coding stats from Wakatime");
  }

  return await response.json();
};
