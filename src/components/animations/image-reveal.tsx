"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
  overlayColor?: string;
}

export function ImageReveal({
  children,
  className,
  direction = "left",
  delay = 0,
  overlayColor = "#000",
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const originMap = {
    left: "left center",
    right: "right center",
    top: "center top",
    bottom: "center bottom",
  };

  const scaleProperty =
    direction === "left" || direction === "right" ? "scaleX" : "scaleY";

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: overlayColor,
          transformOrigin: originMap[direction],
        }}
        initial={{ [scaleProperty]: 1 }}
        animate={isInView ? { [scaleProperty]: 0 } : { [scaleProperty]: 1 }}
        transition={{
          duration: 1.2,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
      />
      <motion.div
        initial={{ scale: 1.15 }}
        animate={isInView ? { scale: 1 } : { scale: 1.15 }}
        transition={{
          duration: 1.4,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
