import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@shared/components/ui";
import { Header } from "@features/products/components";
import Product from "./product";
import { CartContainer } from "@features/cart/containers";

const Panel: React.FC = () => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="p-2 max-h-[800px] items-stretch rounded-b-lg border-2 border-blue-300 md:min-w-[660px]"
    >
      <ResizablePanel
        className="flex flex-col p-2 border-2 border-yellow-700"
        defaultSize={72}
        minSize={64}
        maxSize={80}
      >
        <Header />
        <div className="flex-1 flex items-center justify-center border-2 border-blue-800">
          content
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel
        className="flex flex-col p-2 gap-2 border-2 border-yellow-700"
        defaultSize={28}
        minSize={20}
        maxSize={36}
      >
        {/* Cart List & Summary */}
        <div className="flex flex-col h-[55%]">
          <CartContainer />
        </div>
        {/* Control Buttons */}
        <div className="flex flex-col h-[45%] ">
          <div className="flex flex-col h-full items-center justify-center p-2 rounded-md border-2 border-blue-800">
            <span className="font-semibold">Control Buttons</span>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Panel;
