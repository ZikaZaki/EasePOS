import React from "react";
import { cn } from "@shared/utils";
import { useCart } from "../hooks";
import type { Item } from "../types";

interface CartItemProps {
  item: Item;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeItemFromCart, updateItemInCart } = useCart();

  const handleUpdate = (newQuantity: number) => {
    updateItemInCart({ ...item, quantity: newQuantity });
  };

  return (
    <button
      className={cn(
        "flex flex-col items-stretch rounded-lg border px-3 py-2 text-left text-sm transition-all hover:bg-accent"
        // item.selected === item.id && "bg-muted"
      )}
      // onClick={() =>
      //   setItem({
      //     ...item,
      //     selected: item.id,
      //   })
      // }
    >
      {/* First Row: Item name and price */}
      <div className="flex items-center justify-between gap-2">
        <div className="font-semibold">{item.name}</div>
        <div className="ml-auto font-semibold">{item.price.toFixed(2)}$</div>
      </div>

      {/* Second Row: Quantity and price per unit */}
      {/* className=
      {cn(
        "ml-auto text-xs",
        item.selected === item.id ? "text-foreground" : "text-muted-foreground"
      )} */}
      <div className="flex items-center text-sm text-muted-foreground font-medium">
        <span>{item.quantity.toFixed(2)} Units</span>
        <span className="ml-1">at {item.price.toFixed(2)}$ / Unit</span>
      </div>
    </button>
  );
};

export default CartItem;
