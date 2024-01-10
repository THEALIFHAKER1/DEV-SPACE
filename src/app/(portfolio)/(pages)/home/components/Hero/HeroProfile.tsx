import React from "react";
import HeroPicture from "@/assets/heroProfile.svg";
import Image from "next/image";

function HeroProfile() {
  return (
    <div className="relative">
      <Image width={400} height={400} src={HeroPicture} alt="heroProfile" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-70% to-white to-90% dark:to-black" />
    </div>
  );
}

export default HeroProfile;
