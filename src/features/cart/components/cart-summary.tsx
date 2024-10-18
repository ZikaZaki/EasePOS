import React from "react";
import type { Item } from "../types";

interface CartSummaryProps {
  items: Item[];
}

const CartSummary: React.FC<CartSummaryProps> = ({ items }) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[83px] bg-gray-100 px-3 py-2 border-t-[3px] border-dotted border-gray-300">
      {/* Separator (Top Border) */}
      <div className="relative h-0 min-w-full top-0 flex items-center justify-between">
        <span className="relative -top-[15px] -left-[20px] p-2 rounded-full bg-gray-300" />
        <span className="relative -top-[15px] -right-[20px] p-2 rounded-full bg-gray-300" />
      </div>
      {/* Tax */}
      <div className="flex w-full justify-between text-base text-muted-foreground">
        <span>Tax (10%)</span>
        <span>23.40$</span>
      </div>
      {/* Total */}
      <div className="flex w-full justify-between text-lg font-semibold">
        <span>Total</span>
        <span>23.40$</span>
      </div>
    </div>
  );
};

export default CartSummary;
