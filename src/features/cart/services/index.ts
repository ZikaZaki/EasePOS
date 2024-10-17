import axios from "axios";
import { Item } from "../types";

const API_URL = "/api/cart";

// Fetch the cart from the server
export const getCart = async () => {
  return await axios.get(API_URL);
};

// Add an item to the cart
export const postCartItem = async (item: Item) => {
  return await axios.post(API_URL, item);
};

// Remove an item from the cart by ID
export const deleteCartItem = async (itemId: number) => {
  return await axios.delete(`${API_URL}/${itemId}`);
};
