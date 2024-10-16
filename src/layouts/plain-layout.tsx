// src/layouts/PlainLayout.tsx (Main content without Header)
import React from "react";
import { Outlet } from "react-router-dom";

const PlainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen-dvh h-screen-dvh overflow-hidden">
      {/* Main content without Header */}
      <main className="flex-1 flex justify-center p-4 lg:p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default PlainLayout;
