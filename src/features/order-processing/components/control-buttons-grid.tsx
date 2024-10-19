import React from "react";
import ControlButton from "./control-button";
import { ControlButtonProps } from "../types";
import {
  User2Icon,
  StickyNoteIcon,
  RotateCcwIcon,
  Link2Icon,
  TagIcon,
  CircleChevronRightIcon,
  DeleteIcon,
} from "lucide-react";

const ControlButtonsGrid: React.FC = () => {
  const buttons: ControlButtonProps[] = [
    {
      id: "customer-btn",
      label: <span>Customer</span>,
      icon: <User2Icon size={16} />,
      styles: "col-span-2 row-span-1",
    },
    {
      id: "customer-note-btn",
      label: <span>Customer Note</span>,
      icon: <StickyNoteIcon size={16} />,
      styles: "col-span-2 row-span-1",
    },
    {
      id: "internal-note-btn",
      label: <span>Internal Note</span>,
      icon: <TagIcon size={16} />,
      styles: "col-span-2 row-span-1",
    },
    {
      id: "refund-btn",
      label: <span>Refund</span>,
      icon: <RotateCcwIcon size={16} />,
      styles: "col-span-2 row-span-1",
    },
    {
      id: "quotation-btn",
      label: <span>Quotation/Order</span>,
      icon: <Link2Icon size={16} />,
      styles: "col-span-3 row-span-1",
    },
    {
      id: "more-btn",
      label: <span>More...</span>,
      styles: "col-span-1 row-span-1",
    },
    {
      id: "payment-btn",
      label: <span>Payment</span>,
      icon: <CircleChevronRightIcon size={18} />,
      styles:
        "col-span-2 row-span-4 text-white bg-primary hover:bg-secondary hover:text-white",
    },
    {
      id: "numpad-1-btn",
      label: <span>1</span>,
      styles: "col-span-1 row-span-1",
    },
    {
      id: "numpad-2-btn",
      label: <span>2</span>,
      styles: "col-span-1 row-span-1",
    },
    {
      id: "numpad-3-btn",
      label: <span>3</span>,
      styles: "col-span-1 row-span-1",
    },
    {
      id: "numpad-qty-btn",
      label: <span>Qty</span>,
      styles: "col-span-1 row-span-1",
    },
    {
      id: "numpad-4-btn",
      label: <span>4</span>,
      styles: "col-span-1 row-span-1",
    },
    {
      id: "numpad-5-btn",
      label: <span>5</span>,
      styles: "col-span-1 row-span-1",
    },
    {
      id: "numpad-6-btn",
      label: <span>6</span>,
      styles: "col-span-1 row-span-1",
    },
    {
      id: "numpad-disc-btn",
      label: <span>% Disc</span>,
      styles: "col-span-1 row-span-1",
    },
    {
      id: "numpad-7-btn",
      label: <span>7</span>,
      styles: "col-span-1 row-span-1",
    },
    {
      id: "numpad-8-btn",
      label: <span>8</span>,
      styles: "col-span-1 row-span-1",
    },
    {
      id: "numpad-9-btn",
      label: <span>9</span>,
      styles: "col-span-1 row-span-1",
    },
    {
      id: "numpad-price-btn",
      label: <span>Price</span>,
      styles: "col-span-1 row-span-1",
    },
    {
      id: "numpad-plus-minus-btn",
      label: <span>+/-</span>,
      styles:
        "col-span-1 row-span-1 text-black bg-[#fde697] hover:bg-yellow-300",
    },
    {
      id: "numpad-0-btn",
      label: <span>0</span>,
      styles: "col-span-1 row-span-1",
    },
    {
      id: "numpad-dot-btn",
      label: <span>.</span>,
      styles: "col-span-1 row-span-1",
    },
    {
      id: "delete-btn",
      icon: <DeleteIcon size={18} />,
      styles:
        "col-span-1 row-span-1 text-white bg-red-400 hover:bg-red-500 hover:text-white",
    },
  ];

  return (
    <div className="grid grid-cols-6 grid-rows-6 gap-[4px] min-h-full max-w-full overflow-hidden">
      {buttons.map(({ id, label, icon, styles }) => (
        <ControlButton
          key={id}
          id={id}
          label={label}
          icon={icon}
          styles={styles}
        />
      ))}
    </div>
  );
};

export default ControlButtonsGrid;
