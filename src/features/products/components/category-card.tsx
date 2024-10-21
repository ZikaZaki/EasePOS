import * as React from "react";
import { cn } from "@shared/utils";
import { BoxIcon, Icon } from "lucide-react";
import {
  Card,
  CardContent,
  Badge,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
} from "@shared/components/ui";
import { Category } from "../types";

interface CategoryCardProps {
  className?: string;
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ className, category }) => {
  return (
    <Card
      className={cn(
        "relative flex flex-col gap-5 justify-between w-[160px] h-[140px] p-4 overflow-clip cursor-pointer",
        category?.color ? category.color : "bg-card",
        className
      )}
    >
      <CardHeader className="p-0">
        <CardTitle className="p-0 ">
          <div className="flex items-center">{category.icon}</div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex flex-col justify-center items-start">
          <span className="flex items-center flex-nowrap text-2xl font-bold">
            {category.name}
          </span>
          <span className="flex items-center flex-nowrap text-sm font-semibold text-gray-500">
            {category.totalProducts} items
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
