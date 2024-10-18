import React from "react";
import { ScrollArea } from "@shared/components/ui";
import CartItem from "./cart-item";
import type { Item } from "../types";

interface CartListProps {
  items: Item[];
}

const CartList: React.FC<CartListProps> = ({ items }) => {
  return (
    <ScrollArea className="h-full">
      <div className="flex h-full flex-col gap-1 p-2 pr-4">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default CartList;
