import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-all duration-150 select-none",
  {
    variants: {
      variant: {
        // High-energy yellow badge
        brand:
          "bg-brand/15 text-brand border border-brand/40 shadow-momo-badge font-semibold",
        // MoMo live connection badge
        momo:
          "bg-brand text-obsidian-950 border border-brand font-bold shadow-brand-glow",
        // Successful or active state
        success:
          "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
        // Pending authorization / USSD prompt waiting
        pending:
          "bg-amber-500/10 text-amber-300 border border-amber-500/30",
        // Dark Obsidian / Slate surface badge
        obsidian:
          "bg-obsidian-800 text-crisp/90 border border-obsidian-border",
        // Outline minimalist
        outline:
          "border border-obsidian-borderElevated text-crisp/80 hover:border-brand/40",
        // Destructive / failed
        destructive:
          "bg-rose-500/10 text-rose-400 border border-rose-500/30",
      },
      size: {
        sm: "px-2.5 py-0.5 text-[11px]",
        default: "px-3 py-1 text-xs",
        md: "px-3 py-1 text-xs",
        lg: "px-3.5 py-1.5 text-sm font-semibold",
      },
      pulse: {
        true: "relative",
        false: "",
      },
    },
    defaultVariants: {
      variant: "obsidian",
      size: "default",
      pulse: false,
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dotColor?: "brand" | "success" | "pending" | "destructive" | "neutral";
  withPulseRing?: boolean;
}

function Badge({
  className,
  variant,
  size,
  pulse,
  dotColor,
  withPulseRing = false,
  children,
  ...props
}: BadgeProps) {
  // Dot styling map
  const dotClasses = {
    brand: "bg-brand",
    success: "bg-emerald-400",
    pending: "bg-amber-400",
    destructive: "bg-rose-500",
    neutral: "bg-slate-400",
  };

  const ringGlowClasses = {
    brand: "bg-brand/40",
    success: "bg-emerald-400/40",
    pending: "bg-amber-400/40",
    destructive: "bg-rose-500/40",
    neutral: "bg-slate-400/40",
  };

  const activeDot = dotColor || (variant === "momo" || variant === "brand" ? "brand" : variant === "success" ? "success" : variant === "pending" ? "pending" : undefined);

  return (
    <div
      className={cn(badgeVariants({ variant, size, pulse: pulse || withPulseRing, className }))}
      {...props}
    >
      {activeDot && (
        <span className="relative flex h-2 w-2 items-center justify-center">
          {withPulseRing && (
            <span
              className={cn(
                "absolute inline-flex h-full w-full rounded-full animate-ping opacity-75",
                ringGlowClasses[activeDot]
              )}
            />
          )}
          <span
            className={cn("relative inline-flex h-1.5 w-1.5 rounded-full", dotClasses[activeDot])}
          />
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}

export { Badge, badgeVariants };
