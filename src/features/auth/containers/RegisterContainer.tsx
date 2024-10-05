import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";

interface RegisterContainerProps {
  onRegister: (username: string, email: string, password: string) => void;
}

const RegisterContainer: React.FC<RegisterContainerProps> = ({
  onRegister,
}) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(username, email, password);
  };

  return (
    <RegisterForm
      username={username}
      setUsername={setUsername}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      onSubmit={handleSubmit}
    />
  );
};

export default RegisterContainer;
