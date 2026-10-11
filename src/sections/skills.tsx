import { FadeIn } from "@/components/fade-in";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { SkillCard } from "@/components/skill-card";
import { TechChip } from "@/components/tech-chip";
import { TechCloud } from "@/components/tech-cloud";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { additionalSkills, skillCategories } from "@/data/skills";
import { cn } from "@/utils/cn";
import { getTechUsage } from "@/utils/tech-usage";

const layout = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-4"];

export function Skills() {
  const usage = getTechUsage(experience, projects, [
    ...skillCategories.flatMap((category) => category.items),
    ...additionalSkills,
  ]);

  return (
    <Section id="skills" glow="right">
      <SectionHeading
        index="02"
        eyebrow="Skills"
        title="A full stack toolkit, sharpened in production."
        description="The technologies I use to design, build and ship reliable products."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
        {skillCategories.map((category, index) => (
          <FadeIn
            key={category.title}
            delay={index * 0.06}
            className={cn(layout[index % layout.length])}
          >
            <SkillCard category={category} />
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-4 lg:mt-6">
        <div className="glass flex flex-col gap-3 rounded-2xl p-5 sm:flex-row sm:items-center sm:gap-5">
          <p className="shrink-0 font-mono text-[11px] tracking-wider text-subtle uppercase">
            Also working with
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {additionalSkills.map((skill) => (
              <li key={skill.name}>
                <TechChip name={skill.name} icon={skill.icon} />
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>

      <FadeIn className="mt-4 lg:mt-6">
        <TechCloud items={usage} />
      </FadeIn>
    </Section>
  );
}
