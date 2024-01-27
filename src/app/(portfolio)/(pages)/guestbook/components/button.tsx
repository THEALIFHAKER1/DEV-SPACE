"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export function SignIn() {
  function clickHandler(provider: "google" | "github") {
    signIn(provider);
  }

  return (
    <>
      <Button onClick={() => clickHandler("github")}>
        <FaGithub className="h-5 mr-2" />
        <span className="mt-[0.5px]">Github</span>
      </Button>
      <Button onClick={() => clickHandler("google")}>
        <FcGoogle className="h-5 mr-2" />
        <span className="mt-[0.5px]">Google</span>
      </Button>
    </>
  );
}

export function SignOut() {
  return (
    <Button
      variant="outline"
      onClick={() => signOut()}
      className="hover:bg-red-500 hover:text-white"
    >
      Sign out
    </Button>
  );
}
