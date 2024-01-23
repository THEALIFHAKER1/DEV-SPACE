"use client";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function SignIn() {
  return (
    <Button onClick={() => signIn("github")}>
      <BsGithub />
      <span className="mt-[0.5px]">Github</span>
    </Button>
  );
}

export function SignOut() {
  return (
    <Button variant="outline" onClick={() => signOut()}>
      Sign out
    </Button>
  );
}
