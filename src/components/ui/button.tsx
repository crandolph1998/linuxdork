import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
  {
    variants: {
      variant: {
        default: "bg-[var(--signal)] text-[var(--nav-active-text)] shadow-[0_0_20px_-10px_color-mix(in_srgb,var(--signal)_80%,transparent)] hover:bg-[var(--signal-soft)] hover:text-white focus-visible:ring-[var(--signal)]",
        secondary: "bg-[var(--surface-soft)] text-[var(--foreground)] hover:bg-[color-mix(in_srgb,var(--surface-soft)_72%,var(--signal)_28%)] focus-visible:ring-[var(--signal)]",
        ghost: "text-[var(--foreground)] hover:bg-[var(--surface-soft)] hover:text-[var(--foreground)] focus-visible:ring-[var(--signal)]",
        outline: "border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--surface-soft)] focus-visible:ring-[var(--signal)]"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
