import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { AuthAction } from "../../features/auth/types/authTypes";
import AuthContainer from "../../features/auth/containers/AuthContainer";

const AuthPage: React.FC = () => {
  const { action } = useParams<{ action?: AuthAction["action"] }>();

  // Define valid actions
  const validActions = ["login", "register", "reset-password"];

  // Redirect to a 404 page or handle invalid action
  if (!action || !validActions.includes(action)) {
    return <Navigate to="/404" />; // Assuming you have a 404 page
  }

  return (
    <div className="flex h-full mx-auto p-12 bg-white  rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
      <AuthContainer action={action} />
    </div>
  );
};

export default AuthPage;