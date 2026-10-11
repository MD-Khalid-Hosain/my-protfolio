"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Lightbulb, Lock, Target } from "lucide-react";
import { GitHubIcon } from "@/components/brand-icons";
import { ButtonLink } from "@/components/button-link";
import { ProjectMockup } from "@/components/project-mockup";
import { TechChip } from "@/components/tech-chip";
import type { Project } from "@/types";
import { cn } from "@/utils/cn";

export function ProjectCard({ project, reverse }: { project: Project; reverse?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group glass relative grid overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_40px_80px_-40px_rgba(45,226,198,0.35)] lg:grid-cols-[1.05fr_0.95fr]"
    >
      <span
        className="absolute inset-x-0 top-0 z-10 h-px bg-linear-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden border-b border-line px-8 py-6 sm:min-h-64 sm:p-8 lg:border-b-0",
          reverse ? "lg:order-2 lg:border-l" : "lg:border-r",
        )}
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(45,226,198,0.16),transparent_60%),radial-gradient(ellipse_at_80%_90%,rgba(90,169,255,0.14),transparent_55%)]"
          aria-hidden="true"
        />
        <div
          className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          aria-hidden="true"
        />
        <div className="relative w-full max-w-md transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.04]">
          <ProjectMockup variant={project.mockup} />
        </div>
      </div>

      <div className="flex flex-col p-5 sm:p-8">
        <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-wide text-subtle uppercase">
          {project.featured ? (
            <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-accent">
              Featured
            </span>
          ) : null}
          <span>{project.company}</span>
        </div>
        <p className="mt-2 text-xs text-muted">{project.role}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-ink sm:text-[1.75rem]">
          {project.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-accent/90">{project.tagline}</p>
        <p className="mt-3 text-sm leading-6 text-muted sm:text-[15px] sm:leading-7">
          {project.description}
        </p>

        <dl className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-white/[0.02] p-3.5 sm:p-4">
            <dt className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-accent uppercase">
              <Target className="h-3.5 w-3.5" aria-hidden="true" />
              Problem
            </dt>
            <dd className="mt-2 text-sm leading-6 text-ink/85">{project.problem}</dd>
          </div>
          <div className="rounded-xl border border-line bg-white/[0.02] p-3.5 sm:p-4">
            <dt className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-accent-2 uppercase">
              <Lightbulb className="h-3.5 w-3.5" aria-hidden="true" />
              Solution
            </dt>
            <dd className="mt-2 text-sm leading-6 text-ink/85">{project.solution}</dd>
          </div>
        </dl>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <TechChip name={tech} />
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-5 sm:pt-6">
          {project.liveUrl ? (
            <ButtonLink href={project.liveUrl} external size="sm">
              Live demo
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </ButtonLink>
          ) : null}
          {project.githubUrl ? (
            <ButtonLink href={project.githubUrl} external size="sm" variant="secondary">
              <GitHubIcon className="h-3.5 w-3.5" />
              GitHub
            </ButtonLink>
          ) : (
            <span
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-dashed border-white/10 px-4 text-[13px] text-subtle"
              title="Built for a client; source code isn't public"
            >
              <Lock className="h-3.5 w-3.5" aria-hidden="true" />
              Private client codebase
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
