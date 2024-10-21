import React from "react";
import { ViewToggle } from "@shared/components/ui";
import SearchField from "./search-field";
import { Logo } from "@shared";

const Header: React.FC = () => {
  const [view, setView] = React.useState<"grid" | "list">("grid");
  const handleToggle = () => {
    setView((prev) => (prev === "grid" ? "list" : "grid"));
  };

  return (
    <div className="flex h-14 items-center justify-between px-4 py-2 border-b-2 border-input">
      <Logo />
      <div className="flex items-center">
        <SearchField />
        <ViewToggle variant={view} onClick={handleToggle} className="ml-2" />
      </div>
    </div>
  );
};

export default Header;
