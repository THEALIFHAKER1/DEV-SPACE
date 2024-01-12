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
  stargazers_count: number;
};
