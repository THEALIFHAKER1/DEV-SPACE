import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    WAKATIME_API_KEY: z.string().startsWith("waka_"),
    GH_API_URL: z.string().startsWith("https://"),
    DISCORD_ID: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NEXT_PUBLIC_DISCORD_ID: z.string().min(1),
  },
  runtimeEnv: {
    // WAKATIME
    WAKATIME_API_KEY: process.env.WAKATIME_API_KEY,
    // GITHUB
    GH_API_URL: process.env.GH_API_URL,
    // DISCORD
    DISCORD_ID: process.env.DISCORD_ID,
    NEXT_PUBLIC_DISCORD_ID: process.env.NEXT_PUBLIC_DISCORD_ID,
    // SPOTIFY
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
    NEXT_PUBLIC_SPOTIFY_CLIENT_ID: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
    NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET:
      process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
    NEXT_SPOTIFY_REFRESH_TOKEN: process.env.NEXT_SPOTIFY_REFRESH_TOKEN,
    // NEXT
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
});
