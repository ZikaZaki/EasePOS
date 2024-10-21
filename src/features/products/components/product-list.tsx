import React from "react";
import { ScrollArea } from "@shared/components/ui";
import ProductCard from "./product-card";
import type { Product } from "../types";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <ScrollArea className="h-full p-2 whitespace-nowrap rounded-md border border-input">
      <div className="flex gap-3 flex-wrap whitespace-nowrap overflow-hidden">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default ProductList;
