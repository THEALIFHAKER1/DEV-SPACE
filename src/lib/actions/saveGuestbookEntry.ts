"use server";

import * as z from "zod";
import { type Session } from "next-auth";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { db } from "../db/db";
import { GuestBookSchemaEntry } from "@/schemas";
import { sendGuestbookEntryEmail } from "../api/mail/mail";

async function getSession(): Promise<Session> {
  let session = await auth();
  if (!session || !session.user) {
    throw new Error("Unauthorized");
  }

  return session;
}

export default async function saveGuestbookEntry(
  formData: z.infer<typeof GuestBookSchemaEntry>
) {
  let session = await getSession();
  let image = session.user?.image as string;
  let email = session.user?.email as string;
  let name = session.user?.name as string;
  const date = new Date();

  const validatedFields = GuestBookSchemaEntry.safeParse(formData);

  if (!validatedFields.success) {
    return {
      error: "Message is empty or too long",
    };
  }
  const { message } = validatedFields.data;

  await db.guestbook.create({
    data: {
      image,
      email,
      message,
      name,
      date,
    },
  });

  revalidatePath("/guestbook");
  // sendGuestbookEntryEmail(email, message, date);

  return {
    success: "Message sent!",
  };
}
