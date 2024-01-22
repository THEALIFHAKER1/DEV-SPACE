import { Button } from "@/components/ui/button";
import { HeadingText } from "@/components/ui/heading-text";
import { Suspense } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";
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
        <Suspense>
          <GuestbookForm />
          <GuestbookEntries />
        </Suspense>
      </div>
    </main>
  );
}

async function GuestbookForm() {
  //   let session = await auth();

  return true ? (
    <>
      <div
        className={
          " dark:bg-neutral-800 bg-neutral-200 p-3 rounded-lg border border-black dark:border-neutral-700"
        }
      >
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Your message"
            aria-label="Type your message here"
            className="px-2 w-full text-sm rounded-lg h-10 bg-background "
          />
          <Button variant="outline">Sent</Button>
          <Button variant="outline">Sign out</Button>
        </div>
        <p className={`text-red-600 text-md font-bold text-sm hidden `}>
          Message is empty
        </p>
      </div>
    </>
  ) : (
    <div
      className={`p-3 drop-shadow-md dark:bg-neutral-800 bg-neutral-200 rounded-lg mb-5 `}
    >
      <p className="text-sm mb-1 font-bold">Sign in</p>
      <div className="flex">
        <button
          aria-label="Sign in with Github"
          className="text-sm bg-[#2f3338] hover:bg-[#4f5257] items-center flex font-bold text-white dark:text-white px-2 py-2 rounded-lg duration-100"
        >
          <BsGithub />
          &thinsp;Github
        </button>
        <button
          aria-label="Sign in with google"
          className="text-sm bg-blue-600 hover:bg-blue-700 items-center flex font-bold text-white dark:text-white px-2 py-2 rounded-lg duration-100 ml-2"
        >
          <BsGoogle />
          &thinsp;Google
        </button>
      </div>
    </div>
    // <SignIn />
  );
}

async function GuestbookEntries() {
  //   let entries = await getGuestbookEntries();
  let entries = [
    {
      id: 1,
      name: "John Doe",
      message: "Hello, nice website!",
      date: "2022-01-01",
      time: "10:00 AM",
    },
    {
      id: 2,
      name: "Jane Smith",
      message: "Great work, keep it up!",
      date: "2022-01-02",
      time: "02:30 PM",
    },
    {
      id: 3,
      name: "Mike Johnson",
      message: "Awesome guestbook!",
      date: "2022-01-03",
      time: "08:45 AM",
    },
  ];

  if (entries.length === 0) {
    return null;
  }

  return entries.map((entry) => (
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
            {entry.date}
          </span>
          <span className="text-neutral-600 dark:text-neutral-400 mr-1">
            {entry.time}
          </span>
        </div>
      </div>
      <div>
        <Button variant="outline">Delete</Button>
      </div>
    </div>
  ));
}
