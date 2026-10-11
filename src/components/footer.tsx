import { ArrowUp } from "lucide-react";
import { Container } from "@/components/container";
import { SocialLinks } from "@/components/social-links";
import { navItems, profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.role}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <SocialLinks />
      </Container>
      <Container className="flex items-center justify-between border-t border-line py-6 text-xs text-subtle">
        <p>© 2026 {profile.name}. Built with Next.js, TypeScript & Tailwind CSS.</p>
        <a href="#top" className="inline-flex items-center gap-1 transition-colors hover:text-ink">
          Back to top <ArrowUp className="h-3 w-3" aria-hidden="true" />
        </a>
      </Container>
    </footer>
  );
}
