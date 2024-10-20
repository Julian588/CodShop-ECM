import Cart from "./Cart";
import { useCart } from "../Hooks/useCart";

function CartIcon({ showCart, onClick }) {
  const { cart } = useCart();

  const classShowCart = showCart ? "cart show-cart" : "cart";

  return (
    <div className="cart-container">
      <button
        type="button"
        className="header__cart"
        onClick={onClick}
        aria-label="Abrir Carrito de compras"
      >
        <label>
          <i className="fa-solid fa-cart-shopping"></i>
          <span>{cart.length || 0}</span>
        </label>
      </button>
      <Cart className={classShowCart} closeCart={onClick}></Cart>
    </div>
  );
}

export default CartIcon;
