"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

const directionMap = {
  up: { y: 60, x: 0 },
  down: { y: -60, x: 0 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const offset = directionMap[direction];
  const initial = {
    opacity: 0,
    x: distance ? (offset.x > 0 ? distance : offset.x < 0 ? -distance : 0) : offset.x,
    y: distance ? (offset.y > 0 ? distance : offset.y < 0 ? -distance : 0) : offset.y,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : initial
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
