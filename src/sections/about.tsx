import { Brain, Code2, Layers, Server, Workflow, type LucideIcon } from "lucide-react";
import { AnimatedNumber } from "@/components/animated-number";
import { FadeIn } from "@/components/fade-in";
import { IconTile } from "@/components/icon-tile";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/spotlight-card";
import { aboutStats, pillars, profile } from "@/data/profile";
import type { PillarIconName } from "@/types";

const icons: Record<PillarIconName, LucideIcon> = {
  experience: Workflow,
  fullstack: Layers,
  backend: Server,
  frontend: Code2,
  problem: Brain,
};

export function About() {
  return (
    <Section id="about" glow="left">
      <SectionHeading
        index="01"
        eyebrow="Who I am"
        title="An engineer who ships products, not just tickets."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
        <FadeIn direction="left">
          <article className="glass relative h-full overflow-hidden rounded-3xl p-6 sm:p-8">
            <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_60%)]" aria-hidden="true" />
            <div className="absolute -top-24 -right-24 h-60 w-60 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
            <p className="relative font-mono text-[11px] tracking-wider text-subtle uppercase">
              My story
            </p>
            <div className="relative mt-4 space-y-4 text-[15px] leading-7 text-muted">
              <p className="text-base leading-7 text-ink/90 sm:text-lg sm:leading-8">
                {profile.story[0]}
              </p>
              {profile.story.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <dl className="relative mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-5 text-sm">
              <div>
                <dt className="text-xs text-subtle">Based in</dt>
                <dd className="mt-0.5 text-ink">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-xs text-subtle">Languages</dt>
                <dd className="mt-0.5 text-ink">{profile.languages.join(", ")}</dd>
              </div>
              <div>
                <dt className="text-xs text-subtle">Status</dt>
                <dd className="mt-0.5 flex items-center gap-1.5 text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {profile.availability}
                </dd>
              </div>
            </dl>
          </article>
        </FadeIn>

        <ul className="grid grid-cols-2 gap-4">
          {aboutStats.map((stat, index) => {
            const Icon = icons[stat.icon];
            return (
              <FadeIn key={stat.label} as="li" delay={index * 0.07}>
                <SpotlightCard className="h-full p-5">
                  <div className="flex h-full flex-col justify-between gap-6">
                    <IconTile className="h-9 w-9">
                      <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                    </IconTile>
                    <div>
                      <p className="text-2xl font-semibold tracking-[-0.03em] text-ink sm:text-[2rem]">
                        {typeof stat.value === "number" ? (
                          <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                        ) : (
                          stat.value
                        )}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-ink/80">{stat.label}</p>
                      <p className="mt-2 text-xs leading-5 text-muted">{stat.caption}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </FadeIn>
            );
          })}
        </ul>
      </div>

      <ul className="mt-4 grid gap-4 md:grid-cols-3 lg:mt-6 lg:gap-6">
        {pillars.map((pillar, index) => {
          const Icon = icons[pillar.icon];
          return (
            <FadeIn key={pillar.title} as="li" delay={index * 0.07}>
              <SpotlightCard className="h-full p-5" contentClassName="flex gap-4">
                <IconTile>
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
                </IconTile>
                <div>
                  <h3 className="text-[15px] font-semibold tracking-tight text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted">{pillar.description}</p>
                </div>
              </SpotlightCard>
            </FadeIn>
          );
        })}
      </ul>
    </Section>
  );
}
