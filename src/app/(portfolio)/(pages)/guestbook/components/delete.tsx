"use client";
import { Button } from "@/components/ui/button";
import deleteGuestbookEntry from "@/lib/actions/deleteGuestbookEntry";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";

interface DeleteButtonProps {
  id: number;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  const [isPending, startTransition] = useTransition();
  const form = useForm();

  async function handleOnclick(values: { id: number }) {
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
    <Form {...form}>
      <Button
        onSubmit={() => handleOnclick({ id })}
        disabled={isPending}
        type="submit"
        variant="outline"
        className="hover:bg-red-500 hover:text-white"
      >
        Delete
      </Button>
    </Form>
  );
}
