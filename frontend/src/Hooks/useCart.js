import { useContext } from "react";
import { cartContext } from "../context/cartContext";

export function useCart() {
  const context = useContext(cartContext);

  if (context === undefined) {
    throw new Error("Cart must be used within a cartProvider");
  }
  return context;
}
