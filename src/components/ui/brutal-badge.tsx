import { cn } from "@/lib/utils";

interface BrutalBadgeProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export function BrutalBadge({
  children,
  className,
  color = "bg-white",
}: BrutalBadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-sm font-bold font-heading",
        "border-2 border-black rounded-[4px] shadow-brutal-sm",
        "transition-colors duration-100",
        "hover:bg-black hover:text-white",
        color,
        className
      )}
    >
      {children}
    </span>
  );
}
