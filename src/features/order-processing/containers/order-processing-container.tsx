import React from "react";
import { useCart } from "@features/cart/hooks";
import { ControlButtonsGrid } from "../components";

const OrderProcessingContainer: React.FC = () => {
  return (
    <div className="h-full w-full px-3 py-2.5">
      <ControlButtonsGrid />
    </div>
  );
};

export default OrderProcessingContainer;
