"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { usePathname as Pathname } from "next/navigation";

function Logo() {
  const pathname = Pathname();
  const [typewriterStrings, setTypewriterStrings] = useState("/");
  useEffect(() => {
    setTypewriterStrings(pathname);
  }, [pathname]);
  return (
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
  );
}

export default Logo;
