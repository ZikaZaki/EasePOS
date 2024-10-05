// src/features/auth/types/authTypes.ts

/**
 * Interface representing the different authentication actions.
 */
export interface AuthAction {
  action: "login" | "register" | "reset-password";
}

// Define the type for the User
export interface User {
  username: string;
  email: string;
}

// Define the types for the authentication state
export interface AuthState {
  isAuthenticated: boolean;
  user: User | null; // User can be null or an object of type User
}

export interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}
