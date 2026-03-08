"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

const ease = [0.22, 1, 0.36, 1] as const;

const charVariants = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      delay: i * 0.03,
      duration: 0.6,
      ease,
    },
  }),
};

export function TextReveal({
  text,
  className,
  delay = 0,
  tag = "h2",
}: TextRevealProps) {
  const Tag = tag;

  return (
    <Tag className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            variants={charVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            custom={i + delay * 30}
            aria-hidden
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

const wordVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease,
    },
  }),
};

export function WordReveal({
  text,
  className,
  delay = 0,
  tag = "h2",
}: WordRevealProps) {
  const Tag = tag;
  const words = text.split(" ");

  return (
    <Tag className={`flex flex-wrap gap-x-[0.3em] ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            variants={wordVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            custom={i + delay * 10}
            aria-hidden
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
