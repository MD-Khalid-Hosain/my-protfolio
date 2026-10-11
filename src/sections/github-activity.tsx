import { ArrowUpRight, GitFork, Star } from "lucide-react";
import Image from "next/image";
import { GitHubIcon } from "@/components/brand-icons";
import { ButtonLink } from "@/components/button-link";
import { FadeIn } from "@/components/fade-in";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/spotlight-card";
import { profile } from "@/data/profile";
import { getGitHubSummary } from "@/utils/github";

export async function GitHubActivity() {
  const summary = await getGitHubSummary(profile.githubUsername);

  const stats = summary
    ? [
        { label: "Public repositories", value: String(summary.publicRepos) },
        { label: "Top language", value: summary.topLanguages[0]?.name ?? "—" },
        { label: "On GitHub since", value: String(summary.memberSince) },
      ]
    : [];

  return (
    <Section id="github" glow="center">
      <SectionHeading
        index="05"
        eyebrow="GitHub activity"
        title="Code in the open."
        description="A live snapshot of my public GitHub profile."
        action={
          <ButtonLink href={profile.github} external variant="secondary">
            <GitHubIcon className="h-4 w-4" />@{profile.githubUsername}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </ButtonLink>
        }
      />

      <FadeIn className="mt-10">
        <div className="glass overflow-hidden rounded-3xl">
          {stats.length ? (
            <dl className="grid grid-cols-3 divide-x divide-line border-b border-line">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse px-5 py-5 sm:px-7">
                  <dt className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</dt>
                  <dd className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}

          <div className="p-5 sm:p-7">
            <p className="font-mono text-[11px] tracking-wider text-subtle uppercase">
              Contributions · last 12 months
            </p>
            <div className="mt-4 overflow-x-auto">
              <Image
                src={`https://ghchart.rshah.org/2de2c6/${profile.githubUsername}`}
                alt={`GitHub contribution chart for ${profile.githubUsername}`}
                width={828}
                height={128}
                unoptimized
                className="h-auto min-w-[640px] w-full opacity-90 [filter:invert(0.92)_hue-rotate(180deg)_saturate(1.4)]"
              />
            </div>

            {summary?.topLanguages.length ? (
              <div className="mt-6">
                <p className="font-mono text-[11px] tracking-wider text-subtle uppercase">
                  Top languages in public repos
                </p>
                <div className="mt-3 flex h-2 overflow-hidden rounded-full bg-white/5">
                  {summary.topLanguages.map((language, index) => (
                    <span
                      key={language.name}
                      className="h-full"
                      style={{
                        width: `${language.share}%`,
                        background: `color-mix(in srgb, #2de2c6 ${100 - index * 20}%, #5aa9ff)`,
                      }}
                    />
                  ))}
                </div>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted">
                  {summary.topLanguages.map((language) => (
                    <li key={language.name}>
                      <span className="text-ink/90">{language.name}</span> {language.share}%
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </FadeIn>

      {summary?.repos.length ? (
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:mt-6 lg:gap-6">
          {summary.repos.map((repo, index) => (
            <FadeIn key={repo.name} as="li" delay={index * 0.05}>
              <SpotlightCard className="h-full">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="truncate font-mono text-sm text-ink">{repo.name}</span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-subtle transition-colors group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted">
                    {repo.description ?? "Public repository"}
                  </p>
                  <div className="mt-4 flex items-center gap-4 font-mono text-[11px] text-subtle">
                    {repo.language ? (
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-accent" />
                        {repo.language}
                      </span>
                    ) : null}
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3" aria-hidden="true" /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3 w-3" aria-hidden="true" /> {repo.forks}
                    </span>
                  </div>
                </a>
              </SpotlightCard>
            </FadeIn>
          ))}
        </ul>
      ) : null}
    </Section>
  );
}
