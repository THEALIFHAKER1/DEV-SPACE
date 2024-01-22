"use server";

import { sql } from "./postgres";
import {
  unstable_cache as cache,
  unstable_noStore as noStore,
} from "next/cache";

export async function getGuestbookEntries() {
  if (!process.env.POSTGRES_URL) {
    return [];
  }

  noStore();
  return sql`
    SELECT id, message, name, date
    FROM guestbook
    ORDER BY date DESC
    LIMIT 100
  `;
}
