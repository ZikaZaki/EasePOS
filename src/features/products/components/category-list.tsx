import React from "react";
import { ScrollArea, ScrollBar } from "@shared/components/ui";
import CategoryCard from "./category-card";
import type { Category } from "../types";
import CategoryBreadcrumb from "./category-breadcrumb";

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="flex flex-col min-h-[215px] max-h-60 rounded-md border border-input">
      <div className="flex py-3 px-4 border-b border-input">
        <CategoryBreadcrumb />
      </div>
      <ScrollArea className="flex-1 flex justify-center items-center p-3 pb-4 whitespace-nowrap">
        <div className="flex w-max h-full-max gap-3 flex-wrap">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default CategoryList;
