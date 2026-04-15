export type NavLink = {
  label: string;
  url: string;
};

export type NavigationData = {
  brand: string;
  links: NavLink[];
};

export type Action = {
  label: string;
  url: string;
  variant: "primary" | "secondary" | "text";
};

export type HeroProject = {
  prefix: string;
  label: string;
  url: string;
  suffix: string;
};

export type HeroData = {
  headline: [string, string];
  project: HeroProject;
  summary: string;
  updatedAt: string;
  visualAlt: string;
  actions: Action[];
};

export type FaqItem = {
  question: string;
  paragraphs: string[];
  list?: string[];
};

export type FaqData = {
  title: string;
  items: FaqItem[];
};

export type BulletinData = {
  navigation: NavigationData;
  hero: HeroData;
  faq: FaqData;
};
