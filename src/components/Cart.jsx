import "../css/cart.css";
import CartItem from "./CartItem";
import { useCart } from "./Hooks/useCart";
import { useEffect, useState } from "react";
import useFormattedPrice from "./Hooks/useFormattedPrice";
import { Link } from "react-router-dom";

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
          cart.map((product) => (
            <CartItem producto={product} key={product.id}></CartItem>
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
        <Link to={"/"} className="btn-more">
          Ver más productos
        </Link>
      </footer>
    </aside>
  );
}

export default Cart;
