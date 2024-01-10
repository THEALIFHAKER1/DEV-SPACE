import { Box, Stack, Typography } from "@mui/material";

import React from "react";

const data = [
  {
    id: 1,
    url: "https://linear.app",
  },
  {
    id: 2,
    url: "https://linear.app",
  },
  {
    id: 3,
    url: "https://linear.app",
  },
  {
    id: 4,
    url: "https://linear.app",
  },
];
function HeroDetails() {
  return (
    <Box>
      <Stack
        direction="column"
        className="items-center justify-center text-center sm:items-start sm:text-start"
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          THEALIFHAKER1
        </Typography>
        <Typography maxWidth={300}>
          MUHAMMAD ALIF DANIEL BIN MOHD HAIRUL HEZZELIN
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          {`Fullstack Developer </>`}
        </Typography>
        <Box>
          <div className="my-5 flex h-10 w-full flex-row space-x-2 overflow-x-auto">
            {data.map((item, id) => (
              <div
                key={id}
                className="flex h-10 w-10 items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
              ></div>
            ))}
          </div>
        </Box>
      </Stack>
    </Box>
  );
}

export default HeroDetails;
