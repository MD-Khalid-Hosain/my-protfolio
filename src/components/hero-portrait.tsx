"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import Image from "next/image";
import { type CSSProperties, type MouseEvent } from "react";
import { profile } from "@/data/profile";

const maskStyle: CSSProperties = {
  WebkitMaskImage: "url(/images/hero-photo-mask.png)",
  maskImage: "url(/images/hero-photo-mask.png)",
  WebkitMaskSize: "contain",
  maskSize: "contain",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
  maskMode: "alpha",
};

export function HeroPortrait() {
  const reduceMotion = useReducedMotion();
  const photoX = useSpring(0, { stiffness: 140, damping: 18 });
  const photoY = useSpring(0, { stiffness: 140, damping: 18 });
  const photoScale = useSpring(1, { stiffness: 140, damping: 18 });
  const frameShift = useSpring(0, { stiffness: 120, damping: 18 });

  function onMove(event: MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    photoX.set(x * 10);
    photoY.set(y * 8);
    photoScale.set(1.04);
    frameShift.set(x * 6);
  }

  function onLeave() {
    photoX.set(0);
    photoY.set(0);
    photoScale.set(1);
    frameShift.set(0);
  }

  return (
    <div
      className="relative mx-auto aspect-[636/551] w-full max-w-[28rem]"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="pointer-events-none absolute inset-[18%] rounded-full bg-linear-to-br from-accent/30 to-accent-2/25 blur-3xl" />
      <div
        className="absolute inset-0 bg-linear-to-br from-[#d9fbf4] via-[#e6f0ff] to-[#c9dcff]"
        style={maskStyle}
      >
        <motion.div
          className="absolute inset-[13%] mix-blend-multiply"
          style={{ x: photoX, y: photoY, scale: photoScale }}
        >
          <Image
            src="/images/khalid-portrait.jpg"
            alt={`${profile.name} professional portrait`}
            fill
            priority
            sizes="(min-width: 768px) 420px, 90vw"
            className="object-contain object-center"
          />
        </motion.div>
      </div>

      <motion.div className="pointer-events-none absolute inset-0" style={{ x: frameShift }}>
        <Image
          src="/images/hero-frame.png"
          alt=""
          fill
          loading="eager"
          sizes="(min-width: 768px) 420px, 90vw"
          className="object-contain"
        />
      </motion.div>
    </div>
  );
}
