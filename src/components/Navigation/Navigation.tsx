// src/components/Header/Navigation.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav aria-label="Main Navigation">
      <ul className="hidden lg:flex space-x-4">
        <li>
          <Link
            to="/"
            className="hover:text-blue-300 hover:underline transition-colors"
            aria-label="Go to Home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="hover:text-blue-300 hover:underline transition-colors"
            aria-label="Learn more About us"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="hover:text-blue-300 hover:underline transition-colors"
            aria-label="Contact us"
          >
            Contact
          </Link>
        </li>
        {/* Add a separator for better UI (optional).
          This will push the (login sign up) buttons to the end
        */}
        <div className="flex-grow" />
        <li>
          <Link
            to="/auth/login"
            className="bg-blue-700 hover:bg-blue-800 hover:text-white transition-colors rounded px-3 py-1"
            aria-label="Login"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/auth/register"
            className="bg-blue-700 hover:bg-blue-800 hover:text-white transition-colors rounded px-3 py-1"
            aria-label="Login"
          >
            Sign Up
          </Link>
        </li>
      </ul>
      {/* Menu Button */}
      <button className="lg:hidden block" aria-label="Open Mobile Menu">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navigation;
