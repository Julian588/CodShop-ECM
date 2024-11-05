import { useContext } from "react";
import { productsContext } from "../Context/productsContext";

function useProducts() {
  const context = useContext(productsContext);
  if (context === undefined) {
    throw new Error("UseProducts must be within a ProductsProvider");
  }
  return context;
}

export default useProducts;
