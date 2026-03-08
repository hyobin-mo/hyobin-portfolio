"use client";

import { cn } from "@/lib/utils";

interface BrutalCardProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  hover?: "press" | "lift" | "none";
}

export function BrutalCard({
  children,
  className,
  color = "bg-white",
  hover = "lift",
}: BrutalCardProps) {
  return (
    <div
      className={cn(
        "border-3 border-black rounded-[5px] shadow-brutal",
        color,
        hover === "press" && "brutal-hover",
        hover === "lift" && "brutal-hover-lift",
        className
      )}
    >
      {children}
    </div>
  );
}
