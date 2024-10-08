// src/components/Header/Logo.tsx
import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <div className="flex text-xl font-bold text-white hover:text-blue-500">
      <Link to="/" aria-label="Logo">
        {/* <img src="/path/to/logo.png" alt="EasePOS Logo" className="h-8 w-auto" /> */}
        EasePOS
      </Link>
    </div>
  );
};

export default Logo;
