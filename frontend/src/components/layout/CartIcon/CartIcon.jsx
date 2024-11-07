import "./CartIcon.css"
import Cart from "@common/Cart/Cart";
import { useCart } from "@hooks/useCart";

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
          <span className="quantity">{cart.length || 0}</span>
        </label>
      </button>
      <Cart className={classShowCart} closeCart={onClick}></Cart>
    </div>
  );
}

export default CartIcon;
