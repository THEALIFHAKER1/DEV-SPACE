"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import Time from "./_components/time";
import Birthtday from "./_components/birthday";
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
      <Birthtday time={time} />
    </div>
  );
}
