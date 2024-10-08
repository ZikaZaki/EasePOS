// src/features/auth/redux/index.ts
export { default as authReducer } from "./authSlice"; // Export the reducer
export { login, logout, register, resetPassword } from "./authSlice"; // Explicitly export actions
export type { AuthState, User } from "../types/productsTypes"; // Export any types that are necessary
