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
    <div>
      <h1 className="text-2xl font-bold mb-4">Login</h1>
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
