import React from "react";
import { useCart } from "@features/cart/hooks";
import { ControlButtonsGrid } from "../components";

const OrderProcessingContainer: React.FC = () => {
  return (
    <div className="h-full w-full p-1 rounded-md border border-gray-300">
      <ControlButtonsGrid />
    </div>
  );
};

export default OrderProcessingContainer;
