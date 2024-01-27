import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getAllGuestBookEntries } from "@/lib/db/data/guestbook";
import { FaUser } from "react-icons/fa";

export default async function GuestbookEntries() {
  let entries = await getAllGuestBookEntries();

  if (!entries) return null;

  return (
    <div>
      {entries.map((entry) => (
        <div
          key={entry.id}
          className="flex hover:bg-neutral-200 hover:dark:bg-neutral-800 hover:drop-shadow-md duration-100 rounded-lg p-3 gap-2 items-center"
        >
          <Avatar className="w-10 h-10">
            <AvatarFallback>
              <FaUser />
            </AvatarFallback>
            <AvatarImage src={entry?.image || ""} />
          </Avatar>
          <div className="w-full text-sm break-words">
            <span className="text-neutral-600 dark:text-neutral-400 mr-1">
              {entry.name}:
            </span>
            {entry.message}
            <div className="flex text-xs">
              <span className="text-neutral-600 dark:text-neutral-400 mr-1">
                {new Date(entry.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
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
