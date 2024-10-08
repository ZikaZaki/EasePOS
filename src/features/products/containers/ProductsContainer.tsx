import React from "react";
import { useDispatch } from "react-redux";
import { Product } from "../types/productsTypes";

interface ProductsContainerProps {
  products: Product[];
}

const ProductsContainer: React.FC<ProductsContainerProps> = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <div className="max-h-full max-w-[68rem] flex gap-8 justify-center p-2 lg:p-4 rounded-2xl bg-white shadow-md border border-gray-100 overflow-hidden"></div>
  );
};

export default ProductsContainer;
