"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { TechUsage } from "@/types";
import { cn } from "@/utils/cn";

const sizeByWeight = [
  "text-sm px-3 py-1.5",
  "text-sm px-3 py-1.5",
  "text-base px-4 py-2",
  "text-lg px-5 py-2.5",
  "text-xl px-5 py-2.5 sm:text-2xl",
];

export function TechCloud({ items }: { items: TechUsage[] }) {
  const [active, setActive] = useState<TechUsage | null>(
    () => items.reduce((top, item) => (item.weight > top.weight ? item : top), items[0]) ?? null,
  );

  return (
    <div className="glass relative overflow-hidden rounded-3xl px-5 py-8 sm:px-10 sm:py-10">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,226,198,0.08),transparent_65%)]"
        aria-hidden="true"
      />
      <div className="relative mb-6 flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-mono text-[11px] tracking-wider text-accent uppercase">Tech stack cloud</p>
        <p className="text-xs text-subtle">Sized by real-world usage · hover or tap to explore</p>
      </div>
      <ul className="relative mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2 sm:gap-2.5">
        {items.map((item, index) => {
          const isActive = active?.name === item.name;
          return (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
            >
              <button
                type="button"
                onMouseEnter={() => setActive(item)}
                onFocus={() => setActive(item)}
                onClick={() => setActive(item)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-full border font-medium tracking-tight transition-all duration-200",
                  sizeByWeight[Math.min(item.weight, sizeByWeight.length - 1)],
                  isActive
                    ? "scale-105 border-accent/50 bg-accent/10 text-ink shadow-[0_0_30px_-6px_rgba(45,226,198,0.5)]"
                    : item.weight > 1
                      ? "border-white/10 bg-white/[0.03] text-ink/85 hover:border-white/20 hover:text-ink"
                      : "border-line bg-transparent text-muted hover:border-white/15 hover:text-ink",
                )}
              >
                {item.name}
              </button>
            </motion.li>
          );
        })}
      </ul>

      <div className="relative mx-auto mt-6 min-h-14 max-w-xl text-center" aria-live="polite">
        <AnimatePresence mode="wait">
          {active ? (
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-sm font-semibold text-ink">{active.name}</p>
              <p className="mt-1.5 text-sm text-muted">
                {active.contexts.length
                  ? `Used at ${active.contexts.join(" · ")}`
                  : "Part of my working toolkit"}
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
