/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DiscordApiResponse, DiscordApiContent, Activity } from "@/types";
import { env } from "@/env.mjs";

import useWebSocket, { ReadyState } from "react-use-websocket";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { DiscordStatus } from "./discord-status";
import DiscordActivity from "./discord-activity";
interface MessageData {
  op: number;
  t: string;
  d: DiscordApiContent;
}

export default function DiscordCard() {
  const [data, setData] = useState<DiscordApiResponse | null>(null);
  const userId = env.NEXT_PUBLIC_DISCORD_ID;
  const defaultInterval = 30000;
  const socketUrl = "wss://api.lanyard.rest/socket";

  const initMessage = () => {
    sendMessage(JSON.stringify({ op: 2, d: { subscribe_to_ids: [userId] } }));
  };

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    onOpen: () => {
      initMessage();
      handleHello();
    },
    shouldReconnect: () => true,
  });

  useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      initMessage();
    }
  }, [readyState, userId, sendMessage]);

  const handleEvent = (messageData: MessageData) => {
    const eventData = messageData.d;
    switch (messageData.t) {
      case "INIT_STATE":
        setData({ data: eventData && eventData[userId] });
        break;
      case "PRESENCE_UPDATE":
        setData({ data: eventData });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (lastMessage) {
      const messageData = JSON.parse(lastMessage.data);
      handleEvent(messageData);
    }
  }, [lastMessage]);

  const handleHello = () => {
    const heartbeatInterval = defaultInterval;

    const heartbeatIntervalId = setInterval(() => {
      sendMessage(JSON.stringify({ op: 3 }));
    }, heartbeatInterval);

    return () => clearInterval(heartbeatIntervalId);
  };

  return (
    <Card className="w-full md:w-[400px] dark:bg-neutral-800 bg-neutral-200 md:max-w-[400px] border border-black dark:border-neutral-700">
      <CardHeader>
        <CardTitle className="text-sm font-medium">Discord activity</CardTitle>
      </CardHeader>
      <CardContent>
        {!data ? (
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-[14rem]" />
            </div>
            <Skeleton className="h-8 w-full" />
          </div>
        ) : (
          <div>
            {data.data && (
              <div>
                <DiscordStatus data={data.data} />
                <DiscordActivity data={data.data} />
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
