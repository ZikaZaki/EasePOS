import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../types/productsTypes";

const ProductCard: React.FC<Product> = ({
  id,
  name,
  price,
  description,
  imageUrl,
}) => {
  return (
    <div className="h-full w-full flex flex-col">
      <img src={imageUrl} alt={name} className="h-64 w-full object-cover" />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-lg font-semibold mt-2">${price}</p>
        <Link
          to={`/products/${id}`}
          className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-md text-center"
        >
          View Product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
