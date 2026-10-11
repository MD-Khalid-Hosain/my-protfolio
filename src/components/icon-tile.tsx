import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export function IconTile({
  children,
  className,
  float,
}: {
  children: ReactNode;
  className?: string;
  float?: boolean;
}) {
  return (
    <span
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-linear-to-br from-accent/20 to-accent-2/10 text-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-transform duration-300 group-hover:scale-110",
        float && "motion-safe:animate-float",
        className,
      )}
    >
      {children}
    </span>
  );
}
