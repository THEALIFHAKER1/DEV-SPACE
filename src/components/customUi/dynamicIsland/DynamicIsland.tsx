"use client";

import LiveIsland from "./LiveIsland";

export default function DynamicIsland() {
  return (
    <LiveIsland
      className="flex justify-center items-center uppercase top-5"
      smallClassName="text-xs"
      largeClassName="text-7xl"
      initialAnimation
    >
      {(isSmall) => (isSmall ? "small" : "large")}
    </LiveIsland>
  );
}
