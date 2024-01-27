"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { SignIn, SignOut } from "./button";
import { useRef } from "react";
import { saveGuestbookEntry } from "@/lib/actions/actions";
import { useFormStatus } from "react-dom";

export function FormIn() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      className="relative max-w-[500px]"
      ref={formRef}
      action={async (formData) => {
        await saveGuestbookEntry(formData);
        formRef.current?.reset();
      }}
    >
      <div
        className={
          " dark:bg-neutral-800 bg-neutral-200 p-3 rounded-lg border border-black dark:border-neutral-700"
        }
      >
        <div className="flex gap-2">
          <input
            type="text"
            name="message"
            placeholder="Your message"
            aria-label="Type your message here"
            className="px-2 w-full text-sm rounded-lg h-10 bg-background "
          />
          <SubmitButton />
          <SignOut />
        </div>
        <p className={`text-red-600 text-md font-bold text-sm hidden `}>
          Message is empty
        </p>
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button variant="outline" disabled={pending} type="submit">
      Sent
    </Button>
  );
}

export function FormOut() {
  return (
    <div
      className={
        " dark:bg-neutral-800 bg-neutral-200 p-3 rounded-lg border border-black dark:border-neutral-700 w-fit"
      }
    >
      <div className="flex gap-2">
        <SignIn />
      </div>
    </div>
  );
}
