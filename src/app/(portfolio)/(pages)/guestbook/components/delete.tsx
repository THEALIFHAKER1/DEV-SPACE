"use client";
import { Button } from "@/components/ui/button";
import deleteGuestbookEntry from "@/lib/actions/deleteGuestbookEntry";
import { startTransition } from "react";
import { toast } from "sonner";

interface DeleteButtonProps {
  id: number;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  function handleOnclick(values: { id: number }) {
    startTransition(() => {
      deleteGuestbookEntry(values).then(
        (data: { success: string; error?: string }) => {
          if (data.success) {
            toast.success(data.success);
          }
          if (data.error) {
            toast.error(data.error);
          }
        }
      );
    });
  }
  return (
    <form onSubmit={() => handleOnclick({ id })}>
      <Button
        type="submit"
        variant="outline"
        className="hover:bg-red-500 hover:text-white"
      >
        Delete
      </Button>
    </form>
  );
}
