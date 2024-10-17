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
      className="p-2 min-h-[200px] max-w-full rounded-b-lg border-2 border-blue-300 md:min-w-[450px]"
    >
      <ResizablePanel
        defaultSize={75}
        minSize={45}
        className="flex flex-col p-2 border-2 border-yellow-700"
      >
        <Header />
        <div className="flex-1 flex items-center justify-center border-2 border-blue-800">
          content
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel
        className="flex flex-col p-2 border-2 border-yellow-700"
        defaultSize={25}
        minSize={25}
      >
        <CartContainer />
        <div className="flex h-full items-center justify-center p-2 border-2 border-blue-800">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Panel;
