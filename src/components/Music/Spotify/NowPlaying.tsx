"use client";
import React, { useEffect, useState } from "react";
import getCurrentlyPlaying from "@/lib/api/spotify";
import AnimatedBars from "./Animation";
import { useTheme } from "next-themes";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

interface Song {
  name: string;
  artists: Artist[];
  albumArtUrl: string;
}

interface Artist {
  name: string;
}

function NowPlaying() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<Song | null>(null);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

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
    <>
      {loading ? (
        <div></div>
      ) : (
        <>
          {currentlyPlaying ? (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 0.5, delay: 2 }}
              style={{ overflow: "hidden" }}
            >
              <div
                className="w-200px overflow-hidden"
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
                      ? "bg-gradient-to-r from-white via-transparent"
                      : "bg-gradient-to-r from-black via-transparent"
                  } flex pl-10px items-center relative overflow-hidden`}
                >
                  {currentlyPlaying && (
                    <div className="pr-2">
                      <AnimatedBars />
                    </div>
                  )}
                  <div className="flex flex-col">
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
          ) : (
            <div></div>
          )}
        </>
      )}
    </>
  );
}

export default NowPlaying;
