"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

function longBlank() {
  return (
    <Card className="w-full md:w-[400px] dark:bg-neutral-800 bg-neutral-200 md:max-w-[400px] border border-black dark:border-neutral-700">
      <CardHeader>
        <CardTitle className="text-lg">title</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-lg font-bold">content </div>
        <p className="text-xs text-muted-foreground">sub content</p>
      </CardContent>
    </Card>
  );
}

export default longBlank;
