import { env } from "@/env.mjs";
import type { LanyardResponse, Snowflake } from "use-lanyard";

const DISCORD_ID = env.NEXT_PUBLIC_DISCORD_ID;

export default async function getDiscordActivity() {
  const lanyard = await fetch(
    `https://api.lanyard.rest/v1/users/${DISCORD_ID}`
  ).then((res) => res.json() as Promise<LanyardResponse>);

  if (!lanyard.success) {
    throw new Error("Lanyard API failed");
  }

  return lanyard.data;
}
