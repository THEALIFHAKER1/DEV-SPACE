import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MalaysiaTimeFormatter } from "@/lib/utils/constants";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function Time({ time }: { time: Date }) {
  const isNight = time.getHours() >= 17 || time.getHours() < 6;
  return (
    <>
      <div>{isNight ? <NightCard time={time} /> : <DayCard time={time} />}</div>
      <div>
        {!isNight ? <NightCard time={time} /> : <DayCard time={time} />}
      </div>
    </>
  );
}

function NightCard({ time }: { time: Date }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    for (let i = 0; i < 50; i++) {
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 2,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
  }, [canvasRef]);

  return (
    <Card className="overflow-hidden hovers w-full md:w-[150px] h-[150px] bg-neutral-800 text-white md:max-w-[400px] border border-black dark:border-neutral-700">
      <div className="relative">
        <canvas
          ref={canvasRef}
          aria-hidden
          className="pointer-events-none h-full w-full md:w-[150px] md:h-[150px] overflow-hidden rounded-2xl"
        />
        <div className="absolute inset-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Night</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">
              {time.toLocaleTimeString("en-US", {
                timeZone: "Asia/Kuala_Lumpur",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </div>
            <p className="text-xs dark:text-muted-foreground">
              Malaysia Time (GMT+8)
            </p>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}

function DayCard({ time }: { time: Date }) {
  return (
    <Card className="relative overflow-hidden h-full hovers w-full md:w-[150px] md:h-[150px] bg-blue-400 dark:bg-neutral-800 text-white md:max-w-[400px] border border-black dark:border-neutral-700">
      <motion.div
        aria-hidden
        animate={{
          scale: [1, 1.1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="pointer-events-none absolute bottom-0 right-0 rounded-tl-full bg-white/10 pl-2 pt-2 md:pl-4 md:pt-4 "
      >
        <motion.div>
          <div className="bottom-0 right-0 rounded-tl-full bg-white/20 pl-10 pt-10 md:pl-4 md:pt-4">
            <div className="bottom-0 right-0 rounded-tl-full bg-white/20 pl-10 pt-10 md:pl-4 md:pt-4">
              <motion.div
                initial={false}
                animate={{ scale: [1, 0.8, 1.1, 1, 1, 1, 2] }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="relative h-[50px] w-[50px] md:h-5 md:w-5 rounded-tl-full bg-yellow-200"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className="absolute inset-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Day</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold">
            {time.toLocaleTimeString("en-US", {
              timeZone: "Asia/Kuala_Lumpur",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </div>
          <p className="text-xs dark:text-muted-foreground">
            Malaysia Time (GMT+8)
          </p>
        </CardContent>
      </div>
    </Card>
  );
}
