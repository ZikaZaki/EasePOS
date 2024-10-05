// src/components/Header/Navigation.tsx

import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav
      className="w-full flex space-x-8 items-center"
      aria-label="Main Navigation"
    >
      <ul className="w-full flex justify-center items-center space-x-8">
        <li>
          <Link to="/" className="hover:underline" aria-label="Go to Home">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="hover:underline"
            aria-label="Learn more About us"
          >
            About
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:underline" aria-label="Contact us">
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex items-center space-x-3">
        <Link to="/auth/login" aria-label="Login">
          <button className="min-w-20 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Login
          </button>
        </Link>
        <Link to="/auth/register" aria-label="Register">
          <button className="min-w-20 bg-green-500 text-white p-2 rounded hover:bg-green-600">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
