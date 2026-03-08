"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BrutalButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  color?: string;
  href?: string;
  onClick?: () => void;
}

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function BrutalButton({
  children,
  className,
  variant = "primary",
  size = "md",
  color = "bg-accent-yellow",
  href,
  onClick,
}: BrutalButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2 font-heading font-bold",
    "border-3 border-black rounded-[5px]",
    "shadow-brutal transition-all duration-100 ease-linear",
    "hover:translate-x-1 hover:translate-y-1 hover:shadow-none",
    "active:translate-x-1 active:translate-y-1 active:shadow-none",
    "cursor-pointer select-none",
    sizeStyles[size],
    variant === "primary" && color,
    variant === "secondary" && "bg-white",
    variant === "outline" && "bg-transparent",
    className
  );

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      className={baseStyles}
      href={href}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </MotionComponent>
  );
}
