import { ThemeToggler } from "../../theme/ThemeToggler/ThemeToggler";
import NowPlaying from "../../Music/Spotify/NowPlaying";
// import { siteConfig } from "@/../config/site";
import Navigation from "./navigation";
import Logo from "./logo";
import DynamicIslandMusic from "@/components/layout/navbar/DynamicIslandMusic";

export default function Navbar() {
  return (
    <>
      <nav className="z-50 fixed w-full select-none bg-background p-5">
        <div className="flex justify-between">
          <Logo />
          <DynamicIslandMusic />
          <div className="flex items-center gap-4">
            <ul className=" md:flex hidden items-center space-x-4 text-sm text-zinc-500 dark:text-zinc-400">
              <Navigation />
            </ul>
            <ThemeToggler />
          </div>
        </div>
      </nav>
      <div className="z-50 md:hidden fixed bottom-5 left-0 right-0 flex justify-center items-center p-5 mx-5 rounded-xl border-2 border-zinc-500 bg-background dark:border-zinc-400">
        <div className="flex items-center gap-4">
          <ul className="flex items-center space-x-4 text-sm text-zinc-500 dark:text-zinc-400">
            <Navigation />
          </ul>
        </div>
      </div>
    </>
  );
}
