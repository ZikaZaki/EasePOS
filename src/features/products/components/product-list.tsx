import React from "react";
import { ScrollArea } from "@shared/components/ui";
import ProductCard from "./product-card";
import type { Product } from "../types";

interface ProductListProps {
  products: Product[];
}

const CartList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <ScrollArea className="h-full">
      <div className="flex gap-3 flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default CartList;
