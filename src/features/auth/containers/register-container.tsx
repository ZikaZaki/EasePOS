import React, { useState } from "react";
import { RegisterForm } from "@features/auth/components";

interface RegisterContainerProps {
  onRegister: (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => void;
}

const RegisterContainer: React.FC<RegisterContainerProps> = ({
  onRegister,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registering user...");
    onRegister(firstName, lastName, email, password);
  };

  return (
    <div className="flex-1 p-2 lg:p-3 rounded-3xl border-2 border-violet-100 overflow-y-auto">
      <RegisterForm
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default RegisterContainer;
