import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { AuthContainer } from "@features/auth/containers";
import { AuthAction } from "@shared/types";

const AuthPage: React.FC = () => {
  const { action } = useParams<{ action?: AuthAction["action"] }>();
  const validActions = ["login", "register", "reset-password"];

  // Redirect to a 404 page or handle invalid action
  if (!action || !validActions.includes(action)) {
    return <Navigate to="/404" />; // Assuming you have a 404 page
  }

  return (
    <div className="mx-auto container relative flex items-center justify-center p-2">
      <AuthContainer action={action} />
    </div>
  );
};

export default AuthPage;
