import { HeadingText } from "@/components/ui/heading-text";
import { Suspense } from "react";
import { GuestBookSkeleton } from "./components/guestbookSkeleton";
import GuestbookEntries from "./components/guesbookEntries";
import GuestbookForm from "./components/guestBookForm";

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
