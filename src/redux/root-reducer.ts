import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "@features/auth/redux";
import { cartReducer } from "@features/cart/redux";

const rootReducer = combineReducers({
  auth: authReducer, // Make sure at least one slice reducer is included here
  // Add more reducers here as your app grows
  cart: cartReducer,
});

export default rootReducer;
