export type SiteConfig = {
  name: string;
  author: string;
  description: string;
  keywords: Array<string>;
  url: {
    base: string;
    author: string;
  };
  links: {
    github: string;
  };
  ogImage: string;
};

// Github
export type Repository = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  languages_url: string;
  languages: {
    [key: string]: number;
  };
  stargazers_count: number;
  forks_count: number;
};

// Wakatime
type Languages = {
  name: string;
  total_seconds: number;
  percent: number;
  digital: string;
  decimal: string;
  text: string;
  hours: number;
  minutes: number;
};

// Discord
type DiscordUser = {
  id: string;
  username: string;
  avatar: string;
  global_name: string;
};

type Status = string | "online" | "offline" | "idle" | "dnd";

type Activity = {
  name: string;
  state?: string;
  details?: string;
  application_id?: string;
  timestamps?: {
    start?: number;
    end?: number;
  };
  assets?: {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
  };
};

type DiscordApiContent = {
  spotify: {
    album_art_url: string;
  };
  discord_user: DiscordUser;
  activities: Activity[];
  discord_status: string;
} & DiscordKeyString;

type DiscordKeyString = {
  [key: string]: DiscordApiContent;
};

type DiscordApiResponse = {
  data: DiscordApiContent;
};
