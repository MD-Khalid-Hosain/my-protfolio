import type { AboutStat, NavItem, Pillar, Profile, SocialLink } from "@/types";

export const profile: Profile = {
  name: "MD Khalid Hosain",
  role: "Software Engineer · Full Stack Developer",
  headline: {
    lead: "Software Engineer Building",
    highlight: "Scalable Web Applications",
  },
  intro:
    "I design and ship production web and mobile products end to end — Laravel and Node.js APIs, React, Next.js and Vue.js interfaces, and real-time features that hold up in the real world.",
  availability: "Open to international roles",
  location: "Dhaka, Bangladesh",
  email: "khalidhossain009@gmail.com",
  phone: "+8801912467427",
  github: "https://github.com/MD-Khalid-Hosain",
  githubUsername: "MD-Khalid-Hosain",
  // Set your LinkedIn profile URL here to show it across the site.
  linkedin: undefined,
  resumePath: "/MD_Khalid_Hosain_Resume.pdf",
  story: [
    "I started building for the web while studying Computer Science and Engineering at IUBAT, and turned that into a career in October 2020 — launching a complete eCommerce platform at Original Store Ltd., from analysis through payments and order management.",
    "At Silicon Orchard Ltd. I spent four years across very different products: the API layer behind VideoXRM, an AI-driven business media platform; the interface for the Journey to Nippon travel platform; and a React Native messaging app with real-time video and audio over WebRTC.",
    "Today at Ready How I develop and optimize a responsive marketplace. I'm looking for a team of motivated engineers where I can own complex problems and keep shipping well-engineered products.",
  ],
  stats: [
    { value: "6+", label: "Years shipping software" },
    { value: "3", label: "Product companies" },
    { value: "5", label: "Products built" },
  ],
  heroTech: [
    { name: "Laravel", icon: "laravel" },
    { name: "Next.js", icon: "next" },
    { name: "React", icon: "react" },
    { name: "Node.js", icon: "node" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Docker", icon: "docker" },
  ],
  languages: ["Bangla", "English"],
};

export const aboutStats: AboutStat[] = [
  {
    value: 6,
    suffix: "+",
    label: "Years experience",
    caption: "Shipping production software since Oct 2020",
    icon: "experience",
  },
  {
    value: "Full Stack",
    label: "Development",
    caption: "From database schema to the last pixel",
    icon: "fullstack",
  },
  {
    value: "API",
    label: "Engineering",
    caption: "REST APIs powering real products",
    icon: "backend",
  },
  {
    value: "Scalable",
    label: "Web applications",
    caption: "Built to grow with users and teams",
    icon: "frontend",
  },
];

export const pillars: Pillar[] = [
  {
    title: "Backend architecture",
    description:
      "Designing and integrating REST APIs with Laravel, NestJS, Node.js and SQL databases — like the backend behind VideoXRM.",
    icon: "backend",
  },
  {
    title: "Frontend engineering",
    description:
      "Responsive, fast interfaces with Next.js, TypeScript and Tailwind CSS, such as the Journey to Nippon platform.",
    icon: "frontend",
  },
  {
    title: "Problem solving",
    description:
      "Real-time WebRTC calls, payment and order flows, marketplace features — I enjoy the parts that are hard to get right.",
    icon: "problem",
  },
];

export const navItems: NavItem[] = [
  { label: "Home", id: "top" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience", sections: ["journey"] },
  { label: "Projects", id: "projects", sections: ["github", "testimonials", "credentials"] },
  { label: "Contact", id: "contact" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: profile.github, label: "GitHub profile" },
  ...(profile.linkedin
    ? [{ name: "LinkedIn" as const, href: profile.linkedin, label: "LinkedIn profile" }]
    : []),
  { name: "Email", href: `mailto:${profile.email}`, label: "Send email" },
];
