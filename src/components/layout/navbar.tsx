"use client";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { usePathname as Pathname } from "next/navigation";
import { ThemeToggler } from "../theme/ThemeToggler/ThemeToggler";
import NowPlaying from "../Music/Spotify/NowPlaying";
// import { siteConfig } from "@/../config/site";

const navigationLinks = [
  { path: "/", label: "Home" },
  { path: "/dashboard", label: "Dashboard" },
  { path: "/projects", label: "Projects" },
];

export default function Navbar() {
  const pathname = Pathname();
  const [typewriterStrings, setTypewriterStrings] = useState("/");

  useEffect(() => {
    setTypewriterStrings(pathname);
  }, [pathname]);

  const renderedLinks = useMemo(() => {
    return navigationLinks.map((link) => (
      <li
        key={link.path}
        className={`hover:underline ${
          pathname === link.path ? "text-primary" : ""
        }`}
      >
        <Link href={link.path}>{link.label}</Link>
      </li>
    ));
  }, [pathname]);

  return (
    <>
      <nav className="select-none bg-background">
        <div className="flex justify-between">
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
          <div className="flex items-center gap-4">
            <ul className=" md:flex hidden items-center space-x-4 text-sm text-zinc-500 dark:text-zinc-400">
              {renderedLinks}
            </ul>
            <NowPlaying />
            <ThemeToggler />
          </div>
        </div>
      </nav>
      <div className="md:hidden fixed bottom-5 left-0 right-0 flex justify-center items-center p-5 mx-5 rounded-xl border-2 border-zinc-500 bg-background dark:border-zinc-400">
        <div className="flex items-center gap-4">
          <ul className="flex items-center space-x-4 text-sm text-zinc-500 dark:text-zinc-400">
            {renderedLinks}
          </ul>
        </div>
      </div>
    </>
  );
}
