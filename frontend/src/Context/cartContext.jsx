import { createContext, useState, useEffect } from "react";

export const cartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addCart = (product, licencia, consola) => {
    const productsInCartIndex = cart.findIndex(
      (item) =>
        item.id === product.id &&
        item.consola === consola &&
        item.licencia === licencia
    );
    if (productsInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productsInCartIndex].cantidad += 1;
      return setCart(newCart);
    }

    setCart((prevState) => [
      ...prevState,
      { ...product, consola: consola, licencia: licencia, cantidad: 1 },
    ]);
  };

  const removeFromCart = (product, consola, licencia) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(
            item.id === product.id &&
            item.consola === consola &&
            item.licencia === licencia
          )
      )
    );
    product.cantidad = 0;
  };

  const updateItemQuantity = (id, newQuantity, consola, licencia) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.consola === consola && item.licencia === licencia
          ? { ...item, cantidad: newQuantity }
          : item
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <cartContext.Provider
      value={{
        cart,
        addCart,
        removeFromCart,
        updateItemQuantity,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;
