import AddMinus from "./AddMinus";
import usePorcentage from "./Hooks/usePorcentage";
import useFormattedPrice from "./Hooks/useFormattedPrice";
import { Link } from "react-router-dom";
import { useCart } from "./Hooks/useCart";
import { useEffect, useState } from "react";

function CartItem({ producto }) {
  const [totalOferta, setTotalOferta] = useState();
  const [totalOriginal, setTotalOriginal] = useState();
  const { removeFromCart } = useCart();
  const procentaje = usePorcentage(producto.precio, producto.precioOferta);

  useEffect(() => {
    const totalPriceOferta = producto.precioOferta * producto.cantidad;
    const totalPriceOriginal = producto.precio * producto.cantidad;

    const totalPriceOfertaFormatted = useFormattedPrice(totalPriceOferta);
    const totalPriceOriginalFormatted = useFormattedPrice(totalPriceOriginal);

    setTotalOferta(totalPriceOfertaFormatted);
    setTotalOriginal(totalPriceOriginalFormatted);
  }, [producto.cantidad, producto.precioOferta, producto.precio]);

  return (
    <li className="cart-item">
      <button
        type="button"
        className="delete-item"
        onClick={() => removeFromCart(producto)}
      >
        <i className="fa-regular fa-trash-can"></i>
      </button>
      <Link to={`/juegos/${producto.id}`}>
        <img
          className="cart-item-img"
          src={producto.caratula}
          alt={`Imagen de la Caratula del juego ${producto.nombre}`}
        />
      </Link>
      <div className="cart-item-price-container">
        <Link to={`/juegos/${producto.id}`}>
          <strong className="cart-item-name">{producto.nombre}</strong>
        </Link>
        <div className="button-price-container">
          <AddMinus producto={producto} />
          <div className="price-container">
            {producto.oferta ? (
              <>
                <strong
                  className="cart-item-price"
                  style={{ textDecoration: "line-through" }}
                >
                  ${totalOriginal}
                </strong>
                <strong
                  className="cart-item-price"
                  style={{ color: "var(--color-primary)" }}
                >
                  <span>{procentaje}</span>${totalOferta}
                </strong>
              </>
            ) : (
              <strong className="cart-item-price">${totalOriginal}</strong>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
