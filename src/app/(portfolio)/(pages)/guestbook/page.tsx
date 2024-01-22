import { HeadingText } from "@/components/ui/heading-text";
import { Suspense } from "react";
export const metadata = {
  title: "Guestbook",
  description: "Sign my guestbook and leave your mark.",
};

export default function GuestbookPage() {
  return (
    <main className="flex flex-col py-8">
      <div className="space-y-4">
        <HeadingText>GuestBook</HeadingText>
        <Suspense>
          {/* <GuestbookForm /> */}
          <GuestbookEntries />
        </Suspense>
      </div>
    </main>
  );
}

// async function GuestbookForm() {
//   let session = await auth();

//   return session?.user ? (
//     <>
//       <Form />
//       <SignOut />
//     </>
//   ) : (
//     <SignIn />
//   );
// }

async function GuestbookEntries() {
  //   let entries = await getGuestbookEntries();
  let entries = [
    { id: 1, name: "John Doe", message: "Hello, nice website!" },
    { id: 2, name: "Jane Smith", message: "Great work, keep it up!" },
    { id: 3, name: "Mike Johnson", message: "Awesome guestbook!" },
  ];

  if (entries.length === 0) {
    return null;
  }

  return entries.map((entry) => (
    <div key={entry.id} className="flex flex-col space-y-1 mb-4">
      <div className="w-full text-sm break-words">
        <span className="text-neutral-600 dark:text-neutral-400 mr-1">
          {entry.name}:
        </span>
        {entry.message}
      </div>
    </div>
  ));
}
