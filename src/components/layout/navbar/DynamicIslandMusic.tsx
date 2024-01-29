"use client";

import getCurrentlyPlaying from "@/lib/api/spotify";
import LiveIsland from "../../customUi/dynamicIsland/LiveIsland";
import { useEffect, useState } from "react";
import Image from "next/image";
import AnimatedBars from "@/components/Music/Spotify/Animation";
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
          className="flex justify-center items-center top-5"
          initialAnimation
          smallWidth={100}
          triggerType="hover"
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
  return (
    <div className="flex items-center justify-between gap-6 w-full">
      <Image
        quality={100}
        width={20}
        height={20}
        src={currentlyPlaying.albumArtUrl}
        alt={""}
        className="rounded-full ml-2"
      />
      <AnimatedBars />
    </div>
  );
}

function DynamicLarge({ currentlyPlaying }: { currentlyPlaying: Song }) {
  return (
    <div className="flex justify-center items-center top-5 gap-4">
      <Image
        priority
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
