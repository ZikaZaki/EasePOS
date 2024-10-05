// /App.tsx
import React from "react";
import ErrorBoundary from "./ErrorBoundary"; // Create this component
import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="flex flex-col min-h-screen min-h-screen-dvh border-2 border-blue-400">
        <AppRoutes />
      </div>
    </ErrorBoundary>
  );
};

export default App;
