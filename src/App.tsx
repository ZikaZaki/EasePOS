// /App.tsx
import React from "react";
import ErrorBoundary from "./ErrorBoundary"; // Create this component
import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen min-h-screen-dvh bg-gray-50 text-gray-800">
        <AppRoutes />
      </div>
    </ErrorBoundary>
  );
};

export default App;
