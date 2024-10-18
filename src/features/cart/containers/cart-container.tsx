import React from "react";
import { CartList, CartSummary } from "../components";
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
  {
    id: 4,
    name: "Product 4",
    price: 400,
    quantity: 4,
  },
  {
    id: 5,
    name: "Product 5",
    price: 500,
    quantity: 5,
  },
  {
    id: 6,
    name: "Product 6",
    price: 600,
    quantity: 6,
  },
  {
    id: 7,
    name: "Product 7",
    price: 700,
    quantity: 7,
  },
  {
    id: 8,
    name: "Product 8",
    price: 800,
    quantity: 8,
  },
  {
    id: 9,
    name: "Product 9",
    price: 900,
    quantity: 9,
  },
  {
    id: 10,
    name: "Product 10",
    price: 1000,
    quantity: 10,
  },
];

const CartContainer: React.FC = () => {
  const { clearAllItems, cart } = useCart();

  return (
    <div className="relative flex flex-col h-full rounded-md border border-gray-300 overflow-hidden">
      <CartList items={items} />
      <CartSummary items={items} />
    </div>
  );
};

export default CartContainer;
