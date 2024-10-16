// src/layouts/MainLayout.tsx (Includes both a [Header + Main])
import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@shared/components";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen h-screen overflow-hidden">
      {/* Header section */}
      <Header />

      {/* Main content goes here */}
      <main className="flex-1 p-2 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
