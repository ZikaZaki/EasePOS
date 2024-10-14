/**
 * Interface representing the different authentication actions.
 */
export interface AuthAction {
  action: "login" | "register" | "reset-password";
}

// Define the type for the User
export interface User {
  firstName: string;
  lastName: string;
  email: string;
}

// Define the types for the authentication state
export interface AuthState {
  isAuthenticated: boolean;
  user: User | null; // User can be null or an object of type User
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
}
