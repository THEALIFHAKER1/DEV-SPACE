"use client";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import React, { startTransition, useTransition } from "react";
import { SignIn, SignOut } from "./button";
import saveGuestbookEntry from "@/lib/actions/saveGuestbookEntry";
import { useFormStatus } from "react-dom";
import { GuestBookSchemaEntry } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/customUi/form-input";
import { toast } from "sonner";

export function FormIn() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof GuestBookSchemaEntry>>({
    resolver: zodResolver(GuestBookSchemaEntry),
    defaultValues: {
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof GuestBookSchemaEntry>) {
    startTransition(() => {
      saveGuestbookEntry(values).then((data) => {
        if (data.success) {
          toast.success(data.success);
          form.reset();
        }
        if (data.error) {
          toast.error(data.error);
        }
      });
    });
  }

  return (
    <div className="flex dark:bg-neutral-800 bg-neutral-200 p-3 rounded-lg border border-black dark:border-neutral-700 w-fit gap-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative w-full flex gap-2"
        >
          <FormInput
            name="message"
            placeholder="Your message"
            control={form.control}
            aria-label="Type your message here"
            type="text"
            className="px-2 w-full text-sm rounded-lg h-10 bg-background "
          />
          <Button disabled={isPending} type="submit" variant={"outline"}>
            <span>Sent</span>
          </Button>
        </form>
      </Form>
      <SignOut />
    </div>
  );
}

export function FormOut() {
  return (
    <div className="dark:bg-neutral-800 bg-neutral-200 p-3 rounded-lg border border-black dark:border-neutral-700 w-fit">
      <div className="flex gap-2">
        <SignIn />
      </div>
    </div>
  );
}
