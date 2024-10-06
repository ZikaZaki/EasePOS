import React from "react";
import { useDispatch } from "react-redux";
import { login, register } from "../redux/authSlice";
import { AuthAction } from "../types/authTypes";
import LoginContainer from "./LoginContainer";
import RegisterContainer from "./RegisterContainer";
import CarouselContainer from "./CarouselContainer";

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
    <div className="flex flex-col lg:flex-row space-x-12 items-center justify-center rounded-2xl overflow-hidden">
      {/* Left side: Carousel (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 h-full">
        <CarouselContainer />
      </div>

      {/* Right side: Form container */}
      <div className="flex lg:w-1/2 h-full p-4 items-center justify-center border border-gray-200 rounded-2xl">
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
