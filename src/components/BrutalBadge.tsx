import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BrutalBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  color?: "default" | "primary" | "secondary" | "accent" | "pink" | "mint" | "lilac";
}

const colors = {
  default: "bg-card",
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent text-white",
  pink: "bg-pop-pink",
  mint: "bg-pop-mint",
  lilac: "bg-pop-lilac",
};

export function BrutalBadge({ className, color = "default", children, ...props }: BrutalBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold uppercase tracking-wide",
        "brutal-border brutal-shadow-sm rounded-[var(--radius)] text-foreground",
        colors[color],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
