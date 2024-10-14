import React from "react";
import CategoryBreadcrumb from "./category-breadcrumb";
import SearchField from "./search-field";

const Header: React.FC = () => {
  return (
    <div className="flex h-14 items-center justify-between px-4 py-2 border-b border-gray-400">
      <CategoryBreadcrumb />
      <SearchField />
    </div>
  );
};

export default Header;
