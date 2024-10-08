// src/components/Header/Header.tsx

import React from "react";
import Logo from "../Logo"; // Adjust the path if necessary
import Navigation from "../Navigation"; // Adjust the path if necessary

const Header: React.FC = () => {
  return (
    <header className="flex h-14 px-4 bg-gray-800 text-white font-semibold">
      <div className="container mx-auto py-2 flex justify-between items-center">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
