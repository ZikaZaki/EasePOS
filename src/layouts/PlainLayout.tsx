// src/layouts/PlainLayout.tsx (Main content without Header)
import React from "react";
import { Outlet } from "react-router-dom";

const PlainLayout: React.FC = () => {
  return (
    <div className="min-h-screen min-h-screen-dvh flex flex-col border-2 border-red-400">
      {/* Main content without Header */}
      <main className="flex-grow bg-gray-100 py-8 border-2 border-blue-500">
        <div className="container mx-auto px-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default PlainLayout;
