import type { ReactNode } from "react";
import { FadeIn } from "@/components/fade-in";
import { cn } from "@/utils/cn";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  return (
    <FadeIn
      className={cn(
        "flex flex-wrap items-end justify-between gap-6",
        align === "center" && "justify-center text-center",
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        <p
          className={cn(
            "inline-flex items-center gap-2 font-mono text-xs tracking-wider text-accent uppercase",
            align === "center" && "justify-center",
          )}
        >
          {index ? <span className="text-subtle">{index}</span> : null}
          <span className="h-px w-6 bg-accent/60" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl leading-[1.08] font-semibold tracking-[-0.035em] text-balance text-ink sm:text-[2.6rem]">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-base leading-7 text-pretty text-muted">{description}</p>
        ) : null}
      </div>
      {action}
    </FadeIn>
  );
}
