import { SiteConfig } from "@/types";

import { env } from "@/env.mjs";

export const siteConfig: SiteConfig = {
  name: "DEV SPACE",
  author: "THEALIFHAKER1",
  description: "a dev space and portfolio of THEALIFHAKER1.",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://ae1.pro",
  },
  links: {
    github: "https://github.com/THEALIFHAKER1",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
};
