// src/components/Header/Header.tsx

import React from "react";
import Logo from "../Logo"; // Adjust the path if necessary
import Navigation from "../Navigation"; // Adjust the path if necessary

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
