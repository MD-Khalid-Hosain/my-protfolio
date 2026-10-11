import { ArrowUpRight, Download, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";
import { Section } from "@/components/section";
import { profile } from "@/data/profile";

type IconComponent = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

interface ContactDetail {
  icon: IconComponent;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

const details: ContactDetail[] = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: `github.com/${profile.githubUsername}`,
    href: profile.github,
    external: true,
  },
  ...(profile.linkedin
    ? [
        {
          icon: LinkedInIcon,
          label: "LinkedIn",
          value: profile.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
          href: profile.linkedin,
          external: true,
        },
      ]
    : []),
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { icon: MapPin, label: "Location", value: profile.location },
];

export function Contact() {
  return (
    <Section id="contact">
      <FadeIn>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface shadow-[0_40px_120px_-60px_rgba(45,226,198,0.45)]">
          <div
            className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_40%,transparent_100%)]"
            aria-hidden="true"
          />
          <div
            className="absolute -top-48 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/[0.16] blur-[130px]"
            aria-hidden="true"
          />
          <div
            className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-accent-2/[0.12] blur-[120px]"
            aria-hidden="true"
          />

          <div className="relative px-6 pt-12 pb-8 text-center sm:px-12 sm:pt-16">
            <p className="glass mx-auto inline-flex items-center gap-2.5 rounded-full py-1.5 pr-4 pl-2 text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.availability}
            </p>
            <h2 className="mx-auto mt-6 max-w-3xl text-[2.4rem] leading-[1.04] font-semibold tracking-[-0.045em] text-balance sm:text-6xl">
              Let&apos;s build something <span className="text-gradient">amazing</span> together.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
              Hiring for a software engineering role, or building a product that needs a reliable
              full stack engineer? I&apos;d love to hear about it.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contact me
              </ButtonLink>
              <ButtonLink href={profile.resumePath} variant="secondary" download>
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </ButtonLink>
            </div>
          </div>

          <div className="relative grid gap-6 border-t border-line p-5 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
            <ul className="grid content-start gap-3">
              {details.map((detail, index) => (
                <FadeIn key={detail.label} as="li" delay={index * 0.05}>
                  <ContactRow detail={detail} />
                </FadeIn>
              ))}
            </ul>
            <div className="glass rounded-2xl p-5 sm:p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

function ContactRow({ detail }: { detail: ContactDetail }) {
  const { icon: Icon, label, value, href, external } = detail;
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-linear-to-br from-accent/20 to-accent-2/10 text-accent transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-[10px] tracking-wider text-subtle uppercase">
          {label}
        </span>
        <span className="block truncate text-sm text-ink">{value}</span>
      </span>
    </>
  );

  if (!href) {
    return <div className="glass flex items-center gap-4 rounded-2xl p-3.5">{content}</div>;
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group glass flex items-center gap-4 rounded-2xl p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15"
    >
      {content}
      <ArrowUpRight
        className="ml-auto h-4 w-4 shrink-0 text-subtle transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
        aria-hidden="true"
      />
    </a>
  );
}
