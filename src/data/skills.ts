import type { SkillCategory, Tech } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    description: "APIs, business logic and services.",
    icon: "laravel",
    items: [
      { name: "Laravel", icon: "laravel" },
      { name: "PHP", icon: "php" },
      { name: "Node.js", icon: "node" },
      { name: "NestJS", icon: "nest" },
      { name: "REST API", icon: "api" },
    ],
  },
  {
    title: "Frontend",
    description: "Fast, responsive product interfaces.",
    icon: "react",
    items: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "Vue.js", icon: "vue" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    title: "Database",
    description: "Relational modelling and queries.",
    icon: "mysql",
    items: [{ name: "MySQL", icon: "mysql" }],
  },
  {
    title: "Tools",
    description: "Delivery, environments and versioning.",
    icon: "docker",
    items: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Linux", icon: "linux" },
    ],
  },
];

export const additionalSkills: Tech[] = [
  { name: "Laravel Livewire", icon: "livewire" },
  { name: "Redux", icon: "redux" },
  { name: "React Native", icon: "native" },
  { name: "WebRTC", icon: "webrtc" },
  { name: "LiveKit", icon: "webrtc" },
  { name: "Supabase", icon: "supabase" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "Jira", icon: "jira" },
  { name: "Cursor", icon: "ai" },
  { name: "Claude", icon: "ai" },
  { name: "ChatGPT", icon: "ai" },
  { name: "Copilot", icon: "ai" },
];
