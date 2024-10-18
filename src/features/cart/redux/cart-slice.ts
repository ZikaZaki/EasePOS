import { createSlice, SerializedError } from "@reduxjs/toolkit";
import { Item } from "../types";
import {
  fetchCart,
  addToCart,
  removeFromCart,
  updateCartItem,
} from "./cart-thunks";

interface CartState {
  items: Item[];
  selectedItemId: number | null;
  isLoading: boolean;
  error: SerializedError | null;
}

const initialState: CartState = {
  items: [],
  selectedItemId: null,
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
    },
    selectCartItem: (state, action) => {
      state.selectedItemId = action.payload;
    },
    clearSelectedCartItem: (state) => {
      state.selectedItemId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchCart
      .addCase(fetchCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      // Handle addToCart
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      // Handle removeFromCart
      .addCase(removeFromCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.meta.arg);
        state.isLoading = false;
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      // Handle updateCartItem
      .addCase(updateCartItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        const updatedItem = action.meta.arg;
        const index = state.items.findIndex(
          (item) => item.id === updatedItem.id
        );
        if (index !== -1) {
          state.items[index] = updatedItem;
        }
        state.isLoading = false;
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const { clearCart, selectCartItem, clearSelectedCartItem } =
  cartSlice.actions;
export default cartSlice.reducer;
