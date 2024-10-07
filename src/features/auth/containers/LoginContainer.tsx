import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

interface LoginContainerProps {
  onLogin: (email: string, password: string) => void;
}

const LoginContainer: React.FC<LoginContainerProps> = ({ onLogin }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };
  return (
    <div className="flex flex-col w-full p-4 lg:px-6 lg:py-4 rounded-3xl border-2 border-violet-100 overflow-hidden">
      <div className="flex flex-col space-y-2 mb-6 px-2">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="font-medium text-md text-gray-500">
          Welcome back! Please enter you details.
        </p>
      </div>
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default LoginContainer;
