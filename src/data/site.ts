import { profile } from "@/data/profile";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://khalidhosain.dev";

export const site = {
  name: profile.name,
  title: `${profile.name} | Software Engineer`,
  description:
    "Software Engineer specializing in Laravel, Next.js, React, Node.js and scalable web applications.",
  url: siteUrl,
  locale: "en_US",
  keywords: [
    "MD Khalid Hosain",
    "Software Engineer",
    "Full Stack Developer",
    "Laravel Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "TypeScript",
    "Vue.js",
    "Bangladesh",
  ],
};
