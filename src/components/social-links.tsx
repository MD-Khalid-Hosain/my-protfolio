import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { socialLinks } from "@/data/profile";
import { cn } from "@/utils/cn";

const icons = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Email: Mail,
};

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {socialLinks.map((link) => {
        const Icon = icons[link.name];
        const external = link.href.startsWith("http");
        return (
          <li key={link.name}>
            <a
              href={link.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:text-ink"
            >
              <Icon className="h-4 w-4" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
