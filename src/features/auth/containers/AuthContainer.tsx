import Reac from "react";
import { useDispatch } from "react-redux";
// import { login, register } from "@feature-redux/auth";
import { login, register } from "../redux";
import { AuthAction } from "@features/auth/types";

// import {
//   CarouselContainer,
//   LoginContainer,
//   RegisterContainer,
// } from "@feature-containers/auth";

import {
  CarouselContainer,
  LoginContainer,
  RegisterContainer,
} from "@features/auth/containers";

const AuthContainer: React.FC<AuthAction> = ({ action }) => {
  const dispatch = useDispatch();

  // Handle login form submission
  const handleLogin = (email: string, password: string) => {
    dispatch(login({ email, password }));
  };

  // Handle registration form submission
  const handleRegister = (
    username: string,
    email: string,
    password: string
  ) => {
    dispatch(register({ username, email, password }));
  };

  return (
    <div className="max-h-full max-w-[68rem] lg:w-full flex gap-8 justify-center p-2 lg:p-4 rounded-2xl bg-white shadow-md border border-gray-100 overflow-hidden">
      {/* Left side: Carousel (Hidden on mobile) */}
      <div className="hidden lg:w-1/2 lg:flex min-h-full">
        <CarouselContainer />
      </div>

      {/* Right side: Form container */}
      <div className="lg:w-1/2 flex min-h-full">
        {/* Conditionally render the Login or Register form based on the action */}
        {action === "login" && <LoginContainer onLogin={handleLogin} />}
        {action === "register" && (
          <RegisterContainer onRegister={handleRegister} />
        )}
        {action === "reset-password" && (
          <div className="text-center">
            <h2 className="text-xl font-semibold">Reset Password</h2>
            <p className="mt-2 text-gray-600">
              Please enter your email to reset your password.
            </p>
            {/* Add reset password form here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthContainer;
