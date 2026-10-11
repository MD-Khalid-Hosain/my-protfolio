import {
  Atom,
  Bot,
  Braces,
  Cable,
  Cat,
  Cloud,
  Container,
  Database,
  DatabaseZap,
  FileCode2,
  GitBranch,
  Hexagon,
  Layers3,
  Repeat,
  Smartphone,
  SquareKanban,
  Terminal,
  Triangle,
  Video,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { LaravelIcon } from "@/components/brand-icons";
import type { TechIconName } from "@/types";
import { cn } from "@/utils/cn";

const icons: Record<Exclude<TechIconName, "laravel">, LucideIcon> = {
  php: FileCode2,
  node: Hexagon,
  nest: Cat,
  api: Cable,
  livewire: Zap,
  react: Atom,
  next: Triangle,
  vue: Layers3,
  typescript: Braces,
  tailwind: Wind,
  redux: Repeat,
  mysql: Database,
  postgres: DatabaseZap,
  supabase: Cloud,
  linux: Terminal,
  docker: Container,
  git: GitBranch,
  jira: SquareKanban,
  native: Smartphone,
  webrtc: Video,
  ai: Bot,
};

export function TechIcon({
  name,
  className,
}: {
  name: TechIconName;
  className?: string;
}) {
  if (name === "laravel") {
    return <LaravelIcon className={cn("h-4 w-4", className)} />;
  }
  const Icon = icons[name];
  return <Icon className={cn("h-4 w-4", className)} strokeWidth={1.75} aria-hidden="true" />;
}
