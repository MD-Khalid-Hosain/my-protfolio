import { ArrowRight, Download } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { FloatingBadges } from "@/components/floating-badges";
import { HeroBackground } from "@/components/hero-background";
import { HeroPortrait } from "@/components/hero-portrait";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <HeroBackground />
      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <FadeIn immediate>
            <p className="glass inline-flex items-center gap-2.5 rounded-full py-1.5 pr-4 pl-2 text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.availability} · {profile.location}
            </p>
          </FadeIn>

          <FadeIn immediate delay={0.05}>
            <p className="mt-8 font-mono text-sm text-muted">
              Hi, I&apos;m <span className="text-ink">{profile.name}</span>
            </p>
            <h1 className="mt-3 text-[2.6rem] leading-[1.02] font-semibold tracking-[-0.045em] text-balance sm:text-6xl lg:text-[4.4rem]">
              {profile.headline.lead}{" "}
              <span className="text-gradient">{profile.headline.highlight}</span>
            </h1>
          </FadeIn>

          <FadeIn immediate delay={0.1}>
            <p className="mt-4 text-sm font-medium tracking-wide text-ink/80 sm:text-base">
              {profile.role}
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-pretty text-muted sm:text-lg sm:leading-8">
              {profile.intro}
            </p>
          </FadeIn>

          <FadeIn immediate delay={0.15}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href="#projects">
                View My Work
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </ButtonLink>
              <ButtonLink href={profile.resumePath} variant="secondary" download>
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </ButtonLink>
              <SocialLinks className="ml-1" />
            </div>
          </FadeIn>

          <FadeIn immediate delay={0.2}>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="bg-canvas/80 px-4 py-4 backdrop-blur sm:px-5">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-[11px] leading-4 text-muted sm:text-xs">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>

        <FadeIn immediate delay={0.1} className="relative mx-auto w-full max-w-[26rem] px-6 sm:px-0">
          <div className="relative">
            <HeroPortrait />
            <FloatingBadges items={profile.heroTech} />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
