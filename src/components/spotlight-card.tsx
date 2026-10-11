"use client";

import { type MouseEvent, type ReactNode, useRef } from "react";
import { cn } from "@/utils/cn";

export function SpotlightCard({
  children,
  className,
  contentClassName,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  as?: "div" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const Tag = as;

  function onMove(event: MouseEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;
    const bounds = node.getBoundingClientRect();
    node.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
    node.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
  }

  return (
    <Tag
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "group glass relative overflow-hidden rounded-2xl transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-white/15",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--spot-x, 50%) var(--spot-y, 0%), rgba(45,226,198,0.09), transparent 45%)",
        }}
        aria-hidden="true"
      />
      <div className={cn("relative h-full", contentClassName)}>{children}</div>
    </Tag>
  );
}
