"use client";

import getCurrentlyPlaying from "@/lib/api/spotify";
import LiveIsland from "../../customUi/dynamicIsland/LiveIsland";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useTheme } from "next-themes";
interface Song {
  name: string;
  artists: Artist[];
  albumArtUrl: string;
}

interface Artist {
  name: string;
}

export default function DynamicIslandMusic() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<Song | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await getCurrentlyPlaying();

      if (response.item) {
        const song: Song = {
          name: response.item.name,
          artists: response.item.artists.map((artist: Artist) => ({
            name: artist.name,
          })),
          albumArtUrl: response.item.album.images[0].url,
        };

        setCurrentlyPlaying(song);
      }
    } catch (error) {
      setLoading(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {!loading && currentlyPlaying && (
        <LiveIsland
          className="flex justify-center items-center top-5 bg-white dark:bg-black"
          initialAnimation
          smallWidth={200}
          smallHeight={48}
        >
          {(isSmall) =>
            isSmall ? (
              <DynamicSmall currentlyPlaying={currentlyPlaying} />
            ) : (
              <DynamicLarge currentlyPlaying={currentlyPlaying} />
            )
          }
        </LiveIsland>
      )}
    </div>
  );
}

function DynamicSmall({ currentlyPlaying }: { currentlyPlaying: Song }) {
  const { theme } = useTheme();
  return (
    <motion.div className="w-full ">
      <div
        className="hovers w-200px overflow-hidden"
        style={{
          backgroundImage: currentlyPlaying
            ? `url(${currentlyPlaying.albumArtUrl})`
            : "",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "3px",
        }}
      >
        <div
          className={`${
            theme === "light"
              ? "bg-gradient-to-r from-white via-slate-700/30 to-white"
              : "bg-gradient-to-l from-black via-slate-700/30 to-black"
          } flex pl-10px items-center relative overflow-hidden`}
        >
          <div className="flex w-full flex-col justify-center align-middle items-center text-white">
            <div>
              {currentlyPlaying.name.length > 20 ? (
                <Marquee loop={2} pauseOnHover>
                  <p className="whitespace-nowrap overflow-hidden text-ellipsis font-bold">
                    {currentlyPlaying.name}
                  </p>
                </Marquee>
              ) : (
                <p className="whitespace-nowrap overflow-hidden text-ellipsis font-bold">
                  {currentlyPlaying.name}
                </p>
              )}
            </div>
            <div>
              <p className="whitespace-nowrap">
                {currentlyPlaying.artists[0].name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function DynamicLarge({ currentlyPlaying }: { currentlyPlaying: Song }) {
  return (
    <div className="flex justify-center items-center top-5 gap-4 text-foreground">
      <Image
        quality={100}
        width={150}
        height={150}
        src={currentlyPlaying.albumArtUrl}
        alt={""}
        className="rounded-lg min-h-[150px] min-w-[150px]"
      />
      <div>
        <p className="text-sm text-clip" style={{ whiteSpace: "nowrap" }}>
          {currentlyPlaying.name}
        </p>
        <p className="text-sm text-clip" style={{ whiteSpace: "nowrap" }}>
          {currentlyPlaying.artists[0].name}
        </p>
      </div>
    </div>
  );
}
