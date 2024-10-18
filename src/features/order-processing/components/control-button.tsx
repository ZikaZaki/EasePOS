import React from "react";
import { ControlButtonProps } from "../types";

const ControlButton: React.FC<ControlButtonProps> = ({
  id,
  icon,
  label,
  colSpan = 1,
  rowSpan = 1,
  className = "bg-white text-black hover:bg-accent hover:text-accent-foreground",
}) => (
  <button
    id={id}
    className={`inline-flex items-center justify-center gap-1 col-span-${colSpan} row-span-${rowSpan} whitespace-nowrap text-sm font-semibold transition-colors rounded-md border border-input bg-background shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${className}`}
  >
    {icon}
    {label}
  </button>
);

export default ControlButton;
