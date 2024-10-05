// src/components/Header/Header.tsx

import React from "react";
import Logo from "../Logo"; // Adjust the path if necessary
import Navigation from "../Navigation"; // Adjust the path if necessary

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center gap-10 bg-gray-900 text-white p-4">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
