import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian disabled:pointer-events-none disabled:opacity-50 select-none active:scale-[0.98]",
  {
    variants: {
      variant: {
        // High-converting MoMo Gold primary
        default:
          "bg-brand text-obsidian-950 font-semibold shadow-brand-glow hover:bg-brand-hover hover:shadow-brand-glow-lg active:bg-brand-active",
        // Primary alias for explicit fintech clarity
        primary:
          "bg-brand text-obsidian-950 font-semibold shadow-brand-glow hover:bg-brand-hover hover:shadow-brand-glow-lg active:bg-brand-active",
        // Outline with subtle obsidian borders and yellow hover glow
        outline:
          "border border-obsidian-border bg-obsidian-850/60 text-crisp hover:bg-obsidian-800 hover:border-brand/50 hover:text-brand",
        // Subtle ghost for navigation, secondary tabs, or utility actions
        ghost:
          "text-crisp/80 hover:text-crisp hover:bg-obsidian-800/80 active:bg-obsidian-700",
        // Secondary elevated card surface
        secondary:
          "bg-obsidian-800 border border-obsidian-border text-crisp hover:bg-obsidian-700 hover:border-obsidian-borderElevated",
        // Destructive
        destructive:
          "bg-destructive/15 border border-destructive/30 text-destructive hover:bg-destructive/25",
        // Link style
        link: "text-brand underline-offset-4 hover:underline p-0 h-auto font-normal",
      },
      size: {
        default: "h-11 px-5 py-2.5 text-sm",
        sm: "h-9 rounded-md px-3.5 text-xs",
        lg: "h-13 px-7 text-base rounded-xl font-semibold tracking-wide",
        icon: "h-10 w-10 p-0 rounded-lg",
        "icon-sm": "h-8 w-8 p-0 rounded-md",
      },
      glow: {
        none: "",
        subtle: "shadow-brand-glow",
        intense: "shadow-brand-glow-lg animate-pulse-slow",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      glow: "none",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      glow,
      asChild = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, glow, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin text-current" />
            <span>Processing...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="mr-2 inline-flex items-center">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2 inline-flex items-center">{rightIcon}</span>}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
