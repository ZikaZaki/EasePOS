// src/features/products/types/index.ts
import React from "react";

/**
 * Interface representing the category object
 */
export interface Category {
  id: number;
  name: string;
  totalProducts: number;
  icon?: React.ReactNode;
  color?: string;
}

/**
 * Interface representing the product object
 */
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  categoryId: number;
  imageUrl?: string;
  // Add other product properties as needed
}
