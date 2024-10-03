import Cart from "./Cart";
import { useState } from "react";

function CartIcon() {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const classShowCart = showCart ? "cart show-cart" : "cart";

  return (
    <div className="cart-container">
      <button type="button" className="header__cart" onClick={handleShowCart}>
        <label>
          <i className="fa-solid fa-cart-shopping"></i>
          <span>1</span>
        </label>
      </button>
      <Cart className={classShowCart} closeCart={handleShowCart}></Cart>
    </div>
  );
}

export default CartIcon;
