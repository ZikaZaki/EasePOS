import React from "react";
import { Logo, Nav } from "@shared/components";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between">
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
