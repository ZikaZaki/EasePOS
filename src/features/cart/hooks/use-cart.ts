import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux"; // Adjust path to your store setup
import {
  fetchCart,
  addToCart,
  removeFromCart,
  updateCartItem,
} from "../redux/cart-thunks";
import { Item } from "../types";
import {
  selectCartItem,
  clearSelectedCartItem,
  clearCart,
} from "../redux/cart-slice";

/**
 * Custom hook for managing cart operations
 */
const useCart = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Extract cart state from the Redux store
  const cart = useSelector((state: RootState) => state.cart.items);
  const isLoading = useSelector((state: RootState) => state.cart.isLoading);
  const error = useSelector((state: RootState) => state.cart.error);

  // Fetch cart on component mount
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  // Add item to cart
  const addItemToCart = useCallback(
    (item: Item) => {
      dispatch(addToCart(item));
    },
    [dispatch]
  );

  // Remove item from cart by ID
  const removeItemFromCart = useCallback(
    (itemId: number) => {
      dispatch(removeFromCart(itemId));
    },
    [dispatch]
  );

  // Update item in cart
  const updateItemInCart = useCallback(
    (item: Item) => {
      dispatch(updateCartItem(item));
    },
    [dispatch]
  );

  // Select cart item
  const selectItem = useCallback(
    (itemId: number) => {
      dispatch(selectCartItem(itemId));
    },
    [dispatch]
  );

  // clear selected item
  const clearSelectedItem = useCallback(() => {
    dispatch(clearSelectedCartItem());
  }, [dispatch]);

  // Clear all items in the cart
  const clearAllItems = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return {
    cart,
    isLoading,
    error,
    addItemToCart,
    removeItemFromCart,
    updateItemInCart,
    clearAllItems,
    selectItem,
    clearSelectedItem,
  };
};

export default useCart;
