import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projects" glow="right">
      <SectionHeading
        index="04"
        eyebrow="Selected work"
        title="Products I've helped design, build and ship."
        description="Case studies from real company and client work — the problem, my approach, and the stack behind it."
      />
      <div className="mt-10 space-y-5 lg:space-y-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} reverse={index % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}
