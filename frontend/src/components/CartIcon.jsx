import Cart from "./Cart";
import { useCart } from "./Hooks/useCart";
import { useState } from "react";

function CartIcon() {
  const [showCart, setShowCart] = useState(false);
  const { cart } = useCart();

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const classShowCart = showCart ? "cart show-cart" : "cart";

  return (
    <div className="cart-container">
      <button
        type="button"
        className="header__cart"
        onClick={handleShowCart}
        aria-label="Abrir Carrito de compras"
      >
        <label>
          <i className="fa-solid fa-cart-shopping"></i>
          <span>{cart.length || 0}</span>
        </label>
      </button>
      <Cart className={classShowCart} closeCart={handleShowCart}></Cart>
    </div>
  );
}

export default CartIcon;
