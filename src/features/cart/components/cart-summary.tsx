import React from "react";
import { Separator } from "@/shared/components/ui";
import type { Item } from "../types";

interface CartSummaryProps {
  items: Item[];
}

const CartSummary: React.FC<CartSummaryProps> = ({ items }) => {
  return (
    <div className="relative flex flex-col min-h-[88px] bg-gray-100 px-4 py-1 border-t-2 border-gray-300">
      {/* Subtotal */}
      <div className="flex w-full justify-between">
        <span className="text-sm font-medium text-muted-foreground">
          Subtotal
        </span>
        <span className="text-sm font-semibold">23.40$</span>
      </div>
      {/* Tax */}
      <div className="flex w-full justify-between">
        <span className="text-sm font-medium text-muted-foreground">
          Tax (10%)
        </span>
        <span className="text-sm font-semibold">23.40$</span>
      </div>
      {/* Separator */}
      <div className="flex flex-col items-center justify-center my-1.5">
        <span className="absolute -left-3 p-3 rounded-full bg-gray-300" />
        <span className="flex w-full border border-gray-400 border-dashed" />
        <span className="absolute -right-3 p-3 rounded-full bg-gray-300" />
      </div>
      {/* Total */}
      <div className="flex w-full justify-between">
        <span className="font-semibold">Total</span>
        <span className="font-semibold">23.40$</span>
      </div>
    </div>
  );
};

export default CartSummary;
