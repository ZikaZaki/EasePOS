import React from "react";
import { Header, CategoryList, ProductList } from "../components";
import { HamIcon, WineIcon, SaladIcon, DessertIcon } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Food",
    totalProducts: 20,
    icon: <HamIcon size={28} />,
    color: "bg-red-200",
  },
  {
    id: 2,
    name: "Drinks",
    totalProducts: 807,
    icon: <WineIcon size={28} />,
    color: "bg-yellow-200",
  },
  {
    id: 3,
    name: "Appetizers",
    totalProducts: 720,
    icon: <DessertIcon size={28} />,
  },
  {
    id: 4,
    name: "Salads",
    totalProducts: 11,
    icon: <SaladIcon size={28} />,
  },
  {
    id: 5,
    name: "Food",
    totalProducts: 20,
    icon: <HamIcon size={28} />,
  },
  {
    id: 6,
    name: "Drinks",
    totalProducts: 807,
    icon: <WineIcon size={28} />,
  },
  {
    id: 7,
    name: "Appetizers",
    totalProducts: 720,
    icon: <DessertIcon size={28} />,
  },
  {
    id: 8,
    name: "Salads",
    totalProducts: 11,
    icon: <SaladIcon size={28} />,
  },
  {
    id: 9,
    name: "Food",
    totalProducts: 20,
    icon: <HamIcon size={28} />,
  },
  {
    id: 10,
    name: "Drinks",
    totalProducts: 807,
    icon: <WineIcon size={28} />,
  },
  {
    id: 11,
    name: "Appetizers",
    totalProducts: 720,
    icon: <DessertIcon size={28} />,
  },
  {
    id: 12,
    name: "Salads",
    totalProducts: 999,
    icon: <SaladIcon size={28} />,
  },
];

const products = [
  {
    id: 1,
    name: "product 1",
    price: 2500,
    description:
      "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.",
    categoryId: 1,
    imageUrl:
      "https://img.freepik.com/premium-psd/bank-services-invitation-template_23-2150248590.jpg?w=740",
  },
  {
    id: 2,
    name: "product 1",
    price: 2500,
    description:
      "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.",
    categoryId: 1,
    imageUrl:
      "https://img.freepik.com/premium-psd/bank-services-invitation-template_23-2150248590.jpg?w=740",
  },
  {
    id: 3,
    name: "product 1",
    price: 2500,
    description:
      "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.",
    categoryId: 1,
    imageUrl:
      "https://img.freepik.com/premium-psd/bank-services-invitation-template_23-2150248590.jpg?w=740",
  },
  {
    id: 4,
    name: "product 1",
    price: 2500,
    description:
      "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.",
    categoryId: 2,
    imageUrl:
      "https://img.freepik.com/premium-psd/bank-services-invitation-template_23-2150248590.jpg?w=740",
  },
  {
    id: 5,
    name: "product 1",
    price: 2500,
    description:
      "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.",
    categoryId: 2,
    imageUrl:
      "https://img.freepik.com/premium-psd/bank-services-invitation-template_23-2150248590.jpg?w=740",
  },
  {
    id: 6,
    name: "product 1",
    price: 2500,
    description:
      "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.",
    categoryId: 1,
    imageUrl:
      "https://img.freepik.com/premium-psd/bank-services-invitation-template_23-2150248590.jpg?w=740",
  },
  {
    id: 7,
    name: "product 1",
    price: 2500,
    description:
      "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.",
    categoryId: 1,
    imageUrl:
      "https://img.freepik.com/premium-psd/bank-services-invitation-template_23-2150248590.jpg?w=740",
  },
  {
    id: 8,
    name: "product 1",
    price: 2500,
    description:
      "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.",
    categoryId: 1,
    imageUrl:
      "https://img.freepik.com/premium-psd/bank-services-invitation-template_23-2150248590.jpg?w=740",
  },
  {
    id: 9,
    name: "product 1",
    price: 2500,
    description:
      "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.",
    categoryId: 2,
    imageUrl:
      "https://img.freepik.com/premium-psd/bank-services-invitation-template_23-2150248590.jpg?w=740",
  },
  {
    id: 10,
    name: "product 1",
    price: 2500,
    description:
      "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.",
    categoryId: 2,
    imageUrl:
      "https://img.freepik.com/premium-psd/bank-services-invitation-template_23-2150248590.jpg?w=740",
  },
];

const ProductsContainer: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full gap-2">
      <Header />
      <div className="flex flex-col h-full w-full gap-3 p-2 pt-0.5 overflow-hidden">
        <div className="h-fit w-full">
          <CategoryList categories={categories} />
        </div>
        <div className="flex-1 h-full flex overflow-hidden">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
