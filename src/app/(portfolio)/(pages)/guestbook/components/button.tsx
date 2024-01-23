"use client";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function SignIn() {
  return (
    <div
      className={`p-3 drop-shadow-md dark:bg-neutral-800 bg-neutral-200 rounded-lg mb-5 `}
    >
      <p className="text-sm mb-1 font-bold">Sign in</p>
      <div className="flex">
        <button
          aria-label="Sign in with Github"
          className="gap-1 items-center text-sm bg-[#2f3338] hover:bg-[#4f5257] flex font-bold text-white dark:text-white px-2 py-2 rounded-lg duration-100"
          onClick={() => signIn("github")}
        >
          <BsGithub />
          <span className="mt-[0.5px]">Github</span>
        </button>
      </div>
    </div>
  );
}

export function SignOut() {
  return (
    <Button variant="outline" onClick={() => signOut()}>
      Sign out
    </Button>
  );
}
