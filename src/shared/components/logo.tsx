// src/components/Header/Logo.tsx
import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <div className="font-bold lg:inline-block text-gray-600 hover:text-blue-500">
      <Link to="/" className="flex gap-2 items-center" aria-label="Logo">
        {/* include logo svg */}
        <img
          src="../../../public/image.svg"
          alt="EasePOS Logo"
          className="h-8 w-auto"
        />

        <span className="text-lg font-semibold">MOOSNAD</span>

        {/* <MoosnadLogo /> */}
      </Link>
    </div>
  );
};

export default Logo;
