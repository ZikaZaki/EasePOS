import React from "react";
import { ProductList } from "../components";
import { Product } from "../types";

interface ProductsContainerProps {
  products: Product[];
}

const ProductsContainer: React.FC<ProductsContainerProps> = ({ products }) => {
  return (
    <div className="flex-1 p-2 lg:p-3 rounded-md border-2 border-violet-400 overflow-y-auto">
      <ProductList products={products} />
    </div>
  );
};

export default ProductsContainer;
