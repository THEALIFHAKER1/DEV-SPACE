"use client";
import React from "react";
import HeroPicture from "@/assets/heroProfile.svg";
import Image from "next/image";

function HeroProfile() {
  return (
    <div className="relative w-400 h-400">
      <Image
        src={HeroPicture}
        alt="heroProfile"
        className="rounded object-cover w-full h-full"
      />
      <div className="absolute w-full h-full bg-gradient-to-b from-transparent from-70% to-white to-90% dark:to-black"></div>
    </div>
  );
}

export default HeroProfile;
