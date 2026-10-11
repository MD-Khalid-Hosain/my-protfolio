import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { cn } from "@/utils/cn";

const glows = {
  left: "-left-48 top-0 bg-accent/[0.07]",
  right: "-right-48 top-10 bg-accent-2/[0.08]",
  center: "left-1/2 -top-20 -translate-x-1/2 bg-accent/[0.06]",
} as const;

export function Section({
  id,
  children,
  className,
  containerClassName,
  glow,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  glow?: keyof typeof glows;
}) {
  return (
    <section id={id} className={cn("relative py-10 sm:py-14 lg:py-16", className)}>
      {glow ? (
        <div
          className={cn(
            "pointer-events-none absolute h-[380px] w-[620px] rounded-full blur-[140px]",
            glows[glow],
          )}
          aria-hidden="true"
        />
      ) : null}
      <Container className={cn("relative", containerClassName)}>{children}</Container>
    </section>
  );
}
