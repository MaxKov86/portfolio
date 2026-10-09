import type { Capability, ContactLink, Project, SiteProfile } from "../types";

/**
 * Everything the site says lives here.
 * Edit this file to update the portfolio — components read from it and never hardcode copy.
 */

export const PROFILE: SiteProfile = {
  name: "Maks Kovalov",
  firstName: "Maks",
  lastName: "Kovalov",
  monogram: "MK",
  role: "Frontend engineer",
  location: "Mykolaiv, Ukraine",
  email: "kovalov.m2026@gmail.com",

  // Drop your photo into /public and set this to "/me.jpg".
  // Leave empty to show the monogram panel instead.
  photoUrl: "/img/me.png",

  intro:
    "I build production web apps and marketing sites with React, Next.js and TypeScript — from a photo-wallpaper storefront with custom manufacturing to a legal firm's client-facing site. I care about the parts people actually feel: how fast it loads, how the layout holds on a small screen, and whether the interface ever leaves them guessing.",

  aboutLead:
    "I started in front-end work by building sites for businesses that needed to sell or explain something clearly — a store, a law practice, a cleaning service. That taught me to treat a project as a commercial goal first and a component tree second.",

  aboutSecondary:
    "Now I'm also building two products of my own: an AI onboarding assistant for HR teams, and a CRM for cleaning companies. Both run on the same stack I use for client work, which keeps my hands on the whole path from schema to interface.",
};

export const PROJECTS: Project[] = [
  {
    name: "Art Dealer",
    domain: "commercial",
    summary:
      "Photo wallpaper store with made-to-order printing — catalogue, custom sizing and a cart flow that keeps the configuration intact from browse to checkout.",
    stack: ["React", "TypeScript", "Styled-Components", "Zustand"],
    href: "https://arft-fe.onrender.com/",
  },
  {
    name: "LFITS",
    domain: "commercial",
    summary:
      "Site for a legal partner to IT companies and startups: structuring, compliance, contracts and international operations, written for founders in a hurry.",
    stack: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Styled-Components",
      "Zustand",
    ],
    href: "https://www.lfits.com.ua/",
  },
  {
    name: "Magic Cleaning",
    domain: "commercial",
    summary:
      "Cleaning company site covering apartments, houses, offices and deep furniture cleaning — built around one job: turn a visitor into a booked appointment.",
    stack: ["React", "Styled-Components"],
    href: "https://magic-cleaning.vercel.app/",
  },
  {
    name: "Orders",
    domain: "pet-project",
    summary:
      "Cleaning company site covering apartments, houses, offices and deep furniture cleaning — built around one job: turn a visitor into a booked appointment.",
    stack: ["React", "Styled-Components"],
    href: "https://orders-dashboard-gules.vercel.app/",
  },
  {
    name: "Butget Tracker",
    domain: "pet-project",
    summary:
      "Cleaning company site covering apartments, houses, offices and deep furniture cleaning — built around one job: turn a visitor into a booked appointment.",
    stack: ["React", "Styled-Components"],
    href: "https://butget-tracker-eosin.vercel.app/",
  },
  {
    name: "Booking",
    domain: "pet-project",
    summary:
      "Cleaning company site covering apartments, houses, offices and deep furniture cleaning — built around one job: turn a visitor into a booked appointment.",
    stack: ["React", "Styled-Components"],
    href: "https://booking-frontend-pi-lac.vercel.app/",
  },
];

export const STACK: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Styled-Components",
  "Zustand",
  "TanStack Query",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Firebase",
  "REST APIs",
  "Vite",
];

export const CAPABILITIES: Capability[] = [
  {
    title: "Interface architecture",
    body: "React and Next.js App Router, components that stay readable after the third round of changes.",
  },
  {
    title: "Type-safe code",
    body: "TypeScript in strict mode, so the shape of the data is settled before it reaches the screen.",
  },
  {
    title: "Styling systems",
    body: "Tailwind for speed, Styled-Components for design systems that outlive a single page.",
  },
  {
    title: "State and data",
    body: "Zustand and TanStack Query — caching, loading and error states users never have to guess at.",
  },
  {
    title: "Backend touchpoints",
    body: "Node.js, PostgreSQL, Prisma and Firebase when the frontend needs something real behind it.",
  },
];

export const CONTACTS: ContactLink[] = [
  { label: "GitHub", href: "https://github.com/MaxKov86", handle: "MaxKov86" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/maks-kovalov/",
    handle: "maks-kovalov",
  },
  {
    label: "Telegram",
    href: "https://t.me/It_is_me_Max",
    handle: "@It_is_me_Max",
  },
];
