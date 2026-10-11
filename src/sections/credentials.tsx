import { Award, BadgeCheck, GraduationCap, Languages, MessagesSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { IconTile } from "@/components/icon-tile";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/spotlight-card";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";

const certIcons: LucideIcon[] = [Award, BadgeCheck, MessagesSquare];

export function Credentials() {
  return (
    <Section id="credentials" glow="center">
      <SectionHeading
        index="06"
        eyebrow="Education & certifications"
        title="Foundations that keep me growing."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1fr] lg:gap-6">
        {education.map((item) => (
          <FadeIn key={item.institution} direction="left">
            <SpotlightCard as="article" className="h-full p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <IconTile className="h-12 w-12" float>
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </IconTile>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[11px] text-accent">
                  Class of {item.year}
                </span>
              </div>
              <p className="mt-6 font-mono text-[11px] tracking-wider text-subtle uppercase">
                Bachelor&apos;s degree
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">{item.degree}</h3>
              <p className="mt-1.5 text-sm text-muted">{item.institution}</p>
              {item.detail ? (
                <dl className="mt-6 flex gap-8 border-t border-line pt-5 text-sm">
                  <div>
                    <dt className="text-xs text-subtle">Result</dt>
                    <dd className="mt-0.5 text-ink">{item.detail}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-subtle">Field</dt>
                    <dd className="mt-0.5 text-ink">Computer Science</dd>
                  </div>
                </dl>
              ) : null}
            </SpotlightCard>
          </FadeIn>
        ))}

        <ul className="grid gap-4">
          {certifications.map((item, index) => {
            const Icon = certIcons[index % certIcons.length] ?? Languages;
            return (
              <FadeIn key={item.name} as="li" delay={index * 0.07}>
                <SpotlightCard className="h-full p-5" contentClassName="flex items-center gap-4">
                  <IconTile>
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
                  </IconTile>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[15px] font-semibold tracking-tight text-ink">
                      {item.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted">{item.issuer}</p>
                  </div>
                  <span className="hidden rounded-full border border-line px-2.5 py-1 font-mono text-[10px] tracking-wider text-subtle uppercase sm:inline">
                    Certified
                  </span>
                </SpotlightCard>
              </FadeIn>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
