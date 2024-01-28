import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { daysUntilBirthday } from "@/lib/utils/constants";
import { motion } from "framer-motion";
import React from "react";

export default function Birthday({ time }: { time: Date }) {
  return (
    <motion.div
      initial={{ height: 80 }}
      animate={{ height: "fit-content" }}
      transition={{ duration: 0.5 }}
      style={{ overflow: "hidden" }}
    >
      <Card className=" hovers md:w-[150px] h-[150px] w-full dark:bg-neutral-800 bg-neutral-200 md:max-w-[400px] border border-black dark:border-neutral-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Birthday</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold">{daysUntilBirthday} days</div>
          <p className="text-xs text-muted-foreground">until birthday</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
