// src/layouts/MainLayout.tsx (Includes both a [Header + Main])
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout: React.FC = () => {
  return (
    <div className="h-screen h-screen-dvh border-2 border-red-400 overflow-hidden">
      {/* Header section */}
      <Header />

      {/* Main content goes here */}
      <main className=" bg-gray-100 py-8 border-2 border-blue-500 overflow-hidden">
        <div className="container mx-auto px-4 overflow-hidden">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
