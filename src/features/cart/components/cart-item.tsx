import React from "react";
import type { OrderItem } from "../types";
import { useCart } from "../hooks";

interface CartItemProps {
  item: OrderItem;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeItemFromCart, updateItemInCart } = useCart();

  const handleUpdate = (newQuantity: number) => {
    updateItemInCart({ ...item, quantity: newQuantity });
  };

  return (
    <div className="flex flex-col w-full border-2 border-red-500 py-1 px-2">
      {/* First Row: Item name and price */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">{item.name}</h3>
        <span className="text-base font-semibold">
          {item.price.toFixed(2)}$
        </span>
      </div>

      {/* Second Row: Quantity and price per unit */}
      <div className="text-muted-foreground text-sm font-semibold">
        <span>{item.quantity.toFixed(2)} Units</span>
        <span className="ml-2">at {item.price.toFixed(2)}$/Unit</span>
      </div>
    </div>
  );
};

export default CartItem;
