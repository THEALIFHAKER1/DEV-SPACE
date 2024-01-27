import { db } from "../db";

export async function getAllGuestBookEntries() {
  try {
    const entries = await db.guestbook.findMany({
      orderBy: {
        date: "desc", // Sorting by date in descending order (new to old)
      },
    });
    return entries;
  } catch (error) {
    return null;
  }
}
