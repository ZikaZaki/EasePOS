import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@shared/components/ui";
import { Header } from "@features/products/components";
import { CartContainer } from "@features/cart/containers";
import { OrderProcessingContainer } from "@features/order-processing/containers";

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
        <div className="flex-1 flex items-center justify-center">content</div>
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
