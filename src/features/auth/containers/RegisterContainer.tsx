import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";

interface RegisterContainerProps {
  onRegister: (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => void;
}

const RegisterContainer: React.FC<RegisterContainerProps> = ({
  onRegister,
}) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(firstName, lastName, email, password, confirmPassword);
  };

  return (
    <div className="w-full h-full p-4 lg:px-6 lg:py-4 rounded-3xl border-2 border-violet-100 overflow-hidden items-center justify-center">
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
