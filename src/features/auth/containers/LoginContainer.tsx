import React, { useState } from "react";
// import { LoginForm } from "@feature-components/auth";
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
    <div className="flex-1 p-2 lg:p-3 rounded-3xl border-2 border-violet-100 ">
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
