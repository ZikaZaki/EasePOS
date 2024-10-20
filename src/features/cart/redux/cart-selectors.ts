import { RootState } from "@redux";

// Selector to get all items in the cart
export const selectCartItems = (state: RootState) => state.cart.items;

// Selector to get the total number of items in the cart
export const selectCartItemCount = (state: RootState) =>
  state.cart.items.reduce((count, item) => count + item.quantity, 0);

// Selector to get the loading state of the cart
export const selectCartLoading = (state: RootState) => state.cart.isLoading;

// Selector to get any error that occurred while fetching or modifying the cart
export const selectCartError = (state: RootState) => state.cart.error;

// Selector to calculate the total price of the cart
export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
