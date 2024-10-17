import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import { CartItem } from "../types";
import { getCart, postCartItem, deleteCartItem } from "../services";

export const fetchCart = createAsyncThunk<
  CartItem[], // Return type
  void, // First argument type (no parameters)
  { rejectValue: SerializedError } // Reject value type
>("cart/fetchCart", async (_, thunkAPI) => {
  try {
    const response = await getCart();
    // Ensure the response is of the expected type
    return response.data as CartItem[];
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Error fetching cart";
    return thunkAPI.rejectWithValue({
      name: "Cart Error",
      message: errorMessage,
    });
  }
});

export const addToCart = createAsyncThunk<
  CartItem, // Return type
  CartItem, // Parameter type (the item to add)
  { rejectValue: SerializedError }
>("cart/addToCart", async (item, thunkAPI) => {
  try {
    const response = await postCartItem(item);
    // Ensure the response is of the expected type
    return response.data as CartItem; // Assuming response.data is the added item
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Error adding item to cart";
    return thunkAPI.rejectWithValue({
      name: "Cart Error",
      message: errorMessage,
    });
  }
});

export const removeFromCart = createAsyncThunk<
  void, // Return type
  number, // Parameter type (item ID)
  { rejectValue: SerializedError }
>("cart/removeFromCart", async (itemId, thunkAPI) => {
  try {
    await deleteCartItem(itemId);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Error removing item from cart";
    return thunkAPI.rejectWithValue({
      name: "Cart Error",
      message: errorMessage,
    });
  }
});

export const updateCartItem = createAsyncThunk<
  void, // Return type
  CartItem, // Parameter type (the item to update)
  { rejectValue: SerializedError }
>("cart/updateCartItem", async (item, thunkAPI) => {
  try {
    await postCartItem(item);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Error updating item in cart";
    return thunkAPI.rejectWithValue({
      name: "Cart Error",
      message: errorMessage,
    });
  }
});
