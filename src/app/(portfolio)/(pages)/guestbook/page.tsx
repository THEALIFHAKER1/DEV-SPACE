import { Button } from "@/components/ui/button";
import { HeadingText } from "@/components/ui/heading-text";
import { Suspense } from "react";
import { FormIn, FormOut } from "./components/Form";
import { getAllGuestBookEntries } from "@/lib/db/data/guestbook";
import { GuestBookSkeleton } from "./components/guestbookkeleton";
import { auth } from "@/auth";
import { FaUser } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
