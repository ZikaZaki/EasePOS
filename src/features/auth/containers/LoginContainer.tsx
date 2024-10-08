import React, { useState } from "react";
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
    <div className="w-full h-full p-4 lg:px-6 lg:py-4 rounded-3xl border-2 border-violet-100 overflow-hidden items-center justify-center">
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
