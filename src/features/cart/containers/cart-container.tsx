import React from "react";
import { Button } from "@shared/components/ui"; // Adjust based on your UI components
import { CartList } from "../components";
import { useCart } from "../hooks";

const items = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    quantity: 1,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    quantity: 2,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    quantity: 3,
  },
];

const CartContainer: React.FC = () => {
  const { clearAllItems, cart } = useCart();

  return (
    <div className="flex flex-col min-h-60 h-full p-2 border border-gray-800">
      <CartList items={items} />
      {/* {cart.length > 0 && (
        <Button variant="secondary" className="mt-4" onClick={clearAllItems}>
          Clear Cart
        </Button>
      )} */}
    </div>
  );
};

export default CartContainer;
