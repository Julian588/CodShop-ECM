import "./Cart.css";
import { useEffect, useState } from "react";
import CartItem from "@layout/CartItem/CartItem";
import { useCart } from "@hooks/useCart";
import useFormattedPrice from "@hooks/useFormattedPrice";

function Cart({ className, closeCart }) {
  const { cart } = useCart();
  const [total, setTotal] = useState();

  const calculateTotalPrice = () => {
    const totalPrice = cart.reduce((acc, item) => {
      const precioFinal = item.oferta ? item.precioOferta : item.precio;
      return acc + precioFinal * item.cantidad;
    }, 0);

    return useFormattedPrice(totalPrice);
  };

  useEffect(() => {
    setTotal(calculateTotalPrice());
  }, [cart]);

  return (
    <aside className={className}>
      <header>
        <h3>Carrito de compras</h3>
        <button type="button" className="close-cart" onClick={closeCart}>
          <i className="fa-solid fa-x"></i>
        </button>
      </header>
      <ul className="cart-item-container">
        {cart.length > 0 ? (
          cart.map((product, index) => (
            <CartItem producto={product} key={index}></CartItem>
          ))
        ) : (
          <></>
        )}
      </ul>
      <footer>
        <h1 className="total-price">
          Total: <span>${total}</span>
        </h1>
        <button className="btn-buy">Comprar</button>
        <button className="btn-more" type="button" onClick={closeCart}>
          Seguir comprando
        </button>
      </footer>
    </aside>
  );
}

export default Cart;
