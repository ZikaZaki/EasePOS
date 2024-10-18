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
      colSpan: 2,
    },
    {
      id: "customer-note-btn",
      label: <span>Customer Note</span>,
      icon: <StickyNoteIcon size={16} />,
      colSpan: 2,
    },
    {
      id: "internal-note-btn",
      label: <span>Internal Note</span>,
      icon: <TagIcon size={16} />,
      colSpan: 2,
    },
    {
      id: "refund-btn",
      label: <span>Refund</span>,
      icon: <RotateCcwIcon size={16} />,
      colSpan: 2,
    },
    {
      id: "quotation-btn",
      label: <span>Quotation/Order</span>,
      icon: <Link2Icon size={16} />,
      colSpan: 3,
    },
    { id: "more-btn", label: "More...", icon: null, colSpan: 1 },
    {
      id: "payment-btn",
      label: <span>Payment</span>,
      icon: <CircleChevronRightIcon />,
      colSpan: 2,
      rowSpan: 4,
      className:
        "flex flex-col-reverse text-white bg-[#669999] hover:bg-[#527a7a] hover:text-white",
    },
    // Number Buttons & control buttons
    {
      id: "numpad-1-btn",
      label: <span>1</span>,
    },
    {
      id: "numpad-2-btn",
      label: <span>2</span>,
    },
    {
      id: "numpad-3-btn",
      label: <span>3</span>,
    },
    {
      id: "numpad-qty-btn",
      label: <span>Qty</span>,
    },
    {
      id: "numpad-4-btn",
      label: <span>4</span>,
    },
    {
      id: "numpad-5-btn",
      label: <span>5</span>,
    },
    {
      id: "numpad-6-btn",
      label: <span>6</span>,
    },
    {
      id: "numpad-disc-btn",
      label: <span>% Disc</span>,
    },
    {
      id: "numpad-7-btn",
      label: <span>7</span>,
    },
    {
      id: "numpad-8-btn",
      label: <span>8</span>,
    },
    {
      id: "numpad-9-btn",
      label: <span>9</span>,
    },
    {
      id: "numpad-price-btn",
      label: <span>Price</span>,
    },
    {
      id: "numpad-plus-minus-btn",
      label: <span>+/-</span>,
      className: "text-black bg-[#fde697] hover:bg-yellow-300",
    },
    {
      id: "numpad-0-btn",
      label: <span>0</span>,
    },
    {
      id: "numpad-dot-btn",
      label: <span>.</span>,
    },
    {
      id: "delete-btn",
      icon: <DeleteIcon size={18} />,
      className: "text-white bg-red-400 hover:bg-red-500 hover:text-white",
    },
  ];

  return (
    <div className="grid grid-cols-6 grid-rows-6 gap-[4px] min-h-full max-w-full overflow-hidden">
      {buttons.map(({ id, label, icon, colSpan, rowSpan, className }) => (
        <ControlButton
          key={id}
          id={id}
          label={label}
          icon={icon}
          colSpan={colSpan}
          rowSpan={rowSpan}
          className={className}
        />
      ))}
    </div>
  );
};

export default ControlButtonsGrid;
