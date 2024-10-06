import React from "react";
import { Link } from "react-router-dom";

interface LoginFormProps {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col space-y-6">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 rounded"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-2 rounded"
        required
      />
      {/* Login and Forgot password */}
      <div className="flex flex-col gap-2">
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Login
        </button>
        <Link
          to="/forgot-password"
          className="text-sm text-gray-600 hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      {/* OR divider */}
      <div className="flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-4 text-gray-500 text-sm">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Google Sign-In */}
      <button className="bg-red-500 text-white p-2 rounded flex items-center justify-center hover:bg-red-600">
        <svg
          className="w-4 h-4 mr-2"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="google"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
          fill="currentColor"
        >
          <path d="M488 261.8c0-17.9-1.6-35.1-4.7-51.8H250v98.1h134.2c-5.8 31.2-23.2 57.6-49.3 75.2v62.3h79.5c46.6-42.9 73.6-106.1 73.6-183.8zM250 484c65.2 0 119.7-21.7 159.6-58.5l-79.5-62.3c-22.1 14.8-50.2 23.6-80.1 23.6-61.6 0-113.7-41.5-132.3-97.4H35.4v61.1C75.6 431.1 157.9 484 250 484zM117.7 307.8c-5.7-16.6-9-34.3-9-52.8s3.3-36.1 9-52.8v-61.1H35.4C12.9 173.4 0 210.1 0 255s12.9 81.6 35.4 111.1l82.3-61.1zM250 143.3c34.7 0 65.7 12 90.2 31.5l68.1-68.1C364.1 67.9 310.7 44 250 44 157.9 44 75.6 96.9 35.4 173.4l82.3 61.1c18.6-55.9 70.7-97.4 132.3-97.4z" />
        </svg>
        Sign in with Google
      </button>
    </form>
  );
};

export default LoginForm;
