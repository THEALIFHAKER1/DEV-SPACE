"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import Time from "./_components/time";

export default function TimeCard() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="grid md:w-auto w-full gap-2 grid-cols-2 md:grid-cols-1 md:grid-rows-2 ">
      <Time time={time} />
      {/* <Card className=" hovers md:w-[150px] md:h-[150px] w-full dark:bg-neutral-800 bg-neutral-200 md:max-w-[400px] border border-black dark:border-neutral-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Title</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold">content</div>
          <p className="text-xs text-muted-foreground">sub content</p>
        </CardContent>
      </Card> */}
    </div>
  );
}
