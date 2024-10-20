import * as React from "react";
import { WineIcon } from "lucide-react";
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
    <Card className="w-[200px] h-[200px] p-0">
      <CardHeader className="px-4 py-3">
        <CardTitle className="p-0">
          <WineIcon />
        </CardTitle>
        <CardDescription className="pt-2">
          Deploy your new project in one-click.
        </CardDescription>
      </CardHeader>
      <CardContent className="py-2">
        <div className="grid w-full items-center">
          <span>{product.name}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between py-2 px-4">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
