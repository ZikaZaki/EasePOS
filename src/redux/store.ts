// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
});

// Export the store
export default store;

// Export types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
