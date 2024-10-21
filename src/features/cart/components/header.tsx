import React, { useEffect } from "react";
import { cn } from "@shared/utils";
import { PlusCircleIcon } from "lucide-react";
import { Button, ScrollArea, ScrollBar } from "@shared/components/ui";

const orders = [123];

const Header: React.FC = () => {
  const [selectedOrder, setSelectedOrder] = React.useState<number | null>(null);

  const handleAddOrder = () => {
    console.log("Add order");
    orders.push(orders[orders.length - 1] + 1);
    setSelectedOrder(orders[orders.length - 1]);
  };

  useEffect(() => {
    console.log("Selected Order: ", selectedOrder);
    setSelectedOrder(orders[0]);
  }, [orders]);

  return (
    <div className="flex min-h-16 items-center justify-start gap-2 px-3 py-1 border-b-2 border-input ">
      <Button
        className="mr-1 p-1 h-9 w-12"
        variant="outline"
        size="icon"
        onClick={() => handleAddOrder()}
      >
        <PlusCircleIcon className="h-6 w-6" />
      </Button>
      <ScrollArea className="flex-1 h-full flex whitespace-nowrap pb-1">
        <div className="flex w-max h-full items-center gap-3 flex-wrap whitespace-nowrap">
          {orders.map((order) => (
            <button
              key={order}
              className={cn(
                "flex flex-col items-stretch rounded-lg border w-16 py-1 px-3 text-left text-sm transition-all",
                selectedOrder === order
                  ? "bg-accent border-primary"
                  : "bg-background hover:bg-hover"
              )}
              onClick={() => setSelectedOrder(order)}
            >
              {/* First Row: Order number*/}
              <div className="flex items-center justify-center">
                <span className="font-semibold">{order}</span>
              </div>
            </button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default Header;
