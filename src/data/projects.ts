import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "videoxrm",
    name: "VideoXRM",
    tagline: "AI-driven business media platform",
    description:
      "An AI-driven business media platform where I owned the API layer and helped refine the product interface.",
    company: "Silicon Orchard Ltd.",
    role: "Backend developer · Frontend contributor",
    problem:
      "Businesses needed an AI-driven media platform backed by a reliable API layer, with an interface their teams could use day to day.",
    solution:
      "Designed and integrated the platform's APIs in Laravel and MySQL, then improved the Vue.js frontend to sharpen the interface and user experience.",
    technologies: ["Laravel", "MySQL", "Vue.js", "Bootstrap"],
    mockup: "media",
    featured: true,
  },
  {
    slug: "journey-to-nippon",
    name: "Journey to Nippon",
    tagline: "Travel platform for exploring Japan",
    description:
      "A Japan-focused travel platform, live in production, built with a modern Next.js and TypeScript stack.",
    company: "Silicon Orchard Ltd.",
    role: "Frontend engineer · API support",
    problem:
      "Travelers needed a smooth, efficient platform experience, with key features wired to a working backend.",
    solution:
      "Built the user interface with Next.js, TypeScript and Tailwind CSS, and supported Node.js API development to integrate key functionality.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MySQL"],
    mockup: "travel",
    liveUrl: "https://journeytonippon.com/",
    featured: true,
  },
  {
    slug: "x-messaging-app",
    name: "X Messaging App",
    tagline: "Mobile messaging with live video and audio",
    description:
      "A cross-platform messaging app with built-in real-time video and audio calling.",
    company: "Silicon Orchard Ltd.",
    role: "Mobile engineer",
    problem:
      "Users needed seamless real-time video and audio calls inside a mobile messaging app.",
    solution:
      "Developed the app in React Native and integrated WebRTC through LiveKit, with Supabase powering the backend.",
    technologies: ["React Native", "TypeScript", "WebRTC", "LiveKit", "Supabase"],
    mockup: "messaging",
  },
  {
    slug: "original-store",
    name: "Original Store eCommerce",
    tagline: "Complete online store, built from scratch",
    description:
      "A full eCommerce platform for Original Store, covering the storefront, checkout, payments and order management.",
    company: "Original Store Ltd.",
    role: "Full stack engineer · Project lead",
    problem:
      "The business needed a secure online store with payments and order management, and no existing platform to start from.",
    solution:
      "Led every phase from analysis to implementation and shipped a Laravel and MySQL store with integrated payment and order management.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    mockup: "commerce",
    liveUrl: "http://originalstorebd.com/",
  },
];
