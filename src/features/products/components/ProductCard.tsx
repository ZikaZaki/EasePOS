import React from "react";
import { Link } from "react-router-dom";

const ProductCard: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <img src="" className="h-64 w-full object-cover" />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold"></h3>
        <p className="text-sm text-gray-600"></p>
        <p className="text-lg font-semibold mt-2"></p>
        <Link
          to={`/products/$`}
          className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-md text-center"
        >
          View Product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
