import Cart from "./Cart";
import { useState } from "react";
import { useCart } from "./Hooks/useCart";

function CartIcon() {
  const [showCart, setShowCart] = useState(false);
  const { cart } = useCart();

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const classShowCart = showCart ? "cart show-cart" : "cart";

  return (
    <div className="cart-container">
      <button type="button" className="header__cart" onClick={handleShowCart}>
        <label>
          <i className="fa-solid fa-cart-shopping"></i>
          <span>{cart.length}</span>
        </label>
      </button>
      <Cart className={classShowCart} closeCart={handleShowCart}></Cart>
    </div>
  );
}

export default CartIcon;
