import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

const variants = {
  primary:
    "bg-ink text-canvas shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_30px_-8px_rgba(45,226,198,0.55)] hover:bg-white",
  secondary: "glass text-ink hover:border-white/20 hover:bg-white/[0.06]",
  ghost: "text-muted hover:text-ink",
} as const;

const sizes = {
  md: "h-11 px-5 text-sm",
  sm: "h-9 px-4 text-[13px]",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  download,
  external,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  download?: boolean;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 active:scale-[0.98]",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </a>
  );
}
