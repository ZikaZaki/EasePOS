import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux"; // Adjust path to your store setup
import {
  fetchCart,
  addToCart,
  removeFromCart,
  updateCartItem,
} from "../redux/cart-thunks";
import { OrderItem } from "../types";
import { clearCart } from "../redux/cart-slice";

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
    (item: OrderItem) => {
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
    (item: OrderItem) => {
      dispatch(updateCartItem(item));
    },
    [dispatch]
  );

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
  };
};

export default useCart;
