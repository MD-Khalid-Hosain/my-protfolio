import { ExperienceTimeline } from "@/components/experience-timeline";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" glow="left">
      <SectionHeading
        index="03"
        eyebrow="Experience"
        title="Six years of building in production."
        description="From launching an online store end to end to AI media, travel and real-time messaging products."
      />
      <ExperienceTimeline roles={experience} />
    </Section>
  );
}
