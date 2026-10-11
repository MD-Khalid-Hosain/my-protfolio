import { BookOpen, Briefcase, Rocket, Target, type LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { journey } from "@/data/journey";
import { cn } from "@/utils/cn";

const stepIcons: LucideIcon[] = [BookOpen, Briefcase, Rocket, Target];

export function Journey() {
  return (
    <Section id="journey" glow="center">
      <SectionHeading
        eyebrow="Developer journey"
        title="Learning → Experience → Projects → What's next."
      />
      <ol className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:before:absolute lg:before:top-6 lg:before:right-[12%] lg:before:left-[12%] lg:before:h-px lg:before:bg-linear-to-r lg:before:from-accent/0 lg:before:via-accent/50 lg:before:to-accent-2/0 lg:before:content-['']">
        {journey.map((step, index) => {
          const Icon = stepIcons[index % stepIcons.length];
          const isLast = index === journey.length - 1;
          return (
            <FadeIn key={step.phase} as="li" delay={index * 0.1} className="relative">
              <div className="flex h-full flex-col">
                <span
                  className={cn(
                    "relative z-10 mx-0 flex h-12 w-12 lg:mx-auto items-center justify-center rounded-2xl border bg-canvas",
                    isLast
                      ? "border-accent/50 text-accent shadow-[0_0_30px_-4px_rgba(45,226,198,0.5)]"
                      : "border-white/10 text-ink/80",
                  )}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div className="glass mt-4 flex-1 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/15">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-mono text-[11px] tracking-wider text-accent uppercase">
                      {String(index + 1).padStart(2, "0")} · {step.phase}
                    </p>
                    <p className="font-mono text-[11px] text-subtle">{step.period}</p>
                  </div>
                  <h3 className="mt-3 text-base font-semibold tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">{step.description}</p>
                  <ul className="mt-4 space-y-1.5 border-t border-line pt-4">
                    {step.points.map((point) => (
                      <li key={point} className="flex gap-2 text-[13px] leading-5 text-ink/80">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </ol>
    </Section>
  );
}
