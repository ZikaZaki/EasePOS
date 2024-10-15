// src/components/ui/ViewToggle.tsx
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { GridIcon, ListBulletIcon } from "@radix-ui/react-icons";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const viewToggleVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
  {
    variants: {
      size: {
        default: "h-9 px-2",
        sm: "h-8 px-2",
        lg: "h-10 px-3",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface ViewToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof viewToggleVariants> {
  variant: "grid" | "list";
}

const ViewToggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ViewToggleProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(viewToggleVariants({ size, className }))}
      {...props}
    >
      {variant === "grid" ? (
        <GridIcon className="h-5 w-5" />
      ) : (
        <ListBulletIcon className="h-5 w-5" />
      )}
    </TogglePrimitive.Root>
  );
});

ViewToggle.displayName = "ViewToggle";

export { ViewToggle, viewToggleVariants };
