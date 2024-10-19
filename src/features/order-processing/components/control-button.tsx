import React from "react";
import { cn } from "@shared/utils";
import { ControlButtonProps } from "../types";

const ControlButton: React.FC<ControlButtonProps> = ({
  id,
  icon,
  label,
  styles,
}) => (
  <button
    id={id}
    className={cn(
      "inline-flex items-center justify-center gap-1 whitespace-nowrap text-sm font-semibold bg-white text-black hover:bg-accent hover:text-accent-foreground transition-colors rounded-md border border-input bg-background shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
      styles
    )}
  >
    {icon}
    {label}
  </button>
);

export default ControlButton;
