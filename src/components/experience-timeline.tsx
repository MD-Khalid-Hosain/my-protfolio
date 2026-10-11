"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useRef } from "react";
import { TechChip } from "@/components/tech-chip";
import type { ExperienceRole } from "@/types";
import { cn } from "@/utils/cn";

export function ExperienceTimeline({ roles }: { roles: ExperienceRole[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <div ref={ref} className="relative mt-10">
      <div
        className="absolute top-2 bottom-2 left-[7px] w-px bg-line md:left-[calc(10rem+7px)]"
        aria-hidden="true"
      />
      <motion.div
        className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-linear-to-b from-accent via-accent-2 to-transparent md:left-[calc(10rem+7px)]"
        style={{ scaleY: progress }}
        aria-hidden="true"
      />

      <ol className="relative space-y-4 sm:space-y-5">
      {roles.map((role, index) => (
        <motion.li
          key={`${role.company}-${role.start}`}
          className="relative grid gap-3 pl-10 md:grid-cols-[10rem_1fr] md:gap-0 md:pl-0"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="md:pt-6 md:pr-8 md:text-right">
            <p className="font-mono text-xs tracking-wide text-muted">
              <span className="whitespace-nowrap">{role.start} —</span>{" "}
              <span className={cn("whitespace-nowrap", role.current && "text-accent")}>
                {role.end}
              </span>
            </p>
          </div>

          <span
            className="absolute top-1 left-0 flex h-[15px] w-[15px] items-center justify-center md:top-7 md:left-[10rem]"
            aria-hidden="true"
          >
            {role.current ? (
              <span className="absolute h-full w-full animate-ping rounded-full bg-accent/50" />
            ) : null}
            <span
              className={cn(
                "relative h-[15px] w-[15px] rounded-full border-2",
                role.current
                  ? "border-accent bg-accent shadow-[0_0_16px_rgba(45,226,198,0.7)]"
                  : "border-accent/70 bg-canvas",
              )}
            />
          </span>

          <article className="group glass relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:shadow-[0_20px_50px_-24px_rgba(45,226,198,0.35)] sm:p-7 md:ml-8">
            <span
              className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-ink">{role.role}</h3>
                <p className="mt-1 text-sm text-muted">
                  {role.companyUrl ? (
                    <a
                      href={role.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-ink/90 transition-colors hover:text-accent"
                    >
                      {role.company}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="text-ink/90">{role.company}</span>
                  )}
                </p>
              </div>
              {role.current ? (
                <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[10px] tracking-wider text-accent uppercase">
                  Current
                </span>
              ) : null}
            </div>

            <p className="mt-3 text-[15px] leading-7 text-muted">{role.summary}</p>

            <ul className="mt-4 space-y-2">
              {role.responsibilities.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-ink/85">
                  <Check
                    className="mt-1 h-4 w-4 shrink-0 text-accent"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technology stack">
              {role.technologies.map((tech) => (
                <li key={tech}>
                  <TechChip name={tech} />
                </li>
              ))}
            </ul>
          </article>
        </motion.li>
      ))}
      </ol>
    </div>
  );
}
