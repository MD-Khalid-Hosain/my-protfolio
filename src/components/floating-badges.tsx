"use client";

import { motion } from "framer-motion";
import { TechIcon } from "@/components/tech-icon";
import type { Tech } from "@/types";
import { cn } from "@/utils/cn";

const positions = [
  "left-[-4%] top-[6%]",
  "right-[-2%] top-[2%]",
  "left-[-10%] top-[48%]",
  "right-[-8%] top-[44%]",
  "left-[4%] bottom-[0%]",
  "right-[6%] bottom-[-4%]",
];

export function FloatingBadges({ items }: { items: Tech[] }) {
  return (
    <>
      {items.map((item, index) => (
        <motion.div
          key={item.name}
          className={cn("absolute z-20", positions[index % positions.length])}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: 0.5 + index * 0.08 },
            scale: { duration: 0.5, delay: 0.5 + index * 0.08 },
            y: {
              duration: 5 + index * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.35,
            },
          }}
        >
          <span className="flex items-center gap-2 rounded-full border border-white/10 bg-canvas/70 px-3 py-1.5 text-xs font-medium text-ink shadow-[0_8px_30px_-10px_rgba(0,0,0,0.8)] backdrop-blur-md sm:text-[13px]">
            <TechIcon name={item.icon} className="h-3.5 w-3.5 text-accent" />
            {item.name}
          </span>
        </motion.div>
      ))}
    </>
  );
}
