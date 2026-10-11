export type TechIconName =
  | "laravel"
  | "php"
  | "node"
  | "nest"
  | "api"
  | "livewire"
  | "react"
  | "next"
  | "vue"
  | "typescript"
  | "tailwind"
  | "redux"
  | "mysql"
  | "postgres"
  | "supabase"
  | "linux"
  | "docker"
  | "git"
  | "jira"
  | "native"
  | "webrtc"
  | "ai";

export type PillarIconName =
  | "experience"
  | "fullstack"
  | "backend"
  | "frontend"
  | "problem";

export interface NavItem {
  label: string;
  id: string;
  /** Other section ids that should highlight this nav item while in view. */
  sections?: string[];
}

export interface SocialLink {
  name: "GitHub" | "LinkedIn" | "Email";
  href: string;
  label: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Tech {
  name: string;
  icon: TechIconName;
}

export interface Profile {
  name: string;
  role: string;
  headline: { lead: string; highlight: string };
  intro: string;
  availability: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  githubUsername: string;
  linkedin?: string;
  resumePath: string;
  story: string[];
  stats: Stat[];
  heroTech: Tech[];
  languages: string[];
}

export interface Pillar {
  title: string;
  description: string;
  icon: PillarIconName;
}

export interface AboutStat {
  /** Numeric values animate from zero; text values render as-is. */
  value: number | string;
  suffix?: string;
  label: string;
  caption: string;
  icon: PillarIconName;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: TechIconName;
  items: Tech[];
}

export interface ExperienceRole {
  company: string;
  companyUrl?: string;
  role: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  projects?: string[];
}

export type MockupVariant = "media" | "travel" | "messaging" | "commerce";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  company: string;
  role: string;
  problem: string;
  solution: string;
  technologies: string[];
  mockup: MockupVariant;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface JourneyStep {
  phase: string;
  title: string;
  period: string;
  description: string;
  points: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  detail?: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface TechUsage {
  name: string;
  weight: number;
  contexts: string[];
}
