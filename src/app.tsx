// /App.tsx
import React from "react";
import ErrorBoundary from "./ErrorBoundary"; // Create this component
import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <AppRoutes />
    </ErrorBoundary>
  );
};

export default App;
