import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@shared/components/ui";
import { Header } from "@features/products/components";
import { ProductsContainer } from "@features/products/containers";
import { CartContainer } from "@features/cart/containers";
import { OrderProcessingContainer } from "@features/order-processing/containers";

const products = [
  {
    id: 1,
    name: "product 1",
    price: 2500,
    description:
      "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.",
    imageUrl:
      "https://img.freepik.com/premium-psd/bank-services-invitation-template_23-2150248590.jpg?w=740",
  },
  {
    id: 2,
    name: "product 1",
    price: 2500,
    description:
      "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.",
    imageUrl:
      "https://img.freepik.com/premium-psd/bank-services-invitation-template_23-2150248590.jpg?w=740",
  },
  {
    id: 3,
    name: "product 1",
    price: 2500,
    description:
      "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.",
    imageUrl:
      "https://img.freepik.com/premium-psd/bank-services-invitation-template_23-2150248590.jpg?w=740",
  },
  {
    id: 4,
    name: "product 1",
    price: 2500,
    description:
      "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.",
    imageUrl:
      "https://img.freepik.com/premium-psd/bank-services-invitation-template_23-2150248590.jpg?w=740",
  },
  {
    id: 5,
    name: "product 1",
    price: 2500,
    description:
      "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.",
    imageUrl:
      "https://img.freepik.com/premium-psd/bank-services-invitation-template_23-2150248590.jpg?w=740",
  },
];

const Panel: React.FC = () => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-h-[800px] items-stretch rounded-md border-2 border-input md:min-w-[660px] overflow-hidden"
    >
      <ResizablePanel
        className="relative flex flex-col gap-1"
        defaultSize={72}
        minSize={62}
        maxSize={75}
      >
        <Header />
        <ProductsContainer products={products} />
      </ResizablePanel>
      <ResizableHandle withHandle className="p-[1px]" />
      <ResizablePanel
        className="flex flex-col gap-2 p-2 ml-1"
        defaultSize={28}
        minSize={25}
        maxSize={38}
      >
        {/* Cart List & Summary */}
        <div className="flex flex-col h-[54%]">
          <CartContainer />
        </div>
        {/* Control Buttons */}
        <div className="flex flex-col h-[46%]">
          <OrderProcessingContainer />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Panel;
