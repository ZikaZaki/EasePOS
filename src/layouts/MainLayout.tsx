// src/layouts/MainLayout.tsx (Includes both a [Header + Main])
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen-dvh h-screen-dvh overflow-hidden">
      {/* Header section */}
      <Header />

      {/* Main content goes here */}
      <main className="flex-1 flex justify-center p-8 border-2 border-blue-500 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
