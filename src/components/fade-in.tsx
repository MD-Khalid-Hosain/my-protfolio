"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const offsets = {
  up: { x: 0, y: 20 },
  left: { x: -24, y: 0 },
  right: { x: 24, y: 0 },
} as const;

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  immediate = false,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: keyof typeof offsets;
  immediate?: boolean;
  as?: "div" | "li";
}) {
  const offset = offsets[direction];
  const visible = { opacity: 1, x: 0, y: 0 };
  const Component = as === "li" ? motion.li : motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: immediate ? 1 : 0, ...offset }}
      animate={immediate ? visible : undefined}
      whileInView={immediate ? undefined : visible}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
