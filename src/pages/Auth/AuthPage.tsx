import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { AuthAction } from "../../features/auth/types/authTypes";
import AuthContainer from "../../features/auth/containers/AuthContainer";

const AuthPage: React.FC = () => {
  const { action } = useParams<{ action?: AuthAction["action"] }>();

  // Redirect to a 404 page or handle invalid action
  if (!action || !["login", "register", "reset-password"].includes(action)) {
    return <Navigate to="/404" />; // assuming you have a 404 page
  }

  return (
    <div className="flex-1 flex p-2 border-2 border-gray-800">
      <AuthContainer action={action} />
    </div>
  );
};

export default AuthPage;
