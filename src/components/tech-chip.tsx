import { TechIcon } from "@/components/tech-icon";
import type { TechIconName } from "@/types";
import { cn } from "@/utils/cn";

export function TechChip({
  name,
  icon,
  className,
}: {
  name: string;
  icon?: TechIconName;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-[11px] tracking-wide text-muted",
        className,
      )}
    >
      {icon ? <TechIcon name={icon} className="h-3.5 w-3.5 text-accent" /> : null}
      {name}
    </span>
  );
}
