import React, { useState } from "react";
import { LoginForm } from "@features/auth/components";

interface LoginContainerProps {
  onLogin: (email: string, password: string) => void;
}

const LoginContainer: React.FC<LoginContainerProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging user.....");
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
