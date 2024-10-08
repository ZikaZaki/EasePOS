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
    <div className="flex flex-col w-full h-full justify-center overflow-y-auto">
      <div className="flex flex-col space-y-2 mb-5 px-2">
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="font-medium text-md text-gray-500">Welcome back!</p>
      </div>
      <form onSubmit={onSubmit}>
        {/* Email address */}
        <div className="flex flex-col gap-1.5 px-2 mt-4">
          <label htmlFor="email" className="text-base font-medium">
            Email
          </label>
          <input
            id="email"
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 border-2 border-gray-100 rounded"
            required
          />
        </div>
        {/* Password */}
        <div className="flex flex-col gap-1.5 px-2 mt-4">
          <label htmlFor="password" className="text-base font-medium">
            Password
          </label>
          <input
            id="password"
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full p-3 border-2 border-gray-100 rounded"
            required
          />
        </div>
        {/* Remember me and Forgot password */}
        <div className="flex justify-between items-center gap-4 px-3 mt-2">
          <div className="space-x-1">
            <input id="remember-me" type="checkbox" />
            <label className="font-normal text-sm" htmlFor="remember-me">
              Remember for 30 days
            </label>
          </div>
          <Link
            to="/forgot-password"
            className="font-normal text-sm hover:underline"
          >
            Forgot password?
          </Link>
        </div>
        {/* Login button */}
        <div className="flex flex-col px-2 mt-4">
          <button
            type="submit"
            className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 bg-violet-500 rounded-lg text-white font-semibold text-base"
          >
            Login
          </button>
        </div>
      </form>
      {/* OR divider */}
      <div className="flex items-center mt-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-4 text-gray-500 text-sm">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      {/* Google Sign in */}
      <div className="flex flex-col px-2 mt-4">
        <button className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3  rounded-xl text-gray-700 font-semibold text-base border-2 border-gray-150 ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
              fill="#EA4335"
            />
            <path
              d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
              fill="#34A853"
            />
            <path
              d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
              fill="#4A90E2"
            />
            <path
              d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
              fill="#FBBC05"
            />
          </svg>
          Sign in with Google
        </button>
      </div>
      {/* Don't have an account? Sing Up */}
      <div className="flex justify-center items-center px-3 my-3">
        <p className="font-medium text-base">Don't have an account?</p>
        <Link
          to="/auth/register"
          className="ml-2 font-medium text-base text-violet-500"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
