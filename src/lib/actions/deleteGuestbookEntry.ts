"use server";

import { revalidatePath } from "next/cache";
import { db } from "../db/db";

interface deleteGuestBookEntryProps {
  id: number;
}

export default async function deleteGuestbookEntry({
  id,
}: deleteGuestBookEntryProps) {
  await db.guestbook.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/guestbook");

  return {
    success: "Message deleted!",
  };
}
