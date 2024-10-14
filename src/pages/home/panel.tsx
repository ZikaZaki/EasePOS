import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@shared/components/ui";
import { Header } from "@features/products/components";

const Panel: React.FC = () => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-full rounded-b-lg border-2 border-blue-300 md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={75} minSize={45}>
        <Header />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25} minSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Panel;
