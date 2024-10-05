import React from "react";
import { useDispatch } from "react-redux";
import { login, register } from "../redux/authSlice";
import { AuthAction } from "../types/authTypes";
import LoginContainer from "./LoginContainer";
import RegisterContainer from "./RegisterContainer";
import CarouselContainer from "./CarouselContainer";

const AuthContainer: React.FC<AuthAction> = ({ action }) => {
  const dispatch = useDispatch();

  const handleLogin = (email: string, password: string) => {
    dispatch(login({ email, password }));
  };

  const handleRegister = (
    username: string,
    email: string,
    password: string,
  ) => {
    dispatch(register({ username, email, password }));
  };

  return (
    <div className="flex-1 flex gap-2 items-center justify-center border-2 border-blue-200 p-2">
      {/* Left side: Slider (Hidden on mobile) */}
      <div className="hidden md:block md:w-1/2 h-full border-2 border-yellow-300 p-2 overflow-hidden">
        {/* <CarouselContainer /> */}
      </div>
      {/* Right side: Login form */}
      <div className="w-full md:w-1/2 h-full border-2 border-yellow-300 p-2">
        <CarouselContainer />
      </div>
    </div>
  );

  // switch (action) {
  //   case "login":
  //     return <LoginContainer onLogin={handleLogin} />;
  //   case "register":
  //     return <RegisterContainer onRegister={handleRegister} />;
  //   case "reset-password":
  //     return <div>Reset Password Component</div>; // Placeholder for reset password
  //   default:
  //     return null; // Shouldn't reach here due to validation in AuthPage
  // }
};

export default AuthContainer;
