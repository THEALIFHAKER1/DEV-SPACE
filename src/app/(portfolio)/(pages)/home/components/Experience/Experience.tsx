import React from "react";
import { Box, Stack } from "@mui/material";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <Box>
      <Stack direction={["column-reverse", "row"]}>
        <Box
          sx={{
            width: "100%",
          }}
        >
          test
          <ExperienceCard
            title="Experience"
            position="Software Engineer"
            company="Amazon"
            date="July 2021 - Present"
            location="Seattle, WA"
          />
          <ExperienceCard
            title="Experience"
            position="Software Engineer"
            company="Amazon"
            date="July 2021 - Present"
            location="Seattle, WA"
          />
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          test
          <ExperienceCard
            title="Experience"
            position="Software Engineer"
            company="Amazon"
            date="July 2021 - Present"
            location="Seattle, WA"
          />
          <ExperienceCard
            title="Experience"
            position="Software Engineer"
            company="Amazon"
            date="July 2021 - Present"
            location="Seattle, WA"
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default Experience;
