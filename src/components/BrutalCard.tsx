import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface BrutalCardProps extends HTMLAttributes<HTMLDivElement> {
  color?: "default" | "primary" | "secondary" | "accent" | "pink" | "mint" | "lilac";
  hover?: boolean;
}

const colors = {
  default: "bg-card",
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  pink: "bg-pop-pink",
  mint: "bg-pop-mint",
  lilac: "bg-pop-lilac",
};

export const BrutalCard = forwardRef<HTMLDivElement, BrutalCardProps>(
  ({ className, color = "default", hover = false, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "brutal-border brutal-shadow rounded-[var(--radius)] text-foreground",
        colors[color],
        hover && "brutal-hover",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);
BrutalCard.displayName = "BrutalCard";
