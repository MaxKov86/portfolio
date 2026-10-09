export type Theme = "dark" | "light";

export interface Project {
  name: string;
  domain: string;
  summary: string;
  stack: string[];
  href: string;
}

export interface Capability {
  title: string;
  body: string;
}

export interface ContactLink {
  label: string;
  href: string;
  handle: string;
}

export interface SiteProfile {
  name: string;
  firstName: string;
  lastName: string;
  monogram: string;
  role: string;
  location: string;
  email: string;
  /** Path in /public, or an absolute URL. Empty string renders the monogram panel. */
  photoUrl: string;
  intro: string;
  aboutLead: string;
  aboutSecondary: string;
}
