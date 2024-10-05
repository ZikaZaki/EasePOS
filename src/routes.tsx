import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import HeaderLayout from "./layouts/HeaderLayout";
import HomePage from "./pages/Home/HomePage";

// Lazy Load....
const AuthPage = lazy(() => import("./pages/Auth/AuthPage"));
const DashboardPage = lazy(() => import("./pages/Dashboard/DashboardPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/auth/:action",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <AuthPage />
          </Suspense>
        ),
      },
    ],
  },
  // Below is paths where the HeaderLayout is not needed
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <DashboardPage />
      </Suspense>
    ),
  },
  // Add other routes here
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
