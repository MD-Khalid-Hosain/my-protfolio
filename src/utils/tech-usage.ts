import type { ExperienceRole, Project, Tech, TechUsage } from "@/types";

const aliases: Record<string, string> = {
  "React.js": "React",
  "PHP (OOP)": "PHP",
  Tailwind: "Tailwind CSS",
  "REST API": "REST APIs",
};

function normalize(name: string) {
  return aliases[name] ?? name;
}

/**
 * Builds a weighted tech list where weight is the number of distinct
 * roles and projects a technology appears in. Skills that only appear in
 * the skills list get weight 1 and no context.
 */
export function getTechUsage(
  roles: ExperienceRole[],
  projects: Project[],
  skills: Tech[],
): TechUsage[] {
  const usage = new Map<string, Set<string>>();

  function add(name: string, context?: string) {
    const key = normalize(name);
    const contexts = usage.get(key) ?? new Set<string>();
    if (context) contexts.add(context);
    usage.set(key, contexts);
  }

  roles.forEach((role) => role.technologies.forEach((tech) => add(tech, role.company)));
  projects.forEach((project) =>
    project.technologies.forEach((tech) => add(tech, project.name)),
  );
  skills.forEach((skill) => add(skill.name));

  const sorted = [...usage.entries()]
    .map(([name, contexts]) => ({
      name,
      contexts: [...contexts],
      weight: Math.max(1, contexts.size),
    }))
    .sort((a, b) => b.weight - a.weight || a.name.localeCompare(b.name));

  const centered: TechUsage[] = [];
  sorted.forEach((item, index) => {
    if (index % 2 === 0) centered.push(item);
    else centered.unshift(item);
  });
  return centered;
}
