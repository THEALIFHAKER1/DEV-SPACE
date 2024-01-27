"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

function longBlank() {
  return (
    <Card className="md:w-auto w-full border-2 border-zinc-500 bg-background dark:border-zinc-400">
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
