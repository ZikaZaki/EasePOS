// src/layouts/MainLayout.tsx (Includes both a [Header + Main])
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen h-screen-dvh">
      {/* Header section */}
      <Header />

      {/* Main content goes here */}
      <main className="flex bg-gray-100 py-8 overflow-auto">
        <div className="container mx-auto px-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
