import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/redux/authSlice"; // Ensure this is a valid slice

const rootReducer = combineReducers({
  auth: authReducer, // Make sure at least one slice reducer is included here
  // Add more reducers here as your app grows
});

export default rootReducer;
