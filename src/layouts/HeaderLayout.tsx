// src/layouts/HeaderLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const HeaderLayout: React.FC = () => {
    return (
        <>
            <Header />
            <div className="flex-1 flex border-2 border-red-400 p-2">
                <Outlet />
            </div>
        </>
    );
};

export default HeaderLayout;
