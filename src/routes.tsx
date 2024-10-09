import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoadingSpinner } from "@shared/components";
import { MainLayout, PlainLayout } from "@layouts/index";

// Lazy loading for pages
const AuthPage = lazy(() =>
  import("@pages/Auth").then((module) => ({
    default: module.AuthPage,
  }))
);
const DashboardPage = lazy(() =>
  import("@pages/Dashboard").then((module) => ({
    default: module.DashboardPage,
  }))
);
const HomePage = lazy(() =>
  import("@pages/Home").then((module) => ({ default: module.HomePage }))
);

/**
 * Wrapper for lazy-loaded pages with Suspense and fallback spinner
 */
const SuspenseWrapper = (Component: React.LazyExoticComponent<React.FC>) => (
  <Suspense fallback={<LoadingSpinner />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  // MainLayout for pages with the header
  {
    path: "/",
    element: <MainLayout />, // Using MainLayout for all header-based pages
    children: [
      {
        path: "/", // HomePage with MainLayout
        element: SuspenseWrapper(HomePage),
      },
      {
        path: "/auth/:action", // Auth page (login/sign up based on dynamic route)
        element: SuspenseWrapper(AuthPage),
      },
    ],
  },
  // PlainLayout for pages without a header (like Dashboard and About)
  {
    path: "/",
    element: <PlainLayout />,
    children: [
      {
        path: "dashboard",
        element: SuspenseWrapper(DashboardPage),
      },
      // {
      //   path: "about",
      //   element: SuspenseWrapper(AboutPage),
      // },
    ],
  },
  // Add additional routes with appropriate layouts here
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
