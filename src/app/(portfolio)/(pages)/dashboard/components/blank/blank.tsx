import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

function blank() {
  return (
    <div className="grid md:w-auto w-full gap-2 grid-cols-2 md:grid-cols-1 md:grid-rows-2 ">
      <Card className="w-full md:w-[400px] dark:bg-neutral-800 bg-neutral-200 md:max-w-[400px] border border-black dark:border-neutral-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Title</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold">content </div>
          <p className="text-xs text-muted-foreground">sub content</p>
        </CardContent>
      </Card>
      <Card className="w-full md:w-[400px] dark:bg-neutral-800 bg-neutral-200 md:max-w-[400px] border border-black dark:border-neutral-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Title</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold">content</div>
          <p className="text-xs text-muted-foreground">sub content</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default blank;
