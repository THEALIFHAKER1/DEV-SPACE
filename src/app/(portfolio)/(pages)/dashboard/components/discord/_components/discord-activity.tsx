import { Alert, AlertDescription } from "@/components/ui/alert";
import React from "react";
import { DiscordActivityCard } from "./discord-activity-card";
import { DiscordApiResponse, Activity } from "@/types";

export default function discordActivity(data: DiscordApiResponse) {
  return (
    <div className="md:h-[134px] overflow-auto">
      {!data ||
      !data.data ||
      !data.data.activities ||
      data.data.activities.length === 0 ? (
        <Alert className="">
          <AlertDescription>No activities currently.</AlertDescription>
        </Alert>
      ) : (
        <>
          {/* Render custom status with no other activities */}
          {data.data.activities.length === 1 &&
          data.data.activities[0].name === "Custom Status" ? (
            <div className="">
              {data?.data?.activities?.map(
                (activity: Activity, index: number) =>
                  activity.name === "Custom Status" && (
                    <p key={index} className="my-2">
                      {activity.state}
                    </p>
                  )
              )}
              <Alert className="my-2">
                <AlertDescription>No activities currently.</AlertDescription>
              </Alert>
            </div>
          ) : (
            <div className="my-2">
              {/* Render custom status including other activities */}
              {data?.data?.activities?.map(
                (activity: Activity, index: number) =>
                  activity.name === "Custom Status" && (
                    <p key={index} className="my-2">
                      {activity.state}
                    </p>
                  )
              )}
              {data?.data?.activities?.map(
                (activity: Activity, index: number) =>
                  activity.name !== "Custom Status" && (
                    <div key={index} className="my-2 md:my-5">
                      <DiscordActivityCard activity={activity} data={data} />
                    </div>
                  )
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
