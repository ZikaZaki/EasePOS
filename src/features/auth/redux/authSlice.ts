// src/features/auth/redux/authSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "../types/authTypes"; // Import types from the new file

// Initial state
const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

// Create the auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ email: string; password: string }>) {
      // Simulate a successful login; replace with real API call later
      state.isAuthenticated = true;
      state.user = { username: "User", email: action.payload.email }; // Mock user data
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    register(state, action: PayloadAction<User & { password: string }>) {
      // Simulate a successful registration; replace with real API call later
      // The password is part of the action payload, but it is not stored in the user object or in the state.
      // This is good because passwords should never be stored in plaintext in the state or any database.
      state.isAuthenticated = true;
      state.user = {
        username: action.payload.username,
        email: action.payload.email,
      }; // Mock user data
    },
    resetPassword(state, action: PayloadAction<{ email: string }>) {
      // Simulate password reset logic; replace with real API call later
      console.log(`Password reset link sent to ${action.payload.email}`);
    },
  },
});

// Export actions and reducer
export const { login, logout, register, resetPassword } = authSlice.actions;
export default authSlice.reducer;

// Example
// async function handleRegister(email: string, password: string, username: string) {
//   try {
//     const response = await api.register({ email, password, username }); // Send password to API

//     if (response.success) {
//       // On successful registration, update the state
//       dispatch(register({ username, email })); // Only store username and email
//     }
//   } catch (error) {
//     console.error("Registration failed", error);
//     // Handle error (e.g., show an error message to the user)
//   }
// }
