import { createContext, useState, useEffect } from "react";
import ToastMessage from "../Toast";

export const cartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const addCart = (product, consola, licencia) => {
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
    setToastMessage(
      `${product.nombre} ha sido agregado al carrito con consola ${consola} y licencia ${licencia}.`
    );
    setToastVisible(true);
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

  const closeToast = () => setToastVisible(false);

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
      <ToastMessage
        show={toastVisible}
        message={toastMessage}
        onClose={closeToast}
      />
    </cartContext.Provider>
  );
}

export default CartProvider;
