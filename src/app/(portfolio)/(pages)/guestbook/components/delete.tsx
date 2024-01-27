"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db/db";

interface DeleteButtonProps {
  id: number;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  async function handleOncliclk() {
    await db.guestbook.delete({
      where: {
        id,
      },
    });
  }
  return (
    <Button
      onClick={handleOncliclk}
      variant="outline"
      className="hover:bg-red-500 hover:text-white"
    >
      Delete
    </Button>
  );
}
