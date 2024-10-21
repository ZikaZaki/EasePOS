import * as React from "react";
import { WineIcon, InfoIcon, BadgeInfoIcon, Info } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
} from "@shared/components/ui";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="relative flex flex-col w-[240px] h-[200px] p-4 pl-5 text-wrap whitespace-nowrap overflow-clip cursor-pointer">
      {/* change color based on the category background-color */}
      <span className="absolute left-0 top-0 w-1.5 min-h-full rounded-l-lg bg-red-200" />
      <Button
        className="absolute right-0 top-0 w-10 h-10 p-1.5 flex justify-end items-start bg-gray-200 text-gray-700 rounded-bl-full hover:text-white overflow-hidden"
        variant="ghost"
        size={"icon"}
      >
        <Info size={20} />
      </Button>
      {/* <span  /> */}
      <CardHeader className="p-0">
        <CardTitle className="p-0 ">
          <WineIcon size={32} />
        </CardTitle>
        <CardDescription className="p-0">
          <div className="flex items-center mt-2">
            <span className="text-lg font-semibold">{product.name}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 mb-2">
        <span>Deploy your new project in one-click.</span>
      </CardContent>
      <CardFooter className="p-0 flex-1 flex items-end">
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
