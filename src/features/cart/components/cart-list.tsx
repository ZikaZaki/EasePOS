import React from "react";
import type { OrderItem } from "../types";
import { CartItem } from "./";

interface CartListProps {
  items: OrderItem[];
}

const CartList: React.FC<CartListProps> = ({ items }) => {
  return (
    <div className="space-y-1">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartList;
