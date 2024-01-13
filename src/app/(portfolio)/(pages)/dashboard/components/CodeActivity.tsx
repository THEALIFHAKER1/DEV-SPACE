import React from "react";
import { getCodingStats } from "@/lib/api/wakatime";
import { Languages as LanguagesType } from "@/types";
import { CodeTime } from "./code-time";
import { Languages } from "./languages";

interface ResponseData {
  data: {
    human_readable_range: string;
    human_readable_total_including_other_language: string;
    languages: LanguagesType[];
  };
}

export default async function CodeActivity() {
  const data = (await getCodingStats()) as ResponseData;

  const started = data.data.human_readable_range;
  const totalTime = data.data.human_readable_total_including_other_language;
  const languages: LanguagesType[] = data.data.languages;
  return (
    <>
      <CodeTime started={started} totalTime={totalTime} languages={languages} />
      <Languages languages={languages} />
    </>
  );
}
