import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ElapsedTime } from "@/components/timer/elapsed-time";
import { ProgressBar } from "@/components/timer/progress-bar";
import { BsDiscord } from "react-icons/bs";
import { DiscordApiResponse, Activity } from "@/types";
import Image from "next/image";

interface DiscordActivityCardProps {
  activity: Activity;
  data: DiscordApiResponse;
}

export function DiscordActivityCard({
  activity,
  data,
}: DiscordActivityCardProps) {
  return (
    <Alert className="w-full flex items-center gap-3 flex-row text-left border-none">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {activity.assets &&
            activity.assets.large_image &&
            activity.assets.large_image.startsWith("spotify:") ? (
              <Image
                src={data.data.spotify.album_art_url}
                width={90}
                height={90}
                alt="Activity image"
                className="rounded"
              />
            ) : activity.assets && activity.application_id ? (
              <Image
                src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.webp?size=512`}
                width={90}
                height={90}
                alt="Activity image"
                className="rounded"
                priority
              />
            ) : activity.application_id ? (
              <Image
                src={`https://dcdn.dstn.to/app-icons/${activity.application_id}.webp?size=512`}
                width={90}
                height={90}
                alt="Activity image"
                className="rounded"
                priority
              />
            ) : (
              <div
                className="flex items-center justify-center"
                style={{
                  width: 90,
                  height: 90,
                  backgroundColor: "gray",
                  borderRadius: "0.25rem",
                }}
              >
                <BsDiscord className="h-12 w-12" />
              </div>
            )}
          </TooltipTrigger>
          <TooltipContent>
            {activity.assets
              ? activity.assets.large_text || activity.name
              : activity.name}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="w-full">
        <AlertTitle className="text-xs">{activity.name}</AlertTitle>
        <AlertDescription className="text-xs text-muted-foreground">
          {activity.details || null}
        </AlertDescription>
        <AlertDescription className="text-xs text-muted-foreground">
          {(!activity.assets?.large_image?.startsWith("spotify:") &&
            activity.state) ||
            null}
        </AlertDescription>
        <AlertDescription className="">
          {activity.timestamps &&
          activity.timestamps.start &&
          activity.timestamps.end ? (
            <ProgressBar
              start={activity.timestamps.start}
              end={activity.timestamps.end}
            />
          ) : null}
        </AlertDescription>
        <AlertDescription className="text-xs text-muted-foreground">
          {activity.timestamps && activity.timestamps.start ? (
            <ElapsedTime unixTimestamp={activity.timestamps.start} />
          ) : null}
        </AlertDescription>
      </div>
    </Alert>
  );
}
