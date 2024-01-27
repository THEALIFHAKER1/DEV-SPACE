import { Button } from "@/components/ui/button";
import { HeadingText } from "@/components/ui/heading-text";
import { Suspense } from "react";
import { FormIn, FormOut } from "./components/Form";
import { getAllGuestBookEntries } from "@/lib/db/data/guestbook";
import { GuestBookSkeleton } from "./components/guestbookkeleton";
import { auth } from "@/auth";

export const metadata = {
  title: "Guestbook",
  description: "Sign my guestbook and leave your mark.",
};

export default function GuestbookPage() {
  return (
    <main className="flex flex-col py-8">
      <div className="space-y-4">
        <HeadingText subtext="Leave a message for me and other visitors here!">
          GuestBook
        </HeadingText>
        <GuestbookForm />
        <Suspense fallback={<GuestBookSkeleton />}>
          <GuestbookEntries />
        </Suspense>
      </div>
    </main>
  );
}

async function GuestbookForm() {
  let session = await auth();

  return session?.user ? (
    <>
      <FormIn />
    </>
  ) : (
    <>
      <FormOut />
    </>
  );
}

async function GuestbookEntries() {
  let entries = await getAllGuestBookEntries();

  if (!entries) return null;

  return (
    <div>
      {entries.map((entry) => (
        <div
          key={entry.id}
          className="flex hover:bg-neutral-200 hover:dark:bg-neutral-800 hover:drop-shadow-md duration-100 rounded-lg p-3 "
        >
          <div className="w-full text-sm break-words">
            <span className="text-neutral-600 dark:text-neutral-400 mr-1">
              {entry.name}:
            </span>
            {entry.message}
            <div className="flex text-xs">
              <span className="text-neutral-600 dark:text-neutral-400 mr-1">
                {new Date(entry.date).toLocaleString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </span>
            </div>
          </div>
          {false ?? (
            <div>
              <Button variant="outline">Delete</Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
