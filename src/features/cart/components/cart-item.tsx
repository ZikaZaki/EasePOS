import React from "react";
import { cn } from "@shared/utils";
import { Badge } from "@shared/components/ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import { useCart } from "../hooks";
import type { Item } from "../types";

interface CartItemProps {
  item: Item;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const selectedItemId = useSelector(
    (state: RootState) => state.cart.selectedItemId
  );

  const { selectItem, removeItemFromCart, updateItemInCart } = useCart();

  const handleUpdate = (newQuantity: number) => {
    updateItemInCart({ ...item, quantity: newQuantity });
  };

  return (
    <button
      className={cn(
        "flex flex-col items-stretch rounded-lg border px-3 py-2 text-left text-sm transition-all hover:bg-accent",
        selectedItemId === item.id && "bg-muted"
      )}
      onClick={() => selectItem(item.id)}
    >
      {/* First Row: Item name and price */}
      <div className="flex items-center justify-between gap-2">
        <div className="font-semibold">{item.name}</div>
        <div className="ml-auto font-semibold">{item.price.toFixed(2)}$</div>
      </div>

      {/* Second Row: Quantity and price per unit */}
      <div className="flex items-center gap-0.5 text-sm font-medium text-muted-foreground">
        <Badge variant={"outline"} className="flex bg-white ">
          {item.quantity.toFixed(2)}
        </Badge>
        <Cross2Icon />
        <span>{item.price.toFixed(2)}$ / Units</span>
      </div>
    </button>
  );
};

export default CartItem;
