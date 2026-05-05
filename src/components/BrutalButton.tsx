import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "accent" | "ghost" | "outline" | "destructive";
type Size = "sm" | "md" | "lg";

interface BrutalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  accent: "bg-accent text-accent-foreground",
  ghost: "bg-card text-card-foreground",
  outline: "bg-background text-foreground",
  destructive: "bg-destructive text-destructive-foreground",
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
};

export const BrutalButton = forwardRef<HTMLButtonElement, BrutalButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wide rounded-[var(--radius)]",
        "brutal-border brutal-shadow brutal-hover brutal-press",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);
BrutalButton.displayName = "BrutalButton";
