"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { usePathname as Pathname } from "next/navigation";
import LOGO from "@/assets/logo.svg";
import Image from "next/image";

function Logo() {
  const pathname = Pathname();
  const [typewriterStrings, setTypewriterStrings] = useState("/");

  useEffect(() => {
    setTypewriterStrings(pathname);
  }, [pathname]);

  return (
    <>
      <div className="hidden md:flex space-x-4">
        <Image
          src={LOGO}
          alt="logo"
          width={50}
          height={50}
          className="filter grayscale dark:filter-none min-w-[50px] min-h-[50px]"
        />
        <div>
          <p>THEALIFHAKER1( );</p>
          <Link href="/" className="flex">
            {`~`}{" "}
            <Typewriter
              options={{
                strings: typewriterStrings,
                autoStart: true,
              }}
            />
          </Link>
        </div>
      </div>
      <div className="md:hidden block">
        <Link href="/">
          <Image
            src={LOGO}
            alt="logo"
            width={50}
            height={50}
            className="filter grayscale dark:filter-none min-w-[50px] min-h-[50px]"
          />
        </Link>
      </div>
    </>
  );
}

export default Logo;
